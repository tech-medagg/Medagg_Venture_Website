import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  isDark = false,
  className = '',
}) => {
  return (
    <div
      className={`section-header ${centered ? 'text-center' : ''} ${className}`}
      style={{ marginBottom: '48px' }}
    >
      {badge && (
        <span
          className={isDark ? 'badge-tag-dark' : 'badge-tag'}
          style={{ marginBottom: '12px', display: 'inline-block' }}
        >
          {badge}
        </span>
      )}
      {title && (
        <h2 style={{ color: isDark ? '#FFFFFF' : 'var(--color-text-heading)' }}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className="lead"
          style={{
            color: isDark ? '#94A3B8' : 'var(--color-text-body)',
            maxWidth: centered ? '720px' : '100%',
            marginLeft: centered ? 'auto' : '0',
            marginRight: centered ? 'auto' : '0',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
