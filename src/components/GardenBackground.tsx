import React from 'react';
import { PixelButterfly } from './PixelSprites';

export const GardenBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* Base enchanted meadow SVG */}
      <svg
        viewBox="0 0 1000 620"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
        className="w-full h-full block"
      >
        {/* Soft meadow base */}
        <rect width="1000" height="620" fill="#A9DAB6" />

        {/* Subtle grass patches */}
        <rect x="0" y="0" width="1000" height="72" fill="#9BD1AA" />
        <rect x="40" y="130" width="240" height="150" rx="16" fill="#B5E3C0" />
        <rect x="520" y="90" width="320" height="170" rx="18" fill="#B5E3C0" />
        <rect x="120" y="390" width="300" height="180" rx="20" fill="#B5E3C0" />
        <rect x="640" y="340" width="290" height="200" rx="20" fill="#9FD4AE" />

        {/* Winding cream pebble path */}
        <path
          d="M 140 160 Q 320 220 420 290 T 520 420 T 760 470"
          fill="none"
          stroke="#E8D2B5"
          strokeWidth="44"
          strokeLinecap="round"
        />
        <path
          d="M 140 160 Q 320 220 420 290 T 520 420 T 760 470"
          fill="none"
          stroke="#F7EAD7"
          strokeWidth="32"
          strokeLinecap="round"
        />
        {/* Side path towards pond & upper right */}
        <path
          d="M 430 280 Q 600 260 760 190"
          fill="none"
          stroke="#E8D2B5"
          strokeWidth="32"
          strokeLinecap="round"
        />
        <path
          d="M 430 280 Q 600 260 760 190"
          fill="none"
          stroke="#F7EAD7"
          strokeWidth="22"
          strokeLinecap="round"
        />

        {/* Stepping stones */}
        <rect x="200" y="182" width="14" height="10" fill="#DEC19E" />
        <rect x="295" y="220" width="16" height="10" fill="#DEC19E" />
        <rect x="445" y="325" width="14" height="10" fill="#DEC19E" />
        <rect x="565" y="425" width="16" height="10" fill="#DEC19E" />
        <rect x="680" y="458" width="14" height="10" fill="#DEC19E" />

        {/* Cozy enchanted pond (center-right-bottom) */}
        <g transform="translate(565, 290)">
          {/* Stone / earth rim */}
          <rect x="6" y="18" width="148" height="82" rx="34" fill="#8BC499" />
          <rect x="12" y="22" width="136" height="72" rx="30" fill="#78BBD9" />
          <rect x="18" y="28" width="124" height="60" rx="26" fill="#9BD4EC" />
          <rect x="26" y="34" width="98" height="36" rx="18" fill="#B5E3F7" />

          {/* Lily pads */}
          <rect x="38" y="46" width="18" height="14" rx="4" fill="#6BB87B" />
          <rect x="44" y="48" width="6" height="6" fill="#FAD2E0" />
          <rect x="104" y="60" width="16" height="12" rx="4" fill="#6BB87B" />
          <rect x="109" y="61" width="6" height="5" fill="#FFF8EE" />
        </g>

        {/* Small decorative pond (bottom-left) */}
        <g transform="translate(360, 495)">
          <rect x="4" y="6" width="112" height="54" rx="24" fill="#8BC499" />
          <rect x="10" y="10" width="100" height="44" rx="20" fill="#78BBD9" />
          <rect x="16" y="15" width="88" height="34" rx="16" fill="#9BD4EC" />
          <rect x="48" y="24" width="14" height="10" rx="3" fill="#6BB87B" />
          <rect x="52" y="25" width="6" height="5" fill="#F9A8C4" />
        </g>

        {/* Wooden pixel fence border along very top */}
        {Array.from({ length: 20 }).map((_, idx) => (
          <g key={`fence-${idx}`} transform={`translate(${idx * 50 + 8}, 10)`}>
            <rect x="0" y="8" width="50" height="5" fill="#C99B72" />
            <rect x="0" y="16" width="50" height="5" fill="#B5865E" />
            <rect x="16" y="2" width="10" height="24" fill="#8C5E4D" />
            <rect x="18" y="4" width="6" height="20" fill="#DDA97E" />
          </g>
        ))}

        {/* Scattered pixel wildflowers & tiny mushrooms */}
        {[
          { x: 64, y: 240, c: '#FFF8EE' },
          { x: 175, y: 120, c: '#F9A8C4' },
          { x: 255, y: 340, c: '#D8C2EF' },
          { x: 350, y: 185, c: '#FFF8EE' },
          { x: 485, y: 125, c: '#F9A8C4' },
          { x: 645, y: 120, c: '#D8C2EF' },
          { x: 890, y: 140, c: '#FFF8EE' },
          { x: 925, y: 290, c: '#F9A8C4' },
          { x: 520, y: 540, c: '#D8C2EF' },
          { x: 265, y: 560, c: '#FFF8EE' },
          { x: 640, y: 555, c: '#F9A8C4' },
          { x: 920, y: 520, c: '#D8C2EF' },
          { x: 140, y: 455, c: '#F9A8C4' },
          { x: 485, y: 270, c: '#FFF8EE' },
        ].map((f, i) => (
          <g key={`flower-${i}`} transform={`translate(${f.x}, ${f.y})`}>
            <rect x="3" y="6" width="2" height="5" fill="#4C8B5B" />
            <rect x="0" y="2" width="8" height="4" fill={f.c} />
            <rect x="2" y="0" width="4" height="8" fill={f.c} />
            <rect x="3" y="3" width="2" height="2" fill="#F8D88C" />
          </g>
        ))}

        {/* Grass tuft pixels */}
        {[
          [92, 118],
          [380, 96],
          [695, 255],
          [815, 360],
          [410, 445],
          [90, 540],
          [870, 560],
        ].map(([gx, gy], idx) => (
          <g key={`tuft-${idx}`} transform={`translate(${gx}, ${gy})`}>
            <rect x="0" y="4" width="2" height="4" fill="#63A873" />
            <rect x="4" y="0" width="2" height="8" fill="#63A873" />
            <rect x="8" y="3" width="2" height="5" fill="#63A873" />
          </g>
        ))}

        {/* Small decorative mushrooms */}
        <g transform="translate(810, 480)">
          <rect x="3" y="6" width="4" height="5" fill="#FFF4E4" />
          <rect x="1" y="2" width="8" height="4" fill="#EA7B96" />
          <rect x="3" y="3" width="2" height="2" fill="#FFF8EE" />
        </g>
        <g transform="translate(275, 290)">
          <rect x="3" y="6" width="4" height="5" fill="#FFF4E4" />
          <rect x="1" y="2" width="8" height="4" fill="#C9A8EA" />
          <rect x="4" y="3" width="2" height="2" fill="#FFF8EE" />
        </g>
      </svg>

      {/* Animated water shimmers */}
      <div
        className="absolute animate-shimmer-water"
        style={{ left: '61%', top: '53%', width: '48px', height: '4px', backgroundColor: '#FFFFFF' }}
      />
      <div
        className="absolute animate-shimmer-water"
        style={{
          left: '64%',
          top: '57%',
          width: '26px',
          height: '4px',
          backgroundColor: '#E8F7FE',
          animationDelay: '1.1s',
        }}
      />
      <div
        className="absolute animate-shimmer-water"
        style={{
          left: '39%',
          top: '83%',
          width: '32px',
          height: '4px',
          backgroundColor: '#FFFFFF',
          animationDelay: '0.6s',
        }}
      />

      {/* Fluttering pixel butterflies */}
      <div className="absolute animate-flutter" style={{ left: '25%', top: '26%' }}>
        <PixelButterfly color="lilac" size={24} />
      </div>
      <div
        className="absolute animate-flutter"
        style={{ left: '67%', top: '22%', animationDelay: '1.8s' }}
      >
        <PixelButterfly color="pink" size={22} />
      </div>
      <div
        className="absolute animate-flutter"
        style={{ left: '47%', top: '76%', animationDelay: '3.1s' }}
      >
        <PixelButterfly color="cream" size={22} />
      </div>

      {/* Gentle falling sakura petals near cherry blossom tree */}
      {[
        { left: '8%', top: '12%', delay: '0s' },
        { left: '14%', top: '16%', delay: '1.4s' },
        { left: '11%', top: '10%', delay: '2.7s' },
      ].map((p, i) => (
        <div
          key={`petal-${i}`}
          className="absolute w-2 h-2 bg-[#F9A8C4]"
          style={{
            left: p.left,
            top: p.top,
            animation: `petalFall 4.8s linear ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
};
