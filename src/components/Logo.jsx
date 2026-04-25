import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg';

const Logo = ({ scrolled, footer }) => {
  return (
    <Link to="/" className="stg-logo-link" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
      <div className="stg-logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img 
          src={logoImg} 
          alt="STG Logo" 
          style={{ 
            width: footer ? '100px' : '60px', 
            height: footer ? '100px' : '60px', 
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 0 10px rgba(255, 0, 0, 0.5)'
          }} 
        />
        <div style={{
          color: '#fff',
          fontSize: footer ? '16px' : '10px',
          fontWeight: 'bold',
          letterSpacing: '2px',
          marginTop: '5px',
          textTransform: 'uppercase'
        }}>
          Solutions
        </div>
      </div>
    </Link>
  );
};

export default Logo;
