import React, { useEffect, useRef } from 'react';

export default function ProductSlide({ product, index }) {
  const infoRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    if (infoRef.current) observer.observe(infoRef.current);
    if (stageRef.current) observer.observe(stageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={product.slug}
      className="product-slide"
      data-section={index + 1}
      style={{ '--glow': product.glow }}
    >
      {/* Image Stage */}
      <div
        ref={stageRef}
        className="slide-stage reveal"
        style={{ transitionDelay: '0.05s' }}
      >
        {/* radial glow behind image */}
        <div
          className="stage-glow"
          style={{ background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${product.glow} 0%, transparent 70%)` }}
        />
        <div className="product-img-wrap">
          <img
            src={product.img}
            alt={product.name.join(' ')}
            className="product-img"
            loading="lazy"
            style={{ '--imgBg': product.imgBg }}
          />
        </div>
      </div>

      {/* Info Panel */}
      <div
        ref={infoRef}
        className="slide-info reveal"
        style={{ transitionDelay: '0.2s' }}
      >
        <div className="slide-num">{product.num}</div>
        <h2 className="slide-name">
          {product.name.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>{line}</span>
          ))}
        </h2>
        <div className="slide-cat" style={{ '--accent': product.accent }}>
          {product.cat}
        </div>
        <p className="slide-desc">{product.desc}</p>
        <div className="slide-specs">
          {product.specs.map((s, i) => (
            <div key={i} className="spec-row">
              <span className="spec-k">{s.k}</span>
              <span className="spec-v">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
