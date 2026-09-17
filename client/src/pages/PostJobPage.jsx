import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { ConfirmDeleteModal } from '../components/careers/ConfirmDeleteModal';
import { addJob, getJobs, deleteJob, parseRawJD } from '../services/jobsService';
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
  FileText,
  Trash2,
  Layers,
} from 'lucide-react';

export const PostJobPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('form'); // 'form' | 'preview'
  const [rawText, setRawText] = useState('');
  const [showRawImporter, setShowRawImporter] = useState(false);

  // Published jobs feed state (admin panel)
  const [publishedJobs, setPublishedJobs] = useState([]);
  const [deletingJob, setDeletingJob] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Load published jobs on mount and after changes
  useEffect(() => {
    setPublishedJobs(getJobs());
  }, []);

  const handleOpenDeleteModal = (e, job) => {
    e.stopPropagation();
    setDeletingJob(job);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = (jobId) => {
    const updated = deleteJob(jobId);
    setPublishedJobs(updated);
    setIsDeleteModalOpen(false);
    setDeletingJob(null);
  };

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
      // Refresh published jobs list
      setPublishedJobs(getJobs());
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

  // Only show custom (admin-posted) jobs in the panel
  const customJobs = publishedJobs.filter((j) => j.isCustom);

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
          <div className="post-job-hero-row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px' }}>
            <div>
              <span className="page-hero-badge">CAREER MANAGEMENT PORTAL</span>
              <h1 className="page-hero-title" style={{ fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', marginBottom: '8px' }}>
                Post a Career JD
              </h1>
              <p className="page-hero-desc" style={{ maxWidth: '650px', fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)' }}>
                Publish new mandates, clinical consulting roles, or operational job descriptions live to the Medagg website feed in seconds.
              </p>
            </div>

            {/* TAB TOGGLE */}
            <div className="post-job-tab-toggle">
              <button
                type="button"
                className="post-job-tab-btn"
                onClick={() => setActiveTab('form')}
                style={{
                  backgroundColor: activeTab === 'form' ? '#ffffff' : 'transparent',
                  color: activeTab === 'form' ? 'var(--color-brand-pink)' : '#ffffff',
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
                className="post-job-tab-btn"
                onClick={() => setActiveTab('preview')}
                style={{
                  backgroundColor: activeTab === 'preview' ? '#ffffff' : 'transparent',
                  color: activeTab === 'preview' ? 'var(--color-brand-pink)' : '#ffffff',
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

      {/* MAIN CONTENT — two-column: form left, published jobs right */}
      <section className="section section-subtle" style={{ minHeight: '600px' }}>
        <div
          className="container post-job-main-grid"
          style={{
            maxWidth: '1300px',
            display: 'grid',
            gridTemplateColumns: successMsg ? '1fr' : '1fr 380px',
            gap: '32px',
            alignItems: 'start',
          }}
        >

          {/* ── LEFT: FORM / PREVIEW PANEL ── */}
          <div style={{ maxWidth: '900px', width: '100%' }}>

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
                  <div className="post-job-card">
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
                            <option value="Transactions & Finance">Transactions &amp; Finance</option>
                            <option value="Clinical Operations">Clinical Operations</option>
                            <option value="Technology & Data">Technology &amp; Data</option>
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
                          Full Overview &amp; Job Summary *
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
                          Perks &amp; Compensation Highlights (Optional, one per line)
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
                      <div className="post-job-actions" style={{ marginTop: '16px', display: 'flex', gap: '16px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
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
                        className="feature-card post-job-preview-card"
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
                            View Job &amp; Apply
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

          {/* ── RIGHT: PUBLISHED JOBS PANEL (admin manage) ── */}
          {!successMsg && (
            <div
              className="post-job-sidebar"
              style={{
                position: 'sticky',
                top: '112px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Panel header */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid var(--color-border-subtle)',
                  boxShadow: '0 4px 20px rgba(15,29,64,0.06)',
                  overflow: 'hidden',
                }}
              >
                {/* Header */}
                <div
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid var(--color-border-subtle)',
                    background: 'linear-gradient(135deg, #0A1128 0%, #15224A 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Layers size={18} style={{ color: '#FF6B9D', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                      Published Job Feed
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.55)', marginTop: '1px' }}>
                      {customJobs.length} live posting{customJobs.length !== 1 ? 's' : ''} · Admin only
                    </div>
                  </div>
                </div>

                {/* Jobs list */}
                <div
                  className="post-job-sidebar-scroll"
                  style={{
                    maxHeight: '68vh',
                    overflowY: 'auto',
                    padding: customJobs.length === 0 ? '0' : '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  {customJobs.length === 0 ? (
                    <div
                      style={{
                        padding: '32px 20px',
                        textAlign: 'center',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      <FileText size={32} style={{ margin: '0 auto 12px', opacity: 0.35 }} />
                      <p style={{ fontSize: '0.875rem', margin: 0 }}>
                        No jobs published yet.<br />Fill the form and click <strong>Publish Job Live</strong>.
                      </p>
                    </div>
                  ) : (
                    customJobs.map((job) => (
                      <div
                        key={job.id}
                        style={{
                          backgroundColor: '#fafbfc',
                          border: '1px solid var(--color-border-subtle)',
                          borderRadius: '12px',
                          padding: '14px 16px',
                          position: 'relative',
                          transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
                        }}
                      >
                        {/* Top row: department + type */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span
                            style={{
                              fontSize: '0.68rem',
                              fontWeight: 700,
                              letterSpacing: '0.06em',
                              textTransform: 'uppercase',
                              color: 'var(--color-brand-pink)',
                              backgroundColor: 'rgba(235,36,107,0.08)',
                              border: '1px solid rgba(235,36,107,0.18)',
                              borderRadius: '999px',
                              padding: '2px 10px',
                            }}
                          >
                            {job.department}
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                            {job.type}
                          </span>
                        </div>

                        {/* Title */}
                        <div
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            fontSize: '0.92rem',
                            color: 'var(--color-navy-900)',
                            marginBottom: '4px',
                            lineHeight: 1.3,
                          }}
                        >
                          {job.title}
                        </div>

                        {/* Short desc */}
                        <p
                          style={{
                            fontSize: '0.8rem',
                            color: 'var(--color-text-muted)',
                            margin: '0 0 10px',
                            lineHeight: 1.45,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {job.shortDesc}
                        </p>

                        {/* Meta: location + experience */}
                        <div style={{ display: 'flex', gap: '12px', fontSize: '0.77rem', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                            <MapPin size={12} />
                            <span>{job.location}</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                            <Clock size={12} />
                            <span>{job.experience}</span>
                          </div>
                        </div>

                        {/* Footer: NEW badge + delete */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingTop: '10px',
                            borderTop: '1px solid var(--color-border-subtle)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '0.68rem',
                              fontWeight: 700,
                              padding: '2px 8px',
                              borderRadius: '12px',
                              backgroundColor: '#dcfce7',
                              color: '#15803d',
                            }}
                          >
                            ● LIVE
                          </span>
                          <button
                            type="button"
                            onClick={(e) => handleOpenDeleteModal(e, job)}
                            title="Remove this job listing"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              padding: '5px 10px',
                              border: '1px solid #fecdd3',
                              backgroundColor: '#fff1f2',
                              color: '#e11d48',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              transition: 'all 0.2s',
                            }}
                          >
                            <Trash2 size={13} />
                            Remove
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Quick link to careers page */}
              <Link
                to="/careers"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '10px 16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-border-subtle)',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--color-navy-900)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(15,29,64,0.06)',
                }}
              >
                <Eye size={14} style={{ color: 'var(--color-brand-pink)' }} />
                View Live Careers Page →
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* DELETE CONFIRMATION MODAL — admin only, only on this page */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        job={deletingJob}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setDeletingJob(null);
        }}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default PostJobPage;
