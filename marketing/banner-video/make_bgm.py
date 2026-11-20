"""
首页横幅视频的统一背景音乐（含与动画同步的音效），全部由程序合成，不使用任何现成音乐或音效素材。

用法（需要 numpy、scipy）：
    python3 marketing/banner-video/make_bgm.py bgm.wav
输出 14.8 秒、44.1 kHz 立体声 WAV。随机数种子固定，每次生成的结果完全一样。

音效的时间点与首页横幅动画的时间线对应：
  第一张（src/components/HeroArt.vue）：底板弹出 0.05 秒 → 蓝图描线 0.12 秒起 → 8 块积木 0.9～1.53 秒落地
  → 顶盖 1.83 秒砸实（节奏从这里进来）；
  5.0 秒切到第二张 ChatU 横幅；
  10.0 秒切到第三张智方体横幅（src/components/HeroZftArt.vue）：盒面反光 +0.7 秒 → 屏幕开机 +1.2 秒
  → 龙虾探头 +1.8 秒 → 智能体卡片 +1.9 / +2.05 秒 →「数据不出盒」+2.2 秒；
  13.83 秒结束和弦，最后 0.8 秒淡出。
如果改了 HeroArt.vue 里的 BLOCK_START / BLOCK_GAP / LID_START、HeroZftArt.vue 的时间线，或视频里切换横幅的时间，
这里的 BLOCK_HITS / LID_HIT / SLIDE / SLIDE2 / ZFT_* 也要一起改。
"""

import numpy as np
from scipy import signal
import wave, sys

SR = 44100
DUR = 14.8
N = int(SR * DUR)
rng = np.random.default_rng(7)
L = np.zeros(N); R = np.zeros(N)          # dry bus
RL = np.zeros(N); RR = np.zeros(N)        # reverb send

def note(n):  # MIDI note -> Hz
    return 440.0 * 2 ** ((n - 69) / 12)

def declick(sig, ms_in=1.5, ms_out=4.0):
    """short fade at both ends so no sound starts or stops with a click"""
    sig = np.array(sig, dtype=float)
    a = min(int(ms_in * SR / 1000), len(sig)); b = min(int(ms_out * SR / 1000), len(sig))
    if a: sig[:a] *= np.linspace(0, 1, a)
    if b: sig[-b:] *= np.linspace(1, 0, b)
    return sig

def add(sig, t0, gain=1.0, pan=0.0, rev=0.0):
    sig = declick(sig)
    i0 = int(t0 * SR)
    if i0 >= N: return
    sig = sig[: N - i0] * gain
    gl, gr = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
    L[i0:i0 + len(sig)] += sig * gl; R[i0:i0 + len(sig)] += sig * gr
    if rev:
        RL[i0:i0 + len(sig)] += sig * gl * rev; RR[i0:i0 + len(sig)] += sig * gr * rev

def env(n, a=0.005, d=0.2, s=0.0, r=0.0, hold=0.0):
    """attack / exponential decay to sustain / hold / release"""
    t = np.arange(n) / SR
    e = np.where(t < a, t / max(a, 1e-6), s + (1 - s) * np.exp(-(t - a) / max(d, 1e-6)))
    if r:
        rel_start = a + hold
        e = np.where(t > rel_start, e * np.exp(-(t - rel_start) / r), e)
    return e

def lp(x, fc, order=2):
    b, a = signal.butter(order, min(fc, SR / 2 - 100) / (SR / 2), 'low'); return signal.lfilter(b, a, x)
def hp(x, fc, order=2):
    b, a = signal.butter(order, fc / (SR / 2), 'high'); return signal.lfilter(b, a, x)
def bp(x, f1, f2, order=2):
    b, a = signal.butter(order, [f1 / (SR / 2), min(f2, SR / 2 - 100) / (SR / 2)], 'band'); return signal.lfilter(b, a, x)

def saw(f, n, detune=0.0, phase=None):
    t = np.arange(n) / SR
    ph = rng.random() if phase is None else phase
    return 2 * ((f * (1 + detune) * t + ph) % 1.0) - 1

