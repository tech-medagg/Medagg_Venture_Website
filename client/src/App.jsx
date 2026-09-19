import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { StrategicConsultingPage } from './pages/StrategicConsultingPage';
import { TransactionAdvisoryPage } from './pages/TransactionAdvisoryPage';
import { OmContractsPage } from './pages/OmContractsPage';
import { ChannelPartnershipsPage } from './pages/ChannelPartnershipsPage';
import { DigitalMarketingPage } from './pages/DigitalMarketingPage';
import { InvestmentsPage } from './pages/InvestmentsPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { CareersPage } from './pages/CareersPage';
import { PostJobPage } from './pages/PostJobPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<HomePage />} />

          {/* About Us Routes */}
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/about-us.html" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Service Routes */}
          <Route path="/strategic-consulting" element={<StrategicConsultingPage />} />
          <Route path="/strategic-consulting.html" element={<StrategicConsultingPage />} />
          <Route path="/services/strategic-consulting" element={<StrategicConsultingPage />} />

          <Route path="/transaction-advisory" element={<TransactionAdvisoryPage />} />
          <Route path="/transaction-advisory.html" element={<TransactionAdvisoryPage />} />
          <Route path="/services/transaction-advisory" element={<TransactionAdvisoryPage />} />

          <Route path="/om-contracts" element={<OmContractsPage />} />
          <Route path="/om-contracts.html" element={<OmContractsPage />} />
          <Route path="/services/om-contracts" element={<OmContractsPage />} />

          <Route path="/channel-partnerships" element={<ChannelPartnershipsPage />} />
          <Route path="/channel-partnerships.html" element={<ChannelPartnershipsPage />} />
          <Route path="/services/channel-partnerships" element={<ChannelPartnershipsPage />} />

          <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/digital-marketing.html" element={<DigitalMarketingPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />

          {/* Portfolio & Case Studies */}
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/investments.html" element={<InvestmentsPage />} />

          <Route path="/casestudy" element={<CaseStudyPage />} />
          <Route path="/casestudy.html" element={<CaseStudyPage />} />
          <Route path="/case-studies" element={<CaseStudyPage />} />

          {/* Careers & Contact */}
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers.html" element={<CareersPage />} />

          {/* Admin Job Posting Page (Secret URL) */}
          <Route path="/career-post-medagg" element={<PostJobPage />} />
          <Route path="/career-post-medagg.html" element={<PostJobPage />} />
          <Route path="/careers/post" element={<PostJobPage />} />
          <Route path="/post-job" element={<PostJobPage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact.html" element={<ContactPage />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
