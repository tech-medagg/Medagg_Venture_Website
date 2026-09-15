import React from 'react';
import { ContactForm } from '../components/forms/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const ContactPage = () => {
  return (
    <div>
      <SEO
        title="Contact Us — Healthcare Consulting Enquiry"
        description="Get in touch with Medagg Ventures — India's leading healthcare consulting firm. Contact us for strategic consulting, hospital O&M contracts, transaction advisory, and channel partnership enquiries."
        keywords="contact healthcare consulting India, Medagg Ventures contact, hospital consulting enquiry, healthcare advisory contact"
        canonical="/contact"
      />
      {/* 1. HERO BANNER */}
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal-slide-left">
            <span className="page-hero-badge">CONTACT US</span>
            <h1 className="page-hero-title">Get in Touch</h1>
            <p className="page-hero-desc" style={{ marginBottom: '16px', fontWeight: 500, color: '#FFFFFF' }}>
              The future is ours to win
            </p>
            <p style={{ color: 'var(--color-text-white-sub)', fontSize: '1.05rem', lineHeight: '1.65', maxWidth: '540px' }}>
              Whether you are exploring clinical strategic consulting, transaction advisory, operations & management contracts, or strategic partnerships — our team is ready to collaborate.
            </p>
          </div>

          <div className="page-hero-image-wrap reveal-slide-right delay-1">
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '12px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
                overflow: 'hidden',
              }}
            >
              <img
                src="/assets/images/home/consolidate_healthcare.jpg"
                alt="Get in touch with MedAgg"
                width="500"
                height="320"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT FORM & DIRECT INFO */}
      <section className="section section-white">
        <div className="container contact-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Left: Connect with Leadership Panel */}
          <div className="contact-info-panel reveal-slide-left">
            <div className="contact-info-card" style={{ padding: '36px 32px' }}>
              <span className="badge-tag" style={{ marginBottom: '20px', display: 'inline-block' }}>
                DIRECT CHANNELS
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '28px', color: 'var(--color-text-heading)' }}>
                Connect with Leadership
              </h3>

              {/* Email */}
              <div className="contact-detail-row">
                <div
                  className="contact-detail-icon"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: 'rgba(235, 36, 107, 0.08)',
                    color: 'var(--color-brand-pink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div
                    className="contact-detail-title"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      marginBottom: '4px',
                    }}
                  >
                    EMAIL US
                  </div>
                  <div className="contact-detail-text">
                    <a
                      href="mailto:contact@medagg.com"
                      style={{
                        color: 'var(--color-text-heading)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        textDecoration: 'none',
                      }}
                    >
                      contact@medagg.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-detail-row">
                <div
                  className="contact-detail-icon"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: 'rgba(235, 36, 107, 0.08)',
                    color: 'var(--color-brand-pink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div
                    className="contact-detail-title"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      marginBottom: '4px',
                    }}
                  >
                    CALL US
                  </div>
                  <div
                    className="contact-detail-text"
                    style={{
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--color-text-heading)',
                      lineHeight: '1.5',
                    }}
                  >
                    <a href="tel:+917506264440" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
                      +91 75062 64440
                    </a>
                    <a href="tel:+919962113344" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
                      +91 99621 13344
                    </a>
                  </div>
                </div>
              </div>

              {/* Headquarters */}
              <div className="contact-detail-row">
                <div
                  className="contact-detail-icon"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: 'rgba(235, 36, 107, 0.08)',
                    color: 'var(--color-brand-pink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div
                    className="contact-detail-title"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      marginBottom: '4px',
                    }}
                  >
                    HEADQUARTERS
                  </div>
                  <div
                    className="contact-detail-text"
                    style={{
                      fontSize: '0.925rem',
                      fontWeight: 500,
                      color: 'var(--color-text-body)',
                      lineHeight: '1.6',
                    }}
                  >

                    Medagg Ventures LLP<br />
                    Incuspaze Olympia Crest, Perungudi,<br />
                    Chennai – 600096, Tamil Nadu, India.
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Send an Enquiry Form Card */}
          <div className="form-card reveal-slide-right delay-1" style={{ padding: '36px 32px' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-heading)' }}>
              Send an Enquiry
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '28px' }}>
              Fill out the details below and a partner will get back to you promptly.
            </p>

            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
};
