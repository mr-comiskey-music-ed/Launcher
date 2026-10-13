import React from 'react';

export type AudioEffectType =
  // Audio FX & Processing
  | 'eq'
  | 'compressor'
  | 'serial-compression'
  | 'parallel-compression'
  | 'sidechain-compression'
  | 'reverb'
  | 'spring-reverb'
  | 'gated-reverb'
  | 'plate-reverb'
  | 'saturation'
  | 'distortion'
  | 'noise-gate'
  | 'chorus'
  | 'flanger'
  | 'phaser'
  | 'tremolo'
  | 'de-esser'
  | 'delay'
  | 'limiter'
  | 'bitcrusher'
  | 'hi-pass-filter'
  | 'lo-pass-filter'
  | 'low-shelf-cut'
  | 'low-shelf-boost'
  | 'high-shelf-cut'
  | 'high-shelf-boost'
  | 'bell-boost'
  | 'dynamic-eq'
  | 'transient-shaper'
  | 'pitch-shifter'
  // Recording Equipment, Instruments & Studio Accessories
  | 'kick-drum'
  | 'snare-drum'
  | 'drum-set'
  | 'pop-filter'
  | 'shockmount'
  | 'xlr-cable'
  | 'phantom-power'
  | 'electric-guitar'
  | 'acoustic-guitar'
  | 'bass-guitar'
  | '808-bass'
  | 'piano'
  | 'acoustic-piano'
  | 'dynamic-mic'
  | 'pencil-mic'
  | 'kick-drum-mic'
  | 'vocal-mic'
  | 'u87-mic'
  | 'c414-mic'
  | 'instrument-cable'
  | 'ribbon-mic'
  | 'di-box'
  | 'mic-clip'
  | 'mic-stand'
  | 'gaff-tape'
  | 'reflection-filter'
  | 'studio-headphones'
  | 'studio-monitors'
  // Polar Pickup Patterns
  | 'polar-cardioid'
  | 'polar-figure8'
  | 'polar-omni'
  | 'polar-supercardioid'
  | 'polar-shotgun';

export interface AudioIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

// ----------------------------------------------------------------------
// 1. Audio Processing & Mixing Icons (Tight ViewBoxes & Bold Strokes)
// ----------------------------------------------------------------------

// EQ (Parametric Bell)
export const IconEQ: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="6 8 88 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <line x1="8" y1="32" x2="92" y2="32" stroke="currentColor" strokeWidth="2.4" strokeOpacity="0.4" strokeLinecap="round" />
    <path d="M 8 46 C 26 46 36 10 50 10 C 64 10 74 46 92 46" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Dynamic EQ (User's Exact Specification: Threshold node at bell peak with expansion/compression reaction vectors)
export const IconDynamicEq: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>

    {/* 0 dB Neutral Reference Baseline (Dashed) */}
    <line 
      x1="20" 
      y1="72" 
      x2="108" 
      y2="72" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeDasharray="2 8" 
    />

    {/* Dynamic Threshold Ring / Node at the Bell Peak */}
    <circle 
      cx="64" 
      y="44" 
      r="7" 
      fill="#ffffff" 
      stroke="currentColor" 
      strokeWidth="5" 
    />

    {/* Active Parametric EQ Bell Curve */}
    <path 
      d="M 22 72 Q 44 72 52 50 Q 64 26 76 50 Q 84 72 106 72" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="7" 
      strokeLinecap="round" 
    />

    {/* Dynamic Modulation Vectors (Bidirectional Gain Reaction) */}
    {/* Upward Expansion Vector */}
    <path 
      d="M 64 26 L 64 16 M 58 22 L 64 16 L 70 22" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />

    {/* Downward Compression Vector */}
    <path 
      d="M 64 84 L 64 100 M 58 94 L 64 100 L 70 94" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

// Compressor
export const IconCompressor: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 4 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <line x1="6" y1="24" x2="94" y2="24" stroke="currentColor" strokeWidth="3" strokeDasharray="0.1 4" strokeLinecap="round" />
    <line x1="6" y1="76" x2="94" y2="76" stroke="currentColor" strokeWidth="3" strokeDasharray="0.1 4" strokeLinecap="round" />
    <line x1="6" y1="50" x2="94" y2="50" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <line x1="50" y1="5" x2="50" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M 44 14 L 50 20 L 56 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="50" y1="95" x2="50" y2="80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M 44 86 L 50 80 L 56 86" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 6 50 L 13 50 C 14.5 50 16 46 17 43 C 18 40 18.5 58 19.5 61 C 20.5 64 21 20 22 14 C 23 8 23.5 82 24.5 86 C 25.5 90 26.5 35 27.5 30 C 28.5 25 29.5 53 30.5 56 C 31.5 59 32 41 33 39 C 34 37 34.5 51 35.5 53 C 37 56 38 41 41.5 38 C 45 35 46 45 49 51 C 52 57 55 58 58 57 C 62 56 64 45 68 45 C 72 45 74 54 79 54 C 84 54 87 50 94 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Serial Compression
export const IconSerialCompression: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="14 10 100 96" className={className} {...props}>
    {/* TOP ROW: Compressor 1 + Compressor 2 */}
    <rect x="18" y="14" width="36" height="38" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M 22 33 L 25 33 L 27 21 L 29 43 L 32 27 L 35 38 L 38 30 L 41 35 L 44 33 L 50 33" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="21" y1="22" x2="51" y2="22" stroke="currentColor" strokeWidth="1.8" strokeDasharray="2 2" />
    <line x1="21" y1="44" x2="51" y2="44" stroke="currentColor" strokeWidth="1.8" strokeDasharray="2 2" />
    <path d="M 35 17 L 35 20 M 33 18.5 L 35 20 L 37 18.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 35 49 L 35 46 M 33 47.5 L 35 46 L 37 47.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Plus (+) */}
    <line x1="58" y1="33" x2="68" y2="33" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="63" y1="28" x2="63" y2="38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

    {/* Box 2 */}
    <rect x="74" y="14" width="36" height="38" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M 78 33 L 81 33 L 83 21 L 85 43 L 88 27 L 91 38 L 94 30 L 97 35 L 100 33 L 106 33" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="77" y1="22" x2="107" y2="22" stroke="currentColor" strokeWidth="1.8" strokeDasharray="2 2" />
    <line x1="77" y1="44" x2="107" y2="44" stroke="currentColor" strokeWidth="1.8" strokeDasharray="2 2" />
    <path d="M 91 17 L 91 20 M 89 18.5 L 91 20 L 93 18.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 91 49 L 91 46 M 89 47.5 L 91 46 L 93 47.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* BOTTOM ROW: Equals (=) + Final Squashed Waveform */}
    <line x1="16" y1="76" x2="26" y2="76" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="16" y1="84" x2="26" y2="84" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />

    <line x1="32" y1="80" x2="112" y2="80" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 32 80 L 38 80 L 42 72 L 46 88 L 50 76 L 54 84 L 58 77 L 62 83 L 66 79 L 70 81 L 74 80 L 112 80" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="32" y1="68" x2="112" y2="68" stroke="currentColor" strokeWidth="2" strokeDasharray="2.5 2.5" />
    <line x1="32" y1="92" x2="112" y2="92" stroke="currentColor" strokeWidth="2" strokeDasharray="2.5 2.5" />
    <path d="M 72 59 L 72 64 M 69.5 61.5 L 72 64 L 74.5 61.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 72 101 L 72 96 M 69.5 98.5 L 72 96 L 74.5 98.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Parallel Compression
export const IconParallelCompression: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 6 124 116" className={className} {...props}>
    {/* Split Parallel Wiring extending further to left and right edges */}
    <path d="M 4 64 L 14 64 C 20 64 24 26 34 26 L 94 26 C 104 26 108 64 114 64 L 124 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M 14 64 C 20 64 24 102 34 102 L 94 102 C 104 102 108 64 114 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />

    {/* TOP BOX: Compressed Waveform with solid background fill to hide lines underneath */}
    <rect x="34" y="10" width="60" height="46" rx="8" fill="#080c18" stroke="currentColor" strokeWidth="3" />
    <path d="M 38 33 L 42 33 L 45 22 L 48 44 L 51 28 L 54 38 L 57 30 L 60 36 L 63 33 L 90 33" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="37" y1="18" x2="91" y2="18" stroke="currentColor" strokeWidth="1.8" strokeDasharray="2 2" />
    <line x1="37" y1="48" x2="91" y2="48" stroke="currentColor" strokeWidth="1.8" strokeDasharray="2 2" />
    <path d="M 64 13 L 64 17 M 62 15 L 64 17 L 66 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 64 53 L 64 49 M 62 51 L 64 49 L 66 51" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* BOTTOM BOX: Uncompressed / Dry Waveform with solid background fill to hide lines underneath */}
    <rect x="34" y="70" width="60" height="46" rx="8" fill="#080c18" stroke="currentColor" strokeWidth="3" />
    <path d="M 38 93 L 42 93 L 46 76 L 50 110 L 54 84 L 58 104 L 62 88 L 66 100 L 70 90 L 74 97 L 78 93 L 90 93" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Sidechain Compression
export const IconSidechainCompression: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="16 8 102 104" className={className} {...props}>
    <path d="M 22 88 L 22 46 C 22 40 26 36 32 36 L 42 36" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 38 30 L 46 36 L 38 42" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="48" y1="36" x2="114" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 48 36 L 54 36 L 58 20 L 62 52 L 66 26 L 70 46 L 74 30 L 78 42 L 82 33 L 86 39 L 90 36 L 114 36" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="48" y1="20" x2="114" y2="20" stroke="currentColor" strokeWidth="2" strokeDasharray="2.5 2.5" />
    <line x1="48" y1="52" x2="114" y2="52" stroke="currentColor" strokeWidth="2" strokeDasharray="2.5 2.5" />
    <path d="M 81 11 L 81 17 M 78.5 14.5 L 81 17 L 83.5 14.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 81 61 L 81 55 M 78.5 57.5 L 81 55 L 83.5 57.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="18" y1="88" x2="114" y2="88" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 18 88 L 38 88 L 42 70 L 46 106 L 50 76 L 54 98 L 58 82 L 62 94 L 66 86 L 70 90 L 74 88 L 114 88" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Reverb
export const IconReverb: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="14 8 72 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M 16 50 L 16 22 L 50 10 L 84 22 L 84 50" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 40 22 C 45 28 55 28 60 22" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M 31 31 C 41 40 59 40 69 31" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M 23 40 C 37 52 63 52 77 40" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

// Spring Reverb
export const IconSpringReverb: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 6 100 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <line x1="2" y1="25" x2="10" y2="25" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <rect x="10" y="8" width="5" height="34" rx="1.5" stroke="currentColor" strokeWidth="2.4" fill="currentColor" fillOpacity="0.15" />
    <line x1="90" y1="25" x2="98" y2="25" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <rect x="85" y="8" width="5" height="34" rx="1.5" stroke="currentColor" strokeWidth="2.4" fill="currentColor" fillOpacity="0.15" />
    <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 15 25 C 16 11, 22 11, 23 25 C 24 39, 17 39, 18 25" />
      <path d="M 22 25 C 23 11, 29 11, 30 25 C 31 39, 24 39, 25 25" />
      <path d="M 29 25 C 30 11, 36 11, 37 25 C 38 39, 31 39, 32 25" />
      <path d="M 36 25 C 37 11, 43 11, 44 25 C 45 39, 38 39, 39 25" />
      <path d="M 43 25 C 44 11, 50 11, 51 25 C 52 39, 45 39, 46 25" />
      <path d="M 50 25 C 51 11, 57 11, 58 25 C 59 39, 52 39, 53 25" />
      <path d="M 57 25 C 58 11, 64 11, 65 25 C 66 39, 59 39, 60 25" />
      <path d="M 64 25 C 65 11, 71 11, 72 25 C 73 39, 66 39, 67 25" />
      <path d="M 71 25 C 72 11, 78 11, 79 25 C 80 39, 73 39, 74 25" />
      <path d="M 78 25 C 79 11, 84 11, 85 25" />
    </g>
  </svg>
);

// Gated Reverb
export const IconGatedReverb: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Threshold Dashed Line */}
    <line x1="24" y1="20" x2="24" y2="108" stroke="currentColor" strokeWidth="3" strokeDasharray="4 4" />
    {/* Gated ambient bars graph */}
    <rect x="34" y="24" width="14" height="84" fill="currentColor" />
    <rect x="51" y="68" width="10" height="40" fill="currentColor" fillOpacity="0.6" />
    <rect x="64" y="58" width="10" height="50" fill="currentColor" fillOpacity="0.7" />
    <rect x="77" y="44" width="10" height="64" fill="currentColor" fillOpacity="0.85" />
    {/* Gated cutoff box / window */}
    <rect x="90" y="16" width="24" height="92" rx="4" stroke="currentColor" strokeWidth="3.5" fill="none" />
    <rect x="93" y="44" width="18" height="61" fill="currentColor" />
  </svg>
);

// Plate Reverb
export const IconPlateReverb: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Outer Plate Metal Enclosure Frame */}
    <rect x="14" y="18" width="100" height="92" rx="6" stroke="currentColor" strokeWidth="4" fill="none" />
    {/* Corner suspension brackets */}
    <path d="M 14 34 L 28 34 L 28 18" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M 114 34 L 100 34 L 100 18" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M 14 94 L 28 94 L 28 110" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M 114 94 L 100 94 L 100 110" stroke="currentColor" strokeWidth="3" fill="none" />
    {/* Suspended Steel Plate Core */}
    <rect x="32" y="32" width="64" height="64" rx="4" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" />
    {/* Piezo Transducers & Patch Cables */}
    <rect x="28" y="44" width="9" height="14" rx="2" fill="#0f172a" stroke="currentColor" strokeWidth="2" />
    <rect x="28" y="70" width="9" height="14" rx="2" fill="#0f172a" stroke="currentColor" strokeWidth="2" />
    <rect x="91" y="57" width="9" height="14" rx="2" fill="#0f172a" stroke="currentColor" strokeWidth="2" />
    <path d="M 14 51 L 28 51 M 14 77 L 28 77" stroke="currentColor" strokeWidth="3" />
    <path d="M 100 64 L 114 64" stroke="currentColor" strokeWidth="3" />
    {/* Reverb acoustic ripple waves */}
    <path d="M 56 46 C 66 46, 72 52, 72 64 C 72 76, 66 82, 56 82" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M 62 53 C 68 53, 72 58, 72 64 C 72 70, 68 75, 62 75" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

