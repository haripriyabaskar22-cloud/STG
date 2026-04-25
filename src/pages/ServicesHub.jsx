
const ServicesHub = () => {
  const services = [
    { 
      id: 'web', 
      title: 'Web Development', 
      desc: 'Responsive and scalable web applications built using modern frameworks like React, Next.js, and Tailwind CSS.' 
    },
    { 
      id: 'mobile', 
      title: 'Android and iOS Development', 
      desc: 'Cross-platform Android and iOS apps built with Flutter and React Native for seamless mobile experiences.' 
    },
    { 
      id: 'iot', 
      title: 'IoT Solutions', 
      desc: 'Smart systems including GPS tracking, home automation, and industrial control for connected operations.' 
    },
    { 
      id: 'backend', 
      title: 'Backend & DevOps', 
      desc: 'Comprehensive backend development with RESTful APIs, database integration, Docker, Kubernetes, and CI/CD pipelines for seamless deployment and scalability.' 
    },
    { 
      id: 'marketing', 
      title: 'Digital Marketing', 
      desc: 'Data-driven digital marketing strategies including SEO, SEM, and social media campaigns for growth.' 
    }
  ];

  return (
    <div className="page-fade-in">
      {/* Header */}
      <section style={{ position: 'relative', padding: 'clamp(120px, 15vw, 180px) 0 clamp(60px, 10vw, 100px)', minHeight: '350px' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(26,0,0,0.9) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>Next-Gen Services</h1>
          <p style={{ maxWidth: '800px', opacity: 0.9, fontSize: 'clamp(1rem, 2vw, 1.4rem)', fontWeight: '300', lineHeight: '1.6', marginBottom: '40px', color: '#fff' }}>
            STG Enterprise provides the tactical and strategic capabilities needed to build a more resilient, efficient, and intelligent enterprise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: 'clamp(50px, 8vw, 120px) 0', background: 'rgba(10,10,10,0.45)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '30px' }}>
            {services.map((service) => (
              <div key={service.id} className="neon-border" style={{ 
                padding: 'clamp(30px, 5vw, 60px) clamp(20px, 4vw, 40px)', 
                background: 'rgba(5,5,5,0.9)',
                borderRadius: '14px', 
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 700, marginBottom: '20px', color: '#fff' }}>{service.title}</h3>
                <p style={{ color: '#999', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: '1.7', marginBottom: '35px', flexGrow: 1 }}>{service.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'red', fontWeight: '700', cursor: 'pointer' }}>
                  Explore service →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Outcome - Content only, no image */}
      <section style={{ padding: 'clamp(50px, 8vw, 120px) 0', background: 'rgba(5,5,5,0.4)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(30px, 5vw, 80px)', alignItems: 'center' }}>
            <div>
               <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#fff', marginBottom: '30px' }}>Strategic Outcomes, Guaranteed</h2>
               <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: '#999', lineHeight: '1.8', margin: '30px 0' }}>
                 We don't just deliver technology; we deliver business results. Our services are designed to lower operational costs, increase speed-to-market, and future-proof your digital estate.
               </p>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '30px', marginTop: '40px' }}>
                 <div style={{ borderLeft: '3px solid red', paddingLeft: '20px' }}>
                   <h4 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 200, color: '#fff' }}>40%</h4>
                   <p style={{ color: '#888' }}>Efficiency Increase</p>
                 </div>
                 <div style={{ borderLeft: '3px solid red', paddingLeft: '20px' }}>
                   <h4 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 200, color: '#fff' }}>2.5x</h4>
                   <p style={{ color: '#888' }}>Faster Innovation</p>
                 </div>
                 <div style={{ borderLeft: '3px solid red', paddingLeft: '20px' }}>
                   <h4 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 200, color: '#fff' }}>99.9%</h4>
                   <p style={{ color: '#888' }}>Uptime Guarantee</p>
                 </div>
                 <div style={{ borderLeft: '3px solid red', paddingLeft: '20px' }}>
                   <h4 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 200, color: '#fff' }}>24/7</h4>
                   <p style={{ color: '#888' }}>Support Coverage</p>
                 </div>
               </div>
            </div>
            <div style={{ 
              background: 'rgba(10,10,10,0.9)', 
              padding: 'clamp(30px, 5vw, 50px)', 
              borderRadius: '20px', 
              border: '1px solid #1a1a1a' 
            }}>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#fff', fontWeight: 700, marginBottom: '30px' }}>Why STG Enterprise?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { title: 'End-to-End Delivery', desc: 'From ideation to deployment, we handle the complete software lifecycle.' },
                  { title: 'Enterprise Security', desc: 'Bank-grade security protocols and compliance-first development.' },
                  { title: 'AI-Powered', desc: 'Intelligent automation and ML-driven solutions for smarter operations.' },
                  { title: 'Global Scale', desc: 'Infrastructure built to handle millions of users across continents.' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{ width: '8px', height: '8px', background: 'red', borderRadius: '50%', flexShrink: 0, marginTop: '8px', boxShadow: '0 0 8px red' }} />
                    <div>
                      <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '5px' }}>{item.title}</h4>
                      <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesHub;
