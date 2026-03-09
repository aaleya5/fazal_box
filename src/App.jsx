import React from 'react';
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
  return (
    <>
      <Cursor />
      <Nav />
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