// Saturation
export const IconSaturation: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="6 8 88 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M 8 30 C 14 10 24 10 30 30 C 36 50 44 50 48 30 C 50 20 52 14 54 30 L 57 12 L 60 48 L 63 10 L 66 50 L 69 9 L 72 51 L 75 10 L 78 50 L 81 12 L 84 48 L 87 18 L 90 42 L 92 30" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Distortion
export const IconDistortion: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="6 8 88 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M 8 30 L 12 30 L 14 20 L 16 38 L 18 10 L 24 10 L 26 48 L 29 20 L 32 50 L 37 50 L 39 12 L 43 12 L 45 44 L 48 10 L 52 10 L 55 48 L 59 14 L 62 52 L 67 52 L 70 12 L 74 12 L 77 46 L 80 10 L 85 10 L 87 40 L 89 24 L 92 30" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Noise Gate
export const IconNoiseGate: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="6 10 88 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <line x1="8" y1="30" x2="38" y2="30" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
    <path d="M 30 22 L 38 30 L 30 38" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="44" y1="12" x2="44" y2="48" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="50" y1="12" x2="50" y2="48" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M 54 30 L 56 26 L 59 34 L 62 27 L 65 33 L 68 30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="68" y1="30" x2="92" y2="30" stroke="currentColor" strokeWidth="2.4" strokeOpacity="0.35" strokeLinecap="round" />
  </svg>
);

// Chorus
export const IconChorus: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="6 6 88 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M 8 20 C 18 8 30 8 40 20 C 50 32 62 32 72 20 C 80 10 88 12 92 20" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M 8 26 C 18 14 30 14 40 26 C 50 38 62 38 72 26 C 80 16 88 18 92 26" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M 8 33 C 18 21 30 21 40 33 C 50 45 62 45 72 33 C 80 23 88 25 92 33" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M 8 40 C 18 28 30 28 40 40 C 50 52 62 52 72 40 C 80 30 88 32 92 40" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

// Flanger
export const IconFlanger: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="6 6 90 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M 8 30 C 16 8 28 8 36 30 C 44 52 56 52 64 30 C 72 8 84 8 92 30" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
    <path d="M 12 33 C 20 11 32 11 40 33 C 48 55 60 55 68 33 C 76 11 88 11 94 32" stroke="currentColor" strokeWidth="2.8" strokeDasharray="3 3" strokeOpacity="0.6" strokeLinecap="round" />
  </svg>
);

// Phaser
export const IconPhaser: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="2 8 96 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M 4 30 L 7 30 C 11 30, 13 14, 17 14 C 21 14, 25 46, 29 46 C 33 46, 37 12, 42 12 C 47 12, 51 46, 56 46 C 61 46, 65 12, 70 12 C 75 12, 79 46, 84 46 C 88 46, 92 30, 96 30" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 4 30 C 8 28, 14 14, 19 14 C 24 14, 28 46, 33 46 C 38 46, 42 12, 47 12 C 52 12, 56 46, 61 46 C 66 46, 70 12, 75 12 C 80 12, 84 46, 89 46 C 93 46, 94 30, 96 30" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 32 30 C 36 18, 40 18, 44 26 C 48 34, 52 42, 57 42 C 62 42, 66 18, 71 18 C 74 18, 77 30, 78 30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Tremolo
export const IconTremolo: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="8 6 84 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <line x1="12" y1="28" x2="12" y2="32" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <line x1="18" y1="25" x2="18" y2="35" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <line x1="24" y1="20" x2="24" y2="40" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <line x1="30" y1="14" x2="30" y2="46" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <line x1="36" y1="9" x2="36" y2="51" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="42" y1="12" x2="42" y2="48" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <line x1="48" y1="18" x2="48" y2="42" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <line x1="54" y1="10" x2="54" y2="50" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="60" y1="8" x2="60" y2="52" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="66" y1="12" x2="66" y2="48" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <line x1="72" y1="18" x2="72" y2="42" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <line x1="78" y1="23" x2="78" y2="37" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    <line x1="84" y1="27" x2="84" y2="33" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

// De-Esser
export const IconDeEsser: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="20 6 60 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <text x="50" y="31" textAnchor="middle" dominantBaseline="central" fontFamily="'Helvetica Neue', Helvetica, Arial, 'Liberation Sans', sans-serif" fontWeight="800" fontSize="44" fill="currentColor">
      S
    </text>
    <line x1="26" y1="8" x2="74" y2="52" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
    <line x1="74" y1="8" x2="26" y2="52" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

// Delay
export const IconDelay: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="6 13 86 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <g stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 8 23 L 14 23 L 22 15 L 22 45 L 14 37 L 8 37 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M 27 22 C 30 26 30 34 27 38" />
      <path d="M 32 17 C 37 23 37 37 32 43" />
    </g>
    <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.75">
      <path d="M 44 25 L 48 25 L 54 19 L 54 41 L 48 35 L 44 35 Z" />
      <path d="M 58 24 C 60 27 60 33 58 36" />
      <path d="M 62 20 C 66 25 66 35 62 40" />
    </g>
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45">
      <path d="M 72 27 L 75 27 L 80 22 L 80 38 L 75 33 L 72 33 Z" />
      <path d="M 83 26 C 85 28 85 32 83 34" />
      <path d="M 87 23 C 90 26 90 34 87 37" />
    </g>
  </svg>
);

// Limiter
export const IconLimiter: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 100 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M 43 2 L 57 2 L 57 13 L 66 13 L 50 24 L 34 13 L 43 13 Z" fill="currentColor" />
    <rect x="2" y="27" width="96" height="8" rx="1.5" fill="currentColor" />
    <line x1="2" y1="48" x2="98" y2="48" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M 2 48 L 7 48 C 8.5 48 9 46 9.5 41 C 10 36 10.5 35 11 35 L 12 35 L 12.5 61 L 13.5 35 L 14.5 61 L 15.5 35 L 16.5 61 L 17.5 35 L 18.5 61 L 19.5 35 L 20.5 61 L 21.5 35 L 22.5 61 L 23.5 35 L 24.5 61 L 25.5 35 L 26.5 61 L 27.5 35 L 28.5 61 L 29.5 35 L 30.5 61 L 32 37 C 33 40 33.5 58 34.5 58 C 35.5 58 36 41 37 41 C 38 41 38.5 55 39.5 55 C 40.5 55 41 43 42 43 C 43 43 44 53 45 53 C 46 53 47 45 48 45 C 49 45 50 51 51 51 C 52 51 53 46 54 46 C 55 46 56 50 57 50 C 58 50 59 47 60 47 C 62 47 64 49 66 49 C 68 49 70 48 72 48 L 98 48" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="2" y="61" width="96" height="8" rx="1.5" fill="currentColor" />
    <path d="M 43 94 L 57 94 L 57 83 L 66 83 L 50 72 L 34 83 L 43 83 Z" fill="currentColor" />
  </svg>
);

// Bitcrusher
export const IconBitcrusher: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="6 10 88 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M 8 30 L 12 30 L 14 18 L 18 42 L 22 12 L 26 48 L 30 16 L 34 44 L 38 24 L 40 30" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="42" y="24" width="4.5" height="4.5" fill="currentColor" />
    <rect x="42" y="32" width="4.5" height="4.5" fill="currentColor" />
    <rect x="48" y="16" width="4.5" height="4.5" fill="currentColor" />
    <rect x="48" y="22" width="4.5" height="4.5" fill="currentColor" />
    <rect x="48" y="36" width="4.5" height="4.5" fill="currentColor" />
    <rect x="54" y="18" width="4.5" height="4.5" fill="currentColor" />
    <rect x="54" y="24" width="4.5" height="4.5" fill="currentColor" />
    <rect x="54" y="30" width="4.5" height="4.5" fill="currentColor" />
    <rect x="54" y="38" width="4.5" height="4.5" fill="currentColor" />
    <rect x="60" y="22" width="4.5" height="4.5" fill="currentColor" />
    <rect x="60" y="28" width="4.5" height="4.5" fill="currentColor" />
    <rect x="60" y="34" width="4.5" height="4.5" fill="currentColor" />
    <rect x="66" y="24" width="4.5" height="4.5" fill="currentColor" />
    <rect x="66" y="30" width="4.5" height="4.5" fill="currentColor" />
    <rect x="72" y="26" width="4" height="4" fill="currentColor" />
    <rect x="72" y="32" width="4" height="4" fill="currentColor" />
    <rect x="78" y="28" width="4" height="4" fill="currentColor" />
    <rect x="84" y="29" width="3.5" height="3.5" fill="currentColor" />
    <rect x="90" y="30" width="2.5" height="2.5" fill="currentColor" />
  </svg>
);

// Hi-Pass Filter
export const IconHiPassFilter: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 8 92 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <line x1="6" y1="14" x2="94" y2="14" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.4" strokeLinecap="round" />
    <path d="M 6 42 L 40 42 C 48 42, 54 36, 62 18 C 65 14, 68 14, 94 14" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Low-Pass Filter (also aliased as Lo-Pass Filter)
export const IconLowPassFilter: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 8 92 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <line x1="6" y1="14" x2="94" y2="14" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.4" strokeLinecap="round" />
    <path d="M 6 14 L 30 14 C 36 14, 42 16, 50 34 C 54 42, 60 42, 94 42" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const IconLoPassFilter = IconLowPassFilter;

// Low Shelf Cut
export const IconLowShelfCut: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 8 92 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <line x1="6" y1="22" x2="94" y2="22" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.4" strokeLinecap="round" />
    <path d="M 6 38 L 30 38 C 44 38, 52 22, 66 22 L 94 22" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Low Shelf Boost
export const IconLowShelfBoost: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 8 92 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <line x1="6" y1="28" x2="94" y2="28" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.4" strokeLinecap="round" />
    <path d="M 6 12 L 30 12 C 44 12, 52 28, 66 28 L 94 28" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// High Shelf Boost
export const IconHighShelfBoost: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 8 92 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <line x1="6" y1="28" x2="94" y2="28" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.4" strokeLinecap="round" />
    <path d="M 6 28 L 34 28 C 48 28, 56 12, 70 12 L 94 12" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// High Shelf Cut
export const IconHighShelfCut: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 8 92 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <line x1="6" y1="14" x2="94" y2="14" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.4" strokeLinecap="round" />
    <path d="M 6 14 L 34 14 C 48 14, 56 36, 70 36 L 94 36" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Bell Boost
export const IconBellBoost: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 8 92 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <line x1="6" y1="28" x2="94" y2="28" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.4" strokeLinecap="round" />
    <path d="M 6 28 L 30 28 C 42 28, 45 10, 50 10 C 55 10, 58 28, 70 28 L 94 28" stroke="currentColor" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Transient Shaper
export const IconTransientShaper: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 8 92 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M 6 30 L 10 30 L 12 10 L 14 46 L 16 16 L 18 42 L 20 22 L 22 36 L 24 26 L 26 33 L 28 28 L 30 30" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 33 30 L 40 30 M 37 26 L 41 30 L 37 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="44" y1="32" x2="94" y2="32" stroke="currentColor" strokeWidth="2" strokeDasharray="1.5 3" />
    <path d="M 44 32 C 48 32, 51 10, 55 10 C 59 10, 61 32, 65 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 46 32 C 54 32, 56 22, 64 22 C 72 22, 74 38, 80 38 C 86 38, 88 32, 94 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Pitch Shifter
export const IconPitchShifter: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="10 10 84 74" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <ellipse cx="27" cy="62" rx="10" ry="7.5" transform="rotate(-20 27 62)" fill="currentColor" />
    <line x1="34" y1="62" x2="34" y2="18" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <line x1="58" y1="24" x2="58" y2="44" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M 47 31 L 58 20 L 69 31" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="77" y1="48" x2="77" y2="68" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="M 66 61 L 77 72 L 88 61" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);



// ----------------------------------------------------------------------
// 2. Recording Instruments, Mics & Studio Gear (NEW from user images)
// ----------------------------------------------------------------------

// 26. Kick Drum (Updated SVG)
export const IconKickDrum: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <g transform="translate(0, 0)" fill="currentColor" stroke="currentColor">
      <line x1="28" y1="84" x2="16" y2="108" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="16" cy="108" r="3.5" fill="currentColor" />
      <line x1="100" y1="84" x2="112" y2="108" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="112" cy="108" r="3.5" fill="currentColor" />
      <circle cx="64" cy="62" r="44" fill="currentColor" />
      <circle cx="64" cy="62" r="39" fill="#0f172a" />
      <circle cx="84" cy="74" r="11" fill="currentColor" />
      <rect x="61.5" y="14" width="5" height="7" rx="1.5" fill="currentColor" />
      <rect x="61.5" y="103" width="5" height="7" rx="1.5" fill="currentColor" />
      <rect x="16" y="59.5" width="7" height="5" rx="1.5" fill="currentColor" />
      <rect x="105" y="59.5" width="7" height="5" rx="1.5" fill="currentColor" />
      <g transform="rotate(45 64 62)">
        <rect x="61.5" y="14" width="5" height="7" rx="1.5" fill="currentColor" />
        <rect x="61.5" y="103" width="5" height="7" rx="1.5" fill="currentColor" />
        <rect x="16" y="59.5" width="7" height="5" rx="1.5" fill="currentColor" />
        <rect x="105" y="59.5" width="7" height="5" rx="1.5" fill="currentColor" />
      </g>
      <rect x="58" y="24" width="12" height="5" rx="2" fill="currentColor" />
    </g>
  </svg>
);

// 27. Snare Drum (Image 1, item 2)
export const IconSnareDrum: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 6 92 84" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Crossed drumsticks above */}
    <line x1="16" y1="10" x2="84" y2="52" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" />
    <line x1="84" y1="10" x2="16" y2="52" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" />
    {/* Top batter head rim */}
    <ellipse cx="50" cy="46" rx="42" ry="14" stroke="currentColor" strokeWidth="5" fill="currentColor" fillOpacity="0.12" />
    {/* Shell cylindrical body */}
    <path d="M 8 46 L 8 72 C 8 83, 26 90, 50 90 C 74 90, 92 83, 92 72 L 92 46" stroke="currentColor" strokeWidth="5" fill="none" />
    {/* Bottom resonant hoop */}
    <ellipse cx="50" cy="72" rx="42" ry="14" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4" />
    {/* Shell tension lugs */}
    <line x1="20" y1="54" x2="20" y2="78" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="38" y1="58" x2="38" y2="83" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="62" y1="58" x2="62" y2="83" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="80" y1="54" x2="80" y2="78" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// 28. Drum Set (Image 1, item 3)
