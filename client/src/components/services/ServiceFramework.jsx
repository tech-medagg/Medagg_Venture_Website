import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServiceFramework = ({ service }) => {
  if (!service) return null;

  return (
    <>
      {/* 1. Process Methodology Steps */}
      {service.steps && service.steps.length > 0 && (
        <section className="section section-white">
          <div className="container">
            <SectionHeading
              badge="STRUCTURED FRAMEWORK"
              title="Execution Methodology & Process"
              subtitle={service.leadText}
            />

            <div className="grid grid-3" style={{ gap: '24px' }}>
              {service.steps.map((step, idx) => (
                <div key={idx} className="feature-card" style={{ position: 'relative' }}>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--color-brand-pink)',
                      marginBottom: '8px',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {step.num}
                  </div>
                  <h3 className="feature-card-title">{step.title}</h3>
                  <p className="feature-card-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. Process Graphic & Deliverables */}
      <section className="section section-subtle">
        <div className="container split-section">
          {service.processImage && (
            <div className="split-media-frame">
              <img
                src={service.processImage}
                alt={`${service.title} Process Diagram`}
                width="600"
                height="450"
                style={{ borderRadius: 'var(--radius-lg)', objectFit: 'cover' }}
              />
            </div>
          )}

          <div className="split-content">
            <span className="badge-tag">VALUE DELIVERABLES</span>
            <h2>What We Deliver</h2>
            <p className="lead">
              Every engagement is backed by quantifiable milestones, strict clinical adherence, and measurable financial enhancement.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '20px' }}>
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    color: 'var(--color-text-heading)',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                  }}
                >
                  <CheckCircle2
                    size={20}
                    style={{ color: 'var(--color-brand-pink)', flexShrink: 0, marginTop: '2px' }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Performance Stats */}
            {service.stats && (
              <div
                className="grid grid-3"
                style={{
                  marginTop: '32px',
                  paddingTop: '24px',
                  borderTop: '1px solid var(--color-border-subtle)',
                  gap: '16px',
                }}
              >
                {service.stats.map((stat, idx) => (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: 800,
                        color: 'var(--color-brand-pink)',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. CTA Conversion Banner */}
      <section className="section section-white">
        <div className="container">
          <div className="conversion-banner">
            <h2 className="conversion-title">Accelerate Your Healthcare Institution</h2>
            <p className="conversion-subtitle">
              Partner with Medagg to elevate operational efficiency, secure growth capital, and maximize enterprise value.
            </p>
            <div className="conversion-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                SCHEDULE CONSULTATION
              </Link>
              <Link to="/case-studies" className="btn btn-outline-white btn-lg">
                VIEW CASE STUDIES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
