import React, { useState } from 'react';

const boxTypes = [
  'Food Packaging Box', 'Luxury Packaging Box', 'Takeaway Food Box',
  'Folding Carton Box', 'Eco-Friendly Box', 'Gift Box',
  'Mailer Box', 'Heavy-Duty Box', 'Custom / Other',
];

export default function Outro() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.target;
    // NOTE: In production, change this to your actual deployed backend URL
    const endpoint = 'http://localhost:3001/api/quote';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
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
              <input type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="fg">
              <label>Company</label>
              <input type="text" name="company" placeholder="Company name" />
            </div>
          </div>
          <div className="fg-2">
            <div className="fg">
              <label>Email</label>
              <input type="email" name="email" placeholder="you@company.com" required />
            </div>
            <div className="fg">
              <label>Phone</label>
              <input type="tel" name="phone" placeholder="+91 00000 00000" />
            </div>
          </div>
          <div className="fg">
            <label>Box Type</label>
            <select name="boxType" defaultValue="">
              <option value="" disabled>Select...</option>
              {boxTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="fg-2">
            <div className="fg">
              <label>Dimensions (mm)</label>
              <input type="text" name="dimensions" placeholder="L × W × H" />
            </div>
            <div className="fg">
              <label>Quantity</label>
              <input type="text" name="quantity" placeholder="500 units" />
            </div>
          </div>
          <div className="fg">
            <label>Notes</label>
            <textarea name="notes" placeholder="Material, print, finish, deadline…" />
          </div>
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`form-btn${status === 'success' ? ' sent' : ''}`}
          >
            {status === 'loading' ? 'Sending...' :
              status === 'success' ? '✓ Request Sent' :
                status === 'error' ? 'Error. Try Again →' :
                  'Send Request →'}
          </button>
        </form>
      </div>
    </section>
  );
}
