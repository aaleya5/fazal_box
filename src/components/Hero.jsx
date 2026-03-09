import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const marqueeItems = [
    'Food Packaging', '◆', 'Luxury Boxes', '◆', 'Mailer Boxes', '◆',
    'Gift Boxes', '◆', 'Eco Boxes', '◆', 'Industrial', '◆',
    'Custom Print', '◆', 'Gujarat India', '◆',
  ];

  return (
    <section className="hero" id="hero" data-section="0">
      <div className="hero-bg-line" />

      <div className="hero-content">
        <div className="hero-overline">Est. 2010 · Gujarat, India · Custom Packaging</div>
        <h1 className="hero-title">
          <span className="hero-title-line">Custom</span>
          <span className="hero-title-line">Boxes,</span>
          <span className="hero-title-line">Built.</span>
        </h1>
        <p className="hero-sub">Fazal Box Works — Packaging for food, retail, e-commerce &amp; industry</p>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        scroll
      </div>

      {/* Marquee strip at bottom */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
