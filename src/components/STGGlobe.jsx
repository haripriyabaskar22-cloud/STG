import React, { useEffect, useRef } from 'react';

const STGGlobe = ({ size = 380 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = size, H = size;
    canvas.width = W; canvas.height = H;
    const cx = W / 2, cy = H / 2;
    const R = W * 0.36;
    let t = 0;
    let animId;

    const draw = () => {
      t += 0.012;
      ctx.clearRect(0, 0, W, H);

      // ── Evolving outer glow — breathes in/out + color shift ──
      const glowR = R * (2.0 + Math.sin(t * 0.6) * 0.4);
      const glowAlpha = 0.2 + Math.sin(t * 0.8) * 0.1;
      const outerGlow = ctx.createRadialGradient(cx, cy, R * 0.5, cx, cy, glowR);
      outerGlow.addColorStop(0, `rgba(255,0,0,${glowAlpha * 1.2})`);
      outerGlow.addColorStop(0.5, `rgba(180,0,0,${glowAlpha * 0.4})`);
      outerGlow.addColorStop(1, 'rgba(255,0,0,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
      ctx.fillStyle = outerGlow;
      ctx.fill();

      // ── Globe sphere — evolving gradient ──
      const phase = Math.sin(t * 0.5);
      const sphere = ctx.createRadialGradient(
        cx - R * (0.3 + phase * 0.1),
        cy - R * (0.3 + phase * 0.05),
        R * 0.05, cx, cy, R
      );
      sphere.addColorStop(0, `rgba(${200 + phase * 30},${10 + phase * 5},${10 + phase * 5},0.95)`);
      sphere.addColorStop(0.5, 'rgba(100,0,0,0.88)');
      sphere.addColorStop(1, 'rgba(15,0,0,0.97)');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = sphere;
      ctx.fill();

      // Specular highlight (moves slightly as globe evolves)
      const specX = cx - R * (0.28 + Math.sin(t * 0.3) * 0.06);
      const specY = cy - R * (0.28 + Math.cos(t * 0.4) * 0.05);
      const sheen = ctx.createRadialGradient(specX, specY, 0, cx, cy, R);
      sheen.addColorStop(0, `rgba(255,180,180,${0.18 + Math.sin(t) * 0.06})`);
      sheen.addColorStop(1, 'rgba(255,0,0,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = sheen;
      ctx.fill();

      // Border — pulses
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,60,60,${0.5 + Math.sin(t * 2) * 0.35})`;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = 'red';
      ctx.shadowBlur = 15 + Math.sin(t) * 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // ── Latitude lines ──
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();
      for (let lat = -60; lat <= 60; lat += 30) {
        const yOff = R * Math.sin((lat * Math.PI) / 180);
        const rx = R * Math.cos((lat * Math.PI) / 180);
        ctx.beginPath();
        ctx.ellipse(cx, cy + yOff, rx, rx * 0.28, 0, 0, Math.PI * 2);
        ctx.strokeStyle = lat === 0 ? 'rgba(255,80,80,0.4)' : 'rgba(255,80,80,0.15)';
        ctx.lineWidth = lat === 0 ? 1.5 : 1;
        ctx.stroke();
      }
      // Longitude lines — clockwise
      for (let i = 0; i < 8; i++) {
        const lTilt = t + (i * Math.PI) / 4;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(lTilt);
        ctx.beginPath();
        ctx.ellipse(0, 0, R * 0.18, R, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,80,80,${0.1 + Math.sin(t + i) * 0.05})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }
      ctx.restore();

      // ── "STG" text — clockwise, EVOLVING (scale + alpha pulse) ──
      const textScale = 1 + Math.sin(t * 1.2) * 0.12;
      const textAlpha = 0.6 + Math.sin(t * 1.5) * 0.35;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t);   // clockwise
      ctx.scale(textScale, textScale);
      const fs = R * 0.52;
      ctx.font = `900 ${fs}px 'Inter', Arial, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(255,100,100,1)';
      ctx.shadowBlur = 15 + Math.sin(t * 2) * 12;
      ctx.fillStyle = `rgba(255,255,255,${textAlpha})`;
      ctx.fillText('STG', 0, 0);
      ctx.shadowBlur = 0;
      ctx.restore();

      // ── Orbital ring 1 ──
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.7);
      ctx.scale(1, 0.3);
      ctx.beginPath();
      ctx.arc(0, 0, R * 1.28, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,0,0,${0.4 + Math.sin(t * 2) * 0.2})`;
      ctx.lineWidth = 2;
      ctx.stroke();
      const ox = R * 1.28 * Math.cos(t * 2.5);
      const oy = R * 1.28 * Math.sin(t * 2.5);
      ctx.beginPath();
      ctx.arc(ox, oy, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.shadowColor = 'red';
      ctx.shadowBlur = 14;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();

      // ── Orbital ring 2 ──
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-t * 0.5 + 1.1);
      ctx.scale(0.28, 1);
      ctx.beginPath();
      ctx.arc(0, 0, R * 1.32, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,50,50,${0.28 + Math.sin(t * 1.3) * 0.12})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      const ox2 = R * 1.32 * Math.cos(-t * 2);
      const oy2 = R * 1.32 * Math.sin(-t * 2);
      ctx.beginPath();
      ctx.arc(ox2, oy2, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'red';
      ctx.shadowColor = 'red';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();

      // ── Outer dashed ring ──
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.1);
      ctx.setLineDash([7, 5]);
      ctx.beginPath();
      ctx.arc(0, 0, R * 1.6, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,0,0,${0.1 + Math.sin(t * 0.6) * 0.06})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [size]);

  return (
    <canvas ref={canvasRef} style={{ display: 'block', width: size, height: size, maxWidth: '100%' }} />
  );
};

export default STGGlobe;
