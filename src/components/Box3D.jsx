import React from 'react';

export default function Box3D({ box }) {
  const { w, h, d, ry, rx, delay, front, back, left, right, top, flap, bottom } = box;

  // half dimensions for translateZ
  const hw = w / 2;   // used for left/right face panning
  const hd = d / 2;   // depth
  const hh = h / 2;   // used for top/bottom face
  const flapH = Math.round(h * 0.63);

  const faceBase = {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
  };

  return (
    <div style={{ perspective: '1000px', width: w, height: h }}>
      <div
        style={{
          width: w,
          height: h,
          transformStyle: 'preserve-3d',
          position: 'relative',
          animation: `float 7s ease-in-out ${delay} infinite`,
          '--rx': rx,
          '--ry': ry,
        }}
      >
        {/* Front */}
        <div style={{
          ...faceBase,
          width: w, height: h,
          transform: `translateZ(${hd}px)`,
          background: front.bg,
          border: front.border ? `1px solid ${front.border}` : undefined,
        }}>
          <div style={{ position: 'absolute', inset: 10, border: `1px solid ${front.border || 'rgba(255,255,255,0.04)'}` }} />
          {front.label && (
            <div style={{
              position: 'absolute', bottom: 14, right: 14,
              fontSize: 7, letterSpacing: '0.2em',
              color: front.labelColor, textTransform: 'uppercase',
              fontFamily: "'IBM Plex Mono', monospace",
            }}>
              {front.label}
            </div>
          )}
        </div>

        {/* Back */}
        <div style={{
          ...faceBase,
          width: w, height: h,
          transform: `rotateY(180deg) translateZ(${hd}px)`,
          background: back.bg,
        }} />

        {/* Left */}
        <div style={{
          ...faceBase,
          width: d, height: h,
          transform: `rotateY(-90deg) translateZ(${hw}px)`,
          background: left.bg,
        }} />

        {/* Right */}
        <div style={{
          ...faceBase,
          width: d, height: h,
          transform: `rotateY(90deg) translateZ(${hw}px)`,
          background: right.bg,
        }} />

        {/* Top */}
        <div style={{
          ...faceBase,
          width: w, height: d,
          transform: `rotateX(90deg) translateZ(${hh}px)`,
          background: top.bg,
        }} />

        {/* Flap */}
        <div style={{
          ...faceBase,
          width: w, height: flapH,
          position: 'absolute',
          top: -flapH, left: 0,
          transformOrigin: 'bottom center',
          transform: `translateZ(${hd}px) rotateX(-20deg)`,
          background: flap.bg,
        }} />

        {/* Bottom */}
        <div style={{
          ...faceBase,
          width: w, height: d,
          transform: `rotateX(-90deg) translateZ(${hh}px)`,
          background: bottom.bg,
        }} />
      </div>
    </div>
  );
}