def sweep_noise(n, f_from, f_to, q=0.35):
    """band-pass noise whose centre glides from f_from to f_to (block-wise filtering)"""
    x = rng.standard_normal(n); out = np.zeros(n); blk = 512
    zi = None
    for k in range(0, n, blk):
        frac = k / max(n - 1, 1)
        fc = f_from * (f_to / f_from) ** frac
        lo, hi = fc * (1 - q), min(fc * (1 + q), SR / 2 - 200)
        b, a = signal.butter(2, [lo / (SR / 2), hi / (SR / 2)], 'band')
        if zi is None: zi = signal.lfilter_zi(b, a) * 0
        out[k:k + blk], zi = signal.lfilter(b, a, x[k:k + blk], zi=zi)
    return out

# ----------------------------------------------------------------- timeline (matches HeroArt.vue)
BLOCK_HITS = [0.6 + 0.09 * i + 0.62 * 0.48 for i in range(8)]
LID_HIT = 1.45 + 0.85 * 0.45
BEAT = 0.5                      # 120 BPM, the drop lands on the lid hit
SLIDE = 5.0                     # switch to the ChatU banner
SLIDE2 = 10.0                   # switch to the AgentStation banner
# AgentStation banner (HeroZftArt.vue), seconds after SLIDE2
ZFT_SHEEN, ZFT_BOOT, ZFT_CRAB, ZFT_CARDS, ZFT_SEAL = 0.7, 1.2, 1.8, (1.9, 2.05), 2.2

# ----------------------------------------------------------------- music: intro pad (A minor add9) swelling into the drop
def pad(notes, t0, t1, gain, cutoff=1800, attack=0.4, release=0.6):
    n = int((t1 - t0 + release) * SR)
    x = sum(saw(note(m), n, d) for m in notes for d in (-0.006, 0.0, 0.0065))
    x = lp(x, cutoff, 2) / (len(notes) * 3)
    t = np.arange(n) / SR
    e = np.clip(t / attack, 0, 1) * np.where(t > t1 - t0, np.exp(-(t - (t1 - t0)) / (release / 3)), 1)
    return x * e * gain

intro = pad([57, 60, 64, 71], 0.0, LID_HIT, 0.32, cutoff=900, attack=1.6, release=0.25)
add(intro, 0.0, pan=0, rev=0.5)

# riser into the lid: noise sweeping up + rising sine
n = int((LID_HIT - 0.85) * SR)
riser = sweep_noise(n, 400, 7000, 0.3) * np.linspace(0, 1, n) ** 2
add(riser, 0.85, 0.22, rev=0.3)
t = np.arange(n) / SR; f = note(69) * 2 ** (t / t[-1])
add(np.sin(2 * np.pi * np.cumsum(f) / SR) * np.linspace(0, 1, n) ** 3 * 0.12, 0.85, rev=0.4)

# ----------------------------------------------------------------- SFX
# tray pop
n = int(0.25 * SR); t = np.arange(n) / SR
f = 180 * np.exp(-t / 0.08) + 70
add(np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, 0.002, 0.07) * 0.7, 0.05, rev=0.2)

# blueprint draw: electric hum + a short zap as each outline starts
n = int(0.75 * SR); t = np.arange(n) / SR
hum = lp(saw(110, n) + 0.5 * saw(220.5, n), 1200) * (0.5 + 0.5 * np.sin(2 * np.pi * 18 * t)) * np.clip(t / 0.08, 0, 1) * np.exp(-np.clip(t - 0.5, 0, None) / 0.08)
add(hum * 0.10, 0.12, rev=0.2)
for i in range(9):
    m = int(0.18 * SR); tt = np.arange(m) / SR
    chirp = np.sin(2 * np.pi * np.cumsum(2600 + 4200 * tt / tt[-1]) / SR) * np.exp(-tt / 0.05)
    zap = hp(rng.standard_normal(m), 3000) * np.exp(-tt / 0.012)
    add((chirp * 0.07 + zap * 0.05), 0.12 + i * 0.035, pan=((i % 3) - 1) * 0.5, rev=0.3)

# scan sweeps (top -> bottom): shimmering band-pass noise glide
for t0, dur, g in ((0.1, 0.8, 0.12), (LID_HIT + 0.12, 0.75, 0.10)):
    n = int(dur * SR)
    s = sweep_noise(n, 6000, 900, 0.25) * np.sin(np.linspace(0, np.pi, n)) ** 1.5
    add(s, t0, g, pan=0, rev=0.4)

