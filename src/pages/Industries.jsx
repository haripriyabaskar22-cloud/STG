import React from 'react';
import { useNavigate } from 'react-router-dom';

const Industries = () => {
  const navigate = useNavigate();
  
  const sectors = [
    { 
      id: 'banking', 
      name: 'Banking & Financial Services', 
      icon: null, 
      img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800',
      desc: 'Building resilient, cloud-native banking ecosystems with autonomous AI for real-time risk assessment and customer excellence.' 
    },
    { 
      id: 'retail', 
      name: 'Consumer Goods & Retail', 
      icon: null, 
      img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
      desc: 'Reinventing the checkout experience with STG Omnistore™ and AI-driven supply chain transparency.' 
    },
    { 
      id: 'health', 
      name: 'Life Sciences & Healthcare', 
      icon: null, 
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      desc: 'Accelerating drug discovery and patient care through cognitive data analytics and secure HIPAA-compliant AI pipelines.' 
    },
    { 
      id: 'energy', 
      name: 'Energy, Resources & Utilities', 
      icon: null, 
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      desc: 'Optimizing grid performance and sustainable energy transition with predictive maintenance and IoT at scale.' 
    }
  ];

  return (
    <div className="page-fade-in" style={{ background: '#050505', color: '#fff' }}>
      {/* Header */}
      <section className="section-full section-dark" style={{ position: 'relative', padding: '180px 0 100px', background: '#000', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h1 className="tcs-heading tcs-heading-white" style={{ fontSize: '4.5rem' }}>Industries Hub</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8, fontSize: '1.4rem', fontWeight: '300', lineHeight: '1.6' }}>
            Discover how STG Enterprise drives meaningful transformation across global sectors by combining deep domain expertise with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-full">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '80px' }}>
            {sectors.map((sector, index) => (
              <div key={sector.id} className="reveal-section" style={{ display: 'grid', gridTemplateColumns: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1.0fr', gap: '80px', alignItems: 'center' }}>
                {index % 2 === 0 ? (
                  <>
                    <div style={{ borderRadius: '4px', overflow: 'hidden', height: '500px' }}>
                      <img src={sector.img} alt={sector.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ color: 'var(--primary)', marginBottom: '25px' }}>{sector.icon}</div>
                      <h2 className="tcs-heading-white" style={{ fontSize: '2.8rem', fontWeight: '300', marginBottom: '25px' }}>{sector.name}</h2>
                      <p style={{ fontSize: '1.2rem', color: '#aaa', lineHeight: '1.7', marginBottom: '35px' }}>{sector.desc}</p>
                      <button className="pill-btn" onClick={() => navigate('/technology')}>Read Case Study </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div style={{ color: 'var(--primary)', marginBottom: '25px' }}>{sector.icon}</div>
                      <h2 className="tcs-heading-white" style={{ fontSize: '2.8rem', fontWeight: '300', marginBottom: '25px' }}>{sector.name}</h2>
                      <p style={{ fontSize: '1.2rem', color: '#aaa', lineHeight: '1.7', marginBottom: '35px' }}>{sector.desc}</p>
                      <button className="pill-btn" onClick={() => navigate('/technology')}>Read Case Study </button>
                    </div>
                    <div style={{ borderRadius: '4px', overflow: 'hidden', height: '500px' }}>
                      <img src={sector.img} alt={sector.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-full bg-darker" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="tcs-heading-white" style={{ fontSize: '3rem', fontWeight: '300' }}>Ready to transform your sector?</h2>
          <button className="pill-btn" style={{ marginTop: '40px' }} onClick={() => navigate('/contact')}>Talk to an Expert</button>
        </div>
      </section>
    </div>
  );
};

export default Industries;
