import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ShieldCheck, Cpu } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const OmContractsPage = () => {
  const steps = [
    {
      step: 'Step 01',
      icon: Users,
      title: 'Expert recruitment',
      desc: 'Employ star doctors along with their experience, education and clinical skills to boost clinical expertise as they extend their successful practices',
    },
    {
      step: 'Step 02',
      icon: ShieldCheck,
      title: 'Quality monitoring',
      desc: 'Bring about a system that is capable of providing improved quality of care and competent standard operating procedures',
    },
    {
      step: 'Step 03',
      icon: Cpu,
      title: 'Technology Leverage',
      desc: 'Implement systematic Hospital Information Systems in order to enable robust monitoring, reporting and quick decision making',
    },
  ];

  return (
    <div>
      <SEO
        title="Hospital O&M Contracts — Operations & Management"
        description="Medagg Ventures provides hospital Operations & Management (O&M) contracts across India. We supply clinical leadership, operational staff, and end-to-end management to improve hospital efficiency and patient outcomes."
        keywords="hospital O&M contracts India, hospital operations management, hospital management contracts, clinical operations hospital, hospital staffing India, Medagg O&M contracts, hospital efficiency management"
        canonical="/services/om-contracts"
      />
      {/* 1. SERVICE HERO WITH FLOATING DUAL IMAGES */}
      <section className="service-hero-section">
        <div className="container service-hero-grid">
          <div className="reveal-slide-left">
            <span className="service-hero-tag">O&M CONTRACTS</span>
            <h1 className="service-hero-heading">
              Adapt to Everchanging<br />Landscapes
            </h1>
            <p className="service-hero-lead">
              Our carefully crafted contracts are specifically designed for doctor promoters to free them from day-to-day admin responsibilities so that your clinical bandwidth is not curtailed.   </p>
            <Link to="/contact" className="btn-gradient">
              PARTNER WITH US
            </Link>
          </div>

          <div className="reveal-slide-right delay-1">
            <div className="service-hero-media">
              <div className="service-hero-main-img">
                <img
                  src="/assets/images/services/om_big_parallax.jpg"
                  alt="Operations & Management Leadership"
                />
              </div>
              <div className="service-hero-floating-img">
                <img
                  src="/assets/images/services/om_small_parallax.jpg"
                  alt="Operations & Management Teams"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW DOES IT WORK (3 STEPS) */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="badge-tag">PROCESS</span>
            <h2>How does it work?</h2>
            <p className="lead">
              Structured operational models for clinical turnarounds and multi-facility governance
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="process-card">
                  <div className="process-card-header">
                    <span className="process-card-step">{item.step}</span>
                    <div className="process-card-icon">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="process-card-title">{item.title}</h3>
                  <p className="process-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES SECTION */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="badge-tag">CASE STUDIES</span>
            <h2>We work towards redefining India's healthcare spectrum</h2>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            <div className="case-study-card">
              <div
                className="case-study-img-wrap"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(10, 17, 40, 0.6), rgba(10, 17, 40, 0.9)), url('/assets/images/services/om_small_parallax.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '24px',
                  minHeight: '160px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                }}
              >
                <span className="case-study-tag">O&M Contracts</span>
              </div>
              <div className="case-study-card-body" style={{ padding: '24px' }}>
                <h3 className="case-study-card-title">Asset Turnaround & Clinical Ops</h3>
                <p className="case-study-card-desc">
                  Full operations management integration for single-specialty hospital vertical.
                </p>
              </div>
            </div>

            <div className="case-study-card">
              <div
                className="case-study-img-wrap"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(10, 17, 40, 0.6), rgba(10, 17, 40, 0.9)), url('/assets/images/services/onm_process.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '24px',
                  minHeight: '160px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                }}
              >
                <span className="case-study-tag">Governance</span>
              </div>
              <div className="case-study-card-body" style={{ padding: '24px' }}>
                <h3 className="case-study-card-title">Quality Standards & Recruitment</h3>
                <p className="case-study-card-desc">
                  Deployment of clinical leadership, hospital auditing protocols, and standard operating procedures.
                </p>
              </div>
            </div>

            <div className="case-study-card">
              <div
                className="case-study-img-wrap"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(10, 17, 40, 0.6), rgba(10, 17, 40, 0.9)), url('/assets/images/home/consolidate_healthcare.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '24px',
                  minHeight: '160px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                }}
              >
                <span className="case-study-tag">Efficiency</span>
              </div>
              <div className="case-study-card-body" style={{ padding: '24px' }}>
                <h3 className="case-study-card-title">Hospital Capacity Turnaround</h3>
                <p className="case-study-card-desc">
                  Leveraging modern hospital technology systems for reduced TAT and elevated patient satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTRACTS DESIGNED FOR YOUR BUSINESS BANNER */}
      <section className="section section-white">
        <div className="container">
          <div className="conversion-banner">
            <h2 className="conversion-title">Contracts designed for your<br />business</h2>
            <p className="conversion-subtitle">
              We don't just find a solution. We find THE SOLUTION.
            </p>
            <div className="conversion-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                PARTNER WITH US
              </Link>
              <Link to="/channel-partnerships" className="btn btn-outline-white btn-lg">
                NEXT SERVICE: CHANNEL PARTNERSHIPS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
