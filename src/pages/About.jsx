import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="page-fade-in" style={{ background: 'transparent', color: '#fff', position: 'relative', overflow: 'hidden', padding: 'clamp(120px, 15vw, 150px) 0 100px' }}>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Historical Foundation */}
        <div style={{ marginBottom: '100px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
          <div style={{ background: 'rgba(10, 10, 10, 0.85)', border: '1px solid #111', padding: 'clamp(30px, 5vw, 60px)', borderRadius: '25px', boxShadow: '0 0 30px rgba(255,0,0,0.05)' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '50px', textAlign: 'center', color: '#fff' }}>Historical Foundation</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '40px' }}>
              <div style={{ borderLeft: '3px solid red', paddingLeft: '25px' }}>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 800, marginBottom: '15px', color: 'red' }}>About STG</h3>
                <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
                  The name 'STG' symbolizes talent and ability—qualities that define our team and shape the way we approach every project with creativity and precision.
                </p>
              </div>
              <div style={{ borderLeft: '3px solid red', paddingLeft: '25px' }}>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 800, marginBottom: '15px', color: 'red' }}>Our Heritage</h3>
                <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
                  Founded with a vision to revolutionize the digital landscape, STG has grown into a global powerhouse, delivering cutting-edge solutions across various industries.
                </p>
              </div>
              <div style={{ borderLeft: '3px solid red', paddingLeft: '25px' }}>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 800, marginBottom: '15px', color: 'red' }}>360 Approach</h3>
                <p style={{ color: '#aaa', lineHeight: 1.8, fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
                  '360' represents our all-encompassing approach to innovation—one that considers every angle and delivers holistic solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Vision */}
        <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '50px', textAlign: 'center' }}>Modern Strategic Vision</h2>
        <div 
          className="neon-border"
          style={{ 
            background: 'rgba(5, 5, 5, 0.9)', 
            backdropFilter: 'blur(10px)',
            borderRadius: '30px',
            padding: 'clamp(30px, 5vw, 80px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(40px, 5vw, 80px)',
            position: 'relative',
            boxShadow: '0 0 50px rgba(255,0,0,0.1)'
          }}>
          {/* Future Vision Column */}
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, marginBottom: '40px' }}>Strategic Vision</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ borderLeft: '3px solid red', paddingLeft: '20px' }}>
                <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 700, marginBottom: '10px' }}>Our Vision</h3>
                <p style={{ color: '#888', lineHeight: 1.7, fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
                  To become a global leader in intelligent digital transformation—empowering industries through AI, design, and innovation.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid red', paddingLeft: '20px' }}>
                <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 700, marginBottom: '10px' }}>Innovation & Integrity</h3>
                <p style={{ color: '#888', lineHeight: 1.7, fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
                  We constantly push boundaries while maintaining the highest standards of integrity and transparency in everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Column */}
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, marginBottom: '40px' }}>Core Mission</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ borderLeft: '3px solid red', paddingLeft: '20px' }}>
                <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 700, marginBottom: '10px' }}>Our Mission</h3>
                <p style={{ color: '#888', lineHeight: 1.7, fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
                  To craft future-ready experiences by blending creativity, technology, and strategy—driven by purpose, fueled by passion.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid red', paddingLeft: '20px' }}>
                <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 700, marginBottom: '10px' }}>Precision Innovation</h3>
                <p style={{ color: '#888', lineHeight: 1.7, fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
                  Delivering high-fidelity software ecosystems that solve complex industrial challenges with surgical innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
