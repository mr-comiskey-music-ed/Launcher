import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Search,
} from 'lucide-react';
import {
  AUDIO_EFFECT_ICONS,
  AudioEffectType,
  AudioEffectIcon,
} from './AudioEngineeringIcons';
import { soundEngine, RECORDED_EFFECT_AUDIO } from '../utils/audio';

export interface FXLibraryProps {
  className?: string;
  initialEffect?: AudioEffectType;
  onSelectEffect?: (effect: AudioEffectType) => void;
  standalone?: boolean;
}

export type FXCategoryKey = 'all' | 'frequency' | 'dynamics' | 'reverb_delay' | 'mod_pitch' | 'harmonics';

interface CategoryTab {
  key: FXCategoryKey;
  label: string;
  count: number;
  icon: string;
}

const REVERB_DELAY_KEYS: AudioEffectType[] = [
  'reverb',
  'plate-reverb',
  'spring-reverb',
  'gated-reverb',
  'delay',
];

const MOD_PITCH_KEYS: AudioEffectType[] = [
  'chorus',
  'flanger',
  'phaser',
  'tremolo',
  'pitch-shifter',
];

export const FX_LIBRARY_KEYS: AudioEffectType[] = [
  // Frequency / EQ (9)
  'eq',
  'hi-pass-filter',
  'lo-pass-filter',
  'low-shelf-cut',
  'low-shelf-boost',
  'high-shelf-cut',
  'high-shelf-boost',
  'bell-boost',
  'dynamic-eq',
  // Dynamics (8)
  'compressor',
  'serial-compression',
  'parallel-compression',
  'sidechain-compression',
  'noise-gate',
  'de-esser',
  'transient-shaper',
  'limiter',
  // Reverb & Delay (5)
  'reverb',
  'plate-reverb',
  'spring-reverb',
  'gated-reverb',
  'delay',
  // Modulation & Pitch (5)
  'chorus',
  'flanger',
  'phaser',
  'tremolo',
  'pitch-shifter',
  // Distortions (3)
  'saturation',
  'distortion',
  'bitcrusher',
];

export function getEffectCategoryEmoji(key: AudioEffectType): string {
  if (REVERB_DELAY_KEYS.includes(key)) return '🔊';
  if (MOD_PITCH_KEYS.includes(key)) return '🫨';
  const meta = AUDIO_EFFECT_ICONS[key];
  if (!meta) return '🔊';
  if (meta.category === 'frequency') return '🎨';
  if (meta.category === 'dynamics') return '🎚️';
  if (meta.category === 'harmonics') return '🤘🏻';
  return '🔊';
}

export function getEffectCategoryLabel(key: AudioEffectType): string {
  if (REVERB_DELAY_KEYS.includes(key)) return 'Reverb & Delay';
  if (MOD_PITCH_KEYS.includes(key)) return 'Modulation & Pitch';
  const meta = AUDIO_EFFECT_ICONS[key];
  if (!meta) return 'FX';
  if (meta.category === 'frequency') return 'EQ';
  if (meta.category === 'dynamics') return 'Dynamics';
  if (meta.category === 'harmonics') return 'Distortion';
  return 'FX';
}