export const IconDrumSet: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 8 92 84" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Center Kick drum */}
    <circle cx="50" cy="62" r="19" stroke="currentColor" strokeWidth="4" fill="currentColor" fillOpacity="0.15" />
    <circle cx="55" cy="68" r="4.5" fill="currentColor" />
    {/* Snare drum (left) */}
    <ellipse cx="26" cy="54" rx="11" ry="5" stroke="currentColor" strokeWidth="3" fill="currentColor" />
    <line x1="26" y1="59" x2="26" y2="82" stroke="currentColor" strokeWidth="2.5" />
    {/* Rack toms */}
    <ellipse cx="40" cy="34" rx="8" ry="4.5" stroke="currentColor" strokeWidth="2.5" fill="currentColor" />
    <ellipse cx="59" cy="34" rx="8" ry="4.5" stroke="currentColor" strokeWidth="2.5" fill="currentColor" />
    {/* Floor tom (right) */}
    <ellipse cx="78" cy="56" rx="10" ry="5.5" stroke="currentColor" strokeWidth="3" fill="currentColor" />
    <line x1="78" y1="61" x2="78" y2="82" stroke="currentColor" strokeWidth="2.5" />
    {/* Hi-hat cymbals (far left) */}
    <ellipse cx="14" cy="28" rx="11" ry="3" stroke="currentColor" strokeWidth="2.8" fill="currentColor" />
    <line x1="14" y1="28" x2="14" y2="84" stroke="currentColor" strokeWidth="2.5" />
    {/* Crash / Ride cymbal (right) */}
    <ellipse cx="80" cy="24" rx="12" ry="3.5" stroke="currentColor" strokeWidth="2.8" fill="currentColor" />
    <line x1="80" y1="24" x2="80" y2="84" stroke="currentColor" strokeWidth="2.5" />
    {/* Stands tripod bases */}
    <path d="M 8 84 L 14 80 L 20 84 M 74 84 L 80 80 L 86 84" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 29. Pop Filter (Image 1, item 4)
export const IconPopFilter: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 6 92 88" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Circular double-mesh pop filter head */}
    <circle cx="44" cy="38" r="26" stroke="currentColor" strokeWidth="5.5" fill="currentColor" fillOpacity="0.08" />
    {/* Inner fine nylon/metal woven pattern */}
    <circle cx="44" cy="38" r="20" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3" />
    <circle cx="44" cy="38" r="12" stroke="currentColor" strokeWidth="1.8" strokeDasharray="2 2" />
    {/* Flexible gooseneck arm */}
    <path d="M 44 64 C 44 76, 54 84, 66 84 C 76 84, 82 78, 82 68 L 82 52" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    {/* C-clamp stand bracket */}
    <rect x="76" y="44" width="12" height="14" rx="2" fill="currentColor" />
    <line x1="88" y1="51" x2="94" y2="51" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// 30. Shockmount (Image 1, item 5)
export const IconShockmount: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="10 6 80 88" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Microphone inner capsule body */}
    <rect x="42" y="8" width="16" height="54" rx="8" stroke="currentColor" strokeWidth="3.5" fill="currentColor" fillOpacity="0.2" />
    <line x1="42" y1="28" x2="58" y2="28" stroke="currentColor" strokeWidth="3" />
    {/* Outer suspension cages (top & bottom rings) */}
    <line x1="16" y1="40" x2="84" y2="40" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="16" y1="56" x2="84" y2="56" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    {/* Crisscrossing spider elastic bands */}
    <line x1="24" y1="40" x2="42" y2="56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="24" y1="56" x2="42" y2="40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="76" y1="40" x2="58" y2="56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="76" y1="56" x2="58" y2="40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* Stand adapter connector */}
    <rect x="44" y="66" width="12" height="14" rx="2" fill="currentColor" />
    <line x1="50" y1="80" x2="50" y2="92" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
  </svg>
);

// 31. XLR Cable (Female & Male XLR connectors)
export const IconXLRCable: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Top Connector: Female XLR */}
    <g transform="translate(0, -6)">
      {/* Cable / Cord Stub */}
      <rect x="94" y="47" width="14" height="8" fill="currentColor" />

      {/* Tapered Black Rubber Boot / Strain Relief */}
      <path 
        d="M 60 40 
           Q 82 40 94 44 
           L 94 58 
           Q 82 62 60 62 
           Z" 
        fill="currentColor" 
      />

      {/* Metal Barrel Body */}
      <rect 
        x="28" 
        y="40" 
        width="32" 
        height="22" 
        fill="currentColor" 
        fillOpacity="0.2"
        stroke="currentColor" 
        strokeWidth="3" 
      />

      {/* Latch Release Tab (Top) */}
      <path 
        d="M 31 40 L 31 36 L 38 35 L 38 40 Z" 
        fill="currentColor" 
        fillOpacity="0.3"
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinejoin="miter" 
      />

      {/* Front Mating Collar / Shell Ring */}
      <rect 
        x="14" 
        y="43" 
        width="14" 
        height="16" 
        fill="currentColor" 
        fillOpacity="0.4"
        stroke="currentColor" 
        strokeWidth="3" 
      />
    </g>

    {/* Bottom Connector: Male XLR */}
    <g transform="translate(0, 18)">
      {/* Cable / Cord Stub */}
      <rect x="94" y="67" width="14" height="8" fill="currentColor" />

      {/* Tapered Black Rubber Boot / Strain Relief */}
      <path 
        d="M 60 60 
           Q 82 60 94 64 
           L 94 78 
           Q 82 82 60 82 
           Z" 
        fill="currentColor" 
      />

      {/* Metal Barrel Body (Flush Front) */}
      <rect 
        x="14" 
        y="60" 
        width="46" 
        height="22" 
        fill="currentColor" 
        fillOpacity="0.2"
        stroke="currentColor" 
        strokeWidth="3" 
      />

      {/* Alignment / Latch Window Notch */}
      <rect 
        x="18" 
        y="66" 
        width="3" 
        height="10" 
        fill="currentColor" 
      />
    </g>
  </svg>
);

// 32. +48V Phantom Power (Image 1, item 7 - Lightning bolt removed)
export const IconPhantomPower: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 14 92 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Outer chassis switch housing */}
    <rect x="6" y="16" width="88" height="68" rx="14" stroke="currentColor" strokeWidth="4.5" fill="currentColor" fillOpacity="0.12" />
    {/* Inner illuminated push button face */}
    <rect x="13" y="23" width="74" height="54" rx="10" fill="currentColor" />
    {/* Big, bold centered +48V text - highly visible & legible */}
    <text x="50" y="59" textAnchor="middle" fontSize="27" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" fill="#0f172a" letterSpacing="0.5">
      +48V
    </text>
  </svg>
);

// 33. Electric Guitar
export const IconElectricGuitar: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <g transform="translate(4, 4) scale(4)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <polyline points="12.5,21.4 11,19.9 22.4,8.5 " />
      <polygon points="25.4,10 22.4,10 22.4,7 26.2,3.2 29.2,6.2 " />
      <path d="M19.3,11.6c-2.2-1.5-5.1-1.3-6.9,0.5c-0.4,0.4-0.8,1-1,1.5c-0.4,0.9-1.3,1.5-2.2,1.6c-0.9,0.1-1.9,0.2-2.7,0.6 c-4,2.1-4.1,7.5-0.7,10.9c3.4,3.4,8.8,3.3,10.9-0.7c0.4-0.8,0.5-1.8,0.6-2.7c0.1-0.9,0.7-1.8,1.6-2.2c0.2-0.1,0.7-0.3,1.1-0.4 c0.8-0.2,1.4-0.9,1.7-1.6v0c0.2-0.6,0-1.3-0.6-1.6l-1.6-0.9" />
      <line x1="8" y1="21.4" x2="11" y2="24.4" />
    </g>
  </svg>
);

// Acoustic Dreadnought Guitar
export const IconAcousticGuitar: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <g transform="translate(4, 4) scale(0.235)" fill="currentColor" stroke="currentColor">
      <path d="M273.48,238.486c-24.205-24.206-63.382-24.208-87.589,0c-24.205,24.204-24.208,63.381,0,87.589 c24.205,24.205,63.381,24.208,87.589,0C297.629,301.927,297.629,262.635,273.48,238.486z M249.878,302.474 c-11.159,11.16-29.225,11.162-40.387,0c-11.161-11.162-11.162-29.225,0-40.388c11.163-11.162,29.226-11.161,40.387,0 C261.014,273.221,261.014,291.339,249.878,302.474z"/>
      <path d="M494.987,16.979C484.038,6.03,469.48,0,453.997,0c-15.483,0-30.04,6.03-40.99,16.979l-22.761,22.762 c-7.539,7.539-10.132,18.177-7.782,27.85l-96.621,96.621c-40.014-21.625-88.903-22.563-119.686,8.22 c-8.608,8.608-15.015,18.979-19.045,30.825c-3.809,11.198-13.903,18.868-25.713,19.538c-32.346,1.836-62.27,14.955-84.256,36.942 c-53.375,53.376-48.555,145.044,10.744,204.343c30.453,30.453,71.28,47.919,112.013,47.92c0.002,0,0.002,0,0.004,0 c35.563,0,68.353-13.203,92.326-37.176c21.986-21.986,35.107-51.91,36.942-84.257c0.67-11.811,8.339-21.904,19.538-25.712 c11.845-4.03,22.217-10.436,30.826-19.045c31.248-31.25,29.519-80.126,8.191-119.657l96.638-96.638 c9.651,2.346,20.259-0.19,27.862-7.795l22.762-22.762C517.589,76.356,517.589,39.58,494.987,16.979z M315.934,322.208 c-4.962,4.962-11.009,8.678-17.972,11.047c-24.138,8.21-40.668,29.965-42.114,55.421c-1.391,24.502-10.802,46.13-27.219,62.547 c-40.737,40.736-111.262,35.136-157.143-10.744c-46.286-46.286-51.105-116.779-10.744-157.142 c16.417-16.417,38.045-25.829,62.547-27.219c25.456-1.445,47.21-17.974,55.421-42.114c2.369-6.964,6.086-13.01,11.047-17.972 c24.621-24.62,73.53-16.043,107.875,18.302C332.22,248.925,340.408,297.734,315.934,322.208z M328.345,198.331 c-4.683-5.345-9.737-10.35-14.709-14.712l89.398-89.398l14.71,14.71L328.345,198.331z M471.386,75.357L451.38,95.362 l-34.777-34.777l20.005-20.006c4.645-4.645,10.821-7.203,17.389-7.203c6.569,0,12.744,2.558,17.389,7.203 C480.974,50.167,480.974,65.769,471.386,75.357z"/>
      <path d="M166.799,412.023l-66.857-66.857c-6.516-6.517-17.083-6.517-23.601,0c-6.517,6.517-6.517,17.083,0,23.601l66.857,66.857 c6.516,6.517,17.083,6.518,23.601,0C173.317,429.107,173.317,418.541,166.799,412.023z"/>
    </g>
  </svg>
);

// Acoustic Piano
export const IconAcousticPiano: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <g transform="translate(8, 8) scale(0.225)" fill="currentColor">
      <path d="M501.337,341.298v-39.773c0-38.905-29.781-71.247-69.164-76.206c-55.175-6.933-81.684-28.391-81.684-82.599v-4.053
			C350.489,62.182,286.076,0,207.619,0h-54.08C75.082,0,10.67,62.182,10.67,138.667v202.667c0,0.014,0.002,0.028,0.002,0.042v149.3
			c0,11.782,9.551,21.333,21.333,21.333h448c11.782,0,21.333-9.551,21.333-21.333V341.342
			C501.339,341.327,501.337,341.313,501.337,341.298z M245.343,320H138.676v-85.325h106.667V320z M53.337,138.667
			c0-52.577,44.98-96,100.203-96h54.08c55.223,0,100.203,43.423,100.203,96v4.053c0,79.332,44.813,115.606,119.025,124.932
			c18.422,2.32,31.823,16.873,31.823,33.873V320H288.01V213.342c0-11.782-9.551-21.333-21.333-21.333H117.343
			c-11.782,0-21.333,9.551-21.333,21.333V320H53.337V138.667z M458.672,469.342H53.339V362.675h21.336v64
			c0,11.782,9.551,21.333,21.333,21.333s21.333-9.551,21.333-21.333v-64h0.002h21.331v64c0,11.782,9.551,21.333,21.333,21.333
			c11.782,0,21.333-9.551,21.333-21.333v-64h21.333v64c0,11.782,9.551,21.333,21.333,21.333
			c11.782,0,21.333-9.551,21.333-21.333v-64h21.333v64c0,11.782,9.551,21.333,21.333,21.333s21.333-9.551,21.333-21.333v-64h21.333v64
			c0,11.782,9.551,21.333,21.333,21.333s21.333-9.551,21.333-21.333v-64h21.333v64
			c0,11.782,9.551,21.333,21.333,21.333s21.333-9.551,21.333-21.333v-64h21.333v64
			c0,11.782,9.551,21.333,21.333,21.333s21.333-9.551,21.333-21.333v-64h21.331V469.342z"/>
    </g>
  </svg>
);

export const IconPiano: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Studio Synthesizer Chassis */}
    <rect
      x="10"
      y="18"
      width="108"
      height="92"
      rx="10"
      stroke="currentColor"
      strokeWidth="5"
      fill="currentColor"
      fillOpacity="0.15"
    />

    {/* Top Control Panel Header Strip */}
    <rect x="14" y="22" width="100" height="34" rx="4" fill="currentColor" fillOpacity="0.25" />

    {/* Pitch-Bend & Modulation Wheels on Left */}
    <rect x="20" y="26" width="6" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="#0f172a" />
    <line x1="20" y1="38" x2="26" y2="38" stroke="currentColor" strokeWidth="2" />
    <rect x="30" y="26" width="6" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="#0f172a" />
    <line x1="30" y1="38" x2="36" y2="38" stroke="currentColor" strokeWidth="2" />

    {/* Central OLED / LCD Parameter Display */}
    <rect x="42" y="26" width="28" height="24" rx="3" fill="#0f172a" stroke="currentColor" strokeWidth="1.8" />
    <line x1="46" y1="33" x2="66" y2="33" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="46" y1="39" x2="62" y2="39" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="46" y1="44" x2="56" y2="44" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />

    {/* Right Control Knobs & Buttons */}
    <circle cx="78" cy="32" r="3.5" fill="currentColor" />
    <circle cx="88" cy="32" r="3.5" fill="currentColor" />
    <circle cx="98" cy="32" r="3.5" fill="currentColor" />
    <circle cx="108" cy="32" r="3.5" fill="currentColor" />
    <circle cx="78" cy="44" r="3.5" fill="currentColor" />
    <circle cx="88" cy="44" r="3.5" fill="currentColor" />
    <circle cx="98" cy="44" r="3.5" fill="currentColor" />
    <circle cx="108" cy="44" r="3.5" fill="currentColor" />

    {/* Keybed Deck */}
    <rect x="14" y="60" width="100" height="46" rx="3" fill="#f8fafc" stroke="currentColor" strokeWidth="3" />

    {/* White Natural Keys Dividers */}
    <line x1="28" y1="60" x2="28" y2="106" stroke="#0f172a" strokeWidth="2" />
    <line x1="42" y1="60" x2="42" y2="106" stroke="#0f172a" strokeWidth="2" />
    <line x1="57" y1="60" x2="57" y2="106" stroke="#0f172a" strokeWidth="2" />
    <line x1="71" y1="60" x2="71" y2="106" stroke="#0f172a" strokeWidth="2" />
    <line x1="85" y1="60" x2="85" y2="106" stroke="#0f172a" strokeWidth="2" />
    <line x1="100" y1="60" x2="100" y2="106" stroke="#0f172a" strokeWidth="2" />

    {/* Black Accidental Keys (2-cluster & 3-cluster) */}
    {/* Pair 1 (C#, D#) */}
    <rect x="23" y="60" width="9" height="28" rx="2" fill="#0f172a" stroke="currentColor" strokeWidth="1" />
    <rect x="37" y="60" width="9" height="28" rx="2" fill="#0f172a" stroke="currentColor" strokeWidth="1" />
    {/* Triplet (F#, G#, A#) */}
    <rect x="66" y="60" width="9" height="28" rx="2" fill="#0f172a" stroke="currentColor" strokeWidth="1" />
    <rect x="80" y="60" width="9" height="28" rx="2" fill="#0f172a" stroke="currentColor" strokeWidth="1" />
    <rect x="95" y="60" width="9" height="28" rx="2" fill="#0f172a" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// 34. Bass Guitar
