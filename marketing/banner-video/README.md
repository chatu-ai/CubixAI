# 首页横幅视频

首页三张大横幅（软积木「搭积木」动画 + ChatU + 智方体）的宣传视频素材。这里的文件不会打包进网站。

| 文件 | 说明 |
| --- | --- |
| `bgm.mp3` | **统一使用的背景音乐**（14.8 秒，含与动画同步的音效）。全部由程序合成，无版权问题 |
| `make_bgm.py` | 生成背景音乐的脚本（`python3 make_bgm.py bgm.wav`，需要 numpy、scipy），结果固定可复现 |
| `capture.cjs` | 逐帧录制首页横幅画面（第一张 5 秒 + 第二张 5 秒 + 第三张 4 秒，30 帧/秒）；加 `--vertical` 时按 2 倍分辨率录制竖屏素材 |
| `compose_vertical.py` | 把录制画面重排成竖屏 1080×1920（9:16）：文字在上、立方体 / ChatU 标志 / 智方体设备和包装盒放大在中间、底部 Logo，每次切换向上推入 |
| `build.sh` | 一键生成中、英、日、韩四个版本的横屏（1920×634）和竖屏（1080×1920）视频，H.264 + AAC |

## 生成视频

```bash
npm run dev
bash marketing/banner-video/build.sh
```

输出在 `marketing/banner-video/out/`：横屏 `cubixai-banner-{zh,en,ja,ko}.mp4`，竖屏（抖音、视频号、小红书等短视频平台）`cubixai-banner-vertical-{zh,en,ja,ko}.mp4`。
录线上网站：`BASE_URL=https://www.cubixai.com bash marketing/banner-video/build.sh`；只要横屏版：`VERTICAL=0 bash marketing/banner-video/build.sh`。

竖屏版的版式（裁剪坐标、位置）在 `compose_vertical.py` 开头；首页横幅的排版改动后需要相应调整。

## 音画对应

| 时间 | 画面 | 声音 |
| --- | --- | --- |
| 0.05 秒 | 底板弹出 | 低沉的「咚」 |
| 0.12～0.75 秒 | 蓝图线逐条描出、扫描光扫过 | 电流嗡鸣 + 每条线一声电火花，扫频闪烁声 |
| 0.9～1.53 秒 | 8 块积木依次落地 | 每块一声呼啸 + 落地闷响，音高按 A 小调五声音阶依次升高 |
| 1.83 秒 | 顶盖砸实、光芒火花炸开 | 蓄力上扬后重低音轰鸣 + 镲片，电子节奏（120 BPM，Am–F–C–G）进入，火花配铃音 |
| 5.0 秒 | 切到 ChatU 横幅 | 转场「嗖」 |
| 10.0 秒 | 切到智方体横幅，镜头推近 | 转场「嗖」 |
| 10.7 秒 | 包装盒表面扫过反光 | 玻璃质感的闪光滑音 |
| 11.2 秒 | 设备屏幕开机 | 轻柔开机声 + 三音铃声 |
| 11.8 秒 | OpenClaw 龙虾探头 | 两声俏皮的上滑音 |
| 11.9 / 12.05 秒 | OpenClaw、Hermes「已就绪」 | 两声清脆的提示音 |
| 12.2 秒 | 「数据不出盒」 | 锁扣「咔哒」+ 高音闪光 |
| 13.83～14.8 秒 | 结束 | A 小调和弦收尾，淡出 |

动画时间线改动后（`src/components/HeroArt.vue` 的 `BLOCK_START`、`BLOCK_GAP`、`LID_START`，`src/components/HeroZftArt.vue` 的时间线），需同步修改 `make_bgm.py` 里的 `BLOCK_HITS`、`LID_HIT`、`ZFT_*`，重新生成 `bgm.mp3`：

```bash
python3 marketing/banner-video/make_bgm.py /tmp/bgm.wav
ffmpeg -y -i /tmp/bgm.wav -c:a libmp3lame -b:a 256k marketing/banner-video/bgm.mp3
```
