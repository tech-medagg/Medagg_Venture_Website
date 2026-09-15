import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  BarChart2,
  GitPullRequest,
  FileText,
  UserCheck,
  ShoppingBag,
  Target,
  Clock,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const StrategicConsultingPage = () => {
  const steps = [
    {
      step: 'Step 01',
      icon: Search,
      title: 'As-Is Study',
      desc: 'Define a formal Value Creation Plan by identifying priorities and work stream through an as-is study',
    },
    {
      step: 'Step 02',
      icon: BarChart2,
      title: 'MIS Design and Cadence Setup ',
      desc: 'Establish a culture of decisions and accountability based on periodically studied factual data',
    },
    {
      step: 'Step 03',
      icon: GitPullRequest,
      title: 'Talent gap identification',
      desc: 'Fill critical gaps in the talent pool of your organisation by defining proper KPIs and KRAs',
    },
    {
      step: 'Step 04',
      icon: FileText,
      title: 'Operational process redesign',
      desc: 'Make capital out of the 40+ processes designed by us to efficiently run a hospital and improve TAT and patient satisfaction',
    },
    {
      step: 'Step 05',
      icon: UserCheck,
      title: 'Quality standardisation',
      desc: 'Navigate through your NACB and JCI accreditations by setting up perpetual readiness for internal process audits.',
    },
    {
      step: 'Step 06',
      icon: ShoppingBag,
      title: 'Supply chain management',
      desc: 'Manage your assets\'s inventory, improve margins across pharmacy and diagnostics through a foolproof SCM flow.',
    },
    {
      step: 'Step 07',
      icon: Target,
      title: 'Revenue leakage handling',
      desc: 'Arrest revenue leakages happening around your hospital by setting up an MIS and taking quick action.',
    },
    {
      step: 'Step 08',
      icon: Clock,
      title: 'Revenue increase',
      desc: 'Drive revenue up through out-of-the-box marketing initiatives and recruitment of star doctors',
    },
    {
      step: 'Step 09',
      icon: ShieldCheck,
      title: 'Improve margins',
      desc: 'Closely monitor cost trends and cut excess expenditure through well-deifned procedures and systems',
    },
  ];

  return (
    <div>
      <SEO
        title="Hospital Strategic Consulting — KPI & Operations"
        description="Medagg Ventures provides expert strategic consulting for hospitals in India. We define KPIs, redesign operational processes, manage quality standardisation, and drive revenue growth for healthcare organisations."
        keywords="hospital strategic consulting India, healthcare KPI management, hospital operational consulting, hospital process redesign, quality standardisation hospital, revenue leakage hospital, Medagg strategic consulting"
        canonical="/services/strategic-consulting"
      />
      {/* 1. CATEGORY HERO WITH FLOATING DUAL IMAGES (EXACT MATCH TO REFERENCE) */}
      <section className="service-hero-section">
        <div className="container service-hero-grid">
          <div className="reveal-slide-left">
            <span className="service-hero-tag">STRATEGIC CONSULTING</span>
            <h1 className="service-hero-heading">
              Highly-informed<br />Guided Actions
            </h1>
            <p className="service-hero-lead">
              Our unrivalled methods involve better tracking of KPIs and comprehensive expansion of a project to its full potential in order to yield maximum bottom line
            </p>
            <Link to="/contact" className="btn-gradient">
              PARTNER WITH US
            </Link>
          </div>

          <div className="reveal-slide-right delay-1">
            <div className="service-hero-media">
              <div className="service-hero-main-img">
                <img
                  src="/assets/images/careers_img2.jpg"
                  alt="Medagg team at work"
                  style={{ objectPosition: 'top center' }}
                />
              </div>
              <div className="service-hero-floating-img">
                <img
                  src="/assets/images/careers_img1.jpg"
                  alt="Medagg leadership collaboration"
                  style={{ objectPosition: 'top center' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROCESS METHODOLOGY (9 STEPS) */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="badge-tag">METHODOLOGY</span>
            <h2>Our 9-Step Consulting Framework</h2>
            <p className="lead">
              As a leading consultancy firm in the healthcare space, we discover new opportunities through research and put our findings into action

            </p>
          </div>

          <div className="process-grid">
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

      {/* 3. CASE STUDIES SHOWCASE */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="badge-tag">PROVEN IMPACT</span>
            <h2>Strategic Consulting Case Studies</h2>
            <p className="lead">
              Real-world operational transformations delivered for regional and national hospital ecosystems.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            <div className="case-study-card">
              <div
                className="case-study-img-wrap"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(10, 17, 40, 0.6), rgba(10, 17, 40, 0.9)), url('/assets/images/services/strategic_consulting_process.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '28px',
                  minHeight: '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                }}
              >
                <span className="case-study-tag">Hospital Turnaround</span>
                <div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0' }}>
                    Multi-Specialty Network
                  </span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', marginTop: '4px' }}>
                    Margin Expansion & Operational Efficiency
                  </h3>
                </div>
              </div>
              <div className="case-study-card-body" style={{ padding: '24px' }}>
                <p className="case-study-card-desc" style={{ lineHeight: '1.6', color: 'var(--color-text-body)' }}>
                  Conducted end-to-end as-is analysis, overhauled clinical scheduling, optimized SCM procurement, and established daily MIS review rhythm resulting in significant bottom-line improvement.
                </p>
                <div style={{ marginTop: '20px' }}>
                  <Link to="/casestudy" className="service-card-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-brand-pink)', fontWeight: 700 }}>
                    <span>READ FULL CASE STUDY</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
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
                  padding: '28px',
                  minHeight: '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                }}
              >
                <span className="case-study-tag">Quality & NABH</span>
                <div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0' }}>
                    Regional Super Specialty
                  </span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', marginTop: '4px' }}>
                    Clinical Governance & SOP Standardization
                  </h3>
                </div>
              </div>
              <div className="case-study-card-body" style={{ padding: '24px' }}>
                <p className="case-study-card-desc" style={{ lineHeight: '1.6', color: 'var(--color-text-body)' }}>
                  Redesigned 40+ patient touchpoint workflows, standardizing operating protocols for seamless NABH accreditation and clinical talent retention.
                </p>
                <div style={{ marginTop: '20px' }}>
                  <Link to="/casestudy" className="service-card-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-brand-pink)', fontWeight: 700 }}>
                    <span>READ FULL CASE STUDY</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONVERSION BANNER */}
      <section className="section section-white">
        <div className="container">
          <div className="conversion-banner">
            <h2 className="conversion-title">We believe in building bridges</h2>
            <p className="conversion-subtitle">
              We work with standalone hospitals and smaller chains to redesign their operating strategies
            </p>
            <div className="conversion-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                PARTNER WITH US
              </Link>
              <Link to="/transaction-advisory" className="btn btn-outline-white btn-lg">
                NEXT SERVICE: TRANSACTION ADVISORY
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
