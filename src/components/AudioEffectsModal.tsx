import React from 'react';
import { X } from 'lucide-react';
import { FXLibrary } from './FXLibrary';
import { AudioEffectType } from './AudioEngineeringIcons';

export interface AudioEffectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEffectInitial?: AudioEffectType | null;
}

export const AudioEffectsModal: React.FC<AudioEffectsModalProps> = ({
  isOpen,
  onClose,
  selectedEffectInitial,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-[#133629] border border-[#CA8A04] rounded-2xl w-full max-w-5xl h-[85vh] max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-[#285E4A] flex items-center justify-between bg-[#0F2E23] shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🎛️</span>
            <div>
              <h2 className="text-base font-bold text-[#FEF08A] tracking-wide">
                FX & Audio Processing Library
              </h2>
              <p className="text-[11px] text-slate-300">
                Interactive engineering guides for EQ, Dynamics, Space & Modulations, and Distortions
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-[#285E4A] hover:border-[#FACC15] hover:bg-[#14382B] text-slate-300 hover:text-[#FEF08A] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 min-h-0 overflow-hidden bg-[#133629]">
          <FXLibrary
            initialEffect={selectedEffectInitial || 'compressor'}
            standalone={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioEffectsModal;
