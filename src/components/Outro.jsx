import React, { useState } from 'react';

const boxTypes = [
  'Food Packaging Box', 'Luxury Packaging Box', 'Takeaway Food Box',
  'Folding Carton Box', 'Eco-Friendly Box', 'Gift Box',
  'Mailer Box', 'Heavy-Duty Box', 'Custom / Other',
];

export default function Outro() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="outro" className="outro">
      {/* Left: contact info */}
      <div className="outro-left">
        <div className="outro-tag">Fazal Box Works · Gujarat, India</div>
        <h2 className="outro-title">
          Let's<br />make<br />your<br /><em>box.</em>
        </h2>
        <div className="contact-links">
          <a href="mailto:fazalboxworks@yahoo.co.in" className="contact-link">
            <span className="cl-label">Email</span>
            <span className="cl-val">fazalboxworks@yahoo.co.in</span>
          </a>
          <a href="tel:+919879292927" className="contact-link">
            <span className="cl-label">Phone</span>
            <span className="cl-val">+91 98792 92927</span>
          </a>
          <div className="contact-link" style={{ cursor: 'auto' }}>
            <span className="cl-label">Location</span>
            <span className="cl-val">Gujarat, India</span>
          </div>
        </div>
      </div>

      {/* Right: quote form */}
      <div className="outro-right">
        <div className="form-title">Request a Quote</div>
        <form onSubmit={handleSubmit}>
          <div className="fg-2">
            <div className="fg">
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className="fg">
              <label>Company</label>
              <input type="text" placeholder="Company name" />
            </div>
          </div>
          <div className="fg-2">
            <div className="fg">
              <label>Email</label>
              <input type="email" placeholder="you@company.com" required />
            </div>
            <div className="fg">
              <label>Phone</label>
              <input type="tel" placeholder="+91 00000 00000" />
            </div>
          </div>
          <div className="fg">
            <label>Box Type</label>
            <select defaultValue="">
              <option value="" disabled>Select...</option>
              {boxTypes.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="fg-2">
            <div className="fg">
              <label>Dimensions (mm)</label>
              <input type="text" placeholder="L × W × H" />
            </div>
            <div className="fg">
              <label>Quantity</label>
              <input type="text" placeholder="500 units" />
            </div>
          </div>
          <div className="fg">
            <label>Notes</label>
            <textarea placeholder="Material, print, finish, deadline…" />
          </div>
          <button
            type="submit"
            className={`form-btn${sent ? ' sent' : ''}`}
          >
            {sent ? '✓ Request Sent' : 'Send Request →'}
          </button>
        </form>
      </div>
    </section>
  );
}
