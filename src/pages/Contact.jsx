import React, { useState } from 'react';

const Contact = () => {
  const [activeBranch, setActiveBranch] = useState('Gobichettipalayam');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const branches = {
    'Gobichettipalayam': {
      address: 'CFW3+WVR, Kullampalayam, Gobichettipalayam, Tamil Nadu 638476',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.284241378!2d76.9589!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3NsKwNTcnMzIuMCJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin'
    },
    'Gobi Arts & Science': {
      address: 'Karattadipalayam, Gobichettipalayam, Tamil Nadu 638453',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123!2d77.456!3d11.012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzQzLjIiTiA3N8KwMjcnMjEuNiJF!5e0!3m2!1sen!2sin!4v1630000000000'
    },
    'Chennai': {
      address: 'Tidel Park, Tharamani, Chennai, Tamil Nadu 600113',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.48!2d80.24!3d12.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzQ4LjAiTiA4MMKwMTQnMjQuMCJF!5e0!3m2!1sen!2sin!4v1630000000000'
    },
    'Bengaluru': {
      address: 'Manyata Tech Park, Nagawara, Bengaluru, Karnataka 560045',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.54!2d77.62!3d13.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI0LjAiTiA3N8KwMzcnMTIuMCJF!5e0!3m2!1sen!2sin!4v1630000000000'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting STG Enterprise!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="page-fade-in" style={{ background: 'transparent', minHeight: '100vh', padding: '150px 0 100px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>Get In Touch</h1>
          <p style={{ color: '#888', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '30px' }}>
          {/* Contact Form */}
          <div style={{ background: 'rgba(10,10,10,0.85)', padding: 'clamp(25px, 4vw, 40px)', borderRadius: '15px', border: '1px solid #1a1a1a' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  style={{ width: '100%', background: '#111', border: '1px solid #222', padding: '18px', borderRadius: '8px', color: '#fff', fontSize: '1rem' }}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  style={{ width: '100%', background: '#111', border: '1px solid #222', padding: '18px', borderRadius: '8px', color: '#fff', fontSize: '1rem' }}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Phone" 
                  style={{ width: '100%', background: '#111', border: '1px solid #222', padding: '18px', borderRadius: '8px', color: '#fff', fontSize: '1rem' }}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows="5" 
                  style={{ width: '100%', background: '#111', border: '1px solid #222', padding: '18px', borderRadius: '8px', color: '#fff', resize: 'none', fontSize: '1rem' }}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button className="pill-btn" type="submit" style={{ background: 'red', color: '#fff', fontWeight: 'bold', width: '100%', textTransform: 'uppercase', letterSpacing: '2px' }}>Send Message</button>
            </form>
          </div>

          {/* Branches Section */}
          <div style={{ background: 'rgba(10,10,10,0.85)', padding: 'clamp(25px, 4vw, 40px)', borderRadius: '15px', border: '1px solid #1a1a1a' }}>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', marginBottom: '30px', fontWeight: 800 }}>Our Branches</h2>
            
            {/* Tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
              {Object.keys(branches).map(branch => (
                <button
                  key={branch}
                  onClick={() => setActiveBranch(branch)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    background: activeBranch === branch ? 'red' : '#1a1a1a',
                    color: '#fff',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)'
                  }}
                >
                  {branch}
                </button>
              ))}
            </div>

            {/* Map Area */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #222', height: '300px' }}>
              <iframe
                src={branches[activeBranch].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title={`${activeBranch} Map`}
              ></iframe>
            </div>
            
            <div style={{ marginTop: '20px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
               <p style={{ color: '#ccc', lineHeight: 1.6, fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}>{branches[activeBranch].address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