export const IconBassGuitar: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <g transform="translate(4, 4) scale(0.24)" fill="currentColor" stroke="currentColor">
      <path d="M461.421,14.456c-5.996-5.997-13.965-9.299-22.438-9.299c-5.248,0-10.433,1.318-14.995,3.812 c-0.243,0.133-0.479,0.28-0.707,0.44l-58.725,41.165c-1.372,0.961-2.383,2.355-2.87,3.957l-4.405,14.472L203.327,216.442 l-4.358-4.358c-2.832-2.832-4.368-6.655-4.326-10.766c0.043-4.169,1.697-8.095,4.658-11.056l25.101-25.101 c10.297-10.297,10.297-27.052,0-37.349c-4.988-4.988-11.621-7.735-18.675-7.735c-7.054,0-13.687,2.747-18.675,7.735 l-42.746,42.746c-8.264,8.264-17.922,22.223-21.988,31.78c-6.867,16.14-14.527,30.78-17.378,36.101 c-7.847,3.654-35.285,16.404-66.724,30.698c-19.551,8.889-32.628,24.141-36.824,42.946c-4.483,20.09,1.978,42.23,17.727,60.741 l57.55,67.645c13.855,16.287,30.633,25.009,47.804,25.008c1.999,0,4.006-0.118,6.012-0.357 c19.234-2.286,35.762-15.278,46.525-36.557l39.514-77.449c6.08-2.148,20.411-7.241,28.786-10.446 c10.461-4.003,24.313-14.37,32.035-22.092c4.987-4.988,7.735-11.62,7.735-18.675s-2.748-13.687-7.735-18.674 c-10.297-10.297-27.052-10.297-37.349,0c-4.45,4.448-11.688,4.449-16.137,0l-5.867-5.867L387.078,98.8l14.473-4.405 c1.178-0.358,2.249-1.001,3.12-1.872l25.583-25.584c2.885,0.846,5.894,1.284,8.904,1.284c8.412,0,16.318-3.275,22.265-9.221 C473.704,46.721,473.704,26.738,461.421,14.456z M250.601,291.834c2.154-2.155,5.02-3.342,8.067-3.342 c3.047,0,5.913,1.187,8.068,3.342c2.154,2.155,3.342,5.02,3.342,8.068c0,3.048-1.188,5.913-3.342,8.068 c-6.602,6.601-18.941,15.686-26.79,18.689c-10.411,3.984-31.023,11.229-31.23,11.302c-1.817,0.638-3.319,1.952-4.194,3.667 l-40.887,80.141c-8.436,16.676-20.838,26.781-34.923,28.456c-14.083,1.671-28.512-5.242-40.62-19.476l-57.55-67.645 c-12.671-14.894-17.961-32.3-14.512-47.755c3.146-14.101,13.23-25.664,28.394-32.558c37.185-16.907,68.788-31.659,69.103-31.806 c1.437-0.671,2.624-1.779,3.391-3.167c0.416-0.753,10.294-18.673,19.202-39.608c3.313-7.787,11.919-20.173,18.793-27.046 l42.746-42.746c4.447-4.448,11.688-4.448,16.135,0c4.449,4.449,4.449,11.687,0,16.136l-25.101,25.101 c-5.753,5.753-8.967,13.392-9.05,21.509c-0.084,8.175,3.013,15.82,8.719,21.526l4.129,4.129l-43.582,41.737 c-1.457,1.395-2.29,3.319-2.313,5.336c-0.021,2.017,0.771,3.958,2.196,5.384l28.012,28.012c1.408,1.407,3.315,2.197,5.304,2.197 c0.027,0,0.054,0,0.081,0c2.017-0.022,3.94-0.855,5.336-2.312l20.088-20.976l5.638,5.637 C223.549,302.131,240.303,302.13,250.601,291.834z M181.992,291.263l-17.173-17.174L363.771,83.556l8.754,8.753L181.992,291.263z M450.815,48.396c-3.113,3.113-7.252,4.828-11.655,4.828c-2.565,0-5.124-0.603-7.399-1.743c-2.888-1.447-6.378-0.882-8.663,1.402 l-27.709,27.709l-10.25,3.12l-12.77-12.769l2.913-9.57l56.232-39.418c2.281-1.177,4.854-1.797,7.468-1.797 c4.467,0,8.669,1.742,11.832,4.906C457.248,31.496,457.248,41.963,450.815,48.396z"/>
      <path d="M124.695,326.263c-2.93-2.929-7.678-2.929-10.607,0c-2.929,2.929-2.929,7.677,0,10.606l26.337,26.337 c1.465,1.465,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197c2.929-2.929,2.929-7.677,0-10.606L124.695,326.263z"/>
      <path d="M126.556,281.975c-2.93-2.929-7.678-2.929-10.607,0c-2.929,2.929-2.929,7.677,0,10.606l26.337,26.337 c1.465,1.465,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197c2.929-2.929,2.929-7.677,0-10.606L126.556,281.975z"/>
      <path d="M82.968,330.687c-2.93-2.929-7.678-2.929-10.607,0L51.148,351.9c-1.406,1.406-2.196,3.314-2.196,5.303 s0.79,3.897,2.196,5.303l42.427,42.426c1.465,1.465,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l21.213-21.213 c1.406-1.406,2.196-3.314,2.196-5.303s-0.79-3.897-2.196-5.303L82.968,330.687z M98.878,389.023l-31.82-31.82l10.606-10.606 l31.82,31.82L98.878,389.023z"/>
    </g>
  </svg>
);

// 35. 808 Sub Bass (User's Exact Specification from Attached image.png: Rounded container, attack transient spikes into decaying sine wave, and bold 808 typography)
export const Icon808Bass: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Waveform: Attack transient spikes decaying into sinusoidal sub-bass */}
    <path
      d="M 8 64 L 20 64 L 22 55 L 24 73 L 26 48 L 28 80 L 31 34 L 34 94 L 38 14 L 41 114 L 44 22 L 47 104 L 50 30 L 53 96 L 56 36 L 59 88 Q 62 44 65 64 Q 68 82 71 64 Q 74 48 77 64 Q 80 78 83 64 Q 86 52 89 64 Q 92 74 95 64 Q 98 56 101 64 Q 104 70 107 64 Q 110 59 113 64 L 120 64"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Bold 808 Typography in lower-right matching image.png */}
    <g fill="currentColor">
      {/* First 8 */}
      <path d="M 64 87 C 59.5 87 56.5 89.5 56.5 93.5 C 56.5 96.5 58.5 98.5 61.5 99.5 C 57.5 100.5 55.5 103.5 55.5 107.5 C 55.5 111.5 59.5 114 64.5 114 C 69.5 114 73.5 111.5 73.5 107.5 C 73.5 103.5 71.5 100.5 67.5 99.5 C 70.5 98.5 72.5 96.5 72.5 93.5 C 72.5 89.5 69.5 87 64 87 Z M 64 91.5 C 66 91.5 67.5 92.5 67.5 94 C 67.5 95.5 66 96.5 64 96.5 C 62 96.5 60.5 95.5 60.5 94 C 60.5 92.5 62 91.5 64 91.5 Z M 64.5 101.5 C 67 101.5 68.5 103 68.5 105.5 C 68.5 108 67 109.5 64.5 109.5 C 62 109.5 60.5 108 60.5 105.5 C 60.5 103 62 101.5 64.5 101.5 Z" />
      {/* Middle 0 */}
      <path d="M 83 87 C 77 87 74.5 92 74.5 100.5 C 74.5 109 77 114 83 114 C 89 114 91.5 109 91.5 100.5 C 91.5 92 89 87 83 87 Z M 83 92 C 85.5 92 86.5 95 86.5 100.5 C 86.5 106 85.5 109 83 109 C 80.5 109 79.5 106 79.5 100.5 C 79.5 95 80.5 92 83 92 Z" />
      {/* Second 8 */}
      <path d="M 102 87 C 97.5 87 94.5 89.5 94.5 93.5 C 94.5 96.5 96.5 98.5 99.5 99.5 C 95.5 100.5 93.5 103.5 93.5 107.5 C 93.5 111.5 97.5 114 102.5 114 C 107.5 114 111.5 111.5 111.5 107.5 C 111.5 103.5 109.5 100.5 105.5 99.5 C 108.5 98.5 110.5 96.5 110.5 93.5 C 110.5 89.5 107.5 87 102 87 Z M 102 91.5 C 104 91.5 105.5 92.5 105.5 94 C 105.5 95.5 104 96.5 102 96.5 C 100 96.5 98.5 95.5 98.5 94 C 98.5 92.5 100 91.5 102 91.5 Z M 102.5 101.5 C 105 101.5 106.5 103 106.5 105.5 C 106.5 108 105 109.5 102.5 109.5 C 100 109.5 98.5 108 98.5 105.5 C 98.5 103 100 101.5 102.5 101.5 Z" />
    </g>
  </svg>
);

// 35. Dynamic Instrument Mic (Authentic SM57-style)
export const IconDynamicMic: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="10 8 80 84" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Angled SM57 dynamic mic barrel */}
    <g transform="rotate(-40 50 50)">
      {/* Signature flat stainless steel wire mesh top disc screen (SM57 characteristic) */}
      <rect x="43" y="10" width="14" height="3" rx="1" fill="#e2e8f0" stroke="currentColor" strokeWidth="1" />
      <line x1="45" y1="10.5" x2="45" y2="12.5" stroke="#0f172a" strokeWidth="1" />
      <line x1="50" y1="10.5" x2="50" y2="12.5" stroke="#0f172a" strokeWidth="1" />
      <line x1="55" y1="10.5" x2="55" y2="12.5" stroke="#0f172a" strokeWidth="1" />
      {/* Front rotating cylindrical ribbed black plastic grille barrel */}
      <rect x="42" y="13" width="16" height="13" rx="1" fill="currentColor" />
      <line x1="45" y1="13" x2="45" y2="26" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="48" y1="13" x2="48" y2="26" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="51" y1="13" x2="51" y2="26" stroke="#0f172a" strokeWidth="1.2" />
      <line x1="54" y1="13" x2="54" y2="26" stroke="#0f172a" strokeWidth="1.2" />
      {/* Side mesh acoustic vents */}
      <rect x="42.5" y="26" width="15" height="3" fill="#64748b" />
      {/* Silver / chrome Shure branding collar ring */}
      <rect x="42" y="29" width="16" height="3.5" rx="0.5" fill="#e2e8f0" />
      {/* Gently tapered dark matte SM57 handle body */}
      <path d="M 42 32.5 L 44.5 80 L 55.5 80 L 58 32.5 Z" fill="currentColor" />
      {/* Base XLR output connector */}
      <rect x="45" y="80" width="10" height="7" rx="1.5" fill="currentColor" />
      <circle cx="48" cy="83.5" r="0.8" fill="#0f172a" />
      <circle cx="52" cy="83.5" r="0.8" fill="#0f172a" />
      <circle cx="50" cy="85" r="0.8" fill="#0f172a" />
    </g>
  </svg>
);

// 36. SDC Pencil Mic (SM81-style) (Image 1, item 11)
export const IconPencilMic: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="10 8 80 84" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Slender angled pencil condenser */}
    <g transform="rotate(-45 50 50)">
      {/* Top capsule mesh grille */}
      <rect x="44" y="6" width="12" height="16" rx="2" fill="currentColor" />
      <line x1="44" y1="12" x2="56" y2="12" stroke="#fff" strokeWidth="1.5" />
      <line x1="44" y1="16" x2="56" y2="16" stroke="#fff" strokeWidth="1.5" />
      {/* Long slender pencil body shaft */}
      <rect x="44" y="22" width="12" height="64" rx="1" fill="currentColor" />
      {/* Filter / attenuation pad switch windows */}
      <rect x="47" y="32" width="6" height="3" rx="0.5" fill="#fff" />
      <rect x="47" y="40" width="6" height="3" rx="0.5" fill="#fff" />
      {/* Base XLR ring */}
      <rect x="45" y="86" width="10" height="5" rx="1" fill="currentColor" />
    </g>
  </svg>
);

// 37. Kick Drum Mic (AKG D112 / Beta 52 style) (Image 1, item 12)
export const IconKickDrumMic: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="20 16 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <g fill="currentColor" stroke="currentColor">
      {/* Large hemispherical wire mesh dome */}
      <path d="M 28 36 C 28 18, 72 18, 72 36 L 72 44 L 28 44 Z" stroke="currentColor" strokeWidth="4.5" fill="currentColor" fillOpacity="0.25" />
      {/* Grid mesh texture */}
      <line x1="34" y1="24" x2="66" y2="24" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
      <line x1="30" y1="34" x2="70" y2="34" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
      <line x1="50" y1="18" x2="50" y2="44" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
      {/* Heavy center retaining collar */}
      <rect x="26" y="44" width="48" height="6" rx="2" fill="currentColor" />
      {/* Egg-shaped capsule base body */}
      <path d="M 30 50 C 30 72, 70 72, 70 50 Z" fill="currentColor" />
      {/* Integrated swivel stand bracket */}
      <rect x="44" y="68" width="12" height="14" rx="2" fill="currentColor" />
      <circle cx="50" cy="75" r="3" fill="#0f172a" />
      <line x1="50" y1="82" x2="50" y2="92" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </g>
  </svg>
);

