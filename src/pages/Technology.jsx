import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const techData = {
  react: {
    name: 'React JS',
    tagline: 'Dynamic Web Ecosystems',
    description: 'Architecting high-performance digital hubs using advanced micro-frontend patterns and resilient react frameworks.',
    features: ['Concurrent Rendering', 'Micro-Frontend Architecture', 'Virtual DOM Optimization', 'Infinite Scale Design'],
    businessValue: 'Resilient digital presence that handles billions of requests with high stability.',
    projects: [
      { name: 'Global Enterprise Portal', desc: 'Secure unified hub for 12,000+ consultants globally.', impact: 'Seamless internal connectivity' }
    ]
  },
  python: {
    name: 'Python',
    tagline: 'Automation & AI Pipelines',
    description: 'Leveraging advanced Python frameworks to build data pipelines, backend architecture, and AI-driven automation systems.',
    features: ['Machine Learning Integration', 'Data Science Pipelines', 'High-Speed Automation', 'Serverless Functions'],
    businessValue: 'Faster time-to-market with massively scalable data processing infrastructure.',
    projects: [
      { name: 'Predictive Logistics Hub', desc: 'Python-driven forecasting for cross-border supply chains.', impact: '35% reduction in latency' }
    ]
  },
  django: {
    name: 'Django',
    tagline: 'Rapid Enterprise Backend',
    description: 'Delivering robust, secure, and scalable backend applications for high-traffic financial and enterprise ecosystems.',
    features: ['ORM Level Security', 'Rapid Deployment', 'Scalable Architecture', 'Built-in Admin Ecosystem'],
    businessValue: 'Military-grade secure backend systems built with massive speed and reliability.',
    projects: [
      { name: 'Fintech Core Engine', desc: 'Backend system managing multi-currency global transactions.', impact: 'Zero downtime during peak scaling' }
    ]
  },
  flutter: {
    name: 'Flutter',
    tagline: 'Cross-Platform Mobile Solutions',
    description: 'Building native-feeling, gorgeous, and unbelievably fast mobile applications across iOS and Android from a single shared codebase.',
    features: ['Skia Rendering Engine', 'Cross-Platform Native Speed', 'Responsive Layout Architecture', 'Hardware Level Integration'],
    businessValue: 'Halves development time while maximizing reach to 100% of the mobile market natively.',
    projects: [
      { name: 'Retail Omnistore App', desc: 'Unified mobile shopping experience for millions.', impact: '4.9 Star Rating globally' }
    ]
  },
  angular: {
    name: 'Angular',
    tagline: 'Enterprise Web Solutions',
    description: 'Scaling enterprise administration panels and public interfaces using strict TypeScript structures and Angular\'s powerful view engines.',
    features: ['Two-Way Data Binding', 'Dependency Injection', 'Enterprise Scale Routing', 'AOT Compilation'],
    businessValue: 'Rock-solid predictable web architecture ideal for enormous banking and corporate ecosystems.',
    projects: [
      { name: 'Bank Regulatory Portal', desc: 'Complex multi-layered portal handling global compliance.', impact: '100% compliance audit pass' }
    ]
  },
  reactnative: {
    name: 'React Native',
    tagline: 'Mobile Digital Transformation',
    description: 'Accelerating mobile delivery using JavaScript ecosystems to bridge native experiences with high reusability.',
    features: ['Over The Air Updates', 'Native Module Bridges', 'Fluid Animations', 'Shared Web Codebase'],
    businessValue: 'Extremely fast mobility solutions that scale instantly.',
    projects: [
      { name: 'Global Logistics App', desc: 'Mobile platform for real-time asset tracking.', impact: 'Seamless cross-border visibility' }
    ]
  },
  java: {
    name: 'Java',
    tagline: 'Enterprise Infrastructure',
    description: 'Mission-critical systems built on rock-solid Java foundations.',
    features: ['Multi-threaded Performance', 'Enterprise Security', 'JVM Optimization', 'Distributed Systems'],
    businessValue: 'Absolute stability for large-scale enterprise environments.',
    projects: [
      { name: 'Financial Core System', desc: 'Core processing engine for global financial data.', impact: '99.99% uptime for core operations' }
    ]
  },
  springboot: {
    name: 'Spring Boot',
    tagline: 'Microservices & API',
    description: 'Modern microservices architecture for agile enterprise scaling.',
    features: ['Rapid API Development', 'Cloud-Native Readiness', 'Microservice Orchestration', 'Auto-configuration'],
    businessValue: 'Fast deployment cycles and agile infrastructure scaling.',
    projects: [
      { name: 'API Management Hub', desc: 'Centralized API gateway for global services.', impact: 'Streamlined developer onboarding' }
    ]
  },
  php: {
    name: 'PHP',
    tagline: 'Scalable Web Backend',
    description: 'Versatile web solutions built on modern PHP ecosystems.',
    features: ['Laravel Integration', 'Fast Web Deployment', 'CMS Capabilities', 'E-commerce Readiness'],
    businessValue: 'Cost-effective and rapid web solution delivery.',
    projects: [
      { name: 'Global E-commerce Hub', desc: 'Multi-vendor marketplace for specialized parts.', impact: '40% increase in vendor engagement' }
    ]
  },
  crt: {
    name: 'CRT Training',
    tagline: 'Empowering Talent',
    description: 'Strategic campus recruitment training for the next generation.',
    features: ['Skill Assessments', 'Soft Skills Mastery', 'Technical Bootcamps', 'Industry Alignment'],
    businessValue: 'Developing a pipeline of elite-level talent for the industry.',
    projects: [
      { name: 'Global Skill Program', desc: 'Unified training platform for multiple regions.', impact: '95% placement readiness' }
    ]
  },
  dotnet: {
    name: '.NET / C#',
    tagline: 'Corporate Innovation',
    description: 'High-performance corporate applications built on the .NET ecosystem.',
    features: ['C# Development', 'Azure Integration', 'Desktop & Web Synergy', 'Type-safe Performance'],
    businessValue: 'Seamless integration with Microsoft-centric enterprise stacks.',
    projects: [
      { name: 'Enterprise Resource Hub', desc: 'Unified ERP system for large-scale manufacturing.', impact: '25% improvement in resource allocation' }
    ]
  }
};

