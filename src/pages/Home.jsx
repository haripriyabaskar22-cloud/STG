import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import STGGlobe from '../components/STGGlobe';
import STGCoin from '../components/STGCoin';

const Home = () => {
  const navigate = useNavigate();
  const [winW, setWinW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const onResize = () => setWinW(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile = winW < 768;
  const isTablet = winW < 1024;
  const globeSize = isMobile ? 220 : 700;
  const coinSize  = isMobile ? 160 : isTablet ? 220 : 280;

  return (
    <main className="page-fade-in" style={{ background: 'transparent' }}>

      {/* ══ HERO — Globe visible background, centered text ══ */}
      <section style={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: isMobile ? '80px' : '0', // Safe boundary from header
        overflow: 'hidden',
        boxSizing: 'border-box',
        background: 'linear-gradient(135deg, #400000 0%, #000000 100%)',
      }}>

        {/* Overlay removed, background applied to section */}
        <div style={{
          position: 'absolute', inset: 0,
          zIndex: 2,
        }} />

        {/* Centered text block with safe auto-margin centering */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          margin: 'auto 0', // Safely centers without top-clipping on tiny screens
          padding: isMobile ? '40px 15px' : '120px 24px 80px',
          maxWidth: '820px',
          width: '100%',
        }}>

          {/* STG Globe perfectly pinned BEHIND the text block */}
          <div style={{
            position: 'absolute',
            top: '40%', // Align behind the main text titles
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
            opacity: isMobile ? 0.9 : 1,
            pointerEvents: 'none',
            filter: 'drop-shadow(0 0 120px rgba(255,0,0,0.5))',
          }}>
            <STGGlobe size={globeSize} />
          </div>
          <style>{`
            @keyframes stgEvolve {
              0%   { text-shadow: 0 0 20px rgba(255,0,0,0.2), 0 0 5px rgba(0,0,0,0.9); transform: scale(1); }
              50%  { text-shadow: 0 0 60px rgba(255,0,0,0.9), 0 0 30px rgba(255,0,0,0.5), 0 2px 6px rgba(0,0,0,0.9); transform: scale(1.03); }
              100% { text-shadow: 0 0 20px rgba(255,0,0,0.2), 0 0 5px rgba(0,0,0,0.9); transform: scale(1); }
            }
          `}</style>
          <h1 style={{
            fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 8vw, 7.5rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.05,
            margin: '0 0 14px',
            animation: 'stgEvolve 4s ease-in-out infinite',
          }}>
            STG Enterprise
          </h1>
          <h2 style={{
            fontSize: isMobile ? '1.3rem' : 'clamp(1.8rem, 5.5vw, 5.5rem)',
            fontWeight: 900,
            color: 'red',
            lineHeight: 1.1,
            margin: '0 0 24px',
            textShadow: '0 0 50px rgba(255,0,0,0.8), 0 0 15px rgba(0,0,0,0.9)',
          }}>
            Building the future.
          </h2>
          <p style={{
            fontSize: isMobile ? '0.9rem' : 'clamp(1rem, 2vw, 1.3rem)',
            color: '#ddd',
            maxWidth: '580px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
            textShadow: '0 1px 10px rgba(0,0,0,0.95)',
            padding: isMobile ? '0 10px' : 0,
          }}>
            Leveraging React, Springboot, Django, Flutter, Angular, Python &amp; Java
            to transform enterprise technology globally.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="pill-btn" onClick={() => navigate('/about')}
              style={{ padding: isMobile ? '12px 28px' : '16px 44px', fontSize: isMobile ? '0.9rem' : '1rem', background: 'red', border: 'none', fontWeight: 800, letterSpacing: '1px' }}>
              DISCOVER STG
            </button>
            <button className="pill-btn-outline" onClick={() => navigate('/technology')}
              style={{ padding: isMobile ? '12px 28px' : '16px 44px', fontSize: isMobile ? '0.9rem' : '1rem', fontWeight: 800, letterSpacing: '1px' }}>
              OUR CAPABILITIES
            </button>
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '50px 5%' : '90px 5%', background: 'rgba(0,0,0,0.88)', borderTop: '1px solid #1a1a1a' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(140px, 1fr))', gap: isMobile ? '25px 15px' : '36px', textAlign: 'center' }}>
            {[
              { val: '60+', label: 'GLOBAL PROJECTS' },
              { val: '40+', label: 'STRATEGIC TIE-UPS' },
              { val: '48+', label: 'EXPERT ENGINEERS' },
              { val: '5+',  label: 'YEARS OF INNOVATION' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: isMobile ? '1.8rem' : 'clamp(2rem,5vw,3.8rem)', fontWeight: 900, color: 'red', marginBottom: '6px' }}>{s.val}</div>
                <div style={{ color: '#aaa', fontSize: isMobile ? '0.65rem' : '0.85rem', letterSpacing: '2px', fontWeight: 700 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '50px 5%' : '90px 5%', background: 'rgba(5,0,0,0.92)', borderTop: '1px solid #1a1a1a' }}>
        <div className="stg-wave-bg" style={{ opacity: 0.8, zIndex: 0 }}>
          <div className="wave-ring"></div>
          <div className="wave-ring delay-1" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: isMobile ? '1.4rem' : 'clamp(1.6rem,4vw,2.8rem)', fontWeight: 900, color: '#fff', marginBottom: isMobile ? '30px' : '50px', textAlign: 'center' }}>Core Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(230px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Web Development',   desc: 'Responsive and scalable web apps for industrial excellence.' },
              { title: 'Mobile Ecosystems', desc: 'Native Android & iOS solutions for enterprise mobility.' },
              { title: 'IoT Intelligence',  desc: 'Smart sensor networks and industrial automation.' },
            ].map((s, i) => (
              <div key={i} className="neon-border"
                style={{ padding: isMobile ? '25px 18px' : '40px 30px', background: '#050505', borderRadius: '14px', cursor: 'pointer' }}
                onClick={() => navigate('/services')}>
                <h3 style={{ color: '#fff', marginBottom: '12px', fontSize: isMobile ? '1.05rem' : '1.35rem' }}>{s.title}</h3>
                <p style={{ color: '#888', lineHeight: 1.7, fontSize: isMobile ? '0.88rem' : '0.95rem' }}>{s.desc}</p>
                <div style={{ marginTop: '20px', color: 'red', fontWeight: 700, fontSize: isMobile ? '0.85rem' : '1rem' }}>EXPLORE →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ELITE SOLUTIONS — text above coin on mobile ══ */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        padding: isMobile ? '80px 5% 60px' : '100px 8%',
        background: 'rgba(0,0,0,0.97)',
        borderTop: '1px solid #1a1a1a',
      }}>
        <div className="stg-neon-grid-bg" style={{ zIndex: 0, opacity: 0.9 }}></div>
        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isMobile ? '60px' : '80px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {/* LEFT — text */}
          <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left', order: isMobile ? 1 : 1, width: '100%' }}>
            <p style={{ color: 'red', fontWeight: 800, fontSize: isMobile ? '0.75rem' : '0.9rem', letterSpacing: '4px', marginBottom: '15px', textTransform: 'uppercase' }}>
              Our Commitment
            </p>
            <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2rem,5vw,4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '25px' }}>
              Elite<br/>Solutions
            </h2>
            <p style={{ color: '#888', fontSize: isMobile ? '0.95rem' : 'clamp(1rem,1.8vw,1.2rem)', lineHeight: 1.8, marginBottom: '35px', maxWidth: '480px', margin: isMobile ? '0 auto 35px' : '0 0 35px' }}>
              We don't just deliver technology — we deliver precision outcomes.
              Every line of code, every deployment, every integration is engineered
              for global excellence and industrial resilience.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: isMobile ? 'center' : 'flex-start', marginBottom: '40px' }}>
              {['360° End-to-End Delivery', 'Enterprise-Grade Security', 'AI-Powered Innovation', 'Global Deployment Ready'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '7px', height: '7px', background: 'red', borderRadius: '50%', flexShrink: 0, boxShadow: '0 0 8px red' }} />
                  <span style={{ color: '#ccc', fontSize: isMobile ? '0.9rem' : '1rem' }}>{item}</span>
                </div>
              ))}
            </div>
            <button className="pill-btn" onClick={() => navigate('/services')}
              style={{ padding: isMobile ? '14px 32px' : '16px 40px', fontSize: isMobile ? '0.95rem' : '1rem', background: 'red', border: 'none', fontWeight: 800 }}>
              VIEW ALL SERVICES
            </button>
          </div>

          {/* RIGHT — spinning coin */}
          <div style={{
            flex: isMobile ? undefined : '0 0 auto',
            display: 'flex',
            justifyContent: 'center',
            order: isMobile ? 2 : 2,
            width: isMobile ? '100%' : 'auto',
            filter: 'drop-shadow(0 0 60px rgba(255,0,0,0.5)) drop-shadow(0 20px 40px rgba(0,200,255,0.3))',
          }}>
            <STGCoin size={coinSize} />
          </div>
        </div>
      </section>

      {/* ══ CEO ══ */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '50px 5% 60px' : '90px 5% 110px', background: 'rgba(5,0,0,0.92)', borderTop: '1px solid #1a1a1a' }}>
        <div className="stg-aurora-bg" style={{ opacity: 0.9, zIndex: 0 }}>
          <div className="aurora-wave"></div>
          <div className="aurora-wave"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: isMobile ? '1.4rem' : 'clamp(1.6rem,4vw,2.8rem)', fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}>Meet Our CEO</h2>
          <div style={{ maxWidth: '580px', margin: '0 auto' }}>
            <div style={{ background: '#0a0a0a', padding: isMobile ? '25px 18px' : '45px', borderRadius: '15px', border: '1px solid #1a1a1a', textAlign: 'center' }}>
              <h3 style={{ fontSize: isMobile ? '1.3rem' : 'clamp(1.4rem,3vw,2.3rem)', color: '#fff', marginBottom: '8px' }}>Sunill Dahrsan</h3>
              <p style={{ color: 'red', fontWeight: 700, fontSize: isMobile ? '0.85rem' : '1rem', marginBottom: '18px' }}>Chief Executive Officer &amp; Founder</p>
              <p style={{ color: '#888', fontSize: isMobile ? '0.85rem' : '1rem', lineHeight: 1.8, fontStyle: 'italic' }}>
                "At STG, our vision is to empower innovation through intelligence — creating tech that doesn't just work, but inspires."
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
