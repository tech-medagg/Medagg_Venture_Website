import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/common/SectionHeading';
import { caseStudiesData } from '../data/caseStudiesData';
import { CheckCircle2, TrendingUp, ArrowLeft } from 'lucide-react';

export const CaseStudyPage = () => {
  const caseStudy = caseStudiesData[0];

  return (
    <div>
      {/* 1. HERO */}
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal-slide-left">
            <span className="page-hero-badge">{caseStudy.badge}</span>
            <h1 className="page-hero-title">{caseStudy.title}</h1>
            <p className="page-hero-desc">{caseStudy.subtitle}</p>
          </div>

          <div className="page-hero-image-wrap reveal-slide-right delay-1">
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              width="500"
              height="320"
              style={{ borderRadius: 'var(--radius-lg)', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* 2. CASE STUDY DETAILS */}
      <section className="section section-white">
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Executive Overview */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '1.85rem', marginBottom: '16px', color: 'var(--color-text-heading)' }}>
              Executive Overview
            </h2>
            <p className="lead" style={{ lineHeight: '1.7' }}>
              {caseStudy.overview}
            </p>
          </div>

          {/* Highlights 3-Card Grid */}
          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '56px' }}>
            {caseStudy.highlights.map((item, idx) => (
              <div key={idx} className="feature-card">
                <span className="badge-tag" style={{ marginBottom: '10px' }}>
                  HIGHLIGHT {item.num}
                </span>
                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Section 1: Groundwork */}
          <div
            style={{
              borderTop: '1px solid var(--color-border-subtle)',
              paddingTop: '40px',
              marginBottom: '40px',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-text-heading)' }}>
              {caseStudy.groundwork.title}
            </h3>
            <p style={{ color: 'var(--color-text-body)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              {caseStudy.groundwork.content}
            </p>
          </div>

          {/* Section 2: Strategy */}
          <div
            style={{
              borderTop: '1px solid var(--color-border-subtle)',
              paddingTop: '40px',
              marginBottom: '40px',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-text-heading)' }}>
              {caseStudy.strategy.title}
            </h3>
            <p style={{ color: 'var(--color-text-body)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              {caseStudy.strategy.content}
            </p>
          </div>

          {/* Section 3: Measurable Outcomes */}
          <div
            style={{
              borderTop: '1px solid var(--color-border-subtle)',
              paddingTop: '40px',
              marginBottom: '48px',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-text-heading)' }}>
              {caseStudy.results.title}
            </h3>
            <p style={{ color: 'var(--color-text-body)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '28px' }}>
              {caseStudy.results.content}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-4" style={{ gap: '16px' }}>
              {caseStudy.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--color-bg-subtle)',
                    padding: '24px 16px',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                    border: '1px solid var(--color-border-subtle)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--color-brand-pink)',
                      fontFamily: 'var(--font-heading)',
                      marginBottom: '4px',
                    }}
                  >
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-heading)' }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONVERSION BANNER */}
      <section className="section section-subtle">
        <div className="container">
          <div className="conversion-banner">
            <h2 className="conversion-title">Achieve Similar Turnaround in Your Hospital</h2>
            <p className="conversion-subtitle">
              Learn how Medagg’s clinical, operational, and financial frameworks can accelerate your performance.
            </p>
            <div className="conversion-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                SCHEDULE A CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
