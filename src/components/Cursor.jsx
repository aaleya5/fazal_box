import React, { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const [enlarged, setEnlarged] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let x = 0, y = 0;
    let ux = 0, uy = 0;
    let raf;

    const onMove = (e) => { ux = e.clientX; uy = e.clientY; };
    document.addEventListener('mousemove', onMove);

    const animate = () => {
      x += (ux - x) * 0.18;
      y += (uy - y) * 0.18;
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onEnter = () => setEnlarged(true);
    const onLeave = () => setEnlarged(false);
    const interactives = document.querySelectorAll('a, button, select, input, textarea, .idx-dot');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return <div ref={dotRef} className={`cursor-dot${enlarged ? ' enlarged' : ''}`} />;
}
