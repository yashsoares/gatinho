import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '../audio/soundEngine';
import { PixelCat, PixelEnvelope, PixelHeart } from './PixelSprites';

interface LetterSurpriseProps {
  muted: boolean;
  onToggleMute: () => void;
  onPlayAgain: () => void;
}

interface FallingHeart {
  id: number;
  leftPct: number;
  size: number;
  durationSec: number;
  delaySec: number;
  color: string;
  highlight: string;
}

const HEART_COLORS = [
  { color: '#E85A71', highlight: '#FF9EB0' },
  { color: '#F48FB1', highlight: '#FFD6E4' },
  { color: '#C9A8EA', highlight: '#EFE4FC' },
  { color: '#F2799B', highlight: '#FFC7D8' },
];

const FALLING_HEARTS: FallingHeart[] = Array.from({ length: 24 }).map((_, index) => {
  const palette = HEART_COLORS[index % HEART_COLORS.length];
  return {
    id: index,
    leftPct: ((index * 17 + 7) % 94) + 3,
    size: 14 + (index % 3) * 5,
    durationSec: 4.5 + (index % 4) * 1.1,
    delaySec: (index % 7) * 0.65,
    color: palette.color,
    highlight: palette.highlight,
  };
});

export const LetterSurprise: React.FC<LetterSurpriseProps> = ({
  muted,
  onToggleMute,
  onPlayAgain,
}) => {
  // Animation stages: 'closed' -> 'opening' -> 'revealed'
  const [stage, setStage] = useState<'closed' | 'opening' | 'revealed'>('closed');

  useEffect(() => {
    soundEngine.playPaperOpen();
    soundEngine.startRomanticMusic();

    const t1 = window.setTimeout(() => {
      setStage('opening');
    }, 350);

    const t2 = window.setTimeout(() => {
      setStage('revealed');
    }, 1050);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      soundEngine.stopRomanticMusic();
    };
  }, []);

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden bg-gradient-to-b from-[#FCE4EC] via-[#FFF6F8] to-[#EAE0F7]">
      {/* Falling hearts rain keyframes injected cleanly via CSS classes */}
      <style>{`
        @keyframes heartRainFall {
          0% {
            transform: translateY(-10vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.92;
          }
          85% {
            opacity: 0.92;
          }
          100% {
            transform: translateY(108vh) translateX(18px) rotate(16deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* Heart Rain Layer */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {FALLING_HEARTS.map((heart) => (
          <div
            key={heart.id}
            className="absolute -top-8"
            style={{
              left: `${heart.leftPct}%`,
              animation: `heartRainFall ${heart.durationSec}s linear ${heart.delaySec}s infinite`,
            }}
          >
            <PixelHeart
              size={heart.size}
              color={heart.color}
              highlight={heart.highlight}
            />
          </div>
        ))}
      </div>

      {/* Subtle audio toggle in top right */}
      <div className="fixed top-3 right-3 sm:top-5 sm:right-5 z-30">
        <button
          type="button"
          onClick={onToggleMute}
          aria-label={muted ? 'Ativar música' : 'Silenciar música'}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-[#FFF8EE]/90 border-2 border-[#6E473B] text-[#5C3A31] hover:bg-[#FAD2E0] transition-colors shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A4B62]"
        >
          {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Envelope & Letter Stage */}
      <main className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Envelope Opening Sequence */}
        <div
          className={`transition-all duration-700 ease-out flex flex-col items-center ${
            stage === 'revealed'
              ? 'opacity-90 scale-90 -mb-5'
              : 'opacity-100 scale-105 mb-4'
          }`}
        >
          <PixelEnvelope size={92} open={stage !== 'closed'} />
        </div>

        {/* Heart-decorated Paper Sheet rising slowly */}
        <div
          className={`w-full transition-all duration-700 ease-out ${
            stage === 'revealed'
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
          }`}
        >
          <div className="relative w-full bg-[#FFFDF7] border-4 border-[#8A4B62] rounded-xl px-6 py-10 sm:px-8 sm:py-12 shadow-[inset_0_0_0_4px_#FAD2E0,0_10px_0_rgba(138,75,98,0.2)] text-center">
            {/* Small decorative pixel hearts on the letter paper */}
            <div className="absolute top-3.5 left-3.5" aria-hidden="true">
              <PixelHeart size={16} color="#F48FB1" highlight="#FFE3EC" />
            </div>
            <div className="absolute top-3.5 right-3.5" aria-hidden="true">
              <PixelHeart size={16} color="#F48FB1" highlight="#FFE3EC" />
            </div>
            <div className="absolute bottom-3.5 left-3.5" aria-hidden="true">
              <PixelHeart size={16} color="#F48FB1" highlight="#FFE3EC" />
            </div>
            <div className="absolute bottom-3.5 right-3.5" aria-hidden="true">
              <PixelHeart size={16} color="#F48FB1" highlight="#FFE3EC" />
            </div>
            <div className="flex justify-center gap-3 mb-4" aria-hidden="true">
              <PixelHeart size={14} color="#E85A71" highlight="#FF9EB0" />
              <PixelHeart size={18} color="#F48FB1" highlight="#FFE3EC" />
              <PixelHeart size={14} color="#E85A71" highlight="#FF9EB0" />
            </div>

            {/* Exact required message — no spelling correction, no extra words */}
            <p className="font-pixel text-2xl sm:text-3xl font-bold text-[#5C2A38] leading-relaxed tracking-wide break-words">
              se vc leu ta me devendo mil beijos
            </p>

            <div className="flex justify-center gap-3 mt-4" aria-hidden="true">
              <PixelHeart size={14} color="#C9A8EA" highlight="#EFE4FC" />
              <PixelHeart size={14} color="#E85A71" highlight="#FF9EB0" />
              <PixelHeart size={14} color="#C9A8EA" highlight="#EFE4FC" />
            </div>
          </div>
        </div>

        {/* Celebrating Kitty */}
        <div
          className={`mt-6 flex flex-col items-center transition-all duration-700 delay-200 ${
            stage === 'revealed' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute -left-5 top-2 animate-heart-rise">
              <PixelHeart size={16} />
            </div>
            <div
              className="absolute -right-5 top-0 animate-heart-rise"
              style={{ animationDelay: '0.6s' }}
            >
              <PixelHeart size={16} color="#F48FB1" highlight="#FFE3EC" />
            </div>
            <div className="animate-kitty-hop">
              <PixelCat variant="sakura" mood="playful" size={88} />
            </div>
          </div>

          {/* Discreet Play Again button */}
          <button
            type="button"
            onClick={onPlayAgain}
            className="mt-5 min-h-[44px] px-5 py-2 rounded-lg bg-[#FFF8EE]/85 hover:bg-[#FFF8EE] border-2 border-[#8A4B62]/60 hover:border-[#8A4B62] text-[#6E473B] font-body text-sm font-bold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A4B62]"
          >
            Jogar novamente
          </button>
        </div>
      </main>
    </div>
  );
};