# each block: a short whoosh while falling, then a tuned "thock" on landing (A minor pentatonic, rising)
PENTA = [45, 48, 50, 52, 55, 57, 60, 62]
for i, hit in enumerate(BLOCK_HITS):
    fall = 0.30
    n = int(fall * SR)
    w = sweep_noise(n, 500, 2500, 0.4) * np.linspace(0, 1, n) ** 2
    add(w, hit - fall, 0.10, pan=(-0.5 if i % 2 else 0.5) * 0.6)
    n = int(0.6 * SR); t = np.arange(n) / SR
    f0 = note(PENTA[i])
    body = (np.sin(2 * np.pi * f0 * t) + 0.35 * np.sin(2 * np.pi * f0 * 3.98 * t) * np.exp(-t / 0.03)) * np.exp(-t / 0.16)
    thud = np.sin(2 * np.pi * np.cumsum(120 * np.exp(-t / 0.03) + 55) / SR) * np.exp(-t / 0.07)
    click = hp(rng.standard_normal(n), 2500) * np.exp(-t / 0.004)
    add(body * 0.30 + thud * 0.55 + click * 0.12, hit, pan=(i % 3 - 1) * 0.35, rev=0.25)

# lid slam: reverse swell, sub drop, noise burst, crash
n = int(0.45 * SR)
rev_swell = hp(rng.standard_normal(n), 2000) * np.linspace(0, 1, n) ** 4
add(rev_swell, LID_HIT - 0.45, 0.16, rev=0.5)
n = int(1.6 * SR); t = np.arange(n) / SR
sub = np.sin(2 * np.pi * np.cumsum(62 * np.exp(-t / 0.5) + 33) / SR) * np.exp(-t / 0.45)
burst = lp(rng.standard_normal(n), 1800) * np.exp(-t / 0.09)
crash = hp(rng.standard_normal(n), 5000) * np.exp(-t / 0.55)
add(np.tanh(sub * 1.6) * 0.9 + burst * 0.45, LID_HIT, rev=0.3)
add(crash * 0.16, LID_HIT, pan=-0.2, rev=0.6)
add(hp(rng.standard_normal(n), 5000) * np.exp(-t / 0.55) * 0.12, LID_HIT + 0.01, pan=0.25, rev=0.6)

# sparkles flying out: quick high bell arpeggio
for k, m in enumerate([81, 84, 88, 93, 88, 96]):
    n = int(0.9 * SR); t = np.arange(n) / SR
    fb = note(m)
    bell = (np.sin(2 * np.pi * fb * t) + 0.4 * np.sin(2 * np.pi * fb * 2.76 * t) * np.exp(-t / 0.08)) * np.exp(-t / 0.22)
    add(bell * 0.10, LID_HIT + 0.06 + k * 0.07, pan=[-0.7, 0.6, -0.3, 0.8, -0.8, 0.2][k], rev=0.6)

# slide transition whooshes
for t0 in (SLIDE, SLIDE2):
    n = int(0.7 * SR)
    wh = sweep_noise(n, 300, 5000, 0.5) * np.sin(np.linspace(0, np.pi, n)) ** 2
    add(wh, t0 - 0.1, 0.20, pan=0.0, rev=0.4)

# ---- AgentStation banner
# light sweeping across the box: a glassy shimmer gliding upwards
n = int(0.9 * SR)
add(sweep_noise(n, 2500, 9000, 0.2) * np.sin(np.linspace(0, np.pi, n)) ** 2, SLIDE2 + ZFT_SHEEN, 0.08, pan=0.35, rev=0.5)
# screen power-on: soft thump + rising tone, then a bright chime (E-B-E, fits the G bar that follows)
n = int(0.5 * SR); t = np.arange(n) / SR
add(np.sin(2 * np.pi * np.cumsum(90 * np.exp(-t / 0.05) + 50) / SR) * np.exp(-t / 0.12) * 0.35, SLIDE2 + ZFT_BOOT, rev=0.2)
f = 220 * 2 ** (2 * t / t[-1])
add(np.sin(2 * np.pi * np.cumsum(f) / SR) * np.sin(np.linspace(0, np.pi, n)) * 0.08, SLIDE2 + ZFT_BOOT, rev=0.4)
for k, m in enumerate([76, 83, 88]):
    n = int(1.0 * SR); t = np.arange(n) / SR
    fb = note(m)
    bell = (np.sin(2 * np.pi * fb * t) + 0.35 * np.sin(2 * np.pi * fb * 2.0 * t) * np.exp(-t / 0.1)) * np.exp(-t / 0.35)
    add(bell * 0.11, SLIDE2 + ZFT_BOOT + 0.2 + k * 0.09, pan=(k - 1) * 0.4, rev=0.6)
