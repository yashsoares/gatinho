import React from 'react';
import { CatMood, CatVariant, HidingSpotType } from '../types/game';

interface PixelHeartProps {
  className?: string;
  color?: string;
  highlight?: string;
  size?: number;
}

export const PixelHeart: React.FC<PixelHeartProps> = ({
  className = '',
  color = '#E85A71',
  highlight = '#FF9EB0',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 11"
    shapeRendering="crispEdges"
    className={className}
    aria-hidden="true"
  >
    {/* Outline */}
    <path
      fill="#5C2A38"
      d="M2 0h3v1H2V0zm5 0h3v1H7V0zM1 1h1v1H1V1zm4 0h2v1H5V1zm5 0h1v1h-1V1zM0 2h1v3H0V2zm11 0h1v3h-1V2zM1 5h1v2H1V5zm9 0h1v2h-1V5zM2 7h1v1H2V7zm7 0h1v1H9V7zM3 8h1v1H3V8zm5 0h1v1H8V8zM4 9h1v1H4V9zm3 0h1v1H7V9zM5 10h2v1H5v-1z"
    />
    {/* Fill */}
    <path
      fill={color}
      d="M2 1h3v1H2V1zm5 0h3v1H7V1zM1 2h10v3H1V2zm1 3h8v2H2V5zm1 2h6v1H3V7zm1 1h4v1H4V8zm1 1h2v1H5V9z"
    />
    {/* Pixel shine */}
    <rect x="2" y="2" width="2" height="1" fill={highlight} />
    <rect x="2" y="3" width="1" height="1" fill={highlight} />
  </svg>
);

export const PixelEnvelope: React.FC<{
  size?: number;
  className?: string;
  open?: boolean;
}> = ({ size = 44, className = '', open = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 18"
    shapeRendering="crispEdges"
    className={className}
    aria-hidden="true"
  >
    {open ? (
      <>
        {/* Open top flap */}
        <path fill="#6E473B" d="M2 1h16v1H2V1zM1 2h1v2H1V2zm17 0h1v2h-1V2zM0 4h1v12H0V4zm19 0h1v12h-1V4zM1 16h18v1H1v-1z" />
        <path fill="#F3DEC5" d="M2 2h16v3H2V2z" />
        <path fill="#FFF8EE" d="M3 4h14v5H3V4z" />
        {/* Tiny heart peeking inside */}
        <rect x="9" y="5" width="2" height="2" fill="#E85A71" />
        {/* Envelope body */}
        <path fill="#FCE7EE" d="M1 7h18v9H1V7z" />
        <path fill="#F5C6D6" d="M1 14h18v2H1v-2z" />
        <path fill="#C48F9E" d="M2 7h2v1H2V7zm14 0h2v1h-2V7zM4 8h2v1H4V8zm10 0h2v1h-2V8zM6 9h2v1H6V9zm6 0h2v1h-2V9zM8 10h4v1H8v-1z" />
      </>
    ) : (
      <>
        {/* Closed envelope */}
        <path
          fill="#6E473B"
          d="M1 3h18v1H1V3zM0 4h1v11H0V4zm19 0h1v11h-1V4zM1 15h18v1H1v-1z"
        />
        <path fill="#FFF8EE" d="M1 4h18v11H1V4z" />
        <path fill="#F4DFC8" d="M1 13h18v2H1v-2z" />
        {/* Flap lines */}
        <path
          fill="#C69D7E"
          d="M2 5h2v1H2V5zm14 0h2v1h-2V5zM4 6h2v1H4V6zm10 0h2v1h-2V6zM6 7h2v1H6V7zm6 0h2v1h-2V7zM8 8h4v1H8V8z"
        />
        {/* Red heart wax seal */}
        <path fill="#8C2338" d="M8 8h1v1H8V8zm3 0h1v1h-1V8zM7 9h6v2H7V9zm1 2h4v1H8v-1zm1 1h2v1H9v-1z" />
        <path fill="#E85A71" d="M8 9h1v1H8V9zm3 0h1v1h-1V9zm-3 1h4v1H8v-1zm1 1h2v1H9v-1z" />
        <rect x="8" y="9" width="1" height="1" fill="#FF9EB0" />
      </>
    )}
  </svg>
);

export const PixelButterfly: React.FC<{
  color?: 'lilac' | 'pink' | 'cream';
  size?: number;
  className?: string;
}> = ({ color = 'lilac', size = 24, className = '' }) => {
  const palette = {
    lilac: { main: '#C9A8EA', dark: '#8F6AB8', spot: '#FFF5F8' },
    pink: { main: '#F9A8C4', dark: '#D66B92', spot: '#FFF8EE' },
    cream: { main: '#F6DF9F', dark: '#C8A559', spot: '#FFFDF8' },
  }[color];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 10"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      <path
        fill={palette.dark}
        d="M1 1h3v1H1V1zm7 0h3v1H8V1zM0 2h1v3H0V2zm11 0h1v3h-1V2zM5 2h2v6H5V2zM1 5h3v1H1V5zm7 0h3v1H8V5zM2 6h2v2H2V6zm6 0h2v2H8V6z"
      />
      <path
        fill={palette.main}
        d="M1 2h3v3H1V2zm7 0h3v3H8V2zM2 6h2v1H2V6zm6 0h2v1H8V6z"
      />
      <rect x="2" y="3" width="1" height="1" fill={palette.spot} />
      <rect x="9" y="3" width="1" height="1" fill={palette.spot} />
      <rect x="5" y="1" width="1" height="1" fill="#5A3E36" />
      <rect x="6" y="1" width="1" height="1" fill="#5A3E36" />
    </svg>
  );
};

interface CatPalette {
  outline: string;
  body: string;
  shade: string;
  belly: string;
  earInner: string;
  patch?: string;
  patch2?: string;
}

const CAT_PALETTES: Record<CatVariant, CatPalette> = {
  cream: {
    outline: '#5E4239',
    body: '#FFF3E0',
    shade: '#EBD3B5',
    belly: '#FFFDF9',
    earInner: '#F9B4C6',
  },
  sakura: {
    outline: '#693B4B',
    body: '#FADCE5',
    shade: '#EDB6C8',
    belly: '#FFF6F9',
    earInner: '#F38BA8',
  },
  lilac: {
    outline: '#514166',
    body: '#E3D5F5',
    shade: '#C6B0E3',
    belly: '#F9F4FF',
    earInner: '#F7B7CC',
  },
  ginger: {
    outline: '#663B24',
    body: '#F5B57D',
    shade: '#DE8F52',
    belly: '#FFF3E4',
    earInner: '#F7A9B8',
    patch: '#D97B38',
  },
  calico: {
    outline: '#543C34',
    body: '#FFF8F0',
    shade: '#E6D6C7',
    belly: '#FFFFFF',
    earInner: '#F7A9B8',
    patch: '#EE9E5E',
    patch2: '#6B524B',
  },
  tuxedo: {
    outline: '#322B38',
    body: '#524B5C',
    shade: '#3C3645',
    belly: '#FFFBF5',
    earInner: '#F2A3B7',
  },
  gray: {
    outline: '#434654',
    body: '#C5CBD8',
    shade: '#9FA7BA',
    belly: '#F4F6FA',
    earInner: '#F5ACC0',
  },
  honey: {
    outline: '#63462C',
    body: '#F8D88C',
    shade: '#E2B660',
    belly: '#FFF9EB',
    earInner: '#F7A9B8',
  },
};

export const PixelCat: React.FC<{
  variant: CatVariant;
  mood: CatMood;
  size?: number;
  className?: string;
}> = ({ variant, mood, size = 84, className = '' }) => {
  const c = CAT_PALETTES[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      {/* Subtle ground shadow */}
      <rect x="6" y="21" width="12" height="2" fill="rgba(74, 53, 49, 0.16)" />

      {/* Tail */}
      <path
        fill={c.outline}
        d={
          mood === 'playful' || mood === 'letter'
            ? 'M17 14h2v1h-2v-1zm2 1h2v3h-2v-3zm-1 3h2v1h-2v-1z'
            : 'M17 18h3v2h-3v-2zm2-1h2v2h-2v-2z'
        }
      />
      <path
        fill={c.shade}
        d={
          mood === 'playful' || mood === 'letter'
            ? 'M18 15h2v3h-2v-3z'
            : 'M17 18h3v1h-3v-1z'
        }
      />

      {/* Ears outline */}
      <path
        fill={c.outline}
        d="M5 3h2v1H5V3zm12 0h2v1h-2V3zM4 4h1v3H4V4zm3 0h2v1H7V4zm8 0h2v1h-2V4zm4 0h1v3h-1V4zM9 5h6v1H9V5z"
      />
      {/* Head & Body outline */}
      <path
        fill={c.outline}
        d="M4 7h1v6H4V7zm15 0h1v6h-1V7zM5 13h1v1H5v-1zm13 0h1v1h-1v-1zM5 14h1v6H5v-6zm13 0h1v6h-1v-6zM6 20h12v1H6v-1z"
      />

      {/* Ears fill */}
      <path fill={c.body} d="M5 4h2v3H5V4zm12 0h2v3h-2V4zM7 5h2v2H7V5zm8 0h2v2h-2V5z" />
      <rect x="6" y="5" width="1" height="2" fill={c.earInner} />
      <rect x="17" y="5" width="1" height="2" fill={c.earInner} />

      {/* Head fill */}
      <path fill={c.body} d="M5 6h14v7H5V6z" />
      {/* Calico / Ginger markings */}
      {c.patch && (
        <>
          <rect x="5" y="6" width="4" height="3" fill={c.patch} />
          <rect x="15" y="5" width="3" height="2" fill={c.patch2 || c.patch} />
        </>
      )}

      {/* Body fill */}
      <path fill={c.body} d="M6 13h12v7H6v-7z" />
      {/* Tuxedo / belly patch */}
      <path fill={c.belly} d="M9 14h6v6H9v-6z" />
      {variant === 'tuxedo' && (
        <path fill={c.belly} d="M9 11h6v2H9v-2zm1-1h4v1h-4v-1z" />
      )}
      {/* Paws */}
      <rect x="7" y="19" width="3" height="1" fill={c.belly} />
      <rect x="14" y="19" width="3" height="1" fill={c.belly} />

      {/* Cute rosy cheeks */}
      <rect x="6" y="10" width="2" height="1" fill="#F89CB3" />
      <rect x="16" y="10" width="2" height="1" fill="#F89CB3" />

      {/* Tiny pink nose */}
      <rect x="11" y="10" width="2" height="1" fill="#F17896" />

      {/* Expressions */}
      {mood === 'sleeping' && (
        <>
          {/* Closed happy eyes */}
          <rect x="7" y="9" width="3" height="1" fill={c.outline} />
          <rect x="14" y="9" width="3" height="1" fill={c.outline} />
          {/* Tiny mouth */}
          <rect x="11" y="11" width="2" height="1" fill={c.outline} />
          {/* Pixel Zzz */}
          <path fill="#8D73B5" d="M19 2h3v1h-3V2zm1 1h1v1h-1V3zm-1 1h3v1h-3V4z" />
          <path fill="#B598DF" d="M21 0h2v1h-2V0zm0 1h2v1h-2V1z" />
        </>
      )}

      {mood === 'cheeky' && (
        <>
          {/* Left wink, right bright eye, little pink tongue */}
          <rect x="7" y="9" width="3" height="1" fill={c.outline} />
          <rect x="14" y="8" width="2" height="2" fill={c.outline} />
          <rect x="14" y="8" width="1" height="1" fill="#FFFFFF" />
          <rect x="11" y="11" width="2" height="1" fill={c.outline} />
          <rect x="11" y="12" width="2" height="1" fill="#F4799B" />
        </>
      )}

      {mood === 'blinking' && (
        <>
          <rect x="7" y="8" width="2" height="2" fill={c.outline} />
          <rect x="7" y="8" width="1" height="1" fill="#FFFFFF" />
          <rect x="14" y="9" width="3" height="1" fill={c.outline} />
          <rect x="10" y="11" width="1" height="1" fill={c.outline} />
          <rect x="13" y="11" width="1" height="1" fill={c.outline} />
          <rect x="11" y="11" width="2" height="1" fill={c.outline} />
        </>
      )}

      {mood === 'yawning' && (
        <>
          <rect x="7" y="9" width="3" height="1" fill={c.outline} />
          <rect x="14" y="9" width="3" height="1" fill={c.outline} />
          {/* Open cute yawn mouth */}
          <rect x="11" y="11" width="2" height="2" fill="#E86D88" />
        </>
      )}

      {mood === 'curious' && (
        <>
          {/* Big sparkly eyes */}
          <rect x="7" y="8" width="2" height="2" fill={c.outline} />
          <rect x="7" y="8" width="1" height="1" fill="#FFFFFF" />
          <rect x="15" y="8" width="2" height="2" fill={c.outline} />
          <rect x="15" y="8" width="1" height="1" fill="#FFFFFF" />
          <rect x="11" y="11" width="2" height="1" fill={c.outline} />
          {/* Little question pixel */}
          <path fill="#D9688E" d="M20 2h2v1h-2V2zm1 1h1v2h-1V3zm-1 1h1v1h-1V4zm0 2h1v1h-1V6z" />
        </>
      )}

      {mood === 'grooming' && (
        <>
          <rect x="7" y="9" width="3" height="1" fill={c.outline} />
          <rect x="14" y="9" width="3" height="1" fill={c.outline} />
          {/* Raised paw near cheek */}
          <rect x="6" y="12" width="3" height="3" fill={c.belly} />
          <rect x="6" y="11" width="3" height="1" fill={c.outline} />
          <rect x="11" y="11" width="2" height="1" fill={c.outline} />
        </>
      )}

      {mood === 'playful' && (
        <>
          <rect x="7" y="8" width="2" height="2" fill={c.outline} />
          <rect x="7" y="8" width="1" height="1" fill="#FFFFFF" />
          <rect x="15" y="8" width="2" height="2" fill={c.outline} />
          <rect x="15" y="8" width="1" height="1" fill="#FFFFFF" />
          <rect x="10" y="11" width="1" height="1" fill={c.outline} />
          <rect x="13" y="11" width="1" height="1" fill={c.outline} />
          <rect x="11" y="11" width="2" height="1" fill="#F27D9B" />
          {/* Playful raised paw */}
          <rect x="4" y="14" width="2" height="2" fill={c.belly} />
        </>
      )}

      {mood === 'letter' && (
        <>
          {/* Bright happy sparkling eyes */}
          <rect x="7" y="8" width="2" height="2" fill={c.outline} />
          <rect x="7" y="8" width="1" height="1" fill="#FFFFFF" />
          <rect x="15" y="8" width="2" height="2" fill={c.outline} />
          <rect x="15" y="8" width="1" height="1" fill="#FFFFFF" />
          {/* Happy smile */}
          <rect x="10" y="11" width="1" height="1" fill={c.outline} />
          <rect x="13" y="11" width="1" height="1" fill={c.outline} />
          <rect x="11" y="11" width="2" height="1" fill={c.outline} />
          {/* Envelope held cleanly in paws */}
          <rect x="7" y="14" width="10" height="7" fill="#6E473B" />
          <rect x="8" y="15" width="8" height="5" fill="#FFF8EE" />
          <rect x="8" y="15" width="2" height="1" fill="#D5B293" />
          <rect x="14" y="15" width="2" height="1" fill="#D5B293" />
          <rect x="10" y="16" width="4" height="1" fill="#D5B293" />
          {/* Red heart seal on letter */}
          <rect x="11" y="16" width="2" height="2" fill="#E85A71" />
          <rect x="11" y="16" width="1" height="1" fill="#FF9EB0" />
          {/* Little paws holding sides of envelope */}
          <rect x="6" y="16" width="2" height="2" fill={c.belly} />
          <rect x="16" y="16" width="2" height="2" fill={c.belly} />
        </>
      )}
    </svg>
  );
};

export const PixelHidingObject: React.FC<{
  type: HidingSpotType;
  visited?: boolean;
}> = ({ type, visited = false }) => {
  const opacityClass = visited ? 'opacity-90' : 'opacity-100';

  switch (type) {
    case 'sakura_tree':
      return (
        <svg viewBox="0 0 32 32" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          {/* Shadow */}
          <rect x="7" y="28" width="18" height="3" fill="rgba(74,53,49,0.18)" />
          {/* Trunk */}
          <path fill="#6E473B" d="M13 18h6v11h-6V18zM11 27h10v2H11v-2z" />
          <path fill="#8C5E4D" d="M14 19h4v9h-4v-9z" />
          {/* Canopy outline */}
          <path
            fill="#9E5671"
            d="M9 3h14v2H9V3zM5 5h4v2H5V5zm18 0h4v2h-4V5zM3 7h2v9H3V7zm24 0h2v9h-2V7zM5 16h4v2H5v-2zm18 0h4v2h-4v-2zM9 18h14v2H9v-2z"
          />
          {/* Canopy pastel pink */}
          <path fill="#F9C5D5" d="M9 5h14v13H9V5zM5 7h22v9H5V7z" />
          <path fill="#F49CB8" d="M5 13h22v3H5v-3zm4 3h14v2H9v-2z" />
          <path fill="#FFE6EE" d="M10 6h6v3h-6V6zm7 2h4v2h-4V8z" />
          {/* Blossom flowers */}
          <rect x="7" y="9" width="2" height="2" fill="#FFF8FA" />
          <rect x="19" y="11" width="2" height="2" fill="#FFF8FA" />
          <rect x="13" y="13" width="2" height="2" fill="#E86A8D" />
        </svg>
      );

    case 'rose_bush':
      return (
        <svg viewBox="0 0 28 24" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          <rect x="4" y="20" width="20" height="3" fill="rgba(74,53,49,0.18)" />
          <path
            fill="#3C6B49"
            d="M8 4h12v2H8V4zM4 6h4v2H4V6zm16 0h4v2h-4V6zM2 8h2v9H2V8zm22 0h2v9h-2V8zM4 17h4v3H4v-3zm16 0h4v3h-4v-3zM8 19h12v2H8v-2z"
          />
          <path fill="#6EB37B" d="M8 6h12v13H8V6zM4 8h20v9H4V8z" />
          <path fill="#529660" d="M4 14h20v3H4v-3zm4 3h12v2H8v-2z" />
          <rect x="9" y="7" width="4" height="2" fill="#92CE9C" />
          {/* Pastel roses */}
          <rect x="7" y="10" width="3" height="3" fill="#F2799B" />
          <rect x="8" y="11" width="1" height="1" fill="#FFD3E0" />
          <rect x="17" y="8" width="3" height="3" fill="#F2799B" />
          <rect x="18" y="9" width="1" height="1" fill="#FFD3E0" />
          <rect x="13" y="14" width="3" height="3" fill="#FAD2E0" />
          <rect x="14" y="15" width="1" height="1" fill="#FFF" />
        </svg>
      );

    case 'terracotta_pot':
      return (
        <svg viewBox="0 0 24 24" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          <rect x="6" y="20" width="12" height="2" fill="rgba(74,53,49,0.18)" />
          {/* Plant leaves & flowers */}
          <path fill="#4C8B5B" d="M11 5h2v7h-2V5zM8 7h3v3H8V7zm5 1h3v3h-3V8z" />
          <rect x="10" y="3" width="4" height="3" fill="#F48FB1" />
          <rect x="11" y="4" width="2" height="1" fill="#FFF3B0" />
          <rect x="6" y="6" width="3" height="2" fill="#D8C2EF" />
          {/* Pot */}
          <path fill="#6E473B" d="M5 11h14v3H5v-3zm1 3h12v6H6v-6zm1 6h10v1H7v-1z" />
          <path fill="#D98B6C" d="M6 12h12v1H6v-1zm1 2h10v6H7v-6z" />
          <path fill="#B86B4E" d="M14 14h3v6h-3v-6z" />
          <rect x="8" y="15" width="2" height="4" fill="#EBA588" />
        </svg>
      );

    case 'wooden_crate':
      return (
        <svg viewBox="0 0 24 24" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          <rect x="3" y="20" width="18" height="2" fill="rgba(74,53,49,0.18)" />
          <path fill="#5C3B2E" d="M3 6h18v14H3V6z" />
          <path fill="#C99B72" d="M4 7h16v12H4V7z" />
          <path fill="#A67853" d="M4 11h16v1H4v-1zm0 4h16v1H4v-1z" />
          <path fill="#875C3D" d="M6 7h2v12H6V7zm10 0h2v12h-2V7z" />
          {/* Little pink flower tucked on top */}
          <rect x="15" y="4" width="3" height="2" fill="#F48FB1" />
          <rect x="14" y="5" width="1" height="1" fill="#6BAE75" />
        </svg>
      );

    case 'hollow_log':
      return (
        <svg viewBox="0 0 28 22" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          <rect x="3" y="18" width="22" height="3" fill="rgba(74,53,49,0.18)" />
          <path fill="#5C3B2E" d="M3 8h22v10H3V8z" />
          <path fill="#9C6F52" d="M4 9h20v8H4V9z" />
          <path fill="#7D543D" d="M4 14h20v3H4v-3z" />
          {/* Hollow dark opening */}
          <path fill="#3A241C" d="M5 10h6v6H5v-6z" />
          <path fill="#4E3228" d="M6 11h4v4H6v-4z" />
          {/* Moss & tiny mushroom on log */}
          <path fill="#7EC288" d="M12 8h8v2h-8V8zm2 2h4v1h-4v-1z" />
          <rect x="16" y="6" width="2" height="2" fill="#FFF8EE" />
          <rect x="15" y="5" width="4" height="2" fill="#E87A96" />
        </svg>
      );

    case 'lavender_patch':
      return (
        <svg viewBox="0 0 26 24" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          <rect x="3" y="20" width="20" height="2" fill="rgba(74,53,49,0.18)" />
          {/* Leaves */}
          <path fill="#4C8B5B" d="M5 13h16v7H5v-7zm-2 3h20v4H3v-4z" />
          <path fill="#78BA84" d="M6 14h14v5H6v-5z" />
          {/* Lavender spikes */}
          <path fill="#7A5AA3" d="M7 5h2v9H7V5zm5-2h2v11h-2V3zm5 2h2v9h-2V5z" />
          <path fill="#C9A8EA" d="M6 6h4v4H6V6zm5-2h4v5h-4V4zm5 2h4v4h-4V6z" />
          <rect x="7" y="7" width="1" height="2" fill="#EFE4FC" />
          <rect x="12" y="5" width="1" height="2" fill="#EFE4FC" />
          <rect x="17" y="7" width="1" height="2" fill="#EFE4FC" />
        </svg>
      );

    case 'picnic_basket':
      return (
        <svg viewBox="0 0 26 22" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          <rect x="4" y="18" width="18" height="3" fill="rgba(74,53,49,0.18)" />
          {/* Handle */}
          <path fill="#6E473B" d="M8 3h10v2H8V3zM7 5h2v4H7V5zm10 0h2v4h-2V5z" />
          {/* Basket */}
          <path fill="#6E473B" d="M4 9h18v10H4V9z" />
          <path fill="#E3B98A" d="M5 10h16v8H5v-8z" />
          <path fill="#C99869" d="M5 13h16v1H5v-1zm4-3h1v8H9v-8zm6 0h1v8h-1v-8z" />
          {/* Pink gingham cloth peeking */}
          <path fill="#F9C5D5" d="M6 10h14v3H6v-3z" />
          <rect x="8" y="10" width="2" height="2" fill="#FFF8EE" />
          <rect x="12" y="10" width="2" height="2" fill="#FFF8EE" />
          <rect x="16" y="10" width="2" height="2" fill="#FFF8EE" />
        </svg>
      );

    case 'giant_mushroom':
      return (
        <svg viewBox="0 0 24 24" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          <rect x="5" y="20" width="14" height="2" fill="rgba(74,53,49,0.18)" />
          {/* Stem */}
          <path fill="#6E473B" d="M8 12h8v9H8v-9z" />
          <path fill="#FFF4E4" d="M9 12h6v8H9v-8z" />
          <path fill="#EBD3B5" d="M13 12h2v8h-2v-8z" />
          {/* Cap */}
          <path
            fill="#7D3549"
            d="M7 3h10v2H7V3zM4 5h16v2H4V5zM2 7h20v6H2V7z"
          />
          <path fill="#EA7B96" d="M7 4h10v2H7V4zM4 6h16v6H4V6z" />
          {/* Cream dots */}
          <rect x="6" y="7" width="3" height="2" fill="#FFF8EE" />
          <rect x="14" y="6" width="3" height="2" fill="#FFF8EE" />
          <rect x="10" y="9" width="2" height="2" fill="#FFF8EE" />
        </svg>
      );

    case 'mossy_rock':
      return (
        <svg viewBox="0 0 26 22" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          <rect x="3" y="18" width="20" height="2" fill="rgba(74,53,49,0.18)" />
          <path fill="#5A6070" d="M7 6h12v2H7V6zM4 8h18v3H4V8zM2 11h22v7H2v-7z" />
          <path fill="#A6AEBE" d="M7 7h11v2H7V7zM4 9h17v8H4V9z" />
          <path fill="#848D9E" d="M4 14h17v3H4v-3z" />
          {/* Moss */}
          <path fill="#7AC287" d="M7 7h8v3H7V7zm-2 3h5v2H5v-2z" />
          <rect x="11" y="6" width="2" height="2" fill="#F9C5D5" />
        </svg>
      );

    case 'watering_can':
      return (
        <svg viewBox="0 0 24 22" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          <rect x="5" y="18" width="14" height="2" fill="rgba(74,53,49,0.18)" />
          {/* Handle & Spout */}
          <path fill="#5B4B73" d="M7 5h7v2H7V5zM6 7h2v4H6V7zm10 4h4v2h-4v-2zm3-2h2v3h-2V9z" />
          {/* Body */}
          <path fill="#5B4B73" d="M6 9h11v10H6V9z" />
          <path fill="#C9A8EA" d="M7 10h9v8H7v-8z" />
          <path fill="#AE88D6" d="M13 10h3v8h-3v-8z" />
          {/* Cute pixel heart on watering can */}
          <rect x="9" y="13" width="3" height="2" fill="#FFF8EE" />
        </svg>
      );

    case 'garden_house':
      return (
        <svg viewBox="0 0 30 28" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          <rect x="4" y="24" width="22" height="3" fill="rgba(74,53,49,0.18)" />
          {/* Roof */}
          <path fill="#7A3E4E" d="M12 2h6v2h-6V2zM8 4h14v2H8V4zM5 6h20v3H5V6zM3 9h24v3H3V9z" />
          <path fill="#EE8FA8" d="M12 3h6v2h-6V3zM8 5h14v2H8V5zM5 7h20v4H5V7z" />
          {/* House body */}
          <path fill="#6E473B" d="M5 11h20v14H5V11z" />
          <path fill="#FFF4E2" d="M6 12h18v12H6V12z" />
          {/* Cozy door */}
          <path fill="#A67458" d="M12 16h6v8h-6v-8z" />
          <rect x="16" y="20" width="1" height="1" fill="#F8D88C" />
          {/* Window */}
          <rect x="8" y="15" width="3" height="3" fill="#B5E2FA" />
          <rect x="19" y="15" width="3" height="3" fill="#B5E2FA" />
        </svg>
      );

    case 'stone_well':
      return (
        <svg viewBox="0 0 28 28" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          <rect x="4" y="24" width="20" height="3" fill="rgba(74,53,49,0.18)" />
          {/* Little roof */}
          <path fill="#6E473B" d="M7 3h14v2H7V3zM5 5h18v3H5V5z" />
          <path fill="#D8C2EF" d="M8 4h12v3H8V4z" />
          {/* Posts */}
          <rect x="7" y="8" width="2" height="9" fill="#6E473B" />
          <rect x="19" y="8" width="2" height="9" fill="#6E473B" />
          {/* Stone base */}
          <path fill="#5A6070" d="M5 16h18v9H5v-9z" />
          <path fill="#C2C8D6" d="M6 17h16v7H6v-7z" />
          <path fill="#959EB0" d="M6 21h16v3H6v-3zm5-4h1v7h-1v-7zm6 0h1v7h-1v-7z" />
          <rect x="8" y="17" width="3" height="2" fill="#7AC287" />
        </svg>
      );

    case 'wooden_bench':
      return (
        <svg viewBox="0 0 30 22" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          <rect x="3" y="18" width="24" height="2" fill="rgba(74,53,49,0.18)" />
          {/* Backrest */}
          <path fill="#5C3B2E" d="M4 5h22v7H4V5z" />
          <path fill="#C99B72" d="M5 6h20v2H5V6zm0 3h20v2H5V9z" />
          {/* Seat */}
          <path fill="#5C3B2E" d="M3 12h24v4H3v-4z" />
          <path fill="#DDA97E" d="M4 13h22v2H4v-2z" />
          {/* Legs */}
          <rect x="5" y="16" width="2" height="3" fill="#5C3B2E" />
          <rect x="23" y="16" width="2" height="3" fill="#5C3B2E" />
          {/* Cushion */}
          <rect x="16" y="11" width="7" height="2" fill="#FAD2E0" />
        </svg>
      );

    case 'flower_arch':
      return (
        <svg viewBox="0 0 30 28" shapeRendering="crispEdges" className={`w-full h-full ${opacityClass}`}>
          <rect x="4" y="24" width="22" height="3" fill="rgba(74,53,49,0.18)" />
          {/* Arch frame */}
          <path
            fill="#4C8B5B"
            d="M8 3h14v3H8V3zM5 6h4v4H5V6zm16 0h4v4h-4V6zM4 10h4v15H4V10zm18 0h4v15h-4V10z"
          />
          <path
            fill="#78BA84"
            d="M9 4h12v2H9V4zM6 7h2v17H6V7zm16 0h2v17h-2V7z"
          />
          {/* Flowers on arch */}
          <rect x="10" y="3" width="3" height="3" fill="#F9A8C4" />
          <rect x="17" y="3" width="3" height="3" fill="#D8C2EF" />
          <rect x="5" y="10" width="3" height="3" fill="#FFF8EE" />
          <rect x="22" y="12" width="3" height="3" fill="#F9A8C4" />
          <rect x="5" y="17" width="3" height="3" fill="#D8C2EF" />
        </svg>
      );
  }
};
