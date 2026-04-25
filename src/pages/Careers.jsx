import React from 'react';
import { useNavigate } from 'react-router-dom';

const Careers = () => {
  const navigate = useNavigate();

  const jobs = [
    { title: 'Full Stack Developer', location: 'Bengaluru / Remote', type: 'Full-time', dept: 'Solutions' },
    { title: 'AI/ML Engineer', location: 'Chennai / Hybrid', type: 'Full-time', dept: 'STG AI Lab' },
    { title: 'UI/UX Designer', location: 'Gobichettipalayam', type: 'Full-time', dept: 'Design' },
    { title: 'DevOps Architect', location: 'Remote', type: 'Contract', dept: 'Infrastructure' },
    { title: 'Business Analyst', location: 'Bengaluru', type: 'Full-time', dept: 'Strategy' }
  ];

  return (
    <div className="page-fade-in" style={{ background: 'transparent', minHeight: '100vh', padding: '150px 0 100px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>Join Our Team</h1>
          <p style={{ color: '#888', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
            We are looking for passionate individuals to help us build the next generation of industrial software.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '20px' }}>
          {jobs.map((job, i) => (
            <div key={i} style={{ 
              background: 'rgba(10,10,10,0.85)', 
              padding: 'clamp(20px, 3vw, 30px) clamp(20px, 4vw, 40px)', 
              borderRadius: '15px', 
              border: '1px solid #1a1a1a',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '15px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={e => { e.currentTarget.style.borderColor = 'red'; e.currentTarget.style.transform = 'translateX(10px)'; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.transform = 'translateX(0)'; }}
            >
              <div style={{ flex: 1, minWidth: '200px' }}>
                <span style={{ color: 'red', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{job.dept}</span>
                <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: '#fff', marginTop: '10px', marginBottom: '10px' }}>{job.title}</h3>
                <div style={{ display: 'flex', gap: '25px', color: '#666', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                     {job.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                     {job.type}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="stg-assistant-massive" style={{ 
            width: '100%',
            maxWidth: '1000px',
            background: 'rgba(10,10,10,0.85)', 
            borderRadius: '30px', 
            border: '2px solid red', 
            overflow: 'hidden',
            boxShadow: '0 0 80px rgba(255,0,0,0.25)',
            position: 'relative'
          }}>
            <div style={{ background: 'rgba(17,17,17,0.9)', padding: 'clamp(20px, 4vw, 40px)', borderBottom: '1px solid #222', display: 'flex', alignItems: 'center', gap: '25px', flexWrap: 'wrap' }}>
              <div style={{ width: '60px', height: '60px', background: 'red', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px red', flexShrink: 0 }}>
                
              </div>
              <div>
                <h2 style={{ fontWeight: 900, color: '#fff', fontSize: 'clamp(1.2rem, 4vw, 2.5rem)', margin: 0, letterSpacing: '2px' }}>STG CAREER ASSISTANT</h2>
                <p style={{ color: 'red', margin: '5px 0 0', fontWeight: 700, fontSize: 'clamp(0.7rem, 1.5vw, 1rem)', textTransform: 'uppercase' }}>Precision Recruitment Ecosystem</p>
              </div>
            </div>
            
            <div className="chat-body" style={{ padding: 'clamp(20px, 5vw, 60px)', display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ background: 'linear-gradient(135deg, red, #8b0000)', padding: 'clamp(15px, 3vw, 30px) clamp(20px, 4vw, 40px)', borderRadius: '25px 25px 25px 0', color: '#fff', maxWidth: '90%', fontSize: 'clamp(0.95rem, 2vw, 1.4rem)', lineHeight: '1.6', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                  Welcome to the STG Enterprise talent intake. We are not just looking for employees; we are seeking the elite 1% who will define the future of industrial intelligence.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignSelf: 'flex-start' }}>
                <div style={{ background: 'linear-gradient(135deg, red, #8b0000)', padding: 'clamp(15px, 3vw, 30px) clamp(20px, 4vw, 40px)', borderRadius: '25px 25px 25px 0', color: '#fff', maxWidth: '90%', fontSize: 'clamp(0.95rem, 2vw, 1.4rem)', lineHeight: '1.6', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                  Are you ready to leverage React, Python, Django, and AI to solve global enterprise challenges? Upload your credentials below to begin your evaluation.
                </div>
              </div>

              <div 
                style={{ 
                  border: '3px dashed #222', 
                  padding: 'clamp(30px, 5vw, 80px) clamp(20px, 4vw, 40px)', 
                  textAlign: 'center', 
                  borderRadius: '25px', 
                  color: '#888',
                  background: 'rgba(5,5,5,0.8)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseOver={e => e.currentTarget.style.borderColor = 'red'}
                onMouseOut={e => e.currentTarget.style.borderColor = '#222'}
              >
                <input 
                  type="file" 
                  id="resume-upload" 
                  style={{ display: 'none' }} 
                  onChange={(e) => alert(e.target.files[0]?.name ? `Selected: ${e.target.files[0].name}` : 'No file selected')}
                />
                <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', fontWeight: 700, color: '#fff', marginBottom: '15px' }}>DROP YOUR RESUME / PORTFOLIO HERE</div>
                <p style={{ marginBottom: '30px' }}>Supported formats: PDF, DOCX (Max 25MB)</p>
                <label 
                  htmlFor="resume-upload" 
                  className="pill-btn" 
                  style={{ 
                    display: 'inline-block', 
                    cursor: 'pointer', 
                    padding: '15px 40px', 
                    background: '#111', 
                    border: '1px solid red', 
                    color: 'red' 
                  }}
                >
                  BROWSE FILES
                </label>
              </div>

              <div style={{ display: 'flex', gap: '20px', width: '100%', flexWrap: 'wrap' }}>
                <button 
                  className="pill-btn" 
                  style={{ flex: '1 1 200px', padding: 'clamp(15px, 3vw, 25px)', fontSize: 'clamp(1rem, 2vw, 1.5rem)', background: 'red', boxShadow: '0 0 30px rgba(255,0,0,0.3)' }}
                  onClick={() => navigate('/careers/apply')}
                >
                  Start Evaluation
                </button>
                <button 
                  className="pill-btn-outline" 
                  style={{ flex: '1 1 200px', padding: 'clamp(15px, 3vw, 25px)', fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
                  onClick={() => navigate('/contact')}
                >
                  Talk to an Expert
                </button>
              </div>
            </div>

            {/* Subtle floating background logo */}
            <div style={{ position: 'absolute', right: '-50px', bottom: '-50px', fontSize: '20rem', fontWeight: 900, color: 'rgba(255,0,0,0.03)', pointerEvents: 'none', userSelect: 'none' }}>STG</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
