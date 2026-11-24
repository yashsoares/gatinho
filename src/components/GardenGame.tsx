import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, X } from 'lucide-react';
import { soundEngine } from '../audio/soundEngine';
import { HIDING_SPOTS, HidingSpotConfig, SpotOutcome } from '../types/game';
import { GardenBackground } from './GardenBackground';
import {
  PixelButterfly,
  PixelCat,
  PixelEnvelope,
  PixelHeart,
  PixelHidingObject,
} from './PixelSprites';

interface GardenGameProps {
  outcomes: Record<string, SpotOutcome>;
  foundCat: boolean;
  muted: boolean;
  onToggleMute: () => void;
  onFindCorrectCat: () => void;
  onOpenLetter: () => void;
}

interface ActiveMessage {
  spotId: string;
  spotLabel: string;
  outcome: SpotOutcome;
}

export const GardenGame: React.FC<GardenGameProps> = ({
  outcomes,
  foundCat,
  muted,
  onToggleMute,
  onFindCorrectCat,
  onOpenLetter,
}) => {
  const [visitedIds, setVisitedIds] = useState<Record<string, boolean>>({});
  const [wigglingId, setWigglingId] = useState<string | null>(null);
  const [activeMessage, setActiveMessage] = useState<ActiveMessage | null>(null);
  const [showMobileHint, setShowMobileHint] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Center the garden scroll nicely on mobile on mount
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    if (el.scrollWidth > el.clientWidth) {
      el.scrollLeft = Math.round((el.scrollWidth - el.clientWidth) / 2);
    }
    if (el.scrollHeight > el.clientHeight) {
      el.scrollTop = Math.round((el.scrollHeight - el.clientHeight) / 3);
    }
  }, []);

  const visitedCount = Object.keys(visitedIds).length;
  const totalSpots = HIDING_SPOTS.length;

  const handleSpotClick = (spot: HidingSpotConfig) => {
    if (foundCat) return;
    setShowMobileHint(false);
    soundEngine.unlock();
    soundEngine.playRustle();

    setWigglingId(spot.id);
    window.setTimeout(() => {
      setWigglingId((prev) => (prev === spot.id ? null : prev));
    }, 450);

    const outcome = outcomes[spot.id];
    if (!outcome) return;

    setVisitedIds((prev) => ({ ...prev, [spot.id]: true }));

    if (outcome.isCorrect) {
      setActiveMessage(null);
      soundEngine.playHappyMeow();
      onFindCorrectCat();
      return;
    }

    if (outcome.hasCat) {
      // Slight pitch variation per spot so each kitty sounds unique
      const pitch = 0.92 + ((spot.xPct % 5) * 0.06);
      window.setTimeout(() => {
        soundEngine.playSoftMeow(pitch);
      }, 90);
    }

    setActiveMessage({
      spotId: spot.id,
      spotLabel: spot.label,
      outcome,
    });
  };

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col bg-[#EAF5E8] select-none overflow-hidden">
      {/* Compact Cozy Top HUD (<= 15% height on mobile, clean single row) */}
      <header className="relative z-20 flex items-center justify-between gap-3 px-3 sm:px-6 py-2.5 bg-[#FFF8EE]/95 border-b-3 border-[#6E473B] shadow-sm">
        <div className="flex items-center gap-2 min-w-0">
          <PixelHeart size={18} className="shrink-0" />
          <span className="font-pixel text-lg sm:text-xl font-bold text-[#5C3A31] truncate">
            Cadê o gatinho?
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="font-body text-xs sm:text-sm font-bold text-[#6E473B] tabular-nums whitespace-nowrap">
            {visitedCount} / {totalSpots} cantinhos
          </span>

          <button
            type="button"
            onClick={onToggleMute}
            aria-label={muted ? 'Ativar som' : 'Silenciar som'}
            className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg bg-[#FCE8EF] border-2 border-[#6E473B] text-[#5C3A31] hover:bg-[#FAD2E0] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A4B62]"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Garden Viewport */}
      <main className="relative flex-1 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden">
        {/* Mobile swipe prompt (auto hides on interaction) */}
        {showMobileHint && !foundCat && (
          <div className="lg:hidden absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3.5 py-1.5 rounded-lg bg-[#FFF8EE]/95 border-2 border-[#6E473B] shadow-sm">
            <span className="font-body text-xs font-bold text-[#5C3A31] whitespace-nowrap">
              Arraste e toque nos objetos do jardim
            </span>
          </div>
        )}

        {/* Scrollable / Panning Frame on small screens, full view on desktop */}
        <div
          ref={scrollContainerRef}
          onScroll={() => {
            if (showMobileHint) setShowMobileHint(false);
          }}
          className="garden-scroll relative w-full h-[calc(100dvh-74px)] lg:h-auto lg:max-w-[1040px] lg:aspect-[1000/620] overflow-auto lg:overflow-hidden rounded-xl border-4 border-[#6E473B] shadow-[0_10px_0_rgba(110,71,59,0.2)] bg-[#A9DAB6]"
        >
          {/* Fixed logical 1000x620 garden world on mobile, responsive full-fit on desktop */}
          <div className="relative w-[940px] h-[582px] lg:w-full lg:h-full">
            <GardenBackground />

            {/* 14 Interactive Hiding Spots */}
            {HIDING_SPOTS.map((spot) => {
              const outcome = outcomes[spot.id];
              const isVisited = !!visitedIds[spot.id];
              const isWiggling = wigglingId === spot.id;
              const isSelected = activeMessage?.spotId === spot.id;

              return (
                <div
                  key={spot.id}
                  style={{
                    left: `${spot.xPct}%`,
                    top: `${spot.yPct}%`,
                    width: `${spot.width}px`,
                    height: `${spot.height}px`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <button
                    type="button"
                    onClick={() => handleSpotClick(spot)}
                    aria-label={`Procurar em: ${spot.label}`}
                    className={`group relative w-full h-full flex items-center justify-center rounded-xl transition-transform duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F48FB1] hover:scale-105 active:scale-95 ${
                      isWiggling ? 'animate-bush-wiggle' : ''
                    }`}
                  >
                    {/* Gentle hover aura */}
                    <span
                      className={`absolute inset-1 rounded-full transition-opacity duration-200 pointer-events-none ${
                        isSelected
                          ? 'bg-[#FFF8EE]/55 opacity-100 ring-2 ring-[#F48FB1]'
                          : 'bg-[#FFF8EE]/45 opacity-0 group-hover:opacity-100'
                      }`}
                    />

                    {/* Pixel Art Hiding Object */}
                    <div className="relative w-full h-full p-1">
                      <PixelHidingObject type={spot.type} visited={isVisited} />
                    </div>

                    {/* Revealed Decoy Cat peeking out once visited */}
                    {isVisited && outcome?.hasCat && !outcome.isCorrect && outcome.catVariant && outcome.catMood && (
                      <div className="absolute -bottom-1 -right-2 pointer-events-none animate-pop-in drop-shadow-sm">
                        <PixelCat
                          variant={outcome.catVariant}
                          mood={outcome.catMood}
                          size={48}
                        />
                      </div>
                    )}

                    {/* Subtle explored checkmark pixel dot for empty garden spots */}
                    {isVisited && !outcome?.hasCat && (
                      <span
                        className="absolute top-1 right-1 w-3 h-3 rounded-xs bg-[#FFF8EE] border-2 border-[#6E473B]"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Cozy Stardew-style Dialogue Box for Wrong Spots */}
      {activeMessage && !foundCat && (
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-30 w-[calc(100%-1.5rem)] max-w-lg animate-pop-in">
          <div className="pixel-box rounded-xl p-3.5 sm:p-4 flex items-center gap-3.5 relative">
            {/* Portrait */}
            <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] shrink-0 rounded-lg bg-[#FCE8EF] border-2 border-[#6E473B] flex items-center justify-center overflow-hidden">
              {activeMessage.outcome.hasCat &&
              activeMessage.outcome.catVariant &&
              activeMessage.outcome.catMood ? (
                <PixelCat
                  variant={activeMessage.outcome.catVariant}
                  mood={activeMessage.outcome.catMood}
                  size={62}
                />
              ) : (
                <PixelButterfly color="pink" size={38} />
              )}
            </div>

            {/* Dialogue Text */}
            <div className="flex-1 min-w-0 pr-6">
              <p className="font-pixel text-xs font-bold text-[#9C6553] mb-0.5 truncate">
                {activeMessage.spotLabel}
              </p>
              <p className="font-body text-sm sm:text-base font-bold text-[#4A3531] leading-snug">
                {activeMessage.outcome.message}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveMessage(null)}
              aria-label="Fechar mensagem"
              className="absolute top-2 right-2 min-w-[32px] min-h-[32px] flex items-center justify-center rounded-md text-[#6E473B] hover:bg-[#F2D7B6]/60 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Found Correct Kitty Celebration Overlay */}
      {foundCat && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-[#4A3531]/45 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="found-kitty-title"
        >
          <div className="relative w-full max-w-md pixel-box-pink rounded-xl p-6 sm:p-8 text-center animate-pop-in">
            {/* Floating pixel hearts around the happy kitty */}
            <div className="relative mx-auto w-40 h-36 flex items-center justify-center mb-3">
              <div className="absolute left-2 top-5 animate-heart-rise">
                <PixelHeart size={20} />
              </div>
              <div
                className="absolute right-2 top-3 animate-heart-rise"
                style={{ animationDelay: '0.45s' }}
              >
                <PixelHeart size={22} color="#F48FB1" highlight="#FFE3EC" />
              </div>
              <div
                className="absolute left-8 -top-1 animate-heart-rise"
                style={{ animationDelay: '0.9s' }}
              >
                <PixelHeart size={16} color="#C9A8EA" highlight="#EFE4FC" />
              </div>
              <div
                className="absolute right-9 bottom-4 animate-heart-rise"
                style={{ animationDelay: '1.2s' }}
              >
                <PixelHeart size={18} />
              </div>

              {/* Jumping happy kitty */}
              <div className="animate-kitty-hop">
                <PixelCat variant="cream" mood="letter" size={112} />
              </div>
            </div>

            {/* Closed envelope being delivered */}
            <div className="flex justify-center mb-3">
              <div className="animate-float-slow">
                <PixelEnvelope size={52} open={false} />
              </div>
            </div>

            <h2
              id="found-kitty-title"
              className="font-pixel text-2xl sm:text-3xl font-bold text-[#5C3A31] leading-snug mb-6 text-balance"
            >
              Você me encontrou! Tenho algo para você...
            </h2>

            <button
              type="button"
              onClick={onOpenLetter}
              className="pixel-btn w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-lg bg-[#F48FB1] hover:bg-[#EE7AA1] text-[#4A202E] font-pixel text-xl font-bold tracking-wide cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D8C2EF]"
            >
              Abrir cartinha
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
