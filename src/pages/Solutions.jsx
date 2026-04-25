import React from 'react';
import { useNavigate } from 'react-router-dom';
import InteractiveBubbles from '../components/InteractiveBubbles';

const Solutions = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Technology Transformation',
      icon: null,
      desc: 'Modernizing legacy infrastructure with scalable architecture and agile methodologies.',
      features: ['Legacy Modernization', 'Agile Consultation', 'DevOps Integration']
    },
    {
      title: 'Cloud Infrastructure',
      icon: null,
      desc: 'Seamless migration and management of multi-cloud environments for global enterprises.',
      features: ['SaaS Migration', 'Hybrid Cloud', 'Cloud-Native Apps']
    },
    {
      title: 'AI & Analytics',
      icon: null,
      desc: 'Transforming raw data into actionable business intelligence using predictive modeling.',
      features: ['Predictive AI', 'Big Data Engineering', 'Machine Learning']
    },
    {
      title: 'Cybersecurity',
      icon: null,
      desc: 'Rigorous security frameworks protecting your digital assets from evolving threats.',
      features: ['Zero Trust Security', 'Threat Intelligence', 'Compliance Audit']
    },
    {
      title: 'Products and Platforms',
      icon: null,
      desc: 'Building custom enterprise platforms that drive efficiency and user engagement.',
      features: ['ERP Solutions', 'CRM Customization', 'Business Portals']
    },
    {
      title: 'Digital Experience',
      icon: null,
      desc: 'Creating immersive omnichannel experiences that connect brands with customers.',
      features: ['UI/UX Design', 'Omnichannel Strategy', 'Customer Journeys']
    }
  ];

  return (
    <div className="page-fade-in">
      <section className="section-full section-dark" style={{ position: 'relative', padding: '180px 0 100px', textAlign: 'center', overflow: 'hidden', background: '#111' }}>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="tcs-heading tcs-heading-white" style={{ fontSize: '5rem', marginBottom: '20px', fontWeight: '200' }}>What We Do</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9, color: '#fff', fontSize: '1.5rem', fontWeight: '300' }}>
            Transforming businesses through industry-leading technology, innovation, and deep domain expertise.
          </p>
        </div>
      </section>

      <section className="section-full" style={{ background: '#fdfdfd' }}>
        <div className="container">
          <div className="tcs-grid-3" style={{ padding: '100px 0' }}>
            {services.map((service, index) => (
              <div key={index} className="tech-card reveal-section visible" style={{ alignItems: 'flex-start', textAlign: 'left', padding: '50px', background: '#fff' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '30px', transform: 'scale(1.2)', display: 'inline-block' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '400', marginBottom: '20px' }}>{service.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '35px', fontSize: '1.05rem' }}>{service.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', marginBottom: '40px' }}>
                  {service.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: '#444', borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' }}>
                      <div style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                      {f}
                    </div>
                  ))}
                </div>
                <button
                  className="pill-btn"
                  style={{ padding: '10px 25px', fontSize: '14px', borderRadius: '4px' }}
                  onClick={() => navigate('/contact')}
                >
                  Consultation Hub 
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-full section-dark" style={{ textAlign: 'center', background: '#1b1c1d' }}>
        <div className="container">
          <h2 className="tcs-heading tcs-heading-white" style={{ fontWeight: '200' }}>Ready to transform?</h2>
          <p style={{ color: '#aaa', fontSize: '1.4rem', marginBottom: '50px' }}>Let's collaborate on your next big enterprise challenge.</p>
          <button className="pill-btn" onClick={() => navigate('/contact')} style={{ background: '#fff', color: 'var(--primary)' }}>Get Specialized Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
