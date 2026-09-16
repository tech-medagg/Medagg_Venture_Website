import React, { useState } from 'react';
import { X, PlusCircle, CheckCircle, Sparkles, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { addJob, parseRawJD } from '../../services/jobsService';

export const AddJobModal = ({ isOpen, onClose, onJobAdded }) => {
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

  const [rawText, setRawText] = useState('');
  const [showImporter, setShowImporter] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  if (!isOpen) return null;

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

    setShowImporter(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const updatedJobs = addJob(formData);
      setIsSubmitting(false);
      setSuccessMsg(true);

      if (onJobAdded) {
        onJobAdded(updatedJobs);
      }

      setTimeout(() => {
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
        onClose();
      }, 1200);
    }, 400);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(10, 17, 40, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
          padding: '32px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--color-text-muted)',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <span
              className="badge-tag"
              style={{ fontSize: '0.75rem', display: 'inline-block' }}
            >
              CAREER MANAGEMENT
            </span>
            <Link
              to="/careers/post"
              onClick={onClose}
              style={{
                fontSize: '0.82rem',
                color: 'var(--color-brand-pink)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              Open Full Post Page <ExternalLink size={14} />
            </Link>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginTop: '4px' }}>
            Post a New Job Opening
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', marginTop: '4px' }}>
            Publish a new position live on the Medagg Careers page immediately.
          </p>
        </div>

        {successMsg ? (
          <div
            style={{
              padding: '28px',
              textAlign: 'center',
              backgroundColor: '#f0fdf4',
              borderRadius: '12px',
              border: '1px solid #bbf7d0',
              color: '#15803d',
            }}
          >
            <CheckCircle size={44} style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Job Posted Live!</h3>
            <p style={{ fontSize: '0.92rem', color: '#166534', marginTop: '4px' }}>
              The new job listing is now published on the Careers feed.
            </p>
          </div>
        ) : (
          <div>
            {/* QUICK PARSER BUTTON */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '10px',
                padding: '12px 16px',
                marginBottom: '20px',
                border: '1px dashed #cbd5e1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} style={{ color: '#0284c7' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e293b' }}>
                  Have raw text JD? Auto-fill fields
                </span>
              </div>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setShowImporter(!showImporter)}
                style={{ fontSize: '0.78rem', padding: '4px 12px' }}
              >
                {showImporter ? 'Cancel' : 'Paste JD'}
              </button>
            </div>

            {/* IMPORTER BOX */}
            {showImporter && (
              <div
                style={{
                  backgroundColor: '#eff6ff',
                  borderRadius: '10px',
                  padding: '16px',
                  marginBottom: '20px',
                  border: '1px solid #bfdbfe',
                }}
              >
                <textarea
                  rows={4}
                  className="form-control"
                  placeholder="Paste full raw JD text here..."
                  value={rawText}
                  onChange={(e) => setRawText(e.target.value)}
                  style={{ fontSize: '0.82rem', resize: 'vertical', backgroundColor: '#ffffff' }}
                />
                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={handleSmartImport}
                    style={{ fontSize: '0.8rem', padding: '6px 14px', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Sparkles size={14} /> Extract & Fill Form
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                  Job Title *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. Senior Healthcare Operations Lead"
                  value={formData.title}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
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
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                    Job Type
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
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
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                    Experience
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
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                    Salary (Optional)
                  </label>
                  <input
                    type="text"
                    name="salary"
                    placeholder="e.g. ₹15L - ₹20L PA"
                    value={formData.salary}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                  Short Summary (Card Description) *
                </label>
                <input
                  type="text"
                  name="shortDesc"
                  required
                  placeholder="Brief 1-sentence summary of key responsibility"
                  value={formData.shortDesc}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                  Full Description *
                </label>
                <textarea
                  name="fullDesc"
                  required
                  rows={3}
                  placeholder="Detailed explanation of the role, responsibilities, and team context..."
                  value={formData.fullDesc}
                  onChange={handleChange}
                  className="form-control"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                  Requirements (One per line)
                </label>
                <textarea
                  name="requirements"
                  rows={3}
                  placeholder="Master's in Hospital Administration or MHA&#10;5+ years experience in tertiary care"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="form-control"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div style={{ marginTop: '12px', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <PlusCircle size={18} />
                  <span>{isSubmitting ? 'Publishing...' : 'Publish Job Live'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
