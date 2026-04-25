import React from 'react';
import { useNavigate } from 'react-router-dom';

const newsItems = [
  {
    tag: 'PARTNERSHIP',
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    title: 'STG renews strategic partnership with Fortune 500 leaders',
    date: 'April 18, 2026',
    desc: 'STG Enterprise continues to serve as a global technology backbone for Fortune 500 companies, helping embed next-gen AI into core operational workflows.',
    link: '/contact'
  },
  {
    tag: 'FINANCIAL RESULTS',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    title: 'STG Q4 FY26 results announced — record-breaking global growth',
    date: 'April 10, 2026',
    desc: 'Closes FY26 with improving sequential growth momentum, strong deal wins, and expanded operations across 12 new country clusters.',
    link: '/about'
  },
  {
    tag: 'ANALYST RECOGNITION',
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
    title: 'STG positioned as Leader in Everest Group PEAK Matrix® 2026',
    date: 'March 28, 2026',
    desc: 'STG Enterprise recognized as a Leader in Enterprise Cloud, Cybersecurity, and Cognitive AI services by top global analyst firm Everest Group.',
    link: '/technology'
  },
  {
    tag: 'PRODUCT LAUNCH',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800',
    title: 'CogniCore Engine 2.0 — next-gen AI platform launched globally',
    date: 'March 15, 2026',
    desc: 'STG launches CogniCore Engine 2.0 with multi-modal LLM support, edge deployment, and 3x faster model training pipelines for enterprise clients.',
    link: '/products'
  },
  {
    tag: 'GLOBAL EXPANSION',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    title: 'STG expands to 6 new countries in APAC and MEA regions',
    date: 'February 22, 2026',
    desc: 'STG Enterprise opens new delivery centers in Singapore, Dubai, Nairobi, Jakarta, Riyadh, and Colombo — bringing our global footprint to 46 countries.',
    link: '/industries'
  },
  {
    tag: 'AWARD',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    title: 'STG wins "Best Enterprise AI Delivery" at TechIndia Awards 2026',
    date: 'February 5, 2026',
    desc: 'STG Enterprise receives the prestigious TechIndia Award for Excellence in Enterprise AI Delivery, recognizing consistent innovation across industries.',
    link: '/about'
  }
];

const Newsroom = () => {
  const navigate = useNavigate();

  return (
    <div className="page-fade-in" style={{ background: 'transparent', color: '#fff' }}>

      {/* Hero */}
      <section style={{ padding: '180px 0 80px', textAlign: 'center', background: 'transparent' }}>
        <div className="container">
          <p style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '3px', marginBottom: '20px', fontSize: '0.9rem' }}>STG NEWSROOM</p>
          <h1 style={{ fontSize: '5rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1 }}>
            News & <span style={{ color: 'var(--primary)' }}>Insights</span>
          </h1>
          <p style={{ color: '#aaa', fontSize: '1.3rem', maxWidth: '650px', margin: '0 auto' }}>
            Stay up-to-date with the latest from STG Enterprise — partnerships, product launches, global expansion, and analyst recognitions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '40px 0 80px', background: 'transparent' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { icon: null, stat: '46', label: 'Countries' },
              { icon: null, stat: '12K+', label: 'Engineers' },
              { icon: null, stat: '120+', label: 'Awards' },
              { icon: null, stat: 'FY26', label: 'Record Growth' }
            ].map((s, i) => (
              <div key={i} style={{ background: '#111', border: '1px solid #222', borderRadius: '12px', padding: '30px', textAlign: 'center' }}>
                <div style={{ marginBottom: '10px' }}>{s.icon}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff' }}>{s.stat}</div>
                <div style={{ color: '#888', fontSize: '0.9rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section style={{ padding: '20px 0 120px', background: 'transparent' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {newsItems.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(item.link)}
                style={{
                  background: '#111',
                  border: '1px solid #222',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '30px' }}>
                  <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '2px', marginBottom: '12px' }}>{item.tag}</p>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.4 }}>{item.title}</h3>
                  <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '15px' }}>{item.date}</p>
                  <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>{item.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                    Read More 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 0', textAlign: 'center', borderTop: '1px solid #222', background: 'rgba(0,0,0,0.4)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3.5rem', fontWeight: 300, marginBottom: '20px' }}>Be part of the STG story</h2>
          <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '50px' }}>Work with us, partner with us, or grow with us.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button className="pill-btn" onClick={() => navigate('/contact')}>Contact Us</button>
            <button className="pill-btn-outline" onClick={() => navigate('/about')}>About STG</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsroom;
