import React from 'react';

export const AdvisorCard = ({ advisor, onOpenBio }) => {
  return (
    <div className="team-card">
      <div className="team-card-image-wrap">
        <img
          src={advisor.image}
          alt={advisor.name}
          className="team-card-image"
          width="180"
          height="190"
          loading="lazy"
        />
      </div>
      <div className="team-card-body">
        <h3 className="team-card-name">{advisor.name}</h3>
        <div className="team-card-role">{advisor.role}</div>
        <div className="team-card-past-heading">Key Experience & Governance</div>
        <ul className="team-experience-list">
          {advisor.experience.map((exp, idx) => (
            <li key={idx} className="team-experience-item">
              <span className="team-experience-icon">▸</span>
              <span>{exp}</span>
            </li>
          ))}
        </ul>

        {advisor.bio && (
          <div style={{ marginTop: '16px' }}>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => onOpenBio(advisor)}
              style={{ width: '100%' }}
            >
              Read Full Biography
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
