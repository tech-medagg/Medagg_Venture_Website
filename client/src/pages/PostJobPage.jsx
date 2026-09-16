import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { addJob, parseRawJD } from '../services/jobsService';
import { 
  Sparkles, 
  PlusCircle, 
  CheckCircle2, 
  Eye, 
  Edit3, 
  MapPin, 
  Clock, 
  Briefcase, 
  DollarSign, 
  ArrowLeft,
  FileText
} from 'lucide-react';

export const PostJobPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('form'); // 'form' | 'preview'
  const [rawText, setRawText] = useState('');
  const [showRawImporter, setShowRawImporter] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    department: 'Advisory',
    location: 'Chennai / Hybrid',
    type: 'Full-time',
    experience: '3+ Years',
    salary: '',
    shortDesc: '',
    fullDesc: '',
    requirements: '',
    responsibilities: '',
    perks: '',
    contactEmail: 'careers@medaggventures.com',
    applyUrl: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSmartImport = () => {
    if (!rawText.trim()) return;
    const parsed = parseRawJD(rawText);

    setFormData((prev) => ({
      ...prev,
      title: parsed.title || prev.title,
      department: parsed.department || prev.department,
      location: parsed.location || prev.location,
      type: parsed.type || prev.type,
      experience: parsed.experience || prev.experience,
      salary: parsed.salary || prev.salary,
      shortDesc: parsed.shortDesc || prev.shortDesc,
      fullDesc: parsed.fullDesc || prev.fullDesc,
      requirements: parsed.requirements.length ? parsed.requirements.join('\n') : prev.requirements,
      responsibilities: parsed.responsibilities.length ? parsed.responsibilities.join('\n') : prev.responsibilities,
      perks: parsed.perks.length ? parsed.perks.join('\n') : prev.perks,
    }));

    setShowRawImporter(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      addJob(formData);
      setIsSubmitting(false);
      setSuccessMsg(true);
    }, 400);
  };

  const requirementsList = formData.requirements
    .split('\n')
    .map((r) => r.trim())
    .filter(Boolean);

  const responsibilitiesList = formData.responsibilities
    .split('\n')
    .map((r) => r.trim())
    .filter(Boolean);

  const perksList = formData.perks
    .split('\n')
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div>
      <SEO
        title="Post a Career JD — Medagg Ventures"
        description="Publish job descriptions and career openings live on the Medagg Ventures portal."
        keywords="post job, healthcare jd form, medagg careers post, hospital hiring"
        canonical="/careers/post"
      />

      {/* HERO SECTION */}
      <section className="page-hero" style={{ padding: '40px 0 30px' }}>
        <div className="container">
          <Link
            to="/careers"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-brand-pink)',
              fontWeight: 600,
              fontSize: '0.9rem',
              marginBottom: '16px',
            }}
          >
            <ArrowLeft size={16} /> Back to Careers Feed
          </Link>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px' }}>
            <div>
              <span className="page-hero-badge">CAREER MANAGEMENT PORTAL</span>
              <h1 className="page-hero-title" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                Post a Career JD
              </h1>
              <p className="page-hero-desc" style={{ maxWidth: '650px' }}>
                Publish new mandates, clinical consulting roles, or operational job descriptions live to the Medagg website feed in seconds.
              </p>
            </div>

            {/* TAB TOGGLE */}
            <div
              style={{
                display: 'flex',
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '4px',
                borderRadius: 'var(--radius-md)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab('form')}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  backgroundColor: activeTab === 'form' ? '#ffffff' : 'transparent',
                  color: activeTab === 'form' ? 'var(--color-brand-pink)' : '#ffffff',
                  fontWeight: activeTab === 'form' ? 700 : 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s',
                  boxShadow: activeTab === 'form' ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
                }}
              >
                <Edit3 size={16} style={{ color: activeTab === 'form' ? 'var(--color-brand-pink)' : '#ffffff' }} />
                <span style={{ color: activeTab === 'form' ? 'var(--color-brand-pink)' : '#ffffff', fontWeight: activeTab === 'form' ? 700 : 600 }}>
                  Edit Form
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  backgroundColor: activeTab === 'preview' ? '#ffffff' : 'transparent',
                  color: activeTab === 'preview' ? 'var(--color-brand-pink)' : '#ffffff',
                  fontWeight: activeTab === 'preview' ? 700 : 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s',
                  boxShadow: activeTab === 'preview' ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
                }}
              >
                <Eye size={16} style={{ color: activeTab === 'preview' ? 'var(--color-brand-pink)' : '#ffffff' }} />
                <span style={{ color: activeTab === 'preview' ? 'var(--color-brand-pink)' : '#ffffff', fontWeight: activeTab === 'preview' ? 700 : 600 }}>
                  Live Preview
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="section section-subtle" style={{ minHeight: '600px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* SUCCESS BANNER */}
          {successMsg ? (
            <div
              style={{
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '16px',
                padding: '40px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              }}
            >
              <CheckCircle2 size={56} style={{ color: '#16a34a', margin: '0 auto 16px' }} />
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#166534', marginBottom: '8px' }}>
                Job Description Posted Successfully!
              </h2>
              <p style={{ color: '#15803d', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto 24px' }}>
                The position <strong>"{formData.title}"</strong> is now live on the Medagg Careers feed.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setSuccessMsg(false);
                    setFormData({
                      title: '',
                      department: 'Advisory',
                      location: 'Chennai / Hybrid',
                      type: 'Full-time',
                      experience: '3+ Years',
                      salary: '',
                      shortDesc: '',
                      fullDesc: '',
                      requirements: '',
                      responsibilities: '',
                      perks: '',
                      contactEmail: 'careers@medaggventures.com',
                      applyUrl: '',
                    });
                    setActiveTab('form');
                  }}
                >
                  Post Another Role
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate('/careers')}
                >
                  View Live on Careers Page
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* TAB 1: EDIT FORM */}
              {activeTab === 'form' && (
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    padding: '36px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                    border: '1px solid var(--color-border-subtle)',
                  }}
                >
                  {/* SMART AUTO-IMPORTER TRIGGER */}
                  <div
                    style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '12px',
                      padding: '16px 20px',
                      marginBottom: '28px',
                      border: '1px dashed #cbd5e1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: '#e0f2fe',
                          color: '#0284c7',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, color: 'var(--color-navy-dark)' }}>
                          Have a raw JD text?
                        </h4>
                        <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', margin: 0 }}>
                          Paste raw text from a document or email to auto-fill form fields instantly.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => setShowRawImporter(!showRawImporter)}
                      style={{ fontSize: '0.82rem', padding: '6px 14px' }}
                    >
                      {showRawImporter ? 'Close Importer' : 'Paste Raw JD'}
                    </button>
                  </div>

                  {/* RAW IMPORTER DRAWER */}
                  {showRawImporter && (
                    <div
                      style={{
                        backgroundColor: '#eff6ff',
                        borderRadius: '12px',
                        padding: '20px',
                        marginBottom: '28px',
                        border: '1px solid #bfdbfe',
                      }}
                    >
                      <label style={{ display: 'block', fontWeight: 700, fontSize: '0.85rem', marginBottom: '6px', color: '#1e40af' }}>
                        Paste Raw Text Job Description
                      </label>
                      <textarea
                        rows={6}
                        className="form-control"
                        placeholder="Title: Senior Hospital Advisory Lead&#10;Department: Operations&#10;Location: Chennai&#10;Requirements:&#10;- MHA/MBA with 5+ yrs exp&#10;- NABH accreditation knowledge"
                        value={rawText}
                        onChange={(e) => setRawText(e.target.value)}
                        style={{ fontSize: '0.85rem', resize: 'vertical', backgroundColor: '#ffffff' }}
                      />
                      <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          onClick={handleSmartImport}
                          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          <Sparkles size={16} /> Auto-Fill Fields
                        </button>
                      </div>
                    </div>
                  )}

                  {/* MAIN FORM */}
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>
                        Job Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        required
                        placeholder="e.g. Senior Healthcare Strategy Consultant"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>
                          Department
                        </label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="Advisory">Advisory</option>
                          <option value="Operations">Operations</option>
                          <option value="Transactions & Finance">Transactions & Finance</option>
                          <option value="Clinical Operations">Clinical Operations</option>
                          <option value="Technology & Data">Technology & Data</option>
                          <option value="Business Development">Business Development</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>
                          Employment Type
                        </label>
                        <select
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                          <option value="Retainer Advisory">Retainer Advisory</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          placeholder="e.g. Chennai / Hybrid"
                          value={formData.location}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>
                          Experience Required
                        </label>
                        <input
                          type="text"
                          name="experience"
                          placeholder="e.g. 4-8 Years"
                          value={formData.experience}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>
                          Salary Range / CTC (Optional)
                        </label>
                        <input
                          type="text"
                          name="salary"
                          placeholder="e.g. ₹15L - ₹22L PA + Bonus"
                          value={formData.salary}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>
                        Short Card Description *
                      </label>
                      <input
                        type="text"
                        name="shortDesc"
                        required
                        placeholder="Brief 1-sentence summary displayed on job cards"
                        value={formData.shortDesc}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>
                        Full Overview & Job Summary *
                      </label>
                      <textarea
                        name="fullDesc"
                        required
                        rows={4}
                        placeholder="Detailed role description, context of project mandates, and team environment..."
                        value={formData.fullDesc}
                        onChange={handleChange}
                        className="form-control"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>
                        Key Requirements (One requirement per line)
                      </label>
                      <textarea
                        name="requirements"
                        rows={4}
                        placeholder="Master's in Hospital Administration (MHA) or MBA&#10;5+ years leading hospital turnarounds&#10;NABH/JCI compliance experience"
                        value={formData.requirements}
                        onChange={handleChange}
                        className="form-control"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>
                        Key Responsibilities (Optional, one per line)
                      </label>
                      <textarea
                        name="responsibilities"
                        rows={3}
                        placeholder="Drive hospital KPI monitoring and operational restructuring&#10;Liaise with CXO suite and clinical heads"
                        value={formData.responsibilities}
                        onChange={handleChange}
                        className="form-control"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>
                        Perks & Compensation Highlights (Optional, one per line)
                      </label>
                      <textarea
                        name="perks"
                        rows={2}
                        placeholder="Project performance bonuses&#10;Flexible remote work options"
                        value={formData.perks}
                        onChange={handleChange}
                        className="form-control"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>
                          HR Contact Email
                        </label>
                        <input
                          type="email"
                          name="contactEmail"
                          placeholder="careers@medaggventures.com"
                          value={formData.contactEmail}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>
                          Custom Application URL (Optional)
                        </label>
                        <input
                          type="url"
                          name="applyUrl"
                          placeholder="https://forms.gle/your-form"
                          value={formData.applyUrl}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>

                    {/* ACTIONS */}
                    <div style={{ marginTop: '16px', display: 'flex', gap: '16px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={() => setActiveTab('preview')}
                      >
                        <Eye size={18} style={{ marginRight: '6px' }} /> Preview
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                      >
                        <PlusCircle size={18} />
                        <span>{isSubmitting ? 'Publishing...' : 'Publish Job Live'}</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* TAB 2: LIVE PREVIEW */}
              {activeTab === 'preview' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  
                  {/* CARD PREVIEW CONTAINER */}
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      padding: '32px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                      border: '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <span className="badge-tag" style={{ fontSize: '0.75rem' }}>CARD PREVIEW ON CAREERS FEED</span>
                      <span style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 700, backgroundColor: '#dcfce7', padding: '2px 10px', borderRadius: '12px' }}>
                        LIVE LOOK
                      </span>
                    </div>

                    {/* SAMPLE CARD */}
                    <div
                      className="feature-card"
                      style={{
                        backgroundColor: '#fafafa',
                        border: '1px solid #e2e8f0',
                        maxWidth: '420px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <span className="badge-tag" style={{ fontSize: '0.75rem' }}>{formData.department || 'Advisory'}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '2px 8px', borderRadius: '12px', backgroundColor: '#dcfce7', color: '#15803d' }}>
                            NEW OPENING
                          </span>
                          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                            {formData.type || 'Full-time'}
                          </span>
                        </div>
                      </div>

                      <h3 className="feature-card-title">{formData.title || 'Untitled Job Position'}</h3>
                      <p className="feature-card-desc">
                        {formData.shortDesc || 'Short description preview will appear here...'}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '16px', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin size={14} /> <span>{formData.location || 'Chennai'}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={14} /> <span>{formData.experience || '3+ Years'}</span>
                        </div>
                        {formData.salary && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#15803d', fontWeight: 600 }}>
                            <DollarSign size={14} /> <span>{formData.salary}</span>
                          </div>
                        )}
                      </div>

                      <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
                        <button type="button" className="btn btn-outline btn-sm" style={{ width: '100%' }}>
                          View Job & Apply
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* FULL DETAIL MODAL PREVIEW */}
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      padding: '32px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                      border: '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <span className="badge-tag" style={{ fontSize: '0.75rem', marginBottom: '16px', display: 'inline-block' }}>
                      FULL JOB DETAILS MODAL PREVIEW
                    </span>

                    <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '8px' }}>
                      {formData.title || 'Job Title'}
                    </h2>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '20px', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                      <span><strong>Department:</strong> {formData.department}</span>
                      <span><strong>Type:</strong> {formData.type}</span>
                      <span><strong>Location:</strong> {formData.location}</span>
                      <span><strong>Exp:</strong> {formData.experience}</span>
                      {formData.salary && <span style={{ color: '#15803d', fontWeight: 700 }}><strong>Salary:</strong> {formData.salary}</span>}
                    </div>

                    <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px', marginBottom: '20px' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Role Overview</h4>
                      <p style={{ color: '#334155', lineHeight: 1.6 }}>{formData.fullDesc || 'Full detailed description...'}</p>
                    </div>

                    {requirementsList.length > 0 && (
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Key Requirements</h4>
                        <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {requirementsList.map((req, i) => (
                            <li key={i} style={{ color: '#334155', fontSize: '0.92rem' }}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {responsibilitiesList.length > 0 && (
                      <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Responsibilities</h4>
                        <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {responsibilitiesList.map((res, i) => (
                            <li key={i} style={{ color: '#334155', fontSize: '0.92rem' }}>{res}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={() => setActiveTab('form')}
                      >
                        Return to Edit Form
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        Publish Now
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </section>
    </div>
  );
};

export default PostJobPage;
