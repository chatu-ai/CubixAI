"""
把首页横幅的录制画面重排成竖屏（1080 × 1920，9:16）视频，配上统一背景音乐 bgm.mp3，给短视频平台用。

用法（需要 Pillow、numpy、ffmpeg）：
    node marketing/banner-video/capture.cjs <帧目录> <网站地址> zh-CN --vertical
    python3 marketing/banner-video/compose_vertical.py <帧目录> zh <输出.mp4>

版式：
  第一张（软积木）：标题、副标题和四个图标在上，立方体动画放大放在中间；
  第二张（ChatU）：文字在上，ChatU 标志和光环在中间；
  两张之间在 5.0 秒处向上推入切换（0.5 秒），与配乐里的转场音效对齐；
  每张底部放网站 Logo（非中文版下面再加网址），切换时跟着各自那一张一起推走。
画面从横幅里按坐标裁出，边缘羽化后放在浅色渐变底上；结尾停 0.8 秒淡出为白色，总长 10.8 秒，与配乐等长。
"""
import json
import subprocess
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
W, H = 1080, 1920
FPS = 30
SLIDE1_FRAMES = 150  # 0～5.0 秒
SWITCH_FRAMES = 15  # 5.0～5.5 秒向上推入
TOTAL_FRAMES = 300

frames_dir, lang, out_path = Path(sys.argv[1]), sys.argv[2], sys.argv[3]
layout = json.loads((frames_dir / 'layout.json').read_text())
S = layout['scale']  # 录制倍率（设备像素 / CSS 像素）

# 录制画面里横幅的宽度（设备像素）；第一张横幅的原图是 3392 × 1120
src0 = Image.open(frames_dir / 'f0000.png')
FW, FH = src0.size
K = FW / 3392  # 原图像素 → 录制像素


def img_box(x0, y0, x1, y1):
    return tuple(round(v * K) for v in (x0, y0, x1, y1))


# ---- 第一张：文字图标块、立方体块（原图坐标）
# 裁剪范围留足边距，保证文字和图标都在边缘渐隐区以外
S1_TEXT = img_box(0, 100, 2040, 1040)
S1_CUBE = img_box(1985, 0, 3392, 1120)
# ---- 第二张：文字块取录制时记录的位置，ChatU 标志以圆心为中心裁一个方块
t = layout['chatuText']
clip = layout['clip']
pad = 60
S2_TEXT = (
    round((t['x'] - clip['x'] - pad) * S),
    round((t['y'] - clip['y'] - pad) * S),
    round((t['x'] - clip['x'] + t['width'] + pad) * S),
    round((t['y'] - clip['y'] + t['height'] + pad) * S),
)
# ChatU 横幅原图 2172 × 724，高度铺满、水平居中；标志光环所在正方形 x0=1432, y0=-5, 边长 708
c = FH / 724
art_left = (FW - 2172 * c) / 2
ring_cx = art_left + (1432 + 354) * c
half = FW - ring_cx  # 以圆心为中心，向右裁到横幅右边缘
S2_RING = (round(ring_cx - half), 0, FW, FH)

# 版面位置（输出像素）：(左, 上, 宽)
S1_TEXT_AT = (20, 210, 1040)
S1_CUBE_AT = (0, 700, 1080)
S2_TEXT_AT = (40, 230, 1000)
S2_RING_AT = (40, 720, 1000)


def gradient(top, bottom, glow_center, glow_color, glow_radius):
    # 上半部分保持与横幅底色一致（文字块放在这里，边缘看不出接缝），往下渐变到浅色
    y = np.clip((np.linspace(0, 1, H) - 0.3) / 0.7, 0, 1)[:, None, None]
    bg = np.array(top, float) * (1 - y) + np.array(bottom, float) * y
    bg = np.broadcast_to(bg, (H, W, 3)).copy()
    yy, xx = np.mgrid[0:H, 0:W]
    d = np.hypot(xx - glow_center[0], yy - glow_center[1]) / glow_radius
    a = np.clip(1 - d, 0, 1) ** 2 * glow_color[3]
    bg = bg * (1 - a[..., None]) + np.array(glow_color[:3], float) * a[..., None]
    return Image.fromarray(bg.clip(0, 255).astype(np.uint8))


def feather(w, h, left, top, right, bottom):
    """边缘渐隐的蒙版：各边在给定宽度内从 0 平滑过渡到 1"""
    x = np.arange(w)[None, :]
    y = np.arange(h)[:, None]

    def ramp(d, f):
        if f <= 0:
            return np.ones_like(d, dtype=float)
        v = np.clip(d / f, 0, 1)
        return v * v * (3 - 2 * v)

    m = ramp(x, left) * ramp(w - 1 - x, right) * ramp(y, top) * ramp(h - 1 - y, bottom)
    return Image.fromarray((m * 255).astype(np.uint8))


