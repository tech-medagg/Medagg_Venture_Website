import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Medagg Ventures';
const BASE_URL = 'https://www.medagg.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/images/medagg-og-image.jpg`;

/**
 * SEO component — drop this at the top of every page component.
 * All props are optional; sensible defaults are provided.
 */
export const SEO = ({
  title,
  description,
  keywords = '',
  canonical = '',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
  jsonLd = null,
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Healthcare Strategy, Operations & Advisory`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Medagg Ventures',
    url: BASE_URL,
    logo: `${BASE_URL}/assets/images/medagg-logo-black.svg`,
    description: 'Medagg Ventures is a leading healthcare consulting and advisory firm in India, specializing in hospital management, strategic consulting, M&A advisory, O&M contracts, and channel partnerships.',
    sameAs: [
      'https://www.linkedin.com/company/medagg',
      'https://www.instagram.com/medaggventures',
      'https://www.facebook.com/medaggventures',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'karankinger@medagghealthcare.com',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Tamil'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  };

  return (
    <Helmet>
      {/* Primary */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Medagg Ventures" />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Organization JSON-LD (always present) */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>

      {/* Page-specific JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};
