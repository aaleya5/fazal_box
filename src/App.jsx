import React, { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductSlide from './components/ProductSlide';
import StatsStrip from './components/StatsStrip';
import Outro from './components/Outro';
import IndexDots from './components/IndexDots';
import { products } from './data/products';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('fazal-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('fazal-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <IndexDots />

      <main>
        <Hero />
        <AboutSection />

        {/* Products */}
        {products.map((product, i) => (
          <ProductSlide key={product.id} product={product} index={i} />
        ))}

        <StatsStrip />
        <Outro />
      </main>

      <footer>
        <span>© 2026 Fazal Box Works</span>
        <span>Est. 2010 · Gujarat, India</span>
      </footer>
    </>
  );
}
