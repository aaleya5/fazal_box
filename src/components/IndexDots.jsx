import React, { useEffect, useState } from 'react';
import { products } from '../data/products';

export default function IndexDots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // hero + 8 products + outro = 10 sections total
    const sectionIds = ['hero', ...products.map(p => p.slug), 'outro'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: 0.45 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const sectionIds = ['hero', ...products.map(p => p.slug), 'outro'];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="index-dots">
      {sectionIds.map((id, i) => (
        <div
          key={id}
          className={`idx-dot${active === i ? ' active' : ''}`}
          onClick={() => scrollTo(id)}
        />
      ))}
    </div>
  );
}