// 38. Handheld Vocal Mic (SM58-style) (Image 1, item 13)
export const IconVocalMic: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="20 10 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <g fill="currentColor" stroke="currentColor">
      {/* Angled handheld mic */}
      <g transform="rotate(-40 50 50)">
        {/* Spherical ball wire mesh head */}
        <circle cx="50" cy="18" r="14" stroke="currentColor" strokeWidth="4" fill="currentColor" fillOpacity="0.25" />
        {/* Collar ring */}
        <rect x="42" y="30" width="16" height="5" rx="1" fill="currentColor" />
        {/* Handle body */}
        <path d="M 43 35 L 45 80 C 45 84, 55 84, 55 80 L 57 35 Z" fill="currentColor" />
        {/* On/off switch slider */}
        <rect x="48" y="46" width="4" height="8" rx="1" fill="#0f172a" />
        <circle cx="50" cy="52" r="1" fill="currentColor" />
      </g>
    </g>
  </svg>
);

// 39. Large Diaphragm Condenser (Shockmount less prominent, mic body prominent)
export const IconU87Mic: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="14 4 68 92" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Subtle, low-profile shockmount cradle at lower third of body */}
    <rect x="22" y="58" width="52" height="18" rx="5" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" fill="none" />
    <line x1="28" y1="58" x2="38" y2="76" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
    <line x1="28" y1="76" x2="38" y2="58" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
    <line x1="68" y1="58" x2="58" y2="76" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
    <line x1="68" y1="76" x2="58" y2="58" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
    {/* Swivel stand mount adapter */}
    <rect x="44" y="78" width="8" height="12" rx="1.5" fill="currentColor" fillOpacity="0.5" />

    {/* The Hero: Large Diaphragm Condenser Microphone */}
    {/* Signature dual-sloped headbasket wire mesh grille */}
    <path
      d="M 36 40 L 36 18 C 36 9, 60 9, 60 18 L 60 40 Z"
      stroke="currentColor"
      strokeWidth="3.5"
      fill="currentColor"
      fillOpacity="0.18"
    />
    {/* Capsule dual-diaphragm center line & cross-mesh */}
    <line x1="36" y1="28" x2="60" y2="28" stroke="currentColor" strokeWidth="2" />
    <circle cx="48" cy="28" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" fill="currentColor" fillOpacity="0.1" />
    {/* Signature tapered nickel condenser body */}
    <path d="M 35 40 L 39 82 C 39 85, 57 85, 57 82 L 61 40 Z" fill="currentColor" />
    {/* Diamond brand badge */}
    <polygon points="48,46 51,50 48,54 45,50" fill="#fff" />
    {/* Polar pattern selector switch */}
    <rect x="46" y="58" width="4" height="6" rx="1" fill="#fff" />
  </svg>
);

// 40. 1/4" Instrument Cable (Image 1, item 15)
export const IconInstrumentCable: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="8 8 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <g transform="rotate(-45 50 50)">
      {/* Jack tip (pointy cone) */}
      <path d="M 50 6 L 54 14 L 46 14 Z" fill="currentColor" />
      {/* Black insulator ring */}
      <rect x="47" y="14" width="6" height="2" fill="#000" />
      {/* Shaft / Sleeve metal pin */}
      <rect x="47" y="16" width="6" height="18" fill="currentColor" />
      {/* Metal knurled plug housing barrel */}
      <rect x="43" y="34" width="14" height="28" rx="2" fill="currentColor" />
      <line x1="43" y1="42" x2="57" y2="42" stroke="#fff" strokeWidth="1.5" />
      <line x1="43" y1="46" x2="57" y2="46" stroke="#fff" strokeWidth="1.5" />
      <line x1="43" y1="50" x2="57" y2="50" stroke="#fff" strokeWidth="1.5" />
      {/* Flexible strain relief rubber boot */}
      <path d="M 45 62 L 47 74 L 53 74 L 55 62 Z" fill="currentColor" />
      {/* Heavy instrument cable */}
      <path d="M 50 74 L 50 94" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </g>
  </svg>
);

// 41. Ribbon Mic (Image 1, item 16)
export const IconRibbonMic: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="16 6 68 88" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Classic pill-arch ribbon microphone head */}
    <path d="M 32 40 L 32 20 C 32 10, 68 10, 68 20 L 68 62 C 68 72, 32 72, 32 62 Z" stroke="currentColor" strokeWidth="4.5" fill="currentColor" fillOpacity="0.1" />
    {/* Horizontal louvers / acoustic slats */}
    <line x1="36" y1="20" x2="64" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="36" y1="27" x2="64" y2="27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="36" y1="34" x2="64" y2="34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="36" y1="41" x2="64" y2="41" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="36" y1="48" x2="64" y2="48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="36" y1="55" x2="64" y2="55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="36" y1="62" x2="64" y2="62" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* Base yoke mount */}
    <rect x="44" y="74" width="12" height="14" rx="2" fill="currentColor" />
    <circle cx="50" cy="80" r="2.5" fill="#fff" />
  </svg>
);

// 42. DI Box
export const IconDIBox: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Main DI Box Chassis (Heavy-Duty Extruded Metal Body) */}
    <rect 
      x="24" 
      y="34" 
      width="80" 
      height="60" 
      rx="5" 
      fill="currentColor" 
      fillOpacity="0.85"
    />

    {/* Protective Side End-Cheeks / Base Plate Flanges */}
    <path 
      d="M 20 30 L 26 30 L 26 98 L 20 98 Z 
         M 102 30 L 108 30 L 108 98 L 102 98 Z" 
      fill="currentColor" 
    />

    {/* Balanced XLR Output Socket (Recessed Female Shell on Left) */}
    <circle cx="44" cy="64" r="13" fill="#0f172a" stroke="currentColor" strokeWidth="2" />
    <circle cx="44" cy="64" r="10.5" fill="currentColor" />
    {/* 3-Pin Balanced XLR Configuration */}
    <circle cx="40.5" cy="61" r="1.8" fill="#0f172a" />
    <circle cx="47.5" cy="61" r="1.8" fill="#0f172a" />
    <circle cx="44" cy="68.5" r="1.8" fill="#0f172a" />

    {/* Ground Lift / Attenuation Toggle Switches */}
    <g transform="translate(64, 52)">
      <rect x="-3" y="0" width="6" height="12" rx="2" fill="#0f172a" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="0" cy="3.5" r="2" fill="currentColor" />
    </g>
    <g transform="translate(64, 68)">
      <rect x="-3" y="0" width="6" height="12" rx="2" fill="#0f172a" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="0" cy="8.5" r="2" fill="currentColor" />
    </g>

    {/* 1/4" Unbalanced Input / Thru Jacks (Right Panel) */}
    {/* Input Jack */}
    <circle cx="84" cy="52" r="7.5" fill="#0f172a" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="84" cy="52" r="5" fill="currentColor" />
    <circle cx="84" cy="52" r="2" fill="#0f172a" />

    {/* Thru / Parallel Out Jack */}
    <circle cx="84" cy="76" r="7.5" fill="#0f172a" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="84" cy="76" r="5" fill="currentColor" />
    <circle cx="84" cy="76" r="2" fill="#0f172a" />
  </svg>
);

// 43. Mic Clip
export const IconMicClip: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Lower Base Stand Mount (Threaded Base Taper) */}
    <path 
      d="M 44 65
         C 44 62, 49 61, 55 69
         L 55 83
         C 49 89, 44 98, 42 113
         L 86 113
         C 84 98, 79 89, 73 83
         L 73 69
         C 79 61, 84 62, 84 65
         C 84 75, 78 86, 78 108
         L 50 108
         C 50 86, 44 75, 44 65
         Z" 
      fill="currentColor" 
    />

    {/* Swivel Fork Hinge Center Recess */}
    <path 
      d="M 57 65 
         L 71 65 
         L 71 96 
         A 7 7 0 0 1 57 96 
         Z" 
      fill="#0f172a" 
    />

    {/* Center Swivel Tongue / Connecting Arm */}
    <rect 
      x="61" 
      y="52" 
      width="6" 
      height="42" 
      rx="3" 
      fill="currentColor" 
    />

    {/* Swivel Pivot Hardware (Rivet / Screw Base) */}
    <circle cx="64" cy="94" r="2.5" fill="#0f172a" />

    {/* Circular Clip Collar / Outer Ring with Top Gap */}
    <path 
      d="M 59 13
         A 26 26 0 1 0 69 13
         L 71 21
         A 18 18 0 1 1 57 21
         Z" 
      fill="currentColor" 
    />

    {/* Inner Perspective Taper Bands (Interior Depth Flanges) */}
    {/* Left Inner Wall Cutout */}
    <path 
      d="M 57 21
         A 18 18 0 0 0 46 39
         C 50 32, 54 25, 57 21
         Z" 
      fill="#0f172a" 
    />
    <path 
      d="M 47 25
         C 44 32, 44 42, 49 48
         C 45 42, 45 33, 47 25
         Z" 
      fill="currentColor" 
    />

    {/* Right Inner Wall Cutout */}
    <path 
      d="M 71 21
         A 18 18 0 0 1 82 39
         C 78 32, 74 25, 71 21
         Z" 
      fill="#0f172a" 
    />
    <path 
      d="M 81 25
         C 84 32, 84 42, 79 48
         C 83 42, 83 33, 81 25
         Z" 
      fill="currentColor" 
    />
  </svg>
);

// 44. Mic Stand (Image 1, item 19)
export const IconMicStand: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 6 92 88" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Tripod base legs */}
    <path d="M 12 90 L 50 78 L 88 90" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Vertical center telescoping shaft */}
    <line x1="50" y1="78" x2="50" y2="34" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    {/* Center boom clutch pivot joint */}
    <circle cx="50" cy="34" r="5" fill="currentColor" />
    {/* Angled boom arm */}
    <line x1="20" y1="12" x2="80" y2="56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    {/* Counterweight (bottom right of boom) */}
    <rect x="76" y="52" width="7" height="7" rx="1.5" fill="currentColor" />
    {/* Mic mount adapter at top left */}
    <circle cx="20" cy="12" r="3" fill="currentColor" />
  </svg>
);

// 45. Gaff Tape (Image 1, item 20)
export const IconGaffTape: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="6 14 88 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Roll of studio gaffer tape */}
    <circle cx="36" cy="46" r="28" stroke="currentColor" strokeWidth="6" fill="currentColor" fillOpacity="0.1" />
    {/* Concentric roll tape layers */}
    <circle cx="36" cy="46" r="20" stroke="currentColor" strokeWidth="3" />
    <circle cx="36" cy="46" r="12" fill="currentColor" fillOpacity="0.25" />
    {/* Inner cardboard core hole */}
    <circle cx="36" cy="46" r="7" fill="currentColor" />
    {/* Unpeeled tape strip pulling across */}
    <path d="M 36 74 L 88 74 L 84 82 L 88 90" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 46. Reflection Filter (Image 1, item 21)
export const IconReflectionFilter: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="8 8 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Curved acoustic vocal reflection shield */}
    <path d="M 12 68 C 12 36, 88 36, 88 68 L 88 22 C 88 6, 12 6, 12 22 Z" stroke="currentColor" strokeWidth="4.5" fill="currentColor" fillOpacity="0.15" strokeLinejoin="round" />
    {/* Acoustic ribbing panels */}
    <line x1="36" y1="14" x2="36" y2="60" stroke="currentColor" strokeWidth="3.5" />
    <line x1="64" y1="14" x2="64" y2="60" stroke="currentColor" strokeWidth="3.5" />
    {/* Center mounting clamp post */}
    <line x1="50" y1="52" x2="50" y2="86" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    <rect x="44" y="70" width="12" height="8" rx="2" fill="currentColor" />
    <line x1="42" y1="74" x2="36" y2="74" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// 47. C414-style Multi-Pattern Mic (Image 2)
export const IconC414Mic: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="18 4 64 92" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Upper mesh grille with AKG waffle cross-hatching */}
    <rect x="24" y="6" width="36" height="34" rx="6" stroke="currentColor" strokeWidth="4" fill="currentColor" fillOpacity="0.12" />
    {/* Waffle grille texture */}
    <line x1="28" y1="14" x2="56" y2="14" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3" />
    <line x1="28" y1="22" x2="56" y2="22" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3" />
    <line x1="28" y1="30" x2="56" y2="30" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3" />
    <line x1="34" y1="8" x2="34" y2="38" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3" />
    <line x1="42" y1="8" x2="42" y2="38" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3" />
    <line x1="50" y1="8" x2="50" y2="38" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3" />
    {/* Lower flat body with pattern selector */}
    <path d="M 23 40 L 26 70 C 26 74, 58 74, 58 70 L 61 40 Z" fill="currentColor" />
    {/* Polar pattern window & selection LEDs */}
    <rect x="33" y="44" width="18" height="4" rx="1" fill="#fff" />
    <circle cx="36" cy="54" r="2" fill="#fff" />
    <circle cx="42" cy="54" r="2" fill="#fff" />
    <circle cx="48" cy="54" r="2" fill="#fff" />
    {/* Base XLR shaft */}
    <rect x="37" y="72" width="10" height="20" rx="2" fill="currentColor" />
  </svg>
);

// 48. Studio Headphones (Image 3, left - Ear cups parallel with each other)
export const IconStudioHeadphones: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="6 6 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Padded studio headband arc */}
    <path d="M 20 44 C 20 16, 76 16, 76 44" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    {/* Inner cushion layer */}
    <path d="M 27 38 C 27 22, 69 22, 69 38" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.4" />
    {/* Metal slider arms entering ear cups vertically */}
    <line x1="20" y1="38" x2="20" y2="44" stroke="#fff" strokeWidth="2.5" />
    <line x1="76" y1="38" x2="76" y2="44" stroke="#fff" strokeWidth="2.5" />

    {/* Left closed-back ear cup - strictly parallel (vertical 0° orientation) */}
    <rect x="11" y="42" width="17" height="36" rx="8" fill="currentColor" />
    {/* Left inner plush cushion facing inward */}
    <rect x="22" y="45" width="6" height="30" rx="3" fill="#0f172a" stroke="currentColor" strokeWidth="1.2" />

    {/* Right closed-back ear cup - strictly parallel (vertical 0° orientation) */}
    <rect x="68" y="42" width="17" height="36" rx="8" fill="currentColor" />
    {/* Right inner plush cushion facing inward */}
    <rect x="68" y="45" width="6" height="30" rx="3" fill="#0f172a" stroke="currentColor" strokeWidth="1.2" />

    {/* Studio coiled cable exiting left earcup */}
    <path d="M 19 78 C 17 83, 13 85, 16 89 C 18 93, 23 91, 20 95" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

