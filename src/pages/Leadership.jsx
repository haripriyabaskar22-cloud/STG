import React from 'react';

const Leadership = () => {
  const leaders = [
    { 
      id: 'ceo',
      title: 'Meet our CEO',
      name: 'Sunill Dahrsan', 
      role: 'Founder & CEO, STG Enterprise', 
      img: '/stg_ceo_founder.png', 
      bio: 'Visionary leader driving the next generation of autonomous industrial intelligence. Sunill Dahrsan spearheads STG\'s global mission to harmonize complex machine ecosystems with high-performance software, ensuring scale and precision across 46 countries.'
    }
  ];

  return (
    <div className="page-fade-in" style={{ background: '#030303', color: '#fff', minHeight: '100vh', padding: '150px 0 100px' }}>
      {/* Header */}
      <section style={{ paddingBottom: '60px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '4.5rem', fontWeight: '800', marginBottom: '20px' }}>STG <span style={{ color: 'red' }}>Leadership</span></h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.4rem', color: '#888', fontWeight: '300', lineHeight: '1.6' }}>
            Meet the architects of the STG revolution. Our leadership is committed to pushing the boundaries of what's possible in the autonomous enterprise era.
          </p>
        </div>
      </section>

      {/* Main Leaders */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {leaders.map((leader, i) => (
              <div key={i} style={{ 
                background: '#0a0a0a', 
                borderRadius: '15px', 
                overflow: 'hidden', 
                boxShadow: '0 15px 35px rgba(255,0,0,0.05)',
                border: '1px solid #1a1a1a',
                maxWidth: '600px'
              }}>
                <div style={{ height: '450px', overflow: 'hidden' }}>
                  <img 
                    src={leader.img} 
                    alt={leader.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    onError={(e) => { 
                      e.target.src = leader.id === 'ceo' 
                        ? 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800' 
                        : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800' 
                    }} 
                  />
                </div>
                <div style={{ padding: '35px' }}>
                  <span style={{ 
                    color: 'red', 
                    fontWeight: '800', 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px',
                    display: 'block',
                    marginBottom: '10px'
                  }}>{leader.title}</span>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '10px', color: '#fff' }}>{leader.name}</h3>
                  <p style={{ color: 'red', fontWeight: '600', fontSize: '1.1rem', marginBottom: '20px' }}>{leader.role}</p>
                  <p style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '30px' }}>{leader.bio}</p>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #222' }}>
                      
                    </div>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #222' }}>
                      
                    </div>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #222' }}>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
