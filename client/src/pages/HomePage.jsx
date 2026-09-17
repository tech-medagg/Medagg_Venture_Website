import React from 'react';
import { Link } from 'react-router-dom';
import { TypewriterText } from '../components/common/TypewriterText';
import { CyclingTypewriter } from '../components/common/CyclingTypewriter';
import { SEO } from '../components/common/SEO';

import {
  BookOpen,
  HelpCircle,
  Briefcase,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const HomePage = () => {
  const clientLogos = [
    { name: 'Temasek', file: 'temasek.png' },
    { name: 'Breach Candy Hospital', file: 'breach_candy.png' },
    { name: 'Dr. Agarwal\'s Eye Hospital', file: 'dr_agarwals.png' },
    { name: 'Everstone Capital', file: 'everstone.png' },
    { name: 'HCG Oncology', file: 'hcg.png' },
    { name: 'KKR', file: 'kkr.png' },
    { name: 'Dr. Rela Institute', file: 'rela.png' },
    { name: 'Sahyadri Hospitals', file: 'sahyadri.png' },
    { name: 'Sooriya Hospital', file: 'sooriya_hospital.png' },
    { name: 'Sri Ramakrishna Hospital', file: 'sri_ramakrishna.png' },
  ];

  const services = [
    {
      num: '01',
      title: 'Strategic Consulting',
      slug: '/strategic-consulting',
      icon: BookOpen,
      desc: 'We work with standalone hospitals and smaller chains to redesign their operating strategies to improve operational efficiencies and financial viability.',
    },
    {
      num: '02',
      title: 'Transaction Advisory',
      slug: '/transaction-advisory',
      icon: HelpCircle,
      desc: 'We assist hospital owners, private equity investors and lenders during mergers, acquisitions and divestments to arrive at the right valuation for the business and identify improvement opportunities.',
    },
    {
      num: '03',
      title: 'O&M Contracts',
      slug: '/om-contracts',
      icon: Briefcase,
      desc: 'We manage hospitals on a long-term operations & management contract, enabling standalone hospitals to benefit from operational scale.',
    },
    {
      num: '04',
      title: 'Channel Partnerships',
      slug: '/channel-partnerships',
      icon: Users,
      desc: 'We forge commercial partnerships between single-specialty chains and independent hospitals to set up dedicated speciality departments.',
    },
  ];

  return (
    <div>
      <SEO
        title="Healthcare Strategy, Operations & Advisory"
        description="Medagg Ventures is India's leading healthcare consulting firm. We offer strategic consulting, hospital O&M contracts, transaction advisory, and channel partnerships to drive operational excellence and profitability."
        keywords="healthcare consulting India, hospital management consulting, healthcare advisory firm, hospital operations management, healthcare mergers acquisitions, Medagg Ventures, hospital consulting firm India"
        canonical="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Medagg Ventures',
          url: 'https://www.medagg.com',
          description: 'India\'s leading healthcare consulting and advisory firm',
          areaServed: 'India',
          serviceType: ['Healthcare Consulting', 'Hospital Management', 'Transaction Advisory', 'O&M Contracts', 'Channel Partnerships'],
        }}
      />
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content reveal-slide-left">
            <span className="badge badge-primary-light hero-badge">
              <CyclingTypewriter />
            </span>
            <h1 className="hero-heading">United towards a healthy tomorrow</h1>
            <p className="hero-lead">
              We deliver the right skills to propel the development of your hospital through channel partnerships and improve operational efficiency
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>PARTNER WITH US</span>
                <ArrowRight size={18} className="btn-icon-arrow" />
              </Link>
              <a href="#services" className="btn btn-outline btn-lg">
                EXPLORE SERVICES
              </a>
            </div>
          </div>

          <div className="hero-media-wrap reveal-slide-right delay-1">
            {/* 2-image stacked layout — real Medagg team photos, no overlap */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative' }}>

              {/* Top image — wider, taller */}
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(15,29,64,0.22)',
                border: '3px solid rgba(255,255,255,0.12)',
              }}>
                <img
                  src="/assets/images/careers_img2.jpg"
                  alt="Medagg leadership team"
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover',
                    objectPosition: 'left top',
                    display: 'block',
                  }}
                />
              </div>

              {/* Bottom image — offset right, shorter */}
              <div className="hero-offset-img-2" style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(15,29,64,0.22)',
                border: '3px solid rgba(255,255,255,0.12)',
              }}>
                <img
                  src="/assets/images/about/our_strengths.jpg"
                  alt="Medagg team at work"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
              </div>

              {/* Floating badge */}
              <div className="hero-floating-card" style={{ bottom: '20px', left: '-150px' }}>
                <div className="hero-floating-icon">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <div className="hero-floating-text">Operational Excellence</div>
                  <div className="hero-floating-sub">Measurable Business Outcomes</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION (01 - 04) */}
      <section className="section section-subtle" id="services">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="badge-tag">WHAT WE DO</span>
            <h2>Our Core Capabilities</h2>
            <p className="lead">
              Strategic solutions tailored for hospital chains, standalone facilities, diagnostic networks, and healthcare investors.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div key={idx} className="service-card">
                  <div>
                    <div className="service-card-header">
                      <span className="service-card-number">{srv.num}</span>
                      <div className="service-card-icon">
                        <Icon size={26} />
                      </div>
                    </div>
                    <h3 className="service-card-title">
                      <TypewriterText
                        text={srv.title}
                        speed={55}
                        delay={idx * 180}
                      />
                    </h3>
                    <p className="service-card-desc">{srv.desc}</p>
                  </div>
                  <div className="service-card-footer">
                    <Link to={srv.slug} className="service-card-link">
                      <span>LEARN MORE</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL SPLIT SECTION */}
      <section className="section section-white">
        <div className="container split-section">
          <div className="split-content reveal-slide-left">
            <span className="badge-tag">VALUE ACCELERATION</span>
            <h2>Turn prospects into profits</h2>
            <p className="lead">
              We help you implement sustainable frameworks that reduce operational drag, maximize asset utilization, and position your healthcare organization for long-term profitable expansion.
            </p>
            <div style={{ marginTop: '16px' }}>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                GET IN TOUCH
              </Link>
            </div>
          </div>

          {/* Clean 2-image grid — no overlap, all faces visible */}
          <div className="reveal-slide-right delay-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'start' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(15,29,64,0.12)' }}>
              <img
                src="/assets/images/services/om_small_parallax.jpg"
                alt="Medagg team at work"
                style={{ width: '100%', height: '280px', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
              />
            </div>
            <div className="split-grid-img-2" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(15,29,64,0.12)' }}>
              <img
                src="/assets/images/careers_img2.jpg"
                alt="Medagg leadership collaboration"
                style={{ width: '100%', height: '280px', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLIENTS & TRUST SECTION */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="badge-tag">TRUSTED NETWORK</span>
            <h2>Our Clients & Partners</h2>
            <p className="lead">
              We have worked with marquee institutional healthcare providers, top hospital networks, and premier global investors.
            </p>
          </div>

          {/* Single Row Client Marquee Track */}
          <div className="clients-marquee-wrapper">
            <div className="clients-marquee-track">
              {clientLogos.map((client, idx) => (
                <div key={idx} className="client-logo-card">
                  <img
                    src={`/assets/images/clients/${client.file}`}
                    alt={client.name}
                    className="client-logo-img"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless continuous loop */}
              {clientLogos.map((client, idx) => (
                <div key={`dup-${idx}`} className="client-logo-card">
                  <img
                    src={`/assets/images/clients/${client.file}`}
                    alt={client.name}
                    className="client-logo-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONVERSION BANNER CTA */}
      <section className="section section-white">
        <div className="container">
          <div className="conversion-banner reveal-on-scroll">
            <h2 className="conversion-title">We believe in building bridges</h2>
            <p className="conversion-subtitle">
              Create an opportunity for your organization to engage itself in a collaborative environment
            </p>
            <div className="conversion-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                PARTNER WITH US
              </Link>
              <Link to="/about-us" className="btn btn-outline-white btn-lg">
                ABOUT OUR LEADERSHIP
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