// 49. Studio Monitors (Image 3, right)
export const IconStudioMonitors: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="4 10 92 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Left active monitor speaker */}
    <rect x="6" y="14" width="38" height="66" rx="6" fill="currentColor" />
    <circle cx="25" cy="30" r="6" fill="#0f172a" />
    <circle cx="25" cy="30" r="3" fill="#fff" />
    <circle cx="25" cy="54" r="13" fill="#0f172a" />
    <circle cx="25" cy="54" r="6.5" fill="#fff" />
    <circle cx="37" cy="73" r="1.5" fill="#22c55e" />
    {/* Right active monitor speaker */}
    <rect x="56" y="14" width="38" height="66" rx="6" fill="currentColor" />
    <circle cx="75" cy="30" r="6" fill="#0f172a" />
    <circle cx="75" cy="30" r="3" fill="#fff" />
    <circle cx="75" cy="54" r="13" fill="#0f172a" />
    <circle cx="75" cy="54" r="6.5" fill="#fff" />
    <circle cx="87" cy="73" r="1.5" fill="#22c55e" />
  </svg>
);

// ----------------------------------------------------------------------
// Polar Pickup Patterns (Matching Official Audio Reference Charts)
// ----------------------------------------------------------------------

// 50. Cardioid Polar Pattern (Image Reference 1 - Heart-shaped pickup, 180° null rejection)
export const IconPolarCardioid: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Decibel Concentric Circles: 0dB (outer), -5dB, -15dB, -25dB */}
    <circle cx="48" cy="48" r="38" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" fill="none" />
    <circle cx="48" cy="48" r="28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" fill="none" />
    <circle cx="48" cy="48" r="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="none" />
    <circle cx="48" cy="48" r="9" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.18" fill="none" />

    {/* Radial 30° Angle Spokes */}
    <line x1="15" y1="29" x2="81" y2="67" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="29" y1="15" x2="67" y2="81" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="67" y1="15" x2="29" y2="81" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="81" y1="29" x2="15" y2="67" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />

    {/* Primary Crosshairs (0°/180° & 90°/270°) */}
    <line x1="48" y1="9" x2="48" y2="87" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />
    <line x1="9" y1="48" x2="87" y2="48" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />

    {/* Degree Angle Labels */}
    <text x="48" y="7" textAnchor="middle" fontSize="6" fontWeight="800" fill="currentColor" opacity="0.65">0°</text>
    <text x="91" y="49.5" textAnchor="start" fontSize="5.5" fontWeight="800" fill="currentColor" opacity="0.65">90°</text>
    <text x="48" y="94" textAnchor="middle" fontSize="6" fontWeight="800" fill="currentColor" opacity="0.65">180°</text>
    <text x="5" y="49.5" textAnchor="end" fontSize="5.5" fontWeight="800" fill="currentColor" opacity="0.65">270°</text>

    {/* Decibel Step Markers on 0° Axis */}
    <text x="48" y="22.5" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="currentColor" opacity="0.45">-5dB</text>
    <text x="48" y="32.5" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="currentColor" opacity="0.45">-15dB</text>
    <text x="48" y="41.5" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="currentColor" opacity="0.45">-25dB</text>

    {/* Cardioid Lobe: Exact Heart-Shaped Curve from Reference Image 1 */}
    <path
      d="M 48 48 C 48 48, 38 60, 32 60 C 22 60, 18 46, 20 34 C 22 20, 34 10, 48 10 C 62 10, 74 20, 76 34 C 78 46, 74 60, 64 60 C 58 60, 48 48, 48 48 Z"
      stroke="currentColor"
      strokeWidth="3.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.15"
    />

    {/* Center Microphone Reference Pivot */}
    <circle cx="48" cy="48" r="4.2" stroke="currentColor" strokeWidth="1.5" fill="#0f172a" />
    <path d="M 46 48 C 46 46, 50 46, 50 48" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

// Simplified Cardioid Pattern: Bold thick pattern without underlying grid and degree markers
export const IconPolarCardioidSimple: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="16 8 64 54" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path
      d="M 48 48 C 48 48, 38 60, 32 60 C 22 60, 18 46, 20 34 C 22 20, 34 10, 48 10 C 62 10, 74 20, 76 34 C 78 46, 74 60, 64 60 C 58 60, 48 48, 48 48 Z"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 51. Figure-8 / Bidirectional Polar Pattern (Front & rear lobes, 90°/270° side nulls)
export const IconPolarFigure8: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Decibel Concentric Circles */}
    <circle cx="48" cy="48" r="38" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" fill="none" />
    <circle cx="48" cy="48" r="28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" fill="none" />
    <circle cx="48" cy="48" r="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="none" />
    <circle cx="48" cy="48" r="9" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.18" fill="none" />

    {/* Radial 30° Angle Spokes */}
    <line x1="15" y1="29" x2="81" y2="67" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="29" y1="15" x2="67" y2="81" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="67" y1="15" x2="29" y2="81" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="81" y1="29" x2="15" y2="67" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />

    {/* Primary Crosshairs */}
    <line x1="48" y1="9" x2="48" y2="87" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />
    <line x1="9" y1="48" x2="87" y2="48" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />

    {/* Degree Angle Labels */}
    <text x="48" y="7" textAnchor="middle" fontSize="6" fontWeight="800" fill="currentColor" opacity="0.65">0°</text>
    <text x="91" y="49.5" textAnchor="start" fontSize="5.5" fontWeight="800" fill="currentColor" opacity="0.65">90°</text>
    <text x="48" y="94" textAnchor="middle" fontSize="6" fontWeight="800" fill="currentColor" opacity="0.65">180°</text>
    <text x="5" y="49.5" textAnchor="end" fontSize="5.5" fontWeight="800" fill="currentColor" opacity="0.65">270°</text>

    {/* Decibel Step Markers */}
    <text x="48" y="22.5" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="currentColor" opacity="0.45">-5dB</text>
    <text x="48" y="32.5" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="currentColor" opacity="0.45">-15dB</text>
    <text x="48" y="41.5" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="currentColor" opacity="0.45">-25dB</text>

    {/* Dual Symmetrical Figure-8 Lobes (Front 0° & Rear 180°) - Wider circles stacked */}
    {/* Front 0° on-axis lobe */}
    <path
      d="M 48 48 C 20 48, 20 12, 48 12 C 76 12, 76 48, 48 48 Z"
      stroke="currentColor"
      strokeWidth="3.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.15"
    />
    {/* Rear 180° on-axis lobe */}
    <path
      d="M 48 48 C 20 48, 20 84, 48 84 C 76 84, 76 48, 48 48 Z"
      stroke="currentColor"
      strokeWidth="3.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.15"
    />

    {/* Center Reference Pivot */}
    <circle cx="48" cy="48" r="4.2" stroke="currentColor" strokeWidth="1.5" fill="#0f172a" />
  </svg>
);

// 52. Omnidirectional Polar Pattern (Uniform 360° sensitivity)
export const IconPolarOmni: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Decibel Concentric Circles */}
    <circle cx="48" cy="48" r="38" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" fill="none" />
    <circle cx="48" cy="48" r="28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" fill="none" />
    <circle cx="48" cy="48" r="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="none" />
    <circle cx="48" cy="48" r="9" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.18" fill="none" />

    {/* Radial 30° Angle Spokes */}
    <line x1="15" y1="29" x2="81" y2="67" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="29" y1="15" x2="67" y2="81" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="67" y1="15" x2="29" y2="81" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="81" y1="29" x2="15" y2="67" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />

    {/* Primary Crosshairs */}
    <line x1="48" y1="9" x2="48" y2="87" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />
    <line x1="9" y1="48" x2="87" y2="48" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />

    {/* Degree Angle Labels */}
    <text x="48" y="7" textAnchor="middle" fontSize="6" fontWeight="800" fill="currentColor" opacity="0.65">0°</text>
    <text x="91" y="49.5" textAnchor="start" fontSize="5.5" fontWeight="800" fill="currentColor" opacity="0.65">90°</text>
    <text x="48" y="94" textAnchor="middle" fontSize="6" fontWeight="800" fill="currentColor" opacity="0.65">180°</text>
    <text x="5" y="49.5" textAnchor="end" fontSize="5.5" fontWeight="800" fill="currentColor" opacity="0.65">270°</text>

    {/* Decibel Step Markers */}
    <text x="48" y="22.5" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="currentColor" opacity="0.45">-5dB</text>
    <text x="48" y="32.5" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="currentColor" opacity="0.45">-15dB</text>
    <text x="48" y="41.5" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="currentColor" opacity="0.45">-25dB</text>

    {/* Omnidirectional 360° Circular Pickup Lobe */}
    <circle cx="48" cy="48" r="37.5" stroke="currentColor" strokeWidth="3.8" fill="currentColor" fillOpacity="0.15" />

    {/* Center Reference Pivot */}
    <circle cx="48" cy="48" r="4.2" stroke="currentColor" strokeWidth="1.5" fill="#0f172a" />
  </svg>
);

// 53. Supercardioid Polar Pattern (Image Reference 2 - Narrow front lobe, 125°/235° nulls, rear lobe)
export const IconPolarSupercardioid: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Decibel Concentric Circles: 0dB (outer), -5dB, -15dB, -25dB */}
    <circle cx="48" cy="48" r="38" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" fill="none" />
    <circle cx="48" cy="48" r="28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" fill="none" />
    <circle cx="48" cy="48" r="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="none" />
    <circle cx="48" cy="48" r="9" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.18" fill="none" />

    {/* Radial 30° Angle Spokes */}
    <line x1="15" y1="29" x2="81" y2="67" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="29" y1="15" x2="67" y2="81" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="67" y1="15" x2="29" y2="81" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="81" y1="29" x2="15" y2="67" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />

    {/* Primary Crosshairs */}
    <line x1="48" y1="9" x2="48" y2="87" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />
    <line x1="9" y1="48" x2="87" y2="48" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />

    {/* Degree Angle Labels */}
    <text x="48" y="7" textAnchor="middle" fontSize="6" fontWeight="800" fill="currentColor" opacity="0.65">0°</text>
    <text x="91" y="49.5" textAnchor="start" fontSize="5.5" fontWeight="800" fill="currentColor" opacity="0.65">90°</text>
    <text x="48" y="94" textAnchor="middle" fontSize="6" fontWeight="800" fill="currentColor" opacity="0.65">180°</text>
    <text x="5" y="49.5" textAnchor="end" fontSize="5.5" fontWeight="800" fill="currentColor" opacity="0.65">270°</text>

    {/* Decibel Step Markers on 0° Axis */}
    <text x="48" y="22.5" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="currentColor" opacity="0.45">-5dB</text>
    <text x="48" y="32.5" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="currentColor" opacity="0.45">-15dB</text>
    <text x="48" y="41.5" textAnchor="middle" fontSize="4.2" fontWeight="700" fill="currentColor" opacity="0.45">-25dB</text>

    {/* Front Directional Lobe (0° On-Axis, Exact Curve from Reference Image 2) */}
    <path
      d="M 48 48 C 46 48, 36 55, 30 55 C 22 55, 20 42, 22 30 C 24 18, 34 10, 48 10 C 62 10, 72 18, 74 30 C 76 42, 74 55, 66 55 C 60 55, 50 48, 48 48 Z"
      stroke="currentColor"
      strokeWidth="3.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.15"
    />

    {/* Distinctive Secondary Rear Teardrop Lobe (180° Off-Axis, from Reference Image 2) */}
    <path
      d="M 48 48 C 42 52, 41 62, 43 67 C 45 70, 51 70, 53 67 C 55 62, 54 52, 48 48 Z"
      stroke="currentColor"
      strokeWidth="3.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.15"
    />

    {/* Center Microphone Reference Pivot */}
    <circle cx="48" cy="48" r="4.2" stroke="currentColor" strokeWidth="1.5" fill="#0f172a" />
    <path d="M 46 48 C 46 46, 50 46, 50 48" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

// 54. Shotgun / Line Gradient Polar Pattern
export const IconPolarShotgun: React.FC<AudioIconProps> = ({ className = 'w-6 h-6', ...props }) => (
  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <circle cx="48" cy="48" r="38" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" fill="none" />
    <circle cx="48" cy="48" r="28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" fill="none" />
    <circle cx="48" cy="48" r="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="none" />
    <circle cx="48" cy="48" r="9" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.18" fill="none" />
    <line x1="15" y1="29" x2="81" y2="67" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="29" y1="15" x2="67" y2="81" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="67" y1="15" x2="29" y2="81" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="81" y1="29" x2="15" y2="67" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.18" />
    <line x1="48" y1="9" x2="48" y2="87" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />
    <line x1="9" y1="48" x2="87" y2="48" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />
    <text x="48" y="7" textAnchor="middle" fontSize="6" fontWeight="800" fill="currentColor" opacity="0.65">0°</text>
    <text x="91" y="49.5" textAnchor="start" fontSize="5.5" fontWeight="800" fill="currentColor" opacity="0.65">90°</text>
    <text x="48" y="94" textAnchor="middle" fontSize="6" fontWeight="800" fill="currentColor" opacity="0.65">180°</text>
    <text x="5" y="49.5" textAnchor="end" fontSize="5.5" fontWeight="800" fill="currentColor" opacity="0.65">270°</text>
    <path
      d="M 48 48 C 48 48, 40 30, 40 18 C 40 12, 44 9, 48 9 C 52 9, 56 12, 56 18 C 56 30, 48 48, 48 48 Z"
      stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15"
    />
    <path
      d="M 48 48 C 48 48, 56 46, 62 46 C 65 46, 66 47, 66 48 C 66 49, 65 50, 62 50 C 56 50, 48 48, 48 48 Z"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"
    />
    <path
      d="M 48 48 C 48 48, 40 46, 34 46 C 31 46, 30 47, 30 48 C 30 49, 31 50, 34 50 C 40 50, 48 48, 48 48 Z"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"
    />
    <path
      d="M 48 48 C 48 48, 45 56, 45 62 C 45 64, 46 66, 48 66 C 50 66, 51 64, 51 62 C 51 56, 48 48, 48 48 Z"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12"
    />
    <circle cx="48" cy="48" r="4.2" stroke="currentColor" strokeWidth="1.5" fill="#0f172a" />
  </svg>
);

// ----------------------------------------------------------------------
// Master Registry of all Audio Engineering & Recording Icons
// ----------------------------------------------------------------------
export const AUDIO_EFFECT_ICONS: Record<
  AudioEffectType,
  {
    name: string;
    component: React.FC<AudioIconProps>;
    category:
      | 'frequency'
      | 'dynamics'
      | 'time'
      | 'harmonics'
      | 'microphones'
      | 'instruments'
      | 'gear'
      | 'polar-patterns'
      | 'other';
    description: string;
  }