const Technology = () => {
  const { techId } = useParams();
  const navigate = useNavigate();

  if (!techId) {
    return (
      <div className="page-fade-in" style={{ padding: 'clamp(120px, 15vw, 200px) 0 100px', background: 'transparent', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', marginBottom: '20px', fontWeight: 800, color: '#fff' }}>Advanced Strategy & Capability</h2>
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)', color: '#888', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
              Our modern innovation ecosystem designed for global scale and precision.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
            {Object.entries(techData).map(([id, tech]) => (
              <div 
                key={id} 
                className="neon-border"
                onClick={() => navigate(`/technology/${id}`)}
                style={{ 
                  borderRadius: '14px', 
                  overflow: 'hidden',
                  background: '#050505',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  padding: 'clamp(25px, 4vw, 40px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <div style={{ color: 'red', marginBottom: '20px', width: '50px', height: '50px', background: 'rgba(255,0,0,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 900 }}>
                  {tech.name.charAt(0)}
                </div>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{tech.name}</h3>
                <p style={{ color: '#888', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', marginBottom: '25px' }}>{tech.tagline}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'red', fontWeight: 'bold', fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)' }}>
                  Explore Capability →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const tech = techData[techId];
  if (!tech) return navigate('/technology');

  return (
    <div className="page-fade-in" style={{ background: 'transparent', color: '#fff', position: 'relative', overflow: 'hidden' }}>
       <div style={{ position: 'relative', zIndex: 10 }}>
       <section style={{ padding: 'clamp(140px, 18vw, 220px) 0 clamp(60px, 8vw, 100px)', textAlign: 'center', background: 'transparent' }}>
          <div className="container">
             <button onClick={() => navigate('/technology')} style={{ background: 'transparent', border: 'none', color: 'red', display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto 30px', cursor: 'pointer', fontWeight: 700, fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}>
                 ← BACK TO STACK
             </button>
             <h1 style={{ fontSize: 'clamp(2rem, 7vw, 5rem)', marginBottom: '15px', color: '#fff', fontWeight: 800 }}>{tech.name}</h1>
             <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.6rem)', color: 'red', fontWeight: 600 }}>{tech.tagline}</p>
          </div>
       </section>

       <section style={{ padding: 'clamp(40px, 6vw, 60px) 0 clamp(60px, 10vw, 120px)' }}>
          <div className="container">
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(30px, 5vw, 80px)', alignItems: 'start' }}>
                <div>
                   <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', marginBottom: '25px', fontWeight: 800 }}>Strategic Capability</h2>
                   <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: '#bbb', marginBottom: '50px', lineHeight: '1.8' }}>{tech.description}</p>
                   
                   <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, marginBottom: '30px', color: '#fff' }}>Global Implementations</h3>
                   {tech.projects.map((p, i) => (
                      <div key={i} style={{ padding: 'clamp(25px, 4vw, 50px)', background: 'rgba(17,17,17,0.8)', border: '1px solid #222', borderRadius: '12px', marginBottom: '25px' }}>
                         <span style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 800, color: '#fff', display: 'block', marginBottom: '15px' }}>{p.name}</span>
                         <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: '#aaa', marginBottom: '25px', lineHeight: 1.7 }}>{p.desc}</p>
                         <div style={{ padding: '15px 20px', borderLeft: '4px solid red', background: 'rgba(26,26,26,0.8)', fontWeight: 700, color: '#fff', borderRadius: '4px', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}>
                            <span style={{ color: 'red', marginRight: '8px' }}>OUTCOME:</span> {p.impact}
                         </div>
                      </div>
                   ))}
                </div>

                <div style={{ padding: 'clamp(30px, 5vw, 50px)', background: 'rgba(17,17,17,0.8)', border: '1px solid #222', borderRadius: '20px', color: '#fff', position: 'sticky', top: '120px' }}>
                   <div style={{ background: 'red', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', fontSize: '1.2rem', fontWeight: 900 }}>
                     {tech.name.charAt(0)}
                   </div>
                   <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, marginBottom: '30px' }}>Domain Stack</h3>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '40px' }}>
                      {tech.features.map((f, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', color: '#ddd' }}>
                           <div style={{ width: '6px', height: '6px', background: 'red', borderRadius: '50%', flexShrink: 0, boxShadow: '0 0 6px red' }} />
                           {f}
                        </div>
                      ))}
                   </div>
                   <div style={{ background: 'rgba(26,26,26,0.8)', padding: '20px', borderRadius: '10px', fontStyle: 'italic', color: '#aaa', marginBottom: '30px', borderLeft: '3px solid red', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', lineHeight: 1.7 }}>
                     "{tech.businessValue}"
                   </div>
                   <button className="pill-btn" style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '16px 0', background: 'red', border: 'none', fontWeight: 800 }} onClick={() => navigate('/contact')}>
                     Consult our Experts
                   </button>
                </div>
             </div>
          </div>
       </section>
       </div>
    </div>
  );
};

export default Technology;
