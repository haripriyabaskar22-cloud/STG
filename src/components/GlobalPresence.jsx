import React from 'react';

const GlobalPresence = () => {
  const employees = [
    { id: 1, name: 'Sarah J.', pos: { top: '20%', left: '25%' }, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150' },
    { id: 2, name: 'Michael R.', pos: { top: '45%', left: '75%' }, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150' },
    { id: 3, name: 'Elena K.', pos: { top: '35%', left: '50%' }, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150' },
    { id: 4, name: 'Arjun M.', pos: { top: '65%', left: '60%' }, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150' },
    { id: 5, name: 'Chen W.', pos: { top: '25%', left: '85%' }, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150' },
  ];

  return (
    <section className="global-presence-section reveal-section" style={{ background: '#000', padding: '100px 0', overflow: 'hidden' }}>
      <div className="container">
        <h2 className="tcs-heading tcs-heading-white" style={{ textAlign: 'center', marginBottom: '60px', fontWeight: '800' }}>Global Impact, <span style={{ color: 'var(--primary)' }}>Local Expertise</span></h2>

        <div className="map-container" style={{ position: 'relative', width: '100%', height: '540px', background: 'rgba(20,20,20,0.5)', borderRadius: '12px', border: '1px solid #333' }}>
          {/* World Map SVG Background */}
          <svg viewBox="0 0 1000 500" style={{ opacity: 0.15, position: 'absolute', width: '100%', height: '100%' }}>
            <path d="M150,100 Q400,50 850,100 T150,400 T150,100" fill="none" stroke="var(--primary)" strokeWidth="1" />
          </svg>

          {/* Employee Hotspots */}
          {employees.map(emp => (
            <div
              key={emp.id}
              className="employee-hotspot"
              style={{
                position: 'absolute',
                top: emp.pos.top,
                left: emp.pos.left,
                transform: 'translate(-50%, -50%)',
                zIndex: 2
              }}
            >
              <div className="avatar-pulse" style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid var(--primary)', padding: '3px', background: '#000', position: 'relative' }}>
                <img src={emp.img} alt={emp.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                <div className="pulse-ring"></div>
              </div>
              <div className="emp-tag" style={{ background: 'var(--primary)', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '4px', position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', boxShadow: '0 5px 15px rgba(255,0,0,0.2)' }}>
                {emp.name}
              </div>
            </div>
          ))}

          {/* Central Impact Stats */}
          <div style={{ position: 'absolute', bottom: '50px', left: '50px', textAlign: 'left', color: '#fff' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--primary)' }}>50+</div>
            <div style={{ fontSize: '1.1rem', opacity: 0.7, fontWeight: '700' }}>Countries Reached</div>
          </div>
          <div style={{ position: 'absolute', bottom: '50px', right: '50px', textAlign: 'right', color: '#fff' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--primary)' }}>10k+</div>
            <div style={{ fontSize: '1.1rem', opacity: 0.7, fontWeight: '700' }}>Global Talent</div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .avatar-pulse {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }
        .avatar-pulse:hover {
          transform: scale(1.15);
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.4);
        }
        .pulse-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid var(--primary);
          border-radius: 50%;
          animation: pulse-ring-anim 2.5s infinite;
        }
        @keyframes pulse-ring-anim {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}} />
    </section>
  );
};

export default GlobalPresence;

