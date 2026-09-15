import React, { useState } from 'react';
import { RotateCw, Clock } from 'lucide-react';

export const TeamMemberCard = ({ member, onOpenBio }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="team-card-flipper-container">
      <div className={`team-card-flipper ${isFlipped ? 'is-flipped' : ''}`}>
        {/* Front Side */}
        <div className="team-card-front">
          <div className="team-card-image-wrap">
            <img
              src={member.image}
              alt={member.name}
              className="team-card-image"
              width="180"
              height="190"
              loading="lazy"
            />
          </div>
          <div className="team-card-body">
            <h3 className="team-card-name">{member.name}</h3>
            <div className="team-card-role">{member.role}</div>

            <div className="team-card-past-heading">
              <Clock size={14} />
              <span>Past experience</span>
            </div>

            <ul className="team-experience-list">
              {member.experience.map((exp, idx) => (
                <li key={idx} className="team-experience-item">
                  <span className="team-experience-icon">▸</span>
                  <span>{exp}</span>
                </li>
              ))}
            </ul>

            <div className="team-card-action">
              <button
                type="button"
                className="team-flip-btn"
                onClick={() => setIsFlipped(true)}
              >
                <span>Flip Card Details</span>
                <RotateCw size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="team-card-back">
          <div>
            <span
              className="badge-tag-dark"
              style={{
                marginBottom: '12px',
                display: 'inline-block',
                padding: '4px 10px',
                fontSize: '0.75rem',
              }}
            >
              {member.badge || 'Executive Profile'}
            </span>
            <h3>{member.name}</h3>
            <div className="team-card-role" style={{ color: 'var(--color-brand-pink)', marginBottom: '16px' }}>
              {member.role}
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#CBD5E1', marginBottom: '16px' }}>
              {member.bio}
            </p>

            <div className="team-card-past-heading" style={{ color: '#94A3B8' }}>
              Key Accomplishments
            </div>
            <ul className="team-experience-list">
              {member.experience.map((exp, idx) => (
                <li key={idx} className="team-experience-item">
                  <span className="team-experience-icon" style={{ color: 'var(--color-brand-pink)' }}>▸</span>
                  <span>{exp}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="btn btn-outline-white btn-sm"
            onClick={() => setIsFlipped(false)}
            style={{ width: '100%', marginTop: '16px' }}
          >
            Back to Profile
          </button>
        </div>
      </div>
    </div>
  );
};
