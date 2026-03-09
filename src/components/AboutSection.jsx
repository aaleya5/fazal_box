import React, { useEffect, useRef } from 'react';

const pillars = [
  {
    icon: '◈',
    title: 'Custom Made',
    body: 'Every box is built to your exact dimensions, material, and print spec. No compromise.',
  },
  {
    icon: '◉',
    title: 'Est. 2010',
    body: 'Over 15 years manufacturing corrugated and rigid packaging for clients across India.',
  },
  {
    icon: '◇',
    title: 'Low MOQ',
    body: 'Starting from 50 units. Whether you\'re a startup or a large manufacturer, we scale with you.',
  },
  {
    icon: '◆',
    title: 'Fast Turnaround',
    body: 'Standard orders dispatched in 5–7 working days. Rush orders available on request.',
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.about-anim').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 90);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* Left col — image */}
      <div className="about-img-col about-anim reveal">
        <div className="about-img-wrap">
          <img
            src="/images/about_factory.png"
            alt="Fazal Box Works manufacturing facility"
            className="about-img"
            loading="lazy"
          />
          <div className="about-img-overlay" />
          <div className="about-img-badge">
            <span className="badge-num">15<em>+</em></span>
            <span className="badge-label">Years of craft</span>
          </div>
        </div>
      </div>

      {/* Right col — copy */}
      <div className="about-copy-col">
        <div className="about-anim reveal" style={{ transitionDelay: '0.05s' }}>
          <div className="about-overline">About Us</div>
          <h2 className="about-title">
            Gujarat's<br />
            trusted<br />
            <em>box maker.</em>
          </h2>
        </div>

        <p className="about-body about-anim reveal" style={{ transitionDelay: '0.15s' }}>
          Fazal Box Works is a manufacturer of high-quality custom packaging
          boxes based in Gujarat, India. Since 2010, we have supplied
          corrugated boxes, food-grade packaging, luxury rigid boxes, and
          industrial cartons to businesses of every size — from home bakeries
          to large-scale exporters.
        </p>

        <div className="about-pillars">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="about-pillar about-anim reveal"
              style={{ transitionDelay: `${0.22 + i * 0.08}s` }}
            >
              <div className="pillar-icon">{p.icon}</div>
              <div>
                <div className="pillar-title">{p.title}</div>
                <div className="pillar-body">{p.body}</div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#outro"
          className="about-cta about-anim reveal"
          style={{ transitionDelay: '0.6s' }}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('outro')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get a Quote →
        </a>
      </div>
    </section>
  );
}
