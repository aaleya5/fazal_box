import React, { useEffect, useState } from 'react';

export default function Nav({ theme, toggleTheme }) {
  const [blended, setBlended] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setBlended(window.scrollY < window.innerHeight * 0.9);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="nav"
      style={{ mixBlendMode: blended ? 'difference' : 'normal' }}
    >
      <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
        Fazal Box Works
      </a>
      <div className="nav-links">
        <a href="#about"   onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
        <a href="#s1"      onClick={(e) => { e.preventDefault(); scrollTo('s1'); }}>Products</a>
        <a href="#outro"   onClick={(e) => { e.preventDefault(); scrollTo('outro'); }}>Contact</a>
        <button
          className="nav-theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle light/dark mode"
          style={{
            background: 'transparent', border: 'none', color: 'inherit',
            cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center'
          }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <a
          href="#outro"
          className="nav-cta"
          onClick={(e) => { e.preventDefault(); scrollTo('outro'); }}
        >
          Get Quote
        </a>
      </div>
    </nav>
  );
}
