import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';

export const InvestmentsPage = () => {
  const portfolioCompanies = [
    {
      name: 'Zum Heilen Diagnostics',
      image: '/assets/images/about/za-dat.jpg',
      desc: 'Integrating molecular diagnostics with therapeutics to offer a unique platform that helps patients and doctors visualise a hand-in-hand approach',
    },
    {
      name: 'Zum Heilen Medivaz',
      image: '/assets/images/about/za-medi.jpg',
      desc: 'Providing efficient and reliable remote medical screening and care service for patients through smart medical technology and prediction',
    },
    {
      name: 'Healthbasix',
      image: '/assets/images/about/health-basix.jpg',
      desc: 'Streamlining children’s health by helping parents consult doctors virtually using a unified health record, efficient health programs and round-the-clock access to emergency health services',
    },
    {
      name: 'Healthsalah',
      image: '/assets/images/about/healthsalah.jpg',
      desc: 'Simplifying the provision of informed, neutral expert opinions for diagnosis and treatment plan of a patient\'s condition as well as second opinion based on their case history and reports',
    },
    {
      name: 'Keeraikadai',
      image: '/assets/images/about/keerakadai.jpg',
      desc: 'A one-stop store that provides multiple varieties of greens and organic food products sourced directly from local farmers',
    },
  ];

  return (
    <div>
      <SEO
        title="Strategic Healthcare Investments — Medagg Ventures Portfolio"
        description="Medagg Ventures makes strategic investments in innovative healthcare startups and companies across India. Explore our portfolio of healthcare technology and service companies driving the future of healthcare."
        keywords="healthcare investments India, healthcare startup investment, hospital technology investment India, Medagg investments, healthcare portfolio India, healthcare venture India"
        canonical="/investments"
      />
      {/* 1. HERO / INVESTMENT MANTRA */}
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal-slide-left">
            <span className="page-hero-badge">PORTFOLIO</span>
            <h1 className="page-hero-title">Investment Mantra</h1>
            <p className="page-hero-desc">
              Medagg Ventures LLP has a strategic shareholding in Zum Heilen Diagnostics, Zum Heilen Medivaz, Healthbasix, Healthsalah and Keeraikadai.com
            </p>
            <p style={{ color: 'var(--color-text-white-sub)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
              We look for partners who share our drive for excellence and expansion. That is why we see companies backed by Medagg consistently leading from the front across different expanses of the multi-billion dollar heathcare industry.
            </p>
          </div>

          <div className="page-hero-image-wrap reveal-slide-right delay-1">
            <img
              src="/assets/images/about/our_story.jpg"
              alt="MedAgg Investment Mantra"
              width="500"
              height="320"
              style={{ borderRadius: 'var(--radius-lg)', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* 2. OUR PORTFOLIO (5 COMPANIES) */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="badge-tag">PORTFOLIO VENTURES</span>
            <h2>Our Portfolio</h2>
            <p className="lead">
              We seek out startup ventures with the coherence and expertise to develop a project capable of solving issues in the healthcare space and reaping long-term financial returns

            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {portfolioCompanies.map((comp, idx) => (
              <div key={idx} className="portfolio-card" style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-subtle)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <div className="portfolio-card-img-wrap" style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src={comp.image}
                    alt={comp.name}
                    className="portfolio-card-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <div className="portfolio-card-body" style={{ padding: '24px' }}>
                  <h3 className="portfolio-card-title" style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--color-text-heading)' }}>
                    {comp.name}
                  </h3>
                  <p className="portfolio-card-desc" style={{ color: 'var(--color-text-body)', lineHeight: '1.6', fontSize: '0.925rem' }}>
                    {comp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WE BELIEVE IN BUILDING BRIDGES BANNER */}
      <section className="section section-subtle">
        <div className="container">
          <div className="conversion-banner reveal-on-scroll">
            <h2 className="conversion-title">We believe in building bridges</h2>
            <p className="conversion-subtitle">
              We benefit and utilize the experience of our team of business professionals to proactively manage our portfolio
            </p>
            <div className="conversion-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                PARTNER WITH US
              </Link>
              <Link to="/strategic-consulting" className="btn btn-outline-white btn-lg">
                VIEW OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
