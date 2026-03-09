import React, { useEffect, useRef } from 'react';

const stats = [
  { val: '15', unit: '+', label: 'Years in business' },
  { val: '50', unit: 'K+', label: 'Boxes delivered' },
  { val: '8', unit: '', label: 'Box categories' },
  { val: '100', unit: '%', label: 'Custom printable' },
];

export default function StatsStrip() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll('.stat-item').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="stats-strip">
      {stats.map((s, i) => (
        <div key={i} className="stat-item reveal">
          <div className="stat-val">
            {s.val}<em>{s.unit}</em>
          </div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
