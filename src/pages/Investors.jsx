import React from 'react';

const Investors = () => {
  const metrics = [
    { label: 'Revenue Growth', value: '+28%', icon:  },
    { label: 'Operating Margin', value: '24.5%', icon:  },
    { label: 'Active Clients', value: '450+', icon:  }
  ];

  return (
    <div className="page-fade-in">
      {/* Hero */}
      <section className="section-full section-dark" style={{ padding: '180px 0 100px', background: '#000' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h1 className="tcs-heading tcs-heading-white" style={{ fontSize: '4.5rem', fontWeight: '800' }}>
                STG <span style={{ color: 'var(--primary)' }}>Investors</span>
              </h1>
              <p style={{ fontSize: '1.4rem', opacity: 0.8, marginBottom: '40px', lineHeight: '1.6' }}>
                Delivering sustainable shareholder value through aggressive market leadership in autonomous AI ecosystems and global digital consolidation.
              </p>
              <div style={{ display: 'flex', gap: '30px' }}>
                {metrics.map((m, i) => (
                  <div key={i} style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '20px' }}>
                    <div style={{ color: 'var(--primary)', marginBottom: '5px' }}>{m.icon}</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: '700' }}>{m.value}</div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: '4px', overflow: 'hidden', height: '400px', border: '1px solid #333' }}>
               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" alt="Market" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="section-full">
        <div className="container">
          <h2 className="tcs-heading" style={{ fontSize: '3rem', fontWeight: '800' }}>Reporting & Results</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '60px' }}>
            {[
              { title: 'Annual Report 2025', date: 'March 15, 2026', tag: 'Full Report' },
              { title: 'Q4 Fiscal Results', date: 'April 02, 2026', tag: 'Earnings Call' },
              { title: 'Sustainability Ledger', date: 'Jan 20, 2026', tag: 'ESG' },
              { title: 'Shareholder Presentation', date: 'Feb 12, 2026', tag: 'Meeting' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '30px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.3s' }} className="report-row">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.7rem', background: '#f0f0f0', padding: '4px 10px', borderRadius: '50px', fontWeight: '700', color: '#666' }}>{item.tag}</span>
                    <span style={{ fontSize: '0.9rem', color: '#999' }}>{item.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{item.title}</h3>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <button style={{ background: 'none', border: '1px solid #ddd', padding: '10px 20px', borderRadius: '4px', fontSize: '0.9rem', cursor: 'pointer' }}>View PDF</button>
                  <button style={{ background: '#000', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', fontSize: '0.9rem', cursor: 'pointer' }}>Listen</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="section-full" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="tcs-heading">Shareholder Calendar</h2>
          <div className="tcs-grid-3" style={{ marginTop: '50px' }}>
            {[
              { day: '12', month: 'MAY', text: 'Annual General Meeting 2026' },
              { day: '25', month: 'JUN', text: 'Q1 Earnings Release - Fiscal 2027' },
              { day: '08', month: 'AUG', text: 'STG Strategy Summit (London)' }
            ].map((cal, i) => (
              <div key={i} style={{ display: 'flex', gap: '30px', alignItems: 'center', background: '#fff', padding: '30px', borderRadius: '4px', border: '1px solid #eee' }}>
                <div style={{ textAlign: 'center', minWidth: '80px' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)', lineHeight: '1' }}>{cal.day}</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', letterSpacing: '2px' }}>{cal.month}</div>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.4' }}>{cal.text}</div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .report-row:hover {
          background: #fafafa;
          padding-left: 40px;
          border-left: 4px solid var(--primary);
        }
      `}</style>
    </div>
  );
};

export default Investors;
