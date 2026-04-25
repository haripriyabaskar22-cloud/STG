import React, { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container page-fade-in" style={{ padding: '150px 40px', textAlign: 'left' }}>
      <h1 className="tcs-heading">Privacy Notice</h1>
      <div className="legal-content" style={{ maxWidth: '900px', fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
        <p style={{ marginBottom: '30px' }}><strong>Effective Date:</strong> April 20, 2026</p>

        <h2 style={{ fontSize: '2rem', marginTop: '50px', marginBottom: '25px', fontWeight: '800', color: '#111' }}>1. Overview</h2>
        <p>At STG Enterprise, we are committed to protecting the privacy of the individuals who interact with us. This Privacy Notice details how we collect, use, and process your personal data in accordance with global enterprise security standards.</p>

        <h2 style={{ fontSize: '2rem', marginTop: '50px', marginBottom: '25px', fontWeight: '800', color: '#111' }}>2. Data Collection Protocols</h2>
        <p>We may collect information about you when you visit our website, fill out forms, or interact with our autonomous services. Data collected may include:</p>
        <ul style={{ paddingLeft: '30px', marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <li><strong style={{ color: 'var(--primary)' }}>Contact Details:</strong> (Name, Corporate Email, Phone number)</li>
          <li><strong style={{ color: 'var(--primary)' }}>Technical Usage:</strong> (IP address, browser type, navigation behavior, session metrics)</li>
          <li><strong style={{ color: 'var(--primary)' }}>Professional Data:</strong> Information provided via our career portals or during project discovery.</li>
        </ul>

        <h2 style={{ fontSize: '2rem', marginTop: '50px', marginBottom: '25px', fontWeight: '300', color: '#111' }}>3. How We Use Your Data</h2>
        <p>We use your data exclusively to improve enterprise services, secure our autonomous networks, provide localized digital transformation content, and communicate directly regarding your strategic requests.</p>

        <h2 style={{ fontSize: '2rem', marginTop: '50px', marginBottom: '25px', fontWeight: '800', color: '#111' }}>4. Data Governance & Security</h2>
        <p>STG Enterprise maintains robust data security measures aligned with ISO/IEC 27001 standards. We do not sell your personal or corporate data to third-party advertisers or data brokers. Our infrastructure is protected by advanced AI-driven defense systems.</p>
      </div>
    </div>
  );
};

export default Privacy;