> = {
  // FX & Mixing (25)
  eq: {
    name: 'EQ (Equalization)',
    component: IconEQ,
    category: 'frequency',
    description: 'Sculpts tonal balance by boosting or cutting specific frequency pockets.',
  },
  compressor: {
    name: 'Compressor',
    component: IconCompressor,
    category: 'dynamics',
    description: 'Regulates dynamic range, clamping loud transient spikes and boosting subtle tails. Can also be used for advanced techniques such as parallel, serial, and sidechain compression.',
  },
  'serial-compression': {
    name: 'Serial Compression',
    component: IconSerialCompression,
    category: 'dynamics',
    description: 'Chains multiple compressors in sequence where each unit applies gentle, transparent gain reduction for smooth and natural dynamic control.',
  },
  'parallel-compression': {
    name: 'Parallel Compression',
    component: IconParallelCompression,
    category: 'dynamics',
    description: 'Blends a heavily squashed and saturated parallel copy with the uncompressed dry signal to retain transient punch while thickening sustain. Also called "New York Compression."',
  },
  'sidechain-compression': {
    name: 'Sidechain Compression',
    component: IconSidechainCompression,
    category: 'dynamics',
    description: 'Ducks signal volume automatically in response to an external trigger source (such as ducking a bassline when the kick drum hits).',
  },
  reverb: {
    name: 'Reverb',
    component: IconReverb,
    category: 'time',
    description: 'Simulates physical acoustic chambers, rooms, plates, and expansive spaces.',
  },
  'spring-reverb': {
    name: 'Spring Reverb',
    component: IconSpringReverb,
    category: 'time',
    description: 'Mechanical transducer tank producing iconic bouncy, metallic guitar amp reflections.',
  },
  'gated-reverb': {
    name: 'Gated Reverb',
    component: IconGatedReverb,
    category: 'time',
    description: 'Huge 1980s ambient reverb tail abruptly truncated by a noise gate for explosive punch.',
  },
  'plate-reverb': {
    name: 'Plate Reverb',
    component: IconPlateReverb,
    category: 'time',
    description: 'Mechanical suspension steel plate reverb producing bright, dense, and shimmering reflections.',
  },
  saturation: {
    name: 'Saturation',
    component: IconSaturation,
    category: 'harmonics',
    description: 'Generates warm even & odd harmonics through analog tape and tube emulation.',
  },
  distortion: {
    name: 'Distortion',
    component: IconDistortion,
    category: 'harmonics',
    description: 'Hard-clips waveforms into aggressive, abrasive overdrive harmonics.',
  },
  'noise-gate': {
    name: 'Noise Gate',
    component: IconNoiseGate,
    category: 'dynamics',
    description: 'Silences audio below a set volume threshold to remove hum, bleed, and hiss.',
  },
  chorus: {
    name: 'Chorus',
    component: IconChorus,
    category: 'time',
    description: 'Layers pitch-detuned and time-delayed copies to simulate multi-voice ensemble.',
  },
  flanger: {
    name: 'Flanger',
    component: IconFlanger,
    category: 'time',
    description: 'Interweaves audio copies with sweeping phase delays for iconic jet-plane comb filtering.',
  },
  phaser: {
    name: 'Phaser',
    component: IconPhaser,
    category: 'time',
    description: 'Uses all-pass filters to create series of moving notches and lush sweeping phase swirl.',
  },
  tremolo: {
    name: 'Tremolo',
    component: IconTremolo,
    category: 'time',
    description: 'Modulates amplitude periodically with an LFO to create rhythmic volume pulsing.',
  },
  'de-esser': {
    name: 'De-Esser',
    component: IconDeEsser,
    category: 'dynamics',
    description: 'Frequency-specific compression targeting harsh sibilant "s" and "t" frequencies (5k–8kHz).',
  },
  delay: {
    name: 'Delay & Echo',
    component: IconDelay,
    category: 'time',
    description: 'Creates rhythmic repeating echo reflections with controlled feedback and timing.',
  },
  limiter: {
    name: 'Limiter',
    component: IconLimiter,
    category: 'dynamics',
    description: 'Imposes an absolute brickwall ceiling to prevent digital overs and clipping.',
  },
  bitcrusher: {
    name: 'Bitcrusher',
    component: IconBitcrusher,
    category: 'harmonics',
    description: 'Reduces digital bit depth and sample rate for crunchy lo-fi quantization artifacts.',
  },
  'hi-pass-filter': {
    name: 'Hi-Pass Filter',
    component: IconHiPassFilter,
    category: 'frequency',
    description: 'Rolls off sub-bass rumble while allowing all higher frequencies to pass untouched.',
  },
  'lo-pass-filter': {
    name: 'Low-Pass Filter',
    component: IconLowPassFilter,
    category: 'frequency',
    description: 'Rolls off harsh treble and synth fizz while preserving fundamental low frequencies.',
  },
  'low-shelf-cut': {
    name: 'Low Shelf Cut',
    component: IconLowShelfCut,
    category: 'frequency',
    description: 'Attenuates all frequencies below a set turnover frequency evenly.',
  },
  'low-shelf-boost': {
    name: 'Low Shelf Boost',
    component: IconLowShelfBoost,
    category: 'frequency',
    description: 'Lifts low-end weight and bass fundamentals below a turnover frequency evenly.',
  },
  'high-shelf-cut': {
    name: 'High Shelf Cut',
    component: IconHighShelfCut,
    category: 'frequency',
    description: 'Attenuates all high-frequency brightness above a set turnover frequency evenly.',
  },
  'high-shelf-boost': {
    name: 'High Shelf Boost',
    component: IconHighShelfBoost,
    category: 'frequency',
    description: 'Boosts air, sheen, and top-end sparkle above a set turnover frequency evenly.',
  },
  'bell-boost': {
    name: 'Bell Boost',
    component: IconBellBoost,
    category: 'frequency',
    description: 'Focuses a bell-shaped parametric boost on a specific center frequency pocket.',
  },
  'dynamic-eq': {
    name: 'Dynamic EQ',
    component: IconDynamicEq,
    category: 'frequency',
    description: 'Combines surgical parametric equalization with dynamic threshold-dependent cuts and boosts.',
  },
  'transient-shaper': {
    name: 'Transient Shaper',
    component: IconTransientShaper,
    category: 'dynamics',
    description: 'Independently controls the initial attack punch and decaying sustain envelope of sounds.',
  },
  'pitch-shifter': {
    name: 'Pitch Shifter',
    component: IconPitchShifter,
    category: 'time',
    description: 'Shifts pitch up or down without altering playback duration or tempo.',
  },

  // Recording & Studio Gear (24)
  'kick-drum': {
    name: 'Kick Drum (Bass Drum)',
    component: IconKickDrum,
    category: 'instruments',
    description: 'Acoustic bass drum anchored with front resonant port hole for low-frequency transient impact.',
  },
  'snare-drum': {
    name: 'Snare Drum',
    component: IconSnareDrum,
    category: 'instruments',
    description: 'Core backbeat acoustic snare drum with metal wires, tension rods, and crossed sticks.',
  },
  'drum-set': {
    name: 'Drum Set',
    component: IconDrumSet,
    category: 'instruments',
    description: 'Complete acoustic drum kit: kick, snare, rack & floor toms, hi-hats, and cymbals.',
  },
  'pop-filter': {
    name: 'Pop Filter',
    component: IconPopFilter,
    category: 'gear',
    description: 'Mesh barrier placed 2-4 inches before capsule to disperse plosive "P" and "B" wind bursts.',
  },
  shockmount: {
    name: 'Shockmount',
    component: IconShockmount,
    category: 'gear',
    description: 'Elastic spider suspension cradle decoupling the microphone from floor footfalls and stand rumble.',
  },
  'xlr-cable': {
    name: 'XLR Cable',
    component: IconXLRCable,
    category: 'gear',
    description: 'Standard 3-pin balanced audio cable delivering common-mode noise rejection and phantom power.',
  },
  'phantom-power': {
    name: '+48V Phantom Power',
    component: IconPhantomPower,
    category: 'gear',
    description: 'Direct-current voltage sent over balanced XLR to polarize condenser plates and power preamps.',
  },
  'electric-guitar': {
    name: 'Electric Guitar',
    component: IconElectricGuitar,
    category: 'instruments',
    description: 'Solid-body electric guitar with magnetic pickups tracked via mic’d amplifier or high-Z DI.',
  },
  'acoustic-guitar': {
    name: 'Acoustic Guitar',
    component: IconAcousticGuitar,
    category: 'instruments',
    description: 'Hollow-body acoustic dreadnought guitar with soundhole resonance and phosphor-bronze strings.',
  },
  'bass-guitar': {
    name: 'Bass Guitar',
    component: IconBassGuitar,
    category: 'instruments',
    description: '4-string electric bass providing rhythm section sub-fundamental low end.',
  },
  '808-bass': {
    name: '808 Bass',
    component: Icon808Bass,
    category: 'instruments',
    description: 'Iconic tuned sub-bass with punchy attack transient and long decaying sinusoidal resonance.',
  },
  'acoustic-piano': {
    name: 'Acoustic Piano',
    component: IconAcousticPiano,
    category: 'instruments',
    description: '88-key acoustic grand piano with wooden soundboard and hammers delivering rich resonant acoustic resonance.',
  },
  piano: {
    name: 'Keyboard & Synthesizer',
    component: IconPiano,
    category: 'instruments',
    description: 'Electronic keyboard instruments including electric pianos, synthesizers, organs, clavinovas, mellotrons, etc.',
  },
  'dynamic-mic': {
    name: 'Dynamic Instrument Microphone',
    component: IconDynamicMic,
    category: 'microphones',
    description: 'Rugged moving-coil cardioid microphone handling extreme sound pressure on snares and guitar cabs.',
  },
  'pencil-mic': {
    name: 'SDC (Small Diaphragm Condenser)',
    component: IconPencilMic,
    category: 'microphones',
    description: 'Small diaphragm condenser with ultra-fast transient response ideal for drum overheads & acoustic guitar.',
  },
  'kick-drum-mic': {
    name: 'Large Diaphragm Kick Microphone',
    component: IconKickDrumMic,
    category: 'microphones',
    description: 'Heavy dynamic mic tuned with sub-low scoop and beater click presence for kick drums & bass cabs.',
  },
  'vocal-mic': {
    name: 'Handheld Dynamic Vocal Microphone',
    component: IconVocalMic,
    category: 'microphones',
    description: 'Indestructible dynamic vocal mic with internal pop protection and proximity effect for lead singing.',
  },
  'u87-mic': {
    name: 'Large Diaphragm Condenser (LDC)',
    component: IconU87Mic,
    category: 'microphones',
    description: 'Studio condenser microphone featuring a large gold-sputtered diaphragm delivering warm, silky high-fidelity vocal and acoustic capture.',
  },
  'c414-mic': {
    name: 'Multi-Pattern Large Diaphragm Condenser',
    component: IconC414Mic,
    category: 'microphones',
    description: 'Versatile multi-pattern condenser with selectable cardioid, omni, figure-8, and hypercardioid patterns.',
  },
  'instrument-cable': {
    name: '1/4" Instrument Cable (TS)',
    component: IconInstrumentCable,
    category: 'gear',
    description: 'Unbalanced tip-sleeve cable transmitting high-impedance instrument signals from guitars and synths.',
  },
  'ribbon-mic': {
    name: 'Ribbon Mic',
    component: IconRibbonMic,
    category: 'microphones',
    description: 'Delicate corrugated aluminum ribbon transducer capturing smooth, warm vintage tone with figure-8 pickup.',
  },
  'di-box': {
    name: 'DI Box (Direct Box)',
    component: IconDIBox,
    category: 'gear',
    description: 'Converts high-impedance unbalanced instrument signals into balanced low-impedance mic signals with ground lift.',
  },
  'mic-clip': {
    name: 'Mic Clip',
    component: IconMicClip,
    category: 'gear',
    description: 'Durable threaded clip gripping handheld microphones securely on stage or studio stands.',
  },
  'mic-stand': {
    name: 'Mic Stand',
    component: IconMicStand,
    category: 'gear',
    description: 'Telescoping boom stand with folding tripod base positioning capsules accurately in 3D room space.',
  },
  'gaff-tape': {
    name: 'Gaff Tape (Gaffer Tape)',
    component: IconGaffTape,
    category: 'gear',
    description: 'Non-residue heavy fabric tape securing cables flat to stage floors for safety and strain relief.',
  },
  'reflection-filter': {
    name: 'Reflection Filter',
    component: IconReflectionFilter,
    category: 'gear',
    description: 'Curved acoustic baffle absorbing room flutter echoes and flutter slap before reflections reach the mic.',
  },
  'studio-headphones': {
    name: 'Studio Headphones',
    component: IconStudioHeadphones,
    category: 'gear',
    description: 'Closed-back monitoring headphones preventing backing track click bleed into sensitive open vocal mics. Open-backed studio headphones are another common option for studio mixing because they can provide a better sense of the mix\'s sound stage.',
  },
  'studio-monitors': {
    name: 'Studio Monitors',
    component: IconStudioMonitors,
    category: 'gear',
    description: 'Nearfield active bi-amplified reference speakers providing flat, uncolored frequency response for mixing.',
  },

  // Polar Pickup Patterns (5)
  'polar-cardioid': {
    name: 'Cardioid Pattern',
    component: IconPolarCardioid,
    category: 'polar-patterns',
    description: 'Heart-shaped directional pickup capturing on-axis sound while rejecting 180° rear bleed and room reflections.',
  },
  'polar-figure8': {
    name: 'Figure-8 (Bidirectional) Pattern',
    component: IconPolarFigure8,
    category: 'polar-patterns',
    description: 'Dual symmetrical lobes capturing front and rear audio equally while completely rejecting 90° and 270° sides.',
  },
  'polar-omni': {
    name: 'Omnidirectional Pattern',
    component: IconPolarOmni,
    category: 'polar-patterns',
    description: 'Spherical 360° pickup capturing audio equally from all angles with zero proximity effect.',
  },
  'polar-supercardioid': {
    name: 'Supercardioid Pattern',
    component: IconPolarSupercardioid,
    category: 'polar-patterns',
    description: 'Narrower directional front pickup with 125°/235° side nulls and a small rear lobe for maximum isolation.',
  },
  'polar-shotgun': {
    name: 'Shotgun Pattern',
    component: IconPolarShotgun,
    category: 'polar-patterns',
    description: 'Extremely directional line gradient interference tube pattern with a narrow forward lobe, designed for film boom mics and isolating vocals in noisy environments.',
  },
};

/**
 * Universal component to render an Audio Engineering effect or gear icon by key
 */
export const AudioEffectIcon: React.FC<{
  name: AudioEffectType;
  className?: string;
  size?: number | string;
}> = ({ name, className = 'w-6 h-6', ...props }) => {
  const IconComponent = AUDIO_EFFECT_ICONS[name]?.component || IconEQ;
  return <IconComponent className={className} {...props} />;
};

