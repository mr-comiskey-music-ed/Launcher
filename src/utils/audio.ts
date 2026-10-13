/**
 * Web Audio API synthesizer for interactive sonic feedback
 * and audible music production concept demos.
 */

export const RECORDED_EFFECT_AUDIO: Record<string, string> = {
  'bell-boost': '/audio/bell boost.mp3',
  'bitcrusher': '/audio/bitcrusher.mp3',
  'bitcrush': '/audio/bitcrusher.mp3',
  'chorus': '/audio/chorus.mp3',
  'compressor': '/audio/compression.mp3',
  'compression': '/audio/compression.mp3',
  'de-esser': '/audio/de-ess.mp3',
  'de-ess': '/audio/de-ess.mp3',
  'delay': '/audio/delay & echo.mp3',
  'distortion': '/audio/distortion.mp3',
  'flanger': '/audio/flanger.mp3',
  'gated-reverb': '/audio/gated reverb.mp3',
  'gated': '/audio/gated reverb.mp3',
  'hi-pass-filter': '/audio/hi-pass filter.mp3',
  'filter': '/audio/hi-pass filter.mp3',
  'high-shelf-boost': '/audio/hi shelf boost.mp3',
  'high-shelf-cut': '/audio/hi shelf cut.mp3',
  'lo-pass-filter': '/audio/low-pass filter.mp3',
  'low-shelf-boost': '/audio/low shelf boost.mp3',
  'low-shelf-cut': '/audio/low shelf cut.mp3',
  'noise-gate': '/audio/noise gate.mp3',
  'parallel-compression': '/audio/parallel compression.mp3',
  'phaser': '/audio/phaser.mp3',
  'pitch-shifter': '/audio/pitch shifter.mp3',
  'plate-reverb': '/audio/plate reverb.mp3',
  'reverb': '/audio/reverb.mp3',
  'saturation': '/audio/saturation.mp3',
  'serial-compression': '/audio/serial compression.mp3',
  'sidechain-compression': '/audio/sidechain compression.mp3',
  'spring-reverb': '/audio/spring reverb.mp3',
  'transient-shaper': '/audio/transient shaper.mp3',
  'tremolo': '/audio/tremolo.mp3',
};

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private currentAudio: HTMLAudioElement | null = null;
  private currentAudioCleanup: (() => void) | null = null;
  private progressRafId: number | null = null;

  public stopCurrentAudio() {
    if (this.progressRafId !== null) {
      cancelAnimationFrame(this.progressRafId);
      this.progressRafId = null;
    }
    if (this.currentAudioCleanup) {
      this.currentAudioCleanup();
      this.currentAudioCleanup = null;
    }
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch {
        // audio pause fallback
      }
      this.currentAudio = null;
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Play clean studio confirmation chime
   */
  public playSuccess() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 major chord

      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0, now + idx * 0.05);
        gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.05 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.4);
      });
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Play gentle studio buzz/thud for incorrect choice
   */
  public playIncorrect() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(70, now + 0.25);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.26);
    } catch {
      // AudioContext fallback
    }
  }

  /**
   * Play interactive audio concept demonstration
   */
  public playConceptDemo(concept: string, onEnd?: () => void, onProgress?: (progress: number) => void) {
    if (this.isMuted) {
      onEnd?.();
      onProgress?.(0);
      return;
    }

    // Stop any previously playing audition audio
    this.stopCurrentAudio();
    onProgress?.(0);

    // Check if recorded audio clip exists for this effect
    const audioPath = RECORDED_EFFECT_AUDIO[concept];
    if (audioPath && typeof window !== 'undefined') {
      try {
        const audio = new Audio(encodeURI(audioPath));
        this.currentAudio = audio;

        // Turn down volume of sidechain compression example another 10% (0.75 total)
        if (concept === 'sidechain-compression' || concept === 'sidechain' || audioPath.includes('sidechain')) {
          audio.volume = 0.75;
        } else {
          audio.volume = 1.0;
        }

        let finished = false;
        let progressTimer: any = null;

        const emitProgress = () => {
          if (!this.currentAudio || this.currentAudio !== audio) return;
          const dur = audio.duration;
          if (dur && !isNaN(dur) && isFinite(dur) && dur > 0) {
            const p = Math.min(1, Math.max(0, audio.currentTime / dur));
            onProgress?.(p);
          }
        };

        // Listen to timeupdate events and run high-frequency interval
        audio.addEventListener('timeupdate', emitProgress);
        audio.addEventListener('loadedmetadata', emitProgress);
        progressTimer = setInterval(emitProgress, 35);

        const onFinish = () => {
          if (!finished) {
            finished = true;
            if (progressTimer !== null) {
              clearInterval(progressTimer);
              progressTimer = null;
            }
            if (this.currentAudio === audio) {
              this.currentAudio = null;
            }
            onProgress?.(1);
            setTimeout(() => onProgress?.(0), 100);
            onEnd?.();
          }
        };

        audio.addEventListener('ended', onFinish);
        audio.addEventListener('error', onFinish);

        this.currentAudioCleanup = () => {
          if (progressTimer !== null) {
            clearInterval(progressTimer);
            progressTimer = null;
          }
          audio.removeEventListener('timeupdate', emitProgress);
          audio.removeEventListener('loadedmetadata', emitProgress);
          audio.removeEventListener('ended', onFinish);
          audio.removeEventListener('error', onFinish);
        };

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn('Audio playback error:', err);
            onFinish();
          });
        }
        return;
      } catch (err) {
        console.warn('Could not play recorded clip, falling back to synth:', err);
      }
    }

    // Fallback: Web Audio synthesis demo with progress tracking
    const synthDuration = 900;
    const startTime = performance.now();
    let synthTimer: any = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const p = Math.min(1, elapsed / synthDuration);
      onProgress?.(p);
      if (elapsed >= synthDuration) {
        clearInterval(synthTimer);
        synthTimer = null;
        onProgress?.(0);
      }
    }, 35);

    if (onEnd) {
      setTimeout(onEnd, synthDuration);
    }

    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      if (concept === 'gated' || concept === 'reverb') {
        // Gated snare noise burst with abrupt cut
        const bufferSize = this.ctx.sampleRate * 0.4;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1200, now);
        filter.Q.setValueAtTime(1.5, now);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.18, now);
        // Instant non-linear gate cut at 180ms!
        gain.gain.setValueAtTime(0.18, now + 0.18);
        gain.gain.linearRampToValueAtTime(0.0001, now + 0.19);

        whiteNoise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        whiteNoise.start(now);
        whiteNoise.stop(now + 0.2);
      } else if (concept === 'filter' || concept === 'eq' || concept === 'hi-pass-filter' || concept === 'low-shelf-cut') {
        // High-pass sweep demonstration
        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(40, now);
        filter.frequency.exponentialRampToValueAtTime(1200, now + 0.5);
        filter.frequency.exponentialRampToValueAtTime(40, now + 0.9);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 1.05);
      } else if (concept === 'lo-pass-filter' || concept === 'high-shelf-cut') {
        // Low-pass sweep demonstration (warm cutoff rolloff)
        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(3500, now);
        filter.frequency.exponentialRampToValueAtTime(250, now + 0.5);
        filter.frequency.exponentialRampToValueAtTime(2800, now + 0.9);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 1.05);
      } else if (concept === 'phaser') {
        // Sweeping notch phase shifter
        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        const notch = this.ctx.createBiquadFilter();
        notch.type = 'notch';
        notch.frequency.setValueAtTime(400, now);
        notch.frequency.exponentialRampToValueAtTime(2500, now + 0.5);
        notch.frequency.exponentialRampToValueAtTime(400, now + 0.9);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.95);
        osc.connect(notch);
        notch.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.98);
      } else if (concept === 'spring-reverb') {
        // Spring reverb metallic boing twang
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(380, now + 0.08);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.7);
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1200, now);
        filter.Q.setValueAtTime(8, now);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.9);
      } else if (concept === 'pitch-shifter') {
        // Pitch shift demonstration (musical fifth jump)
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(261.63, now); // Middle C
        osc.frequency.setValueAtTime(392.0, now + 0.3); // Jump to G (fifth up)
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.8);
      } else if (concept === 'transient-shaper') {
        // Attack punch spike followed by sustain
        const click = this.ctx.createOscillator();
        click.type = 'square';
        click.frequency.setValueAtTime(900, now);
        const clickGain = this.ctx.createGain();
        clickGain.gain.setValueAtTime(0.25, now);
        clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        click.connect(clickGain);
        clickGain.connect(this.ctx.destination);
        click.start(now);
        click.stop(now + 0.05);

        const body = this.ctx.createOscillator();
        body.type = 'sine';
        body.frequency.setValueAtTime(130, now);
        const bodyGain = this.ctx.createGain();
        bodyGain.gain.setValueAtTime(0.12, now);
        bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        body.connect(bodyGain);
        bodyGain.connect(this.ctx.destination);
        body.start(now);
        body.stop(now + 0.65);
      } else if (concept === 'delay') {
        // Repeating stereo/mono echo taps
        const times = [0, 0.22, 0.44, 0.66];
        const gains = [0.12, 0.07, 0.04, 0.02];
        times.forEach((t, i) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const g = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, now + t);
          g.gain.setValueAtTime(gains[i], now + t);
          g.gain.exponentialRampToValueAtTime(0.001, now + t + 0.18);
          osc.connect(g);
          g.connect(this.ctx.destination);
          osc.start(now + t);
          osc.stop(now + t + 0.2);
        });
      } else if (concept === 'flanger' || concept === 'chorus') {
        // Detuned multi-oscillator phasing / comb sweep
        const freqs = [330, 332.5, 328];
        freqs.forEach((f) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const g = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now);
          g.gain.setValueAtTime(0.06, now);
          g.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
          osc.connect(g);
          g.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.95);
        });
      } else if (concept === 'compressor' || concept === 'limiter') {
        // Dynamic clamp demonstration (loud transient clamped to flat level)
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(260, now);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.2, now);
        // Instant clamp!
        gain.gain.linearRampToValueAtTime(0.06, now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.85);
      } else if (concept === 'de-esser') {
        // High frequency sibilance hiss damped out
        const bufferSize = this.ctx.sampleRate * 0.35;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.4;
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(6500, now);
        filter.frequency.exponentialRampToValueAtTime(1500, now + 0.15); // de-essing attenuation
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.12, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        noise.connect(filter);
        filter.connect(g);
        g.connect(this.ctx.destination);
        noise.start(now);
        noise.stop(now + 0.36);
      } else if (concept === 'saturation' || concept === 'distortion') {
        // Harmonic saturation / overdrive wave
        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);

        const waveShaper = this.ctx.createWaveShaper();
        const curve = new Float32Array(256);
        for (let i = 0; i < 256; i++) {
          const x = (i * 2) / 256 - 1;
          curve[i] = ((Math.PI + 3) * x) / (Math.PI + 3 * Math.abs(x));
        }
        waveShaper.curve = curve;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

        osc.connect(waveShaper);
        waveShaper.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.75);
      } else if (concept === 'noise-gate') {
        // Noise gate cutting off quiet decay abruptly
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, now);
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.15, now);
        g.gain.setValueAtTime(0.15, now + 0.15);
        g.gain.linearRampToValueAtTime(0.0001, now + 0.16); // instant gate shut!
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.17);

      } else if (concept === 'tremolo') {
        // Tremolo volume pulse
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(330, now);

        const lfo = this.ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(8, now); // 8 Hz speed

        const lfoGain = this.ctx.createGain();
        lfoGain.gain.setValueAtTime(0.08, now);

        const mainGain = this.ctx.createGain();
        mainGain.gain.setValueAtTime(0.1, now);

        lfo.connect(mainGain.gain);

        osc.connect(mainGain);
        mainGain.connect(this.ctx.destination);

        osc.start(now);
        lfo.start(now);
        mainGain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

        osc.stop(now + 0.9);
        lfo.stop(now + 0.9);
      } else if (concept === 'kick-drum' || concept === 'kick-drum-mic') {
        // Deep acoustic kick drum punch
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.45);
      } else if (concept === 'snare-drum') {
        // Snappy snare drum with wires rattle
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.08);
        const oscGain = this.ctx.createGain();
        oscGain.gain.setValueAtTime(0.2, now);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(oscGain);
        oscGain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.2);

        // Snare wires noise burst
        const bufferSize = this.ctx.sampleRate * 0.25;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.4;
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.18, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        noise.connect(noiseGain);
        noiseGain.connect(this.ctx.destination);
        noise.start(now);
        noise.stop(now + 0.26);
      } else if (concept === 'drum-set') {
        // Kick + hi-hat + snare mini beat
        const kickOsc = this.ctx.createOscillator();
        kickOsc.frequency.setValueAtTime(100, now);
        kickOsc.frequency.exponentialRampToValueAtTime(45, now + 0.1);
        const kickGain = this.ctx.createGain();
        kickGain.gain.setValueAtTime(0.25, now);
        kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        kickOsc.connect(kickGain);
        kickGain.connect(this.ctx.destination);
        kickOsc.start(now);
        kickOsc.stop(now + 0.22);

        const snareOsc = this.ctx.createOscillator();
        snareOsc.frequency.setValueAtTime(160, now + 0.25);
        snareOsc.frequency.exponentialRampToValueAtTime(90, now + 0.35);
        const snareGain = this.ctx.createGain();
        snareGain.gain.setValueAtTime(0.2, now + 0.25);
        snareGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        snareOsc.connect(snareGain);
        snareGain.connect(this.ctx.destination);
        snareOsc.start(now + 0.25);
        snareOsc.stop(now + 0.52);
      } else if (concept === 'electric-guitar') {
        // Overdriven rock guitar power chord
        const freqs = [164.81, 246.94, 329.63]; // E3, B3, E4
        freqs.forEach((f) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(f, now);
          const filter = this.ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(2200, now);
          const gain = this.ctx.createGain();
          gain.gain.setValueAtTime(0.06, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
          osc.connect(filter);
          filter.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.75);
        });
      } else if (concept === 'bass-guitar') {
        // Deep electric bass groove pluck
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(82.41, now); // E2
        osc.frequency.setValueAtTime(110.0, now + 0.25); // A2
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.24, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.75);
      } else if (concept === '808-bass') {
        // Authentic 808 sub-bass: punchy attack click + sub sine frequency sweep and long warm decay
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(145, now);
        osc.frequency.exponentialRampToValueAtTime(42, now + 0.08); // pitch drop
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.32, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 1.25);
      } else if (concept === 'dynamic-eq') {
        // Dynamic EQ demonstration: audio burst with automated dynamic frequency notch clamping down
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'peaking';
        filter.frequency.setValueAtTime(440, now);
        filter.gain.setValueAtTime(6, now);
        filter.gain.linearRampToValueAtTime(-14, now + 0.25); // dynamic clamping!
        filter.gain.linearRampToValueAtTime(0, now + 0.7);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.8);
      } else if (concept === 'acoustic-guitar') {
        // Crisp, woody acoustic guitar arpeggiated chord pluck
        const freqs = [196.0, 246.94, 293.66, 392.0]; // G3, B3, D4, G4
        freqs.forEach((f, idx) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now + idx * 0.08);

          const filter = this.ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(f * 2.2, now + idx * 0.08);
          filter.Q.setValueAtTime(2.2, now + idx * 0.08);

          const gain = this.ctx.createGain();
          gain.gain.setValueAtTime(0.14, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.65);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.7);
        });
      } else if (concept === 'piano' || concept === 'acoustic-piano') {
        // Rich acoustic grand piano chord with harmonic resonance
        const freqs = [261.63, 329.63, 392.0, 523.25]; // C4, E4, G4, C5
        freqs.forEach((f, idx) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now);

          const gain = this.ctx.createGain();
          gain.gain.setValueAtTime(0.1, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85 + idx * 0.08);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now);
          osc.stop(now + 0.95 + idx * 0.08);
        });
      } else if (concept === 'phantom-power') {
        // +48V capacitor charging tone
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(60, now);
        osc.frequency.exponentialRampToValueAtTime(480, now + 0.2);
        osc.frequency.exponentialRampToValueAtTime(48, now + 0.45);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.55);
      } else if (concept === 'xlr-cable' || concept === 'instrument-cable') {
        // Satisfying connector snap & click
        const click = this.ctx.createOscillator();
        click.type = 'square';
        click.frequency.setValueAtTime(1800, now);
        const clickGain = this.ctx.createGain();
        clickGain.gain.setValueAtTime(0.25, now);
        clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        click.connect(clickGain);
        clickGain.connect(this.ctx.destination);
        click.start(now);
        click.stop(now + 0.04);
      } else if (concept === 'studio-monitors' || concept === 'studio-headphones') {
        // Reference speaker chime
        const freqs = [523.25, 659.25, 783.99]; // C5, E5, G5
        freqs.forEach((f, idx) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now + idx * 0.08);
          const gain = this.ctx.createGain();
          gain.gain.setValueAtTime(0.08, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.45);
        });
      } else if (concept === 'pop-filter') {
        // Soft diffused plosive air blast
        const bufferSize = this.ctx.sampleRate * 0.3;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.3;
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(300, now);
        filter.frequency.exponentialRampToValueAtTime(80, now + 0.25);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start(now);
        noise.stop(now + 0.3);
      } else if (concept === 'dynamic-mic' || concept === 'vocal-mic') {
        // Vocal mic acoustic check ("tap tap")
        [0, 0.15].forEach((tOffset) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(380, now + tOffset);
          osc.frequency.exponentialRampToValueAtTime(90, now + tOffset + 0.08);
          const g = this.ctx.createGain();
          g.gain.setValueAtTime(0.25, now + tOffset);
          g.gain.exponentialRampToValueAtTime(0.001, now + tOffset + 0.09);
          osc.connect(g);
          g.connect(this.ctx.destination);
          osc.start(now + tOffset);
          osc.stop(now + tOffset + 0.1);
        });
      } else if (concept === 'u87-mic' || concept === 'c414-mic' || concept === 'pencil-mic') {
        // High-fidelity studio condenser air sparkle chime
        const freqs = [880, 1318.5, 1760]; // A5, E6, A6
        freqs.forEach((f, idx) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now + idx * 0.06);
          const g = this.ctx.createGain();
          g.gain.setValueAtTime(0.07, now + idx * 0.06);
          g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.5);
          osc.connect(g);
          g.connect(this.ctx.destination);
          osc.start(now + idx * 0.06);
          osc.stop(now + idx * 0.06 + 0.55);
        });
      } else if (concept === 'ribbon-mic') {
        // Warm vintage dark ribbon resonance
        const freqs = [220, 277.18, 329.63]; // A3, C#4, E4
        freqs.forEach((f) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now);
          const filter = this.ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(1400, now);
          const g = this.ctx.createGain();
          g.gain.setValueAtTime(0.07, now);
          g.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
          osc.connect(filter);
          filter.connect(g);
          g.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.65);
        });
      } else if (concept === 'di-box') {
        // Clean direct injection bass pluck with ground lift silence
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.exponentialRampToValueAtTime(55, now + 0.3);
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.22, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.38);
      } else if (concept === 'gaff-tape') {
        // Gaffer tape unrolling zip
        const bufferSize = this.ctx.sampleRate * 0.2;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.35;
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1200, now);
        filter.frequency.exponentialRampToValueAtTime(3200, now + 0.18);
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.12, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.19);
        noise.connect(filter);
        filter.connect(g);
        g.connect(this.ctx.destination);
        noise.start(now);
        noise.stop(now + 0.2);
      } else if (concept === 'shockmount' || concept === 'mic-stand' || concept === 'mic-clip') {
        // Solid mechanical stand clamp click
        const click = this.ctx.createOscillator();
        click.type = 'triangle';
        click.frequency.setValueAtTime(450, now);
        click.frequency.exponentialRampToValueAtTime(100, now + 0.05);
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.2, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        click.connect(g);
        g.connect(this.ctx.destination);
        click.start(now);
        click.stop(now + 0.07);
      } else if (concept === 'reflection-filter') {
        // Dry acoustic room deadening test
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.18, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.08); // ultra fast dry decay!
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.09);
      } else if (concept === 'polar-cardioid') {
        // Cardioid demonstration: Full front on-axis presence followed by 180° rear rejection null
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.18, now);
        g.gain.linearRampToValueAtTime(0.005, now + 0.35); // 180° null rejection!
        g.gain.linearRampToValueAtTime(0.18, now + 0.65); // return to on-axis
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.9);
      } else if (concept === 'polar-figure8') {
        // Figure-8 demonstration: Front lobe -> 90° null -> Rear lobe -> 270° null
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(392, now);
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.18, now);
        g.gain.linearRampToValueAtTime(0.001, now + 0.22); // 90° null
        g.gain.linearRampToValueAtTime(0.18, now + 0.44); // 180° rear lobe
        g.gain.linearRampToValueAtTime(0.001, now + 0.66); // 270° null
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.9);
      } else if (concept === 'polar-omni') {
        // Omnidirectional demonstration: Constant uniform 360° spherical pickup
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.15, now);
        g.gain.setValueAtTime(0.15, now + 0.5); // completely smooth across all degrees
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.85);
      } else if (concept === 'polar-supercardioid') {
        // Supercardioid demonstration: Tight focused front lobe, sharp 125° null, and slight rear blip
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(493.88, now);
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.2, now);
        g.gain.linearRampToValueAtTime(0.001, now + 0.3); // 125° null
        g.gain.linearRampToValueAtTime(0.06, now + 0.48); // small rear lobe
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.75);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.8);
      } else if (concept === 'bitcrush') {
        // Square wave glitchy pulse
        const osc = this.ctx.createOscillator();
        osc.type = 'square';
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.setValueAtTime(85, now + 0.1);
        osc.frequency.setValueAtTime(240, now + 0.2);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.45);
      } else {
        // Generic melodic tone
        this.playSuccess();
      }
    } catch {
      // AudioContext fallback
    }
  }
}

export const soundEngine = new SoundEngine();
