import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    name: 'Web Applications',
    tag: 'Enterprise Digital Ecosystems',
    desc: 'High-performance web platforms tailored for industrial and commercial scale.',
    features: ['Capture360: Real-time site monitoring & AI insights', 'Libro360AI: Adaptive AI learning & recruitment', 'Property360: Automated real estate management suite'],
    outcome: 'Seamless user experiences built on infinitely scalable enterprise backends.'
  },
  {
    name: 'Mobile Applications',
    tag: 'Next-Gen Mobility',
    desc: 'Cutting-edge mobile solutions driving efficiency and customer engagement.',
    features: ['Ecom360: Real-time order tracking & delivery automation', 'STG Telematics: Fleet management with GPS & fuel efficiency', 'Kovais: Automated customer management & service coordination'],
    outcome: 'Empowering mobile workforces with high-fidelity native and hybrid ecosystems.'
  },
  {
    name: 'IOT - Smart Monitoring',
    tag: 'Industrial Intelligence',
    desc: 'See how we are reshaping industries with automation, AI, and innovation.',
    features: ['Home and Industry Automation: Control lights, usage, and door locks', 'Smart Monitoring System: Real-time energy & secure access', 'GPS Tracking: Location-based automation and monitoring'],
    outcome: 'Transforming legacy physical assets into intelligent digital nodes.'
  },
  {
    name: 'Corporate Automation',
    tag: 'Operational Excellence',
    desc: 'Streamline operations across departments, ensuring seamless coordination and efficiency.',
    features: ['Task and project management features', 'Real-time collaboration & monitoring', 'Accurate budgeting, invoicing, and expense tracking'],
    outcome: 'A unified ecosystem fostering productivity, transparency, and smarter decision-making.'
  }
];

const Products = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <div className="page-fade-in" style={{ background: 'transparent', color: '#fff' }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(120px, 15vw, 180px) 0 clamp(50px, 8vw, 100px)', textAlign: 'center', background: 'transparent' }}>
        <div className="container">
          <p style={{ color: 'red', fontWeight: 700, letterSpacing: '3px', marginBottom: '15px', fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)' }}>PRODUCTS & PLATFORMS</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px' }}>
            Industrial Software <span style={{ color: 'red' }}>Platforms</span>
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto clamp(30px, 5vw, 50px)', color: '#aaa', fontSize: 'clamp(0.95rem, 2vw, 1.2rem)', lineHeight: 1.7 }}>
            Our proprietary software ecosystems solve the world's most complex industrial challenges with precision, speed, and autonomous intelligence.
          </p>
          <button className="pill-btn" onClick={() => navigate('/contact')} style={{ background: 'red', border: 'none', fontWeight: 800 }}>Request a Demo</button>
        </div>
      </section>

      {/* Product Cards */}
      <section style={{ padding: 'clamp(40px, 6vw, 60px) 0 clamp(60px, 10vw, 120px)', background: 'transparent' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '25px' }}>
            {products.map((p, i) => (
              <div
                key={i}
                onClick={() => setSelected(selected === i ? null : i)}
                style={{
                  background: 'rgba(17,17,17,0.85)',
                  border: `1px solid ${selected === i ? 'red' : '#222'}`,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: selected === i ? '0 0 30px rgba(255,0,0,0.15)' : 'none'
                }}
              >
                <div style={{ padding: 'clamp(25px, 4vw, 40px)' }}>
                  <p style={{ color: 'red', fontWeight: 700, fontSize: 'clamp(0.7rem, 1.2vw, 0.8rem)', letterSpacing: '2px', marginBottom: '10px' }}>{p.tag}</p>
                  <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 700, marginBottom: '12px' }}>{p.name}</h2>
                  <p style={{ color: '#999', lineHeight: 1.7, marginBottom: '20px', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}>{p.desc}</p>

                  {selected === i && (
                    <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #333' }}>
                      <h4 style={{ color: 'red', marginBottom: '15px', letterSpacing: '1px', fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)' }}>CORE CAPABILITIES</h4>
                      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                        {p.features.map((f, j) => (
                          <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px', color: '#ddd', fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.6 }}>
                            <div style={{ width: '6px', height: '6px', background: 'red', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div style={{ background: 'rgba(255,0,0,0.06)', borderLeft: '3px solid red', padding: '15px 18px', borderRadius: '4px', marginBottom: '20px' }}>
                        <p style={{ color: '#ccc', fontStyle: 'italic', fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.6 }}><span style={{ color: 'red', fontWeight: 700 }}>OUTCOME: </span>{p.outcome}</p>
                      </div>
                      <button className="pill-btn" style={{ width: '100%', background: 'red', border: 'none', fontWeight: 800 }} onClick={(e) => { e.stopPropagation(); navigate('/contact'); }}>
                        Request a Demo
                      </button>
                    </div>
                  )}

                  {selected !== i && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'red', fontWeight: 700, fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)' }}>
                      Explore Platform →
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section - content only, no image */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) 0', background: 'rgba(0,0,0,0.5)', borderTop: '1px solid #1a1a1a' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(30px, 5vw, 80px)', alignItems: 'center' }}>
            <div>
              <p style={{ color: 'red', fontWeight: 700, letterSpacing: '3px', marginBottom: '15px', fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)' }}>HARDWARE + SOFTWARE</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: '20px', lineHeight: 1.2 }}>Hardware-Software Synergy</h2>
              <p style={{ color: '#aaa', fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', lineHeight: 1.8, marginBottom: '30px' }}>
                Our platforms integrate seamlessly with industrial IoT hardware, ensuring your digital brain has high-fidelity physical data to act on in real time.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                {['Edge-native processing', 'Real-time sensor ingestion', 'Predictive maintenance alerts', 'Digital twin simulation'].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#ddd', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}>
                    <div style={{ width: '6px', height: '6px', background: 'red', borderRadius: '50%', flexShrink: 0, boxShadow: '0 0 6px red' }} />
                    {f}
                  </div>
                ))}
              </div>
              <button className="pill-btn" onClick={() => navigate('/contact')} style={{ background: 'red', border: 'none', fontWeight: 800 }}>View Platform Roadmap</button>
            </div>
            <div style={{ background: 'rgba(10,10,10,0.85)', padding: 'clamp(30px, 5vw, 50px)', borderRadius: '20px', border: '1px solid #1a1a1a' }}>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 800, marginBottom: '25px', color: '#fff' }}>Platform Metrics</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px' }}>
                {[
                  { val: '12+', label: 'Platforms Live' },
                  { val: '50K+', label: 'Active Users' },
                  { val: '99.9%', label: 'Uptime SLA' },
                  { val: '4.8★', label: 'Avg Rating' }
                ].map((m, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, color: 'red', marginBottom: '5px' }}>{m.val}</div>
                    <div style={{ color: '#888', fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)', letterSpacing: '1px' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', textAlign: 'center', background: 'transparent' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', fontWeight: 300, marginBottom: '15px' }}>Start building smarter today</h2>
          <p style={{ color: '#888', fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', marginBottom: '30px', lineHeight: 1.7 }}>Our product team is ready to show you exactly how STG platforms transform enterprise operations.</p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="pill-btn" onClick={() => navigate('/contact')} style={{ background: 'red', border: 'none', fontWeight: 800 }}>Book a Demo</button>
            <button className="pill-btn-outline" onClick={() => navigate('/services')}>See Our Services</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