# crab peeking out: two playful upward blips
for k, (f0, f1) in enumerate(((620, 1240), (820, 1640))):
    n = int(0.11 * SR); t = np.arange(n) / SR
    f = f0 * (f1 / f0) ** (t / t[-1])
    add(np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.05) * 0.12, SLIDE2 + ZFT_CRAB + 0.05 + k * 0.1, pan=-0.3, rev=0.3)
# agent cards popping in: tuned ticks (G6, B6)
for t0, m in zip(ZFT_CARDS, (91, 95)):
    n = int(0.25 * SR); t = np.arange(n) / SR
    pop = np.sin(2 * np.pi * note(m) * t) * np.exp(-t / 0.06) + hp(rng.standard_normal(n), 3000) * np.exp(-t / 0.004) * 0.4
    add(pop * 0.12, SLIDE2 + t0 + 0.05, pan=0.4, rev=0.35)
# "data never leaves the box": lock click-clack + high shimmer
for k in range(2):
    n = int(0.08 * SR); t = np.arange(n) / SR
    click = bp(rng.standard_normal(n), 1800, 6000) * np.exp(-t / 0.006) + np.sin(2 * np.pi * 2400 * t) * np.exp(-t / 0.01) * 0.5
    add(click * 0.16, SLIDE2 + ZFT_SEAL + 0.05 + k * 0.06, pan=0.2)
for k, m in enumerate([93, 100]):
    n = int(0.8 * SR); t = np.arange(n) / SR
    add(np.sin(2 * np.pi * note(m) * t) * np.exp(-t / 0.25) * 0.07, SLIDE2 + ZFT_SEAL + 0.15 + k * 0.08, pan=0.5 - k, rev=0.7)

# ----------------------------------------------------------------- music after the drop (120 BPM, Am - F - C - G - Am - G, final Am)
AM, F_, C_, G_ = ([57, 60, 64], 45), ([53, 57, 60], 41), ([48, 52, 55], 36), ([55, 59, 62], 43)
CHORDS = [AM, F_, C_, G_, AM, G_]
bars = [(LID_HIT + 2 * k, ch) for k, ch in enumerate(CHORDS)]
END = LID_HIT + 2.0 * len(CHORDS)    # final Am
beats = np.arange(LID_HIT, END, BEAT)

# kick, with a sidechain envelope for pad/bass "pumping"
duck = np.ones(N)
for bt in beats:
    n = int(0.4 * SR); t = np.arange(n) / SR
    k = np.sin(2 * np.pi * np.cumsum(140 * np.exp(-t / 0.035) + 45) / SR) * np.exp(-t / 0.22)
    add(np.tanh(k * 1.5) * 0.55, bt)
    i0 = int(bt * SR); m = min(int(0.3 * SR), N - i0)
    duck[i0:i0 + m] = np.minimum(duck[i0:i0 + m], 1 - 0.55 * np.exp(-np.arange(m) / SR / 0.09))
# hats on the off-beats, claps on 2 and 4 (start one bar after the drop)
for j, bt in enumerate(beats):
    n = int(0.12 * SR); t = np.arange(n) / SR
    add(hp(rng.standard_normal(n), 8000) * np.exp(-t / 0.035) * 0.10, bt + BEAT / 2, pan=0.3)
    if bt >= LID_HIT + 2 and j % 2 == 1:
        n = int(0.3 * SR); t = np.arange(n) / SR
        cl = bp(rng.standard_normal(n), 900, 3200) * (np.exp(-t / 0.08) + 0.6 * np.exp(-np.clip(t - 0.012, 0, None) / 0.01) * (t > 0.012))
        add(cl * 0.18, bt, pan=-0.1, rev=0.35)

