import React from 'react';

const Cookies = () => {
  return (
    <div className="page-fade-in" style={{ padding: '180px 0 100px' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 className="tcs-heading" style={{ fontSize: '3.5rem', fontWeight: '800' }}>Cookies Policy</h1>
        <div style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '30px' }}>Last Updated: April 20, 2026</p>
          
          <h2 style={{ fontSize: '2rem', color: '#000', margin: '40px 0 20px' }}>1. Introduction</h2>
          <p style={{ marginBottom: '20px' }}>
            STG ("we", "us", or "our") uses cookies and similar technologies to provide, customize, evaluate, and improve our services. This policy explains how we use these technologies and your choices.
          </p>

          <h2 style={{ fontSize: '2rem', color: '#000', margin: '40px 0 20px' }}>2. What are Cookies?</h2>
          <p style={{ marginBottom: '20px' }}>
            Cookies are small text files placed on your device to store data that can be recalled by a web server in the domain that placed the cookie. We use cookies to store your preferences, help with sign-in, and analyze how our website is performing.
          </p>

          <h2 style={{ fontSize: '2rem', color: '#000', margin: '40px 0 20px' }}>3. Types of Cookies We Use</h2>
          <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Essential Cookies:</strong> Required for the website to function correctly.</li>
            <li style={{ marginBottom: '10px' }}><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the site.</li>
            <li style={{ marginBottom: '10px' }}><strong>Performance Cookies:</strong> Improve site speed and load times.</li>
          </ul>

          <h2 style={{ fontSize: '2rem', color: '#000', margin: '40px 0 20px' }}>4. Managing Cookies</h2>
          <p style={{ marginBottom: '20px' }}>
            Most web browsers automatically accept cookies but provide controls that allow you to block or delete them. Refer to your browser's documentation for instructions on how to manage these settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