export const FXLibrary: React.FC<FXLibraryProps> = ({
  className = '',
  initialEffect = 'compressor',
  onSelectEffect,
}) => {
  const [activeCategory, setActiveCategory] = useState<FXCategoryKey>('all');
  const [selectedEffect, setSelectedEffect] = useState<AudioEffectType>(initialEffect);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState<number>(0);
  const listContainerRef = useRef<HTMLDivElement>(null);

  // Stop playback when component unmounts or active effect changes
  useEffect(() => {
    soundEngine.stopCurrentAudio();
    setIsPlaying(false);
    setAudioProgress(0);
  }, [selectedEffect]);

  useEffect(() => {
    return () => {
      soundEngine.stopCurrentAudio();
    };
  }, []);

  // Category counts and configurations with exact user emojis
  const categories: CategoryTab[] = useMemo(() => [
    { key: 'all', label: 'All FX', count: FX_LIBRARY_KEYS.length, icon: '🎛️' },
    { key: 'frequency', label: 'EQ', count: 9, icon: '🎨' },
    { key: 'dynamics', label: 'Dynamics', count: 8, icon: '🎚️' },
    { key: 'reverb_delay', label: 'Reverb & Delay', count: 5, icon: '🔊' },
    { key: 'mod_pitch', label: 'Modulation & Pitch', count: 5, icon: '🫨' },
    { key: 'harmonics', label: 'Distortion', count: 3, icon: '🤘🏻' },
  ], []);

  // Filter keys based on active category & search query
  const filteredEffects = useMemo(() => {
    return FX_LIBRARY_KEYS.filter((key) => {
      const meta = AUDIO_EFFECT_ICONS[key];
      if (!meta) return false;

      let matchesCat = false;
      if (activeCategory === 'all') matchesCat = true;
      else if (activeCategory === 'reverb_delay') matchesCat = REVERB_DELAY_KEYS.includes(key);
      else if (activeCategory === 'mod_pitch') matchesCat = MOD_PITCH_KEYS.includes(key);
      else matchesCat = meta.category === activeCategory;

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = !q || meta.name.toLowerCase().includes(q) || meta.description.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const activeMeta = AUDIO_EFFECT_ICONS[selectedEffect] || AUDIO_EFFECT_ICONS['compressor'];
  const hasAudio = Boolean(RECORDED_EFFECT_AUDIO[selectedEffect]);
  const cleanName = activeMeta.name.split(' (')[0];

  const handleTogglePlay = () => {
    if (isPlaying) {
      soundEngine.stopCurrentAudio();
      setIsPlaying(false);
      setAudioProgress(0);
    } else {
      setIsPlaying(true);
      setAudioProgress(0);
      soundEngine.playConceptDemo(
        selectedEffect,
        () => {
          setIsPlaying(false);
          setAudioProgress(0);
        },
        (progress) => {
          setAudioProgress(progress);
        }
      );
    }
  };

  const handleCardClick = (key: AudioEffectType) => {
    if (key !== selectedEffect) {
      soundEngine.stopCurrentAudio();
      setIsPlaying(false);
      setAudioProgress(0);
      setSelectedEffect(key);
      onSelectEffect?.(key);
    }
  };

  return (
    <div className={`fx-library-wrapper flex flex-col h-full text-slate-100 ${className}`} style={{ fontFamily: "'Cabin', sans-serif" }}>
      {/* Category Navigation Bar & Search */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#285E4A] shrink-0">
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  soundEngine.stopCurrentAudio();
                  setIsPlaying(false);
                  setAudioProgress(0);
                  setActiveCategory(cat.key);
                }}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-all inline-flex items-center gap-1.5 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#FACC15] text-[#133629] border-[#EAB308] shadow-md font-bold'
                    : 'bg-[#14382B] text-slate-300 border-[#285E4A] hover:border-[#FACC15] hover:text-[#FEF08A]'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-[#133629] text-[#FEF08A]' : 'bg-[#0F2E23] text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative min-w-[140px] max-w-[200px]">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search FX..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-8 pr-2.5 py-1 rounded-lg bg-[#0F2E23] border border-[#285E4A] text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#FACC15]"
          />
        </div>
      </div>

      {/* Main Two-Column View with fixed height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 min-h-0 h-full overflow-hidden">
        {/* Left Column: Scrollable Grid of Effect Cards */}
        <div ref={listContainerRef} className="lg:col-span-7 overflow-y-auto pr-1 h-full max-h-full">
          {filteredEffects.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400 bg-[#14382B] rounded-xl border border-[#285E4A]">
              No effects found matching "{searchQuery}".
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {filteredEffects.map((key) => {
                const item = AUDIO_EFFECT_ICONS[key];
                const isSelected = selectedEffect === key;
                const itemHasAudio = Boolean(RECORDED_EFFECT_AUDIO[key]);
                const catEmoji = getEffectCategoryEmoji(key);
                const catLabel = getEffectCategoryLabel(key);

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleCardClick(key)}
                    className={`p-2 rounded-xl border text-left transition-all flex flex-col justify-between group cursor-pointer select-none ${
                      isSelected
                        ? 'bg-[#1A4535] border-[#FACC15] shadow-lg shadow-[#FACC15]/20 ring-1 ring-[#FACC15]'
                        : 'bg-[#14382B] border-[#285E4A] hover:border-[#CA8A04] hover:bg-[#184232]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 w-full mb-1">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        isSelected
                          ? 'bg-[#FACC15] text-[#133629]'
                          : 'bg-[#0F2E23] text-amber-300 border border-[#285E4A]'
                      }`}>
                        {catLabel === 'EQ' ? 'EQ' : catLabel === 'Dynamics' ? 'Dyn' : catLabel === 'Reverb & Delay' ? 'Space' : catLabel === 'Modulation & Pitch' ? 'Mod' : 'Drive'}
                      </span>
                      {itemHasAudio && (
                        <span className="text-xs" title={`Audio Demo Available: ${catLabel}`}>
                          {catEmoji}
                        </span>
                      )}
                    </div>

                    <div className="w-full h-14 flex items-center justify-center p-1 bg-[#0F2E23] rounded-lg border border-[#285E4A] my-1">
                      <AudioEffectIcon
                        name={key}
                        className={`w-full h-full transition-transform group-hover:scale-105 ${
                          isSelected ? 'text-[#FACC15]' : 'text-amber-200/90'
                        }`}
                      />
                    </div>

                    <div className="mt-1">
                      <div className={`text-xs font-bold truncate ${
                        isSelected ? 'text-[#FEF08A]' : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {item.name.split(' (')[0]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: Detailed Inspector Panel */}
        <div className="lg:col-span-5 bg-[#0F2E23] border border-[#285E4A] rounded-xl p-3 flex flex-col justify-between overflow-y-auto h-full max-h-full space-y-3">
          <div className="space-y-3">
            {/* High-Resolution Graphic & Title Box */}
            <div className="p-3 bg-[#14382B] border border-[#CA8A04] rounded-xl flex flex-col items-center gap-2 relative">
              <div className="w-full h-24 flex items-center justify-center bg-[#0F2E23] rounded-lg border border-[#285E4A] p-2">
                <AudioEffectIcon
                  name={selectedEffect}
                  className="w-full h-full text-[#FACC15] filter drop-shadow-[0_2px_8px_rgba(250,204,21,0.25)]"
                />
              </div>

              <div className="w-full text-center">
                <h3 className="text-sm font-bold text-[#FEF08A] tracking-wide">
                  {activeMeta.name}
                </h3>
              </div>

              {/* Audition Button & Progress Bar */}
              {hasAudio ? (
                <div className="w-full space-y-1.5 pt-1">
                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    className={`w-full py-2 px-3 rounded-lg font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                      isPlaying
                        ? 'bg-[#CA8A04] text-[#133629]'
                        : 'bg-[#FACC15] hover:bg-[#FDE047] text-[#133629]'
                    }`}
                  >
                    <span>{isPlaying ? '⏸' : '▶'}</span>
                    <span>{isPlaying ? 'Playing' : `Hear ${cleanName}`}</span>
                  </button>

                  {/* Golden Audio Progress Bar */}
                  <div className="w-full h-1.5 bg-[#0F2E23] rounded-full overflow-hidden border border-[#285E4A]">
                    <div
                      className="h-full bg-[#FACC15] transition-[width] duration-75 ease-linear rounded-full"
                      style={{ width: `${Math.min(100, Math.max(0, audioProgress * 100))}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="w-full text-center p-2 rounded-lg bg-[#0F2E23] border border-[#285E4A] text-xs text-amber-200 flex items-center justify-center gap-1.5">
                  <span>🔍</span>
                  <span>Visual & Parameter Reference</span>
                </div>
              )}
            </div>

            {/* Engineering Function Description */}
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#FACC15]">
                Engineering Function:
              </div>
              <p className="text-xs text-slate-200 leading-relaxed bg-[#14382B] p-2.5 rounded-lg border border-[#285E4A]">
                {activeMeta.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FXLibrary;
