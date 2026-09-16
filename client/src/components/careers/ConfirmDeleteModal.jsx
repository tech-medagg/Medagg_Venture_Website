import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';

export const ConfirmDeleteModal = ({ isOpen, job, onClose, onConfirm }) => {
  if (!isOpen || !job) return null;

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
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '440px',
          padding: '28px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          textAlign: 'center',
          border: '1px solid rgba(226, 232, 240, 0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Warning Icon Badge */}
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#fff1f2',
            color: '#e11d48',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            border: '1px solid #fecdd3',
          }}
        >
          <AlertTriangle size={28} />
        </div>

        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-navy-dark)', marginBottom: '8px' }}>
          Remove Job Listing?
        </h3>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '20px' }}>
          Are you sure you want to delete <strong style={{ color: '#0f172a' }}>"{job.title}"</strong> from the website? This action will immediately unpublish the role.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-outline"
            style={{
              flex: 1,
              padding: '10px 16px',
              borderRadius: '8px',
              fontSize: '0.88rem',
              fontWeight: 600,
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onConfirm(job.id)}
            style={{
              flex: 1,
              padding: '10px 16px',
              borderRadius: '8px',
              backgroundColor: '#e11d48',
              color: '#ffffff',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(225, 29, 72, 0.3)',
            }}
          >
            <Trash2 size={16} /> Delete Job
          </button>
        </div>
      </div>
    </div>
  );
};
