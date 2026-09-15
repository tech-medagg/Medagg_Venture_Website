import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, title, subtitle, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay is-active"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Dialog"
        >
          <X size={20} />
        </button>

        {title && <h3 id="modal-title" className="modal-title" style={{ marginBottom: '6px' }}>{title}</h3>}
        {subtitle && (
          <div
            className="modal-subtitle"
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--color-brand-pink)',
              marginBottom: '20px',
            }}
          >
            {subtitle}
          </div>
        )}

        <div className="modal-content-area" style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-body)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