/**
 * Renders the framed engineering card with minimized padding so icons stay bold and legible
 */
export const AudioEffectCard: React.FC<{
  effect: AudioEffectType;
  caption?: string;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}> = ({ effect, caption, className = '', active = false, onClick }) => {
  const meta = AUDIO_EFFECT_ICONS[effect];
  if (!meta) return null;
  const Comp = meta.component;

  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center gap-1 p-2 rounded-xl border transition-all text-center select-none ${
        onClick ? 'cursor-pointer hover:border-amber-400/60 hover:bg-slate-800/80 active:scale-95' : ''
      } ${
        active
          ? 'bg-amber-500/15 border-amber-400 text-amber-300 shadow-md shadow-amber-500/10'
          : 'bg-slate-900/90 border-slate-700/80 text-slate-200'
      } ${className}`}
    >
      <div className="w-full aspect-[5/3] flex items-center justify-center p-1 rounded-lg bg-slate-950/70 border border-slate-800">
        <Comp className="w-full h-full max-h-14 text-slate-100" />
      </div>
      <span className="text-[10px] font-semibold tracking-tight text-slate-300 whitespace-normal break-words line-clamp-2 w-full min-h-[28px] flex items-center justify-center">
        {caption || meta.name}
      </span>
    </div>
  );
};

/**
 * Determines whether an audio effect or gear item has interactive audio synthesis playback.
 * Permitted:
 * - Effects sections: EQ (frequency), Dynamics (dynamics), Time & Modulation (time), Harmonics & Drive (harmonics)
 * - Pitch Shifter ('pitch-shifter')
 * - Instruments (instruments)
 * Excluded from playback:
 * - Microphones (microphones)
 * - Studio Hardware (gear)
 * - Polar Patterns (polar-patterns)
 * - Other non-pitch-shifter items
 */
const EXCLUDED_PLAYBACK_KEYS: AudioEffectType[] = ['limiter', 'eq', 'dynamic-eq'];

export const hasAudioPlayback = (effectKey: AudioEffectType): boolean => {
  if (EXCLUDED_PLAYBACK_KEYS.includes(effectKey)) return false;
  const meta = AUDIO_EFFECT_ICONS[effectKey];
  if (!meta) return false;
  if (meta.category === 'instruments') return false;
  if (effectKey === 'pitch-shifter') return true;
  const allowedCategories: string[] = ['frequency', 'dynamics', 'time', 'harmonics'];
  return allowedCategories.includes(meta.category);
};

/**
 * Helper to detect which audio engineering effect or recording gear matches a piece of text (e.g. label or prompt)
 */
export function detectAudioEffectKey(text: string): AudioEffectType | null {
  if (!text) return null;
  const lower = text.toLowerCase();

  // 1. Polar Pickup Patterns
  if (
    lower.includes('cardioid polar') ||
    lower.includes('polar cardioid') ||
    lower.includes('cardioid pattern') ||
    (lower.includes('cardioid') && !lower.includes('mic') && !lower.includes('shure') && !lower.includes('dynamic'))
  ) {
    return 'polar-cardioid';
  }
  if (
    lower.includes('figure-8') ||
    lower.includes('figure 8') ||
    lower.includes('bidirectional')
  ) {
    return 'polar-figure8';
  }
  if (
    lower.includes('omni') ||
    lower.includes('omnidirectional')
  ) {
    return 'polar-omni';
  }
  if (
    lower.includes('supercardioid') ||
    lower.includes('hypercardioid')
  ) {
    return 'polar-supercardioid';
  }

  // 2. Specific Microphones & Transducers
  if (
    lower.includes('u87') ||
    lower.includes('large diaphragm condenser') ||
    lower.includes('ldc')
  ) {
    return 'u87-mic';
  }
  if (
    lower.includes('c414') ||
    lower.includes('414') ||
    lower.includes('multi-pattern')
  ) {
    return 'c414-mic';
  }
  if (
    lower.includes('sm58') ||
    lower.includes('handheld vocal mic') ||
    lower.includes('vocal dynamic mic')
  ) {
    return 'vocal-mic';
  }
  if (
    lower.includes('sm57') ||
    lower.includes('md421') ||
    lower.includes('e609') ||
    lower.includes('dynamic instrument mic') ||
    lower.includes('instrument dynamic mic') ||
    lower.includes('dynamic mic')
  ) {
    return 'dynamic-mic';
  }
  if (
    lower.includes('sm81') ||
    lower.includes('pencil mic') ||
    lower.includes('small diaphragm condenser') ||
    lower.includes('sdc') ||
    lower.includes('12th fret') ||
    lower.includes('fingerpicking') ||
    lower.includes('xy coincident')
  ) {
    return 'pencil-mic';
  }
  if (
    lower.includes('kick mic') ||
    lower.includes('kick drum mic') ||
    lower.includes('d112') ||
    lower.includes('beta 52')
  ) {
    return 'kick-drum-mic';
  }
  if (
    lower.includes('ribbon') ||
    lower.includes('r-121') ||
    lower.includes('figure-8 ribbon')
  ) {
    return 'ribbon-mic';
  }

  // 2. Acoustic Drums & Specific Instruments
  if (
    lower.includes('kick drum') ||
    lower.includes('bass drum') ||
    lower.includes('beater') ||
    lower.includes('port hole')
  ) {
    return 'kick-drum';
  }
  if (
    lower.includes('snare drum') ||
    lower.includes('snare top') ||
    lower.includes('snare bottom') ||
    lower.includes('under-snare') ||
    lower.includes('snare wires') ||
    lower.includes('brush') ||
    lower.includes('brushes')
  ) {
    return 'snare-drum';
  }
  if (
    lower.includes('drum set') ||
    lower.includes('drum kit') ||
    lower.includes('overhead') ||
    lower.includes('toms') ||
    lower.includes('hi-hat') ||
    lower.includes('glyn johns') ||
    lower.includes('spaced pair')
  ) {
    return 'drum-set';
  }
  if (
    lower.includes('bass guitar') ||
    lower.includes('electric bass') ||
    lower.includes('p-bass') ||
    lower.includes('bass player')
  ) {
    return 'bass-guitar';
  }
  if (
    lower.includes('electric guitar') ||
    lower.includes('guitar amp') ||
    lower.includes('guitar cab') ||
    lower.includes('stratocaster') ||
    lower.includes('speaker cone') ||
    lower.includes('dust cap') ||
    lower.includes('cone placement')
  ) {
    return 'electric-guitar';
  }
  if (
    lower.includes('acoustic guitar') ||
    lower.includes('dreadnought') ||
    lower.includes('soundhole') ||
    lower.includes('12th fret') ||
    lower.includes('acoustic tracking')
  ) {
    return 'acoustic-guitar';
  }
  if (
    lower.includes('piano') ||
    lower.includes('grand piano') ||
    lower.includes('upright piano') ||
    lower.includes('keyboard') ||
    lower.includes('keybed')
  ) {
    return 'piano';
  }

  // 3. Studio Hardware & Accessories
  if (lower.includes('pop filter') || lower.includes('pop shield') || lower.includes('plosive')) {
    return 'pop-filter';
  }
  if (
    lower.includes('shockmount') ||
    lower.includes('shock mount') ||
    lower.includes('spider mount') ||
    lower.includes('elastic suspension')
  ) {
    return 'shockmount';
  }
  if (
    lower.includes('reflection filter') ||
    lower.includes('acoustic baffle') ||
    lower.includes('vocal shield')
  ) {
    return 'reflection-filter';
  }
  if (lower.includes('phantom power') || lower.includes('+48v') || lower.includes('48v')) {
    return 'phantom-power';
  }
  if (
    lower.includes('di box') ||
    lower.includes('direct box') ||
    lower.includes('direct injection') ||
    lower.includes('clean di') ||
    lower.includes('direct input') ||
    lower.includes('ground lift')
  ) {
    return 'di-box';
  }
  if (
    lower.includes('xlr cable') ||
    lower.includes('balanced xlr') ||
    lower.includes('xlr connection')
  ) {
    return 'xlr-cable';
  }
  if (
    lower.includes('1/4"') ||
    lower.includes('instrument cable') ||
    lower.includes('ts cable') ||
    lower.includes('guitar cable') ||
    lower.includes('patch cable')
  ) {
    return 'instrument-cable';
  }
  if (lower.includes('mic stand') || lower.includes('boom stand') || lower.includes('tripod stand')) {
    return 'mic-stand';
  }
  if (lower.includes('mic clip') || lower.includes('clip on stand')) {
    return 'mic-clip';
  }
  if (lower.includes('gaff') || lower.includes('gaffer tape') || lower.includes('tape cables')) {
    return 'gaff-tape';
  }

  // 4. Monitoring
  if (lower.includes('headphone') || lower.includes('cans') || lower.includes('tracking headphones') || lower.includes('closed-back')) {
    return 'studio-headphones';
  }
  if (lower.includes('studio monitor') || lower.includes('speakers') || lower.includes('nearfield') || lower.includes('control room monitor')) {
    return 'studio-monitors';
  }

  // 5. Pitch & Modulation FX
  if (
    lower.includes('pitch shift') ||
    lower.includes('pitch-shift') ||
    lower.includes('pitch correct') ||
    lower.includes('autotune') ||
    lower.includes('auto-tune') ||
    lower.includes('octave') ||
    lower.includes('pitch transpose')
  ) {
    return 'pitch-shifter';
  }

  // Transient Shaper
  if (lower.includes('transient shaper') || lower.includes('attack & sustain') || lower.includes('envelope shaper')) {
    return 'transient-shaper';
  }

  // Gated Reverb
  if (lower.includes('gated reverb') || lower.includes('gated-reverb') || lower.includes('gated')) {
    return 'gated-reverb';
  }

  // Plate Reverb
  if (lower.includes('plate reverb') || lower.includes('plate-reverb') || lower.includes('plate')) {
    return 'plate-reverb';
  }

  // Spring Reverb
  if (lower.includes('spring reverb') || lower.includes('spring tank') || lower.includes('amp spring')) {
    return 'spring-reverb';
  }

  // Low Shelf Cut
  if (lower.includes('low shelf cut') || lower.includes('low-shelf cut')) {
    return 'low-shelf-cut';
  }

  // Low Shelf Boost
  if (lower.includes('low shelf boost') || lower.includes('low-shelf boost') || lower.includes('low shelf lifting')) {
    return 'low-shelf-boost';
  }

  // High Shelf Cut
  if (lower.includes('high shelf cut') || lower.includes('high-shelf cut')) {
    return 'high-shelf-cut';
  }

  // High Shelf Boost
  if (
    lower.includes('high shelf boost') ||
    lower.includes('high-shelf boost') ||
    lower.includes('high shelf air') ||
    lower.includes('high shelf')
  ) {
    return 'high-shelf-boost';
  }

  // Bell Boost
  if (lower.includes('bell boost') || lower.includes('bell curve boost') || lower.includes('peaking boost')) {
    return 'bell-boost';
  }

  // High-Pass Filter / Low Cut
  if (
    lower.includes('high-pass') ||
    lower.includes('hi-pass') ||
    lower.includes('low cut') ||
    lower.includes('low-cut')
  ) {
    return 'hi-pass-filter';
  }

  // Low-Pass Filter / High Cut
  if (
    lower.includes('low-pass') ||
    lower.includes('lo-pass') ||
    lower.includes('high cut') ||
    lower.includes('high-cut')
  ) {
    return 'lo-pass-filter';
  }

  // De-Esser / Sibilance
  if (lower.includes('de-esser') || lower.includes('de-ess') || lower.includes('sibilan')) {
    return 'de-esser';
  }

  // Limiter / Brickwall / Ceiling
  if (lower.includes('limiter') || lower.includes('brickwall') || lower.includes('true-peak limit')) {
    return 'limiter';
  }

  // Advanced Compression Techniques
  if (lower.includes('serial compression') || lower.includes('serial')) {
    return 'serial-compression';
  }
  if (lower.includes('parallel compression') || lower.includes('parallel') || lower.includes('new york')) {
    return 'parallel-compression';
  }
  if (lower.includes('sidechain compression') || lower.includes('sidechain')) {
    return 'sidechain-compression';
  }

  // Compressor / Compression / Sidechain
  if (
    lower.includes('compress') ||
    lower.includes('opto') ||
    lower.includes('vca')
  ) {
    return 'compressor';
  }

  // Bitcrusher / Downsampler / 8-bit
  if (
    lower.includes('bitcrush') ||
    lower.includes('downsampler') ||
    lower.includes('quantiz') ||
    lower.includes('8-bit')
  ) {
    return 'bitcrusher';
  }

  // Tremolo
  if (lower.includes('tremolo')) {
    return 'tremolo';
  }

  // Noise Gate / Gate
  if (
    lower.includes('noise gate') ||
    lower.includes('rhythmic pattern gate') ||
    lower.includes('tight mono gate') ||
    (lower.includes('gate') && !lower.includes('gated reverb'))
  ) {
    return 'noise-gate';
  }

  // Phaser
  if (lower.includes('phaser') || lower.includes('phase shifter') || lower.includes('phase stage')) {
    return 'phaser';
  }

  // Flanger
  if (lower.includes('flanger')) {
    return 'flanger';
  }

  // Chorus / Doubler
  if (lower.includes('chorus') || lower.includes('doubler') || lower.includes('microshift')) {
    return 'chorus';
  }

  // Reverb (including gated reverb, plate, hall, cathedral)
  if (
    lower.includes('reverb') ||
    lower.includes('cathedral') ||
    lower.includes('room sound') ||
    lower.includes('acoustic space')
  ) {
    return 'reverb';
  }

  // Delay / Echo / Slapback
  if (
    lower.includes('delay') ||
    lower.includes('slapback') ||
    lower.includes('ping-pong') ||
    lower.includes('echo')
  ) {
    return 'delay';
  }

  // Saturation / Tube / Tape Saturation
  if (
    lower.includes('saturation') ||
    lower.includes('tape / tube') ||
    lower.includes('preamp drive')
  ) {
    return 'saturation';
  }

  // Distortion / Overdrive / Clipper
  if (
    lower.includes('distortion') ||
    lower.includes('overdrive') ||
    lower.includes('clipper') ||
    lower.includes('fuzz')
  ) {
    return 'distortion';
  }

  // Dynamic EQ
  if (lower.includes('dynamic eq') || lower.includes('dynamic-eq')) {
    return 'dynamic-eq';
  }

  // 808 Sub Bass
  if (lower.includes('808') || lower.includes('sub bass') || lower.includes('sub-bass')) {
    return '808-bass';
  }

  // EQ / Equalizer / Bell Filter
  if (
    lower.includes('eq') ||
    lower.includes('equaliz') ||
    lower.includes('bell filter') ||
    lower.includes('frequency pocket')
  ) {
    return 'eq';
  }

  return null;
}
