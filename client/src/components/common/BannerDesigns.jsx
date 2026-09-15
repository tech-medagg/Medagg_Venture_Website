import React, { useState } from 'react';
import { Send, Phone, Globe, Edit, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export const BannerDesignOne = ({
  logoText = "Agency",
  titleHighlight = "Digital Marketing",
  titleSub = "Agency",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  phone = "000 123 456 789",
  website = "www.website.com",
  imageUrl = "/assets/images/home/consolidate_healthcare.jpg"
}) => {
  return (
    <div className="medagg-banner-card banner-style-1">
      {/* Top right geometric accent */}
      <div className="banner-accent-top-right"></div>
      
      {/* Bottom left corner accent */}
      <div className="banner-accent-bottom-left"></div>
      
      {/* Main Grid Content */}
      <div className="banner-grid-1">
        {/* Left Dark Content Column */}
        <div className="banner-content-left">
          <div className="banner-content-inner">
            {/* Logo / Brand Header */}
            <div className="banner-brand-header">
              <div className="banner-logo-icon">
                <Send size={18} className="logo-svg" />
              </div>
              <span className="banner-brand-name">{logoText}</span>
            </div>

            <div className="banner-divider-line"></div>

            {/* Headline */}
            <h2 className="banner-heading">
              <span className="text-yellow-highlight">{titleHighlight}</span>
              <br />
              <span className="text-white-sub">{titleSub}</span>
            </h2>

            {/* Description */}
            <p className="banner-description">{description}</p>

            {/* Contact Bar */}
            <div className="banner-contact-bar">
              <div className="contact-badge-item">
                <div className="contact-badge-icon">
                  <Phone size={14} />
                </div>
                <span className="contact-badge-text">{phone}</span>
              </div>

              <div className="contact-badge-item">
                <div className="contact-badge-icon">
                  <Globe size={14} />
                </div>
                <span className="contact-badge-text">{website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slanted Geometric Divider Ribbons */}
        <div className="banner-angled-divider">
          <div className="slant-ribbon-primary"></div>
          <div className="slant-ribbon-secondary"></div>
        </div>

        {/* Right Media Section */}
        <div className="banner-media-right">
          <div className="banner-image-mask">
            <img src={imageUrl} alt={titleHighlight} className="banner-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const BannerDesignTwo = ({
  subtitle = "Simple & Modern",
  titleHighlight = "Furniture",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  buttonText = "ORDER NOW",
  phone = "000 123 456 789",
  website = "www.website.com",
  imageUrl = "/assets/images/services/strategic_consulting.jpg"
}) => {
  return (
    <div className="medagg-banner-card banner-style-2">
      {/* Background Decorative Wireframe Elements */}
      <div className="banner-circle-accent accent-1"></div>
      <div className="banner-circle-accent accent-2"></div>
      <div className="banner-top-ribbon-2"></div>

      <div className="banner-grid-2">
        {/* Left Content Column */}
        <div className="banner-content-left-2">
          <span className="banner-subtitle-2">{subtitle}</span>
          
          <h2 className="banner-heading-2">{titleHighlight}</h2>

          <p className="banner-description-2">{description}</p>

          <div className="banner-action-area">
            <button className="banner-btn-pink" type="button">
              {buttonText}
            </button>
          </div>

          <div className="banner-contact-bar-2">
            <div className="contact-badge-item">
              <div className="contact-badge-icon">
                <Phone size={14} />
              </div>
              <span className="contact-badge-text">{phone}</span>
            </div>

            <div className="contact-badge-item">
              <div className="contact-badge-icon">
                <Globe size={14} />
              </div>
              <span className="contact-badge-text">{website}</span>
            </div>
          </div>
        </div>

        {/* Chevron Geometric Accent Ribbon */}
        <div className="banner-chevron-divider">
          <div className="chevron-ribbon-main"></div>
        </div>

        {/* Right Media Frame */}
        <div className="banner-media-right-2">
          <div className="banner-frame-rounded">
            <img src={imageUrl} alt={titleHighlight} className="banner-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const BannerShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState('design1');

  return (
    <section className="section section-dark banner-showcase-wrapper" id="banner-designs">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-tag badge-tag-dark">
            <Sparkles size={14} style={{ color: 'var(--color-brand-pink)', marginRight: 6 }} />
            BRAND BANNER DESIGNS
          </span>
          <h2 className="text-white">Custom Brand Banners</h2>
          <p className="lead" style={{ color: 'var(--color-text-white-sub)' }}>
            Recreated precisely from your reference layout, infused with MedAgg's signature pink logo color.
          </p>

          {/* Tab Switcher */}
          <div className="banner-tab-switcher">
            <button
              className={`banner-tab-btn ${activeTab === 'design1' ? 'active' : ''}`}
              onClick={() => setActiveTab('design1')}
              type="button"
            >
              Banner Design 01 (Digital Marketing Template)
            </button>
            <button
              className={`banner-tab-btn ${activeTab === 'design2' ? 'active' : ''}`}
              onClick={() => setActiveTab('design2')}
              type="button"
            >
              Banner Design 02 (Modern Furniture Template)
            </button>
          </div>
        </div>

        {/* Display Active Banner */}
        <div className="banner-display-container">
          {activeTab === 'design1' ? (
            <BannerDesignOne />
          ) : (
            <BannerDesignTwo />
          )}
        </div>
      </div>
    </section>
  );
};
