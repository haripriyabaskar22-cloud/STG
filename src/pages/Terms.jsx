import React, { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container page-fade-in" style={{ padding: '150px 40px', textAlign: 'left' }}>
      <h1 className="tcs-heading">Terms of Service</h1>
      <div className="legal-content" style={{ maxWidth: '900px', fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
        <p style={{ marginBottom: '30px' }}><strong>Effective Date:</strong> April 20, 2026</p>

        <h2 style={{ fontSize: '2rem', marginTop: '50px', marginBottom: '25px', fontWeight: '800', color: '#111' }}>1. Use of Content</h2>
        <p>By accessing and using this site, you accept the following terms and conditions, without limitation or qualification. The information provided on this site is free of charge and for informational purposes only and does not create a business or professional services relationship between you and STG Enterprise.</p>

        <h2 style={{ fontSize: '2rem', marginTop: '50px', marginBottom: '25px', fontWeight: '800', color: '#111' }}>2. Intellectual Property Rights</h2>
        <p>Unless otherwise stated, the contents of this site including, but not limited to, the text and images contained herein and their arrangement are the property of STG Enterprise. All trademarks used or referred to in this website are the property of their respective owners. No part of this site may be reproduced or transmitted without clear written permission.</p>

        <h2 style={{ fontSize: '2rem', marginTop: '50px', marginBottom: '25px', fontWeight: '800', color: '#111' }}>3. Limit of Liability</h2>
        <p>This site and its contents are provided "as is" and STG Enterprise makes no representation or warranty of any kind with respect to this site or any site or service accessible through this site. STG Enterprise explicitly disclaims all express and implied warranties.</p>
        <p style={{ marginTop: '20px' }}>In no event will STG Enterprise be liable to any party for any direct, indirect, incidental, or exemplary damages arising out of or in connection with this site or its services.</p>
      </div>
    </div>
  );
};

export default Terms;
