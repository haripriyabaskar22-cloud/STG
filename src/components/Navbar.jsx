import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'WINGS', path: '/wings' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'TECHNOLOGY', path: '/technology' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const handleNav = (path) => {
    navigate(path);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        style={{ zIndex: 9999, pointerEvents: 'auto' }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo scrolled={scrolled} />

          {/* Desktop Links */}
          <div className="nav-links desktop-nav">
            {navLinks.map((link) => (
              <div
                key={link.path}
                onClick={() => handleNav(link.path)}
                style={{
                  color: location.pathname === link.path ? 'red' : '#fff',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
                  letterSpacing: '1px',
                  transition: 'color 0.3s',
                  whiteSpace: 'nowrap',
                }}
                onMouseOver={(e) => (e.target.style.color = 'red')}
                onMouseOut={(e) =>
                  (e.target.style.color = location.pathname === link.path ? 'red' : '#fff')
                }
              >
                {link.name}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: 'white', fontWeight: 'bold', cursor: 'pointer', padding: '10px', zIndex: 10001 }}
          >
            {isOpen ? '✕' : '☰'}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 9998,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className="mobile-nav-panel"
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? 0 : '-100%',
          width: '75%',
          maxWidth: '320px',
          height: '100vh',
          background: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          transition: 'right 0.4s ease',
          zIndex: 10000,
          boxShadow: isOpen ? '-10px 0 50px rgba(0,0,0,0.8)' : 'none',
          borderLeft: isOpen ? '1px solid #1a1a1a' : 'none',
        }}
      >
        {navLinks.map((link) => (
          <div
            key={link.path}
            onClick={() => handleNav(link.path)}
            style={{
              fontSize: '1.3rem',
              color: location.pathname === link.path ? 'red' : '#fff',
              cursor: 'pointer',
              fontWeight: 700,
              letterSpacing: '2px',
              transition: 'color 0.3s',
            }}
          >
            {link.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
