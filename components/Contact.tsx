"use client";
import React from "react";
import { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({ submitted: false });
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState({ submitted: true });
    setTimeout(() => setFormState({ submitted: false }), 3000);
  }
  return (
    <section className="contact-section" id="contact">
      <div className="section-tag">Get Started</div>
      <div className="section-title">
        Open an <em>Account</em>
      </div>
      <div className="contact-layout">
        <div>
          <p className="section-body" style={{ marginBottom: 40 }}>
            Ready to access institutional-grade liquidity? Get in touch with our
            team and we`&lsquo`ll have you up and running in no time.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-val">+91 8490003335</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-val">support@novaventures.in</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Hours</div>
                <div className="contact-item-val">24 / 7 Support</div>
              </div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@company.com" />
          </div>
          <div className="form-group">
            <label>I Am A</label>
            <select defaultValue="">
              <option value="" disabled>
                Select client type
              </option>
              <option>Broker</option>
              <option>Hedge Fund</option>
              <option>Professional Client</option>
              <option>Exchange / MTF</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell us about your trading needs..." />
          </div>
          <button
            type="submit"
            className="form-submit"
            style={formState.submitted ? { background: "#4CAF89" } : undefined}
          >
            {formState.submitted ? "Enquiry Sent!" : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
