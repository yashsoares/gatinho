// Soft cozy sound effects & romantic music box synthesizer using Web Audio API

class SoundEngine {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;
  private musicTimer: number | null = null;
  private musicPlaying: boolean = false;
  private masterGain: GainNode | null = null;

  private ensureContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.muted ? 0 : 0.7;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public unlock() {
    this.ensureContext();
  }

  public setMuted(muted: boolean) {
    this.muted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(muted ? 0 : 0.7, this.ctx.currentTime, 0.05);
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public playRustle() {
    if (this.muted) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const now = ctx.currentTime;
    // Soft filtered noise burst like rustling leaves
    const bufferSize = Math.floor(ctx.sampleRate * 0.14);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(1.8, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(now);
  }

  public playSoftMeow(pitchScale = 1) {
    if (this.muted) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc2.type = 'sine';

    const base = 520 * pitchScale;
    // Cute upward then gentle downward meow contour
    osc.frequency.setValueAtTime(base * 0.85, now);
    osc.frequency.exponentialRampToValueAtTime(base * 1.32, now + 0.09);
    osc.frequency.exponentialRampToValueAtTime(base * 0.92, now + 0.34);

    osc2.frequency.setValueAtTime(base * 1.7, now);
    osc2.frequency.exponentialRampToValueAtTime(base * 2.6, now + 0.09);
    osc2.frequency.exponentialRampToValueAtTime(base * 1.84, now + 0.34);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.36);

    const gain2 = ctx.createGain();
    gain2.gain.value = 0.25;

    osc.connect(filter);
    osc2.connect(gain2);
    gain2.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + 0.38);
    osc2.stop(now + 0.38);
  }

  public playHappyMeow() {
    if (this.muted) return;
    this.playSoftMeow(1.15);
    window.setTimeout(() => {
      this.playSoftMeow(1.32);
    }, 220);
    window.setTimeout(() => {
      this.playSparkleChime();
    }, 360);
  }

  public playSparkleChime() {
    if (this.muted) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const notes = [659.25, 783.99, 987.77, 1318.5]; // E5, G5, B5, E6
    notes.forEach((freq, idx) => {
      const now = ctx.currentTime + idx * 0.08;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.11, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.connect(gain);
      gain.connect(this.masterGain!);
      osc.start(now);
      osc.stop(now + 0.48);
    });
  }

  public playPaperOpen() {
    if (this.muted) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const now = ctx.currentTime;
    const bufferSize = Math.floor(ctx.sampleRate * 0.26);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1800, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(now);

    this.playSparkleChime();
  }

  public startRomanticMusic() {
    if (this.musicPlaying) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    this.musicPlaying = true;

    // Gentle Stardew-inspired cozy waltz melody (F major / D minor pastel)
    // Pairs of [melodyFreq, bassFreqOrNull] at 420ms per eighth-note beat
    const sequence: Array<[number | null, number | null]> = [
      // Bar 1: Fmaj7
      [523.25, 174.61], // C5, F3
      [659.25, null],   // E5
      [698.46, 261.63], // F5, C4
      [880.0, null],    // A5
      [783.99, 261.63], // G5, C4
      [659.25, null],   // E5
      // Bar 2: Dm7
      [587.33, 146.83], // D5, D3
      [698.46, null],   // F5
      [880.0, 220.0],   // A5, A3
      [783.99, null],   // G5
      [698.46, 220.0],  // F5, A3
      [659.25, null],   // E5
      // Bar 3: Bbmaj7
      [587.33, 233.08], // D5, Bb3
      [698.46, null],   // F5
      [932.33, 293.66], // Bb5, D4
      [880.0, null],    // A5
      [783.99, 293.66], // G5, D4
      [698.46, null],   // F5
      // Bar 4: C7 -> F
      [659.25, 196.0],  // E5, G3
      [587.33, null],   // D5
      [523.25, 261.63], // C5, C4
      [587.33, null],   // D5
      [659.25, 261.63], // E5, C4
      [523.25, null],   // C5
    ];

    let step = 0;

    const scheduleStep = () => {
      if (!this.musicPlaying || !this.ctx || !this.masterGain) return;
      const [melody, bass] = sequence[step % sequence.length];
      const now = this.ctx.currentTime;

      if (melody) {
        const osc = this.ctx.createOscillator();
        const overtone = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const overGain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(melody, now);

        overtone.type = 'triangle';
        overtone.frequency.setValueAtTime(melody * 2, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.085, now + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.95);

        overGain.gain.value = 0.14;

        osc.connect(gain);
        overtone.connect(overGain);
        overGain.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        overtone.start(now);
        osc.stop(now + 1.0);
        overtone.stop(now + 1.0);
      }

      if (bass) {
        const bOsc = this.ctx.createOscillator();
        const bGain = this.ctx.createGain();
        bOsc.type = 'triangle';
        bOsc.frequency.setValueAtTime(bass, now);
        bGain.gain.setValueAtTime(0.001, now);
        bGain.gain.linearRampToValueAtTime(0.055, now + 0.04);
        bGain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
        bOsc.connect(bGain);
        bGain.connect(this.masterGain);
        bOsc.start(now);
        bOsc.stop(now + 0.9);
      }

      step += 1;
    };

    scheduleStep();
    this.musicTimer = window.setInterval(scheduleStep, 430);
  }

  public stopRomanticMusic() {
    this.musicPlaying = false;
    if (this.musicTimer !== null) {
      window.clearInterval(this.musicTimer);
      this.musicTimer = null;
    }
  }
}

export const soundEngine = new SoundEngine();
