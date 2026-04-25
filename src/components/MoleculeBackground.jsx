import React, { useEffect, useRef } from 'react';

const MoleculeBackground = () => {
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: -1000, y: -1000 });
  const ripples = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    resize();

    const addRipple = (x, y) => {
      ripples.current.push({ x, y, radius: 0, alpha: 0.6, speed: 5 });
    };

    window.addEventListener('resize', resize);
    const onMove = (e) => { pointerRef.current.x = e.clientX; pointerRef.current.y = e.clientY; };
    const onClick = (e) => { addRipple(e.clientX, e.clientY); };
    
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onClick);
    window.addEventListener('touchstart', (e) => {
      const t = e.touches[0];
      pointerRef.current.x = t.clientX;
      pointerRef.current.y = t.clientY;
      addRipple(t.clientX, t.clientY);
    }, { passive: true });

    // ════════════════════════════════════════
    //  BUBBLE LOGIC
    // ════════════════════════════════════════
    const isMobile = window.innerWidth < 768;
    const BUBBLE_COUNT = isMobile ? 45 : 120; // Increased count
    
    const bubbles = Array.from({ length: BUBBLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5, // Move in any direction
      r: isMobile ? (8 + Math.random() * 25) : (10 + Math.random() * 45),
      alpha: 0.08 + Math.random() * 0.22,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.01 + Math.random() * 0.03,
      type: Math.random() < 0.3 ? 'red' : 'white',
      showText: true // STG in all bubbles
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const px = pointerRef.current.x;
      const py = pointerRef.current.y;

      // Update & Draw Ripples
      ripples.current.forEach((rp, i) => {
        rp.radius += rp.speed;
        rp.alpha *= 0.96;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,0,0,${rp.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
      ripples.current = ripples.current.filter(rp => rp.alpha > 0.01);

      // Update & Draw Bubbles
      bubbles.forEach(b => {
        b.wobble += b.wobbleSpeed;
        
        // Mouse Interaction
        const dx = b.x - px;
        const dy = b.y - py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const interactDist = 250;
        
        let hoverPushX = 0;
        let hoverPushY = 0;
        
        if (dist < interactDist) {
          const force = (1 - dist / interactDist) * 3.5;
          hoverPushX = (dx / dist) * force;
          hoverPushY = (dy / dist) * force;
        }

        // Movement + wobble + hover push
        b.y += b.vy + hoverPushY;
        b.x += b.vx + Math.sin(b.wobble) * 0.5 + hoverPushX;

        // Wrap around all sides
        if (b.x < -b.r * 2) b.x = W + b.r * 2;
        if (b.x > W + b.r * 2) b.x = -b.r * 2;
        if (b.y < -b.r * 2) b.y = H + b.r * 2;
        if (b.y > H + b.r * 2) b.y = -b.r * 2;

        // Draw Bubble
        ctx.save();
        if (b.r > 32) {
          ctx.filter = 'blur(1.5px)'; // Depth of field
        }
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        
        const grad = ctx.createRadialGradient(
          b.x - b.r * 0.3, b.y - b.r * 0.3, 0,
          b.x, b.y, b.r
        );
        
        const alphaFactor = b.r > 32 ? 0.7 : 1;

        if (b.type === 'red') {
          grad.addColorStop(0, `rgba(255,40,40,${b.alpha * 1.6 * alphaFactor})`);
          grad.addColorStop(0.7, `rgba(130,0,0,${b.alpha * 0.6 * alphaFactor})`);
          grad.addColorStop(1, 'rgba(30,0,0,0)');
        } else {
          grad.addColorStop(0, `rgba(255,255,255,${b.alpha * 1.3 * alphaFactor})`);
          grad.addColorStop(0.7, `rgba(80,80,80,${b.alpha * 0.3 * alphaFactor})`);
          grad.addColorStop(1, 'rgba(0,0,0,0)');
        }

        ctx.fillStyle = grad;
        ctx.fill();

        // Bubble Edge Highlight
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = b.type === 'red' ? `rgba(255,20,20,${b.alpha * 0.8 * alphaFactor})` : `rgba(255,255,255,${b.alpha * 0.5 * alphaFactor})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();

        // Shine/Highlight
        ctx.beginPath();
        ctx.arc(b.x - b.r * 0.4, b.y - b.r * 0.4, b.r * 0.15, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${b.alpha * 0.9 * alphaFactor})`;
        ctx.fill();

        // ── STG TEXT INSIDE BUBBLE ──
        if (b.showText && b.r > 12) {
          const fontSize = b.r * 0.5;
          ctx.font = `900 ${fontSize}px 'Inter', sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          // Light red text only
          ctx.fillStyle = `rgba(255, 100, 100, ${b.alpha * 1.8 * alphaFactor})`;
          ctx.fillText('STG', b.x, b.y);
        }

        ctx.restore();
      });

      // Subtle STG Watermark in center
      ctx.font = `900 ${Math.min(W * 0.25, 250)}px 'Inter',sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(255,0,0,0.02)';
      ctx.fillText('STG', W / 2, H / 2);

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default MoleculeBackground;