def place(canvas, frame, box, at, feathers):
    x, y, width = at
    region = frame.crop(box)
    height = round(region.height * width / region.width)
    region = region.resize((width, height), Image.LANCZOS)
    canvas.paste(region, (x, y), feather(width, height, *feathers))


# 蒙版只依赖尺寸，缓存起来
_feather = feather
_cache = {}


def feather(w, h, *f):  # noqa: F811
    key = (w, h, f)
    if key not in _cache:
        _cache[key] = _feather(w, h, *f)
    return _cache[key]


def footer(canvas):
    logo = Image.open(ROOT / 'src/assets' / ('logo.webp' if lang == 'zh' else 'logo-en.webp')).convert('RGBA')
    lh = 124 if lang == 'zh' else 104
    logo = logo.resize((round(logo.width * lh / logo.height), lh), Image.LANCZOS)
    y = 1672 if lang == 'zh' else 1650
    canvas.paste(logo, ((W - logo.width) // 2, y), logo)
    if lang != 'zh':
        font = ImageFont.truetype(str(ROOT / 'node_modules/@fontsource/inter/files/inter-latin-500-normal.woff'), 38)
        text = 'www.cubixai.com'
        tw = font.getbbox(text)[2]
        ImageDraw.Draw(canvas).text(((W - tw) // 2, y + lh + 18), text, font=font, fill=(92, 107, 99))


def border_color(frame_name, box):
    """裁剪块四周一圈像素的中位色，用作竖屏底色的上半部分"""
    im = np.asarray(Image.open(frames_dir / frame_name).convert('RGB').crop(box))
    ring = np.concatenate([im[:12].reshape(-1, 3), im[-12:].reshape(-1, 3), im[:, :12].reshape(-1, 3), im[:, -12:].reshape(-1, 3)])
    return tuple(int(v) for v in np.median(ring, 0))


BG1 = gradient(border_color('f0149.png', S1_TEXT), (229, 244, 235), (540, 1150), (85, 173, 115, 0.18), 760)
BG2 = gradient(border_color('f0299.png', S2_TEXT), (236, 232, 249), (540, 1180), (67, 52, 135, 0.10), 760)
footer(BG1)
footer(BG2)


def slide1(i):
    frame = Image.open(frames_dir / f'f{i:04d}.png').convert('RGB')
    canvas = BG1.copy()
    place(canvas, frame, S1_TEXT, S1_TEXT_AT, (50, 40, 60, 45))
    place(canvas, frame, S1_CUBE, S1_CUBE_AT, (0, 110, 0, 110))
    return canvas


def slide2(i):
    frame = Image.open(frames_dir / f'f{i:04d}.png').convert('RGB')
    canvas = BG2.copy()
    place(canvas, frame, S2_TEXT, S2_TEXT_AT, (55, 45, 70, 45))
    place(canvas, frame, S2_RING, S2_RING_AT, (90, 90, 0, 90))
    return canvas


def ease(p):
    return 4 * p**3 if p < 0.5 else 1 - (-2 * p + 2) ** 3 / 2


ff = subprocess.Popen(
    [
        'ffmpeg', '-loglevel', 'error', '-y',
        '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', str(FPS), '-i', '-',
        '-i', str(HERE / 'bgm.mp3'),
        '-filter_complex', '[0:v]tpad=stop_mode=clone:stop_duration=0.8,fade=t=out:st=10.2:d=0.6:color=white,format=yuv420p[v]',
        '-map', '[v]', '-map', '1:a', '-c:v', 'libx264', '-preset', 'slow', '-crf', '18',
        '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', out_path,
    ],
    stdin=subprocess.PIPE,
)
last1 = None
for f in range(TOTAL_FRAMES):
    if f < SLIDE1_FRAMES:
        img = slide1(f)
        last1 = img
    elif f < SLIDE1_FRAMES + SWITCH_FRAMES:
        # 第一张停在最后一帧向上推出，第二张从下方推入（第二张从录制的第 0 帧开始播）
        p = ease((f - SLIDE1_FRAMES + 1) / SWITCH_FRAMES)
        off = round(p * H)
        img = Image.new('RGB', (W, H))
        img.paste(last1, (0, -off))
        img.paste(slide2(f), (0, H - off))
    else:
        img = slide2(f)
    ff.stdin.write(img.tobytes())
ff.stdin.close()
ff.wait()
print(f'{out_path}: {TOTAL_FRAMES} frames + 0.8 s hold, {W}x{H}')
