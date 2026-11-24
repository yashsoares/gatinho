import React from 'react';
import { PixelButterfly, PixelCat, PixelHeart } from './PixelSprites';

interface TitleScreenProps {
  onStart: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-[100dvh] w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-gradient-to-b from-[#FCE8EF] via-[#FFF8EE] to-[#DFF2E4]">
      {/* Subtle decorative garden silhouettes in background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Soft pixel meadow floor */}
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-[#A9DAB6] border-t-4 border-[#7EC288]" />
        <div className="absolute bottom-8 left-[8%] w-4 h-4 bg-[#F9A8C4]" />
        <div className="absolute bottom-14 left-[18%] w-3 h-3 bg-[#D8C2EF]" />
        <div className="absolute bottom-10 right-[12%] w-4 h-4 bg-[#FFF8EE]" />
        <div className="absolute bottom-16 right-[22%] w-3 h-3 bg-[#F9A8C4]" />

        <div className="absolute top-[12%] left-[10%] animate-flutter opacity-85">
          <PixelButterfly color="lilac" size={28} />
        </div>
        <div
          className="absolute top-[18%] right-[12%] animate-flutter opacity-85"
          style={{ animationDelay: '1.6s' }}
        >
          <PixelButterfly color="pink" size={26} />
        </div>
      </div>

      {/* Main Cozy Stardew-inspired Card */}
      <main className="relative z-10 w-full max-w-md pixel-box rounded-xl p-6 sm:p-8 text-center animate-pop-in">
        {/* Corner pixel hearts */}
        <div className="absolute top-3 left-3 opacity-80">
          <PixelHeart size={16} color="#F48FB1" highlight="#FFD6E4" />
        </div>
        <div className="absolute top-3 right-3 opacity-80">
          <PixelHeart size={16} color="#F48FB1" highlight="#FFD6E4" />
        </div>

        {/* Cute kitty holding closed envelope */}
        <div className="relative mx-auto w-32 h-32 flex items-center justify-center mb-3">
          <div className="absolute inset-2 rounded-full bg-[#FCE8EF] border-2 border-[#F2D7B6]" />
          <div className="relative animate-float-slow">
            <PixelCat variant="cream" mood="letter" size={104} />
          </div>
          <div className="absolute -top-1 right-2 animate-heart-rise">
            <PixelHeart size={18} />
          </div>
        </div>

        <h1 className="font-pixel text-3xl sm:text-4xl font-bold text-[#5C3A31] tracking-tight mb-3 text-balance">
          Cadê o gatinho?
        </h1>

        <p className="font-body text-base sm:text-[17px] leading-relaxed text-[#6E473B] font-medium mb-7 max-w-sm mx-auto">
          Um gatinho tem uma cartinha especial para você, mas ele se escondeu! Será que você consegue encontrar?
        </p>

        <button
          type="button"
          onClick={onStart}
          className="pixel-btn w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-lg bg-[#F48FB1] hover:bg-[#EE7AA1] text-[#4A202E] font-pixel text-xl font-bold tracking-wide cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D8C2EF]"
        >
          Vamos procurar!
        </button>
      </main>
    </div>
  );
};