music_L = np.zeros(N); music_R = np.zeros(N)
def add_music(sig, t0, gain=1.0, pan=0.0, rev=0.0):
    sig = declick(sig)
    i0 = int(t0 * SR); sig = sig[: N - i0] * gain
    gl, gr = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
    music_L[i0:i0 + len(sig)] += sig * gl; music_R[i0:i0 + len(sig)] += sig * gr
    if rev:
        RL[i0:i0 + len(sig)] += sig * gl * rev; RR[i0:i0 + len(sig)] += sig * gr * rev

for t0, (tones, root) in bars:
    add_music(pad([m + 12 for m in tones], t0, t0 + 2.0, 0.22, cutoff=2200, attack=0.05, release=0.3), t0, 1.0, rev=0.35)
    # bass: 8th notes on the root
    for q in range(4 * 2):
        n = int(0.24 * SR); t = np.arange(n) / SR
        b = lp(saw(note(root), n) + 0.6 * np.sin(2 * np.pi * note(root) / 2 * t), 420) * env(n, 0.004, 0.12, 0.35, 0.03, 0.18)
        add_music(b, t0 + q * 0.25, 0.30)
    # pluck arpeggio, 16ths
    arp = [tones[0] + 12, tones[1] + 12, tones[2] + 12, tones[1] + 24, tones[2] + 12, tones[0] + 24, tones[1] + 12, tones[2] + 12]
    for q in range(16):
        n = int(0.3 * SR); t = np.arange(n) / SR
        fq = note(arp[q % 8])
        pl = (np.sin(2 * np.pi * fq * t) + 0.5 * np.sin(2 * np.pi * 2 * fq * t) * np.exp(-t / 0.04) + 0.25 * saw(fq, n) * np.exp(-t / 0.02)) * np.exp(-t / 0.12)
        add_music(pl, t0 + q * 0.125, 0.085, pan=0.45 if q % 2 else -0.45, rev=0.45)
# final chord ringing out
add_music(pad([69, 72, 76, 81], END, DUR, 0.24, cutoff=2600, attack=0.02, release=0.6), END, 1.0, rev=0.6)
n = int((DUR - END) * SR); t = np.arange(n) / SR
add_music(np.sin(2 * np.pi * note(33) * t) * np.exp(-t / 0.6) * 0.5, END)
n = int(0.4 * SR); t = np.arange(n) / SR
add_music(np.tanh(np.sin(2 * np.pi * np.cumsum(140 * np.exp(-t / 0.035) + 45) / SR) * np.exp(-t / 0.3) * 1.5) * 0.5, END, 1.0)

L += music_L * duck; R += music_R * duck

# ----------------------------------------------------------------- reverb (synthetic stereo IR), master
ir_n = int(1.4 * SR); tt = np.arange(ir_n) / SR
irL = rng.standard_normal(ir_n) * np.exp(-tt / 0.32); irR = rng.standard_normal(ir_n) * np.exp(-tt / 0.32)
irL = lp(irL, 6000); irR = lp(irR, 6000)
irL /= np.sqrt((irL ** 2).sum()); irR /= np.sqrt((irR ** 2).sum())
wetL = signal.fftconvolve(RL, irL)[:N]; wetR = signal.fftconvolve(RR, irR)[:N]
mixL = L + wetL * 0.55; mixR = R + wetR * 0.55
mix = np.stack([mixL, mixR], 1)
mix = hp(mix.T, 28).T                         # remove DC / sub rumble
# gentle bus compression via tanh soft clip, then normalise to -1 dBFS
mix = np.tanh(mix / np.percentile(np.abs(mix), 99.9) * 0.9)
fade_in = np.clip(np.arange(N) / (0.02 * SR), 0, 1)
fade_out = np.clip((N - np.arange(N)) / (0.8 * SR), 0, 1) ** 1.5
mix *= (fade_in * fade_out)[:, None]
mix = mix / np.abs(mix).max() * 10 ** (-1 / 20)
pcm = (mix * 32767).astype(np.int16)
with wave.open(sys.argv[1], 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print('rms dBFS', round(20 * np.log10(np.sqrt((mix ** 2).mean())), 1), 'len', DUR)
