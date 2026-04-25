import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CareersForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application! Our team will review and get back to you within 48 hours.');
    navigate('/careers');
  };

  return (
    <div className="page-fade-in" style={{ background: 'transparent', minHeight: '100vh', padding: '150px 0 100px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
            Start Your Evaluation
          </h1>
          <p style={{ color: '#888', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Fill in your details and our recruitment team will begin your evaluation process.
          </p>
        </div>

        <div style={{ 
          background: 'rgba(10,10,10,0.85)', 
          padding: 'clamp(30px, 5vw, 60px)', 
          borderRadius: '25px', 
          border: '1px solid #1a1a1a',
          boxShadow: '0 0 40px rgba(255,0,0,0.08)'
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                style={{ width: '100%', background: '#111', border: '1px solid #222', padding: '18px', borderRadius: '10px', color: '#fff', fontSize: '1rem' }}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                style={{ width: '100%', background: '#111', border: '1px solid #222', padding: '18px', borderRadius: '10px', color: '#fff', fontSize: '1rem' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <input
                type="text"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                style={{ width: '100%', background: '#111', border: '1px solid #222', padding: '18px', borderRadius: '10px', color: '#fff', fontSize: '1rem' }}
              />
              <select
                value={formData.position}
                onChange={e => setFormData({...formData, position: e.target.value})}
                required
                style={{ width: '100%', background: '#111', border: '1px solid #222', padding: '18px', borderRadius: '10px', color: formData.position ? '#fff' : '#888', fontSize: '1rem' }}
              >
                <option value="" disabled>Select Position</option>
                <option value="fullstack">Full Stack Developer</option>
                <option value="aiml">AI/ML Engineer</option>
                <option value="uiux">UI/UX Designer</option>
                <option value="devops">DevOps Architect</option>
                <option value="analyst">Business Analyst</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <input
                type="text"
                placeholder="Years of Experience"
                value={formData.experience}
                onChange={e => setFormData({...formData, experience: e.target.value})}
                style={{ width: '100%', background: '#111', border: '1px solid #222', padding: '18px', borderRadius: '10px', color: '#fff', fontSize: '1rem' }}
              />
              <input
                type="url"
                placeholder="Portfolio / LinkedIn URL"
                value={formData.portfolio}
                onChange={e => setFormData({...formData, portfolio: e.target.value})}
                style={{ width: '100%', background: '#111', border: '1px solid #222', padding: '18px', borderRadius: '10px', color: '#fff', fontSize: '1rem' }}
              />
            </div>
            <textarea
              placeholder="Tell us why you want to join STG Enterprise..."
              rows="5"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              style={{ width: '100%', background: '#111', border: '1px solid #222', padding: '18px', borderRadius: '10px', color: '#fff', resize: 'none', fontSize: '1rem' }}
            />

            {/* File upload */}
            <div style={{ 
              border: '2px dashed #222', 
              padding: '30px', 
              borderRadius: '15px', 
              textAlign: 'center',
              background: 'rgba(5,5,5,0.5)'
            }}>
              <input type="file" id="eval-resume" style={{ display: 'none' }} />
              <p style={{ color: '#888', marginBottom: '15px' }}>Upload Resume (PDF, DOCX — Max 25MB)</p>
              <label htmlFor="eval-resume" className="pill-btn" style={{ 
                display: 'inline-block', cursor: 'pointer', padding: '12px 30px', 
                background: '#111', border: '1px solid red', color: 'red', fontSize: '0.9rem' 
              }}>
                CHOOSE FILE
              </label>
            </div>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '10px' }}>
              <button 
                type="submit" 
                className="pill-btn" 
                style={{ flex: '1 1 200px', padding: '18px', fontSize: '1.1rem', background: 'red', border: 'none', fontWeight: 800 }}
              >
                SUBMIT APPLICATION
              </button>
              <button 
                type="button"
                className="pill-btn-outline" 
                style={{ flex: '1 1 200px', padding: '18px', fontSize: '1.1rem' }}
                onClick={() => navigate('/careers')}
              >
                BACK TO CAREERS
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareersForm;
