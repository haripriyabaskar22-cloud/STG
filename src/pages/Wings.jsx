import React from 'react';

const Wings = () => {
  return (
    <div className="page-fade-in" style={{ padding: 'clamp(120px, 15vw, 180px) 0 80px', background: 'transparent', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
         <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 80px)', color: '#fff' }}>
           Our Core <span style={{ color: 'red' }}>Wings</span>
         </h1>
         
        {/* Legacy Core Wings */}
        <div style={{ marginBottom: 'clamp(50px, 8vw, 100px)' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 'clamp(25px, 5vw, 50px)', textAlign: 'center' }}>Legacy Core Wings</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '20px' }}>
            {[
              { title: 'Digital Marketing CRT', desc: 'Specialized certification and training in advanced digital reach and engagement.' },
              { title: 'Global Certifications', desc: 'Providing internationally recognized standards and compliance engineering.' },
              { title: 'Development Wings', desc: 'Our foundational software and systems architecture laboratory.' }
            ].map((wing, i) => (
              <div key={i} style={{ background: 'rgba(10,10,10,0.85)', border: '1px solid #1a1a1a', padding: 'clamp(25px, 4vw, 40px)', borderRadius: '15px', textAlign: 'center' }}>
                <h3 style={{ color: 'red', marginBottom: '12px', fontWeight: 800, fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>{wing.title}</h3>
                <p style={{ color: '#888', fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', lineHeight: 1.7 }}>{wing.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Strategic Wings */}
        <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', fontWeight: 700, color: '#fff', marginBottom: 'clamp(25px, 5vw, 50px)', textAlign: 'center' }}>Advanced Strategic Wings</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '25px' }}>
          {[
            {
              title: 'AI Lab',
              desc: 'Pioneering the frontier of autonomous intelligence through deep research in machine learning and neural architectures.',
              items: ['Neural Architecture Search', 'Generative Foundation Models', 'Edge AI Optimization']
            },
            {
              title: 'Medical Space',
              desc: 'Transforming patient outcomes with high-fidelity health informatics and predictive diagnostic ecosystems.',
              items: ['Precision Health Data', 'Surgical Workflow AI', 'Tele-Radiology Platforms']
            },
            {
              title: 'Edu Wings',
              desc: 'Redefining the future of education through immersive digital learning and skill mastery platforms.',
              items: ['Adaptive Learning AI', 'Immersive Edu-Tech', 'Global Certification Hub']
            }
          ].map((wing, i) => (
            <div key={i} style={{ background: 'rgba(10,10,10,0.85)', border: '1px solid #1a1a1a', borderRadius: '20px', padding: 'clamp(25px, 4vw, 45px)', transition: 'all 0.4s ease', cursor: 'pointer' }} 
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'red'; e.currentTarget.style.transform = 'translateY(-5px)'; }} 
              onMouseOut={(e) => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(255,0,0,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '1px solid rgba(255,0,0,0.2)', fontSize: '1.2rem', fontWeight: 900, color: 'red' }}>
                {wing.title.charAt(0)}
              </div>
              <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#fff', marginBottom: '15px', fontWeight: 700 }}>{wing.title}</h2>
              <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '20px', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}>
                {wing.desc}
              </p>
              <div style={{ height: '2px', width: '40px', background: 'red', marginBottom: '20px' }}></div>
              <ul style={{ color: '#aaa', paddingLeft: '18px', lineHeight: 2, fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)' }}>
                {wing.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wings;
