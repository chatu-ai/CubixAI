"""
把构建生成的各页面网页文件（dist-routes/，见 scripts/build-route-pages.mjs）上传到 COS 存储桶里和网址同名的位置，
比如 dist-routes/005.html 上传为 en，访问 https://www.cubixai.com/en 时 COS 直接返回它（HTTP 200）。
文件名没有扩展名，所以必须明确设置 Content-Type 为网页，否则浏览器会当成下载文件。

用法（GitHub Actions 部署流程里，在 coscmd 上传 dist/ 之后运行）：
    python3 scripts/upload_route_pages.py
需要环境变量 TENCENT_SECRET_ID、TENCENT_SECRET_KEY、COS_BUCKET、COS_REGION（和 coscmd 用的是同一组），
以及 cos-python-sdk-v5（安装 coscmd 时会一起装上）。
只检查不上传：python3 scripts/upload_route_pages.py --dry-run
"""

import json
import os
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
ROUTES_DIR = ROOT / 'dist-routes'
CONTENT_TYPE = 'text/html; charset=utf-8'


def load_pages(routes_dir: pathlib.Path):
    manifest = json.loads((routes_dir / 'manifest.json').read_text(encoding='utf-8'))
    pages = []
    for item in manifest:
        key, file = item['key'], item['file']
        if not key or key.startswith('/') or key.endswith('/'):
            raise ValueError(f'不合法的文件名：{key!r}')
        body = (routes_dir / file).read_bytes()
        if b'<div id="app">' not in body:
            raise ValueError(f'{file}（{key}）不是网站页面')
        pages.append((key, body))
    if not pages:
        raise ValueError('dist-routes/manifest.json 里没有页面')
    return pages


def upload(pages, client, bucket: str):
    for key, body in pages:
        client.put_object(Bucket=bucket, Key=key, Body=body, ContentType=CONTENT_TYPE)


def main(argv):
    pages = load_pages(ROUTES_DIR)
    if '--dry-run' in argv:
        for key, body in pages:
            print(f'{key}  ({len(body)} bytes, {CONTENT_TYPE})')
        print(f'共 {len(pages)} 个页面（未上传）')
        return
    from qcloud_cos import CosConfig, CosS3Client

    config = CosConfig(
        Region=os.environ['COS_REGION'],
        SecretId=os.environ['TENCENT_SECRET_ID'],
        SecretKey=os.environ['TENCENT_SECRET_KEY'],
        Scheme='https',
    )
    upload(pages, CosS3Client(config), os.environ['COS_BUCKET'])
    print(f'已上传 {len(pages)} 个页面的网页文件到 COS')


if __name__ == '__main__':
    main(sys.argv[1:])
