#!/usr/bin/env bash
# 生成四个语言版本的横幅视频（统一使用 bgm.mp3 作为背景音乐）：横屏 1920×634 + 竖屏 1080×1920（短视频平台用）。
# 用法：先在仓库根目录运行 npm run dev，然后执行
#   bash marketing/banner-video/build.sh
# 也可以录线上网站：BASE_URL=https://www.cubixai.com bash marketing/banner-video/build.sh
# 只要横屏版：VERTICAL=0 bash marketing/banner-video/build.sh
# 需要：Node + Playwright（Chromium）、ffmpeg；竖屏版另需 Python（Pillow、numpy）。
# 输出在 marketing/banner-video/out/（不提交到仓库）。
set -euo pipefail
cd "$(dirname "$0")"
BASE_URL="${BASE_URL:-http://localhost:5173}"
VERTICAL="${VERTICAL:-1}"
OUT="out"
mkdir -p "$OUT"
for pair in zh:zh-CN en:en-US ja:ja-JP ko:ko-KR; do
  lang="${pair%%:*}"
  locale="${pair#*:}"
  frames="$OUT/frames-$lang"
  mkdir -p "$frames"
  node capture.cjs "$frames" "$BASE_URL" "$locale"
  # 结尾停留 0.8 秒并淡出为白色；配乐长 10.8 秒，与画面等长
  ffmpeg -loglevel error -y -framerate 30 -i "$frames/f%04d.png" -i bgm.mp3 \
    -filter_complex "[0:v]tpad=stop_mode=clone:stop_duration=0.8,fade=t=out:st=10.2:d=0.6:color=white,format=yuv420p[v]" \
    -map "[v]" -map 1:a -c:v libx264 -preset slow -crf 18 -c:a aac -b:a 192k -shortest -movflags +faststart \
    "$OUT/cubixai-banner-$lang.mp4"
  echo "生成 $OUT/cubixai-banner-$lang.mp4"
  if [ "$VERTICAL" = "1" ]; then
    vframes="$OUT/vframes-$lang"
    mkdir -p "$vframes"
    node capture.cjs "$vframes" "$BASE_URL" "$locale" --vertical
    python3 compose_vertical.py "$vframes" "$lang" "$OUT/cubixai-banner-vertical-$lang.mp4"
  fi
done
