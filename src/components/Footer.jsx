import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer style={{ background: '#111', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. "With you for the long run" Section */}
      <div style={{ padding: 'clamp(60px, 10vw, 100px) 20px', textAlign: 'center', background: '#1a1a1a' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: '300', marginBottom: '30px', lineHeight: '1.2' }}>
            With you for the long run
          </h2>
          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)', color: '#ccc', marginBottom: '50px', lineHeight: '1.6' }}>
            Whether you are a client, partner, investor, or employee, our promise is to be with you for the long run. Let's take the first step together.
          </p>
          <button 
            className="pill-btn-outline" 
            style={{ padding: '15px 40px', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', borderRadius: '50px' }}
            onClick={() => navigate('/contact')}
          >
            Contact us
          </button>
        </div>
      </div>

      {/* 2. Bottom Footer Section */}
      <div style={{ background: '#000', padding: 'clamp(40px, 6vw, 80px) 0 40px', borderTop: '1px solid #111' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 'clamp(25px, 4vw, 50px)', marginBottom: '60px' }}>
            {/* Brand Column */}
            <div style={{ gridColumn: 'span 1' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <Logo footer={true} />
                <span style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 900, marginLeft: '15px', letterSpacing: '2px' }}>STG</span>
              </div>
              <p style={{ color: '#666', lineHeight: 1.8, maxWidth: '400px', fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)' }}>
                STG Enterprise is a global software powerhouse dedicated to empowering the next generation through intelligent digital transformation and precision engineering.
              </p>
            </div>

            {/* Corporate Column */}
            <div>
              <h4 style={{ color: '#fff', marginBottom: '25px', fontSize: '1rem', letterSpacing: '2px' }}>CORPORATE</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['About', 'Wings', 'Careers', 'Contact'].map(item => (
                  <li key={item}><Link to={`/${item.toLowerCase()}`} style={{ color: '#888', textDecoration: 'none', transition: 'color 0.3s', fontSize: 'clamp(0.85rem, 1.3vw, 1rem)' }} onMouseOver={e => e.target.style.color = 'red'} onMouseOut={e => e.target.style.color = '#888'}>{item}</Link></li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div>
              <h4 style={{ color: '#fff', marginBottom: '25px', fontSize: '1rem', letterSpacing: '2px' }}>SOLUTIONS</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Services', 'Products', 'Technology'].map(item => (
                  <li key={item}><Link to={`/${item.toLowerCase()}`} style={{ color: '#888', textDecoration: 'none', transition: 'color 0.3s', fontSize: 'clamp(0.85rem, 1.3vw, 1rem)' }} onMouseOver={e => e.target.style.color = 'red'} onMouseOut={e => e.target.style.color = '#888'}>{item}</Link></li>
                ))}
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h4 style={{ color: '#fff', marginBottom: '25px', fontSize: '1rem', letterSpacing: '2px' }}>FOLLOW US</h4>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a href="https://www.instagram.com/stg_esports___?igsh=cXVmdzcxaGVmcHVo" target="_blank" rel="noopener noreferrer" style={{ color: '#888', transition: 'color 0.3s', fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)' }} onMouseOver={e => e.currentTarget.style.color = 'red'} onMouseOut={e => e.currentTarget.style.color = '#888'}>INSTAGRAM</a>
                <a href="#" style={{ color: '#888', transition: 'color 0.3s', fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)' }} onMouseOver={e => e.currentTarget.style.color = 'red'} onMouseOut={e => e.currentTarget.style.color = '#888'}>LINKEDIN</a>
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div style={{ borderTop: '1px solid #111', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', color: '#444', fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)' }}>
            <div>© {new Date().getFullYear()} STG ENTERPRISE SOLUTIONS LTD. ALL RIGHTS RESERVED.</div>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/privacy" style={{ color: '#444', textDecoration: 'none' }}>PRIVACY NOTICE</Link>
              <Link to="/terms" style={{ color: '#444', textDecoration: 'none' }}>COOKIE POLICY</Link>
              <Link to="/terms" style={{ color: '#444', textDecoration: 'none' }}>TERMS OF USE</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
