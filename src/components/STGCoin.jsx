import React, { useEffect, useRef } from 'react';

const STGCoin = ({ size = 260 }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, hover: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const W = size;
    const H = size * 1.55;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);
    
    const cx = W / 2;
    const badgeY = H * 0.40;
    const R = W * 0.32;
    let angle = 0;
    let animId;

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current.x = x;
      mouseRef.current.y = y;
      
      const dist = Math.sqrt((x - cx) ** 2 + (y - badgeY) ** 2);
      mouseRef.current.hover = dist < R * 1.5;
    };
    const onLeave = () => { mouseRef.current.hover = false; };
    
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    const draw = () => {
      const isHover = mouseRef.current.hover;
      angle += isHover ? 0.06 : 0.025; // Spin faster on hover
      ctx.clearRect(0, 0, W, H);

      // ── SPOTLIGHT from ABOVE ──
      const spotTopW = W * 0.1;
      const spotBotW = W * 0.8;
      const spotTopY = 0;
      const spotBotY = badgeY + R * 0.4;

      const spotGrad = ctx.createLinearGradient(cx, spotTopY, cx, spotBotY);
      spotGrad.addColorStop(0, 'rgba(255,80,80,0.0)');
      spotGrad.addColorStop(0.4, `rgba(255,60,60,${(0.1 + Math.sin(angle * 1.5) * 0.04) * (isHover ? 1.5 : 1)})`);
      spotGrad.addColorStop(0.85, `rgba(255,30,30,${(0.22 + Math.sin(angle * 1.5) * 0.06) * (isHover ? 1.5 : 1)})`);
      spotGrad.addColorStop(1, 'rgba(255,0,0,0.0)');

      ctx.beginPath();
      ctx.moveTo(cx - spotTopW / 2, spotTopY);
      ctx.lineTo(cx + spotTopW / 2, spotTopY);
      ctx.lineTo(cx + spotBotW / 2, spotBotY);
      ctx.lineTo(cx - spotBotW / 2, spotBotY);
      ctx.closePath();
      ctx.fillStyle = spotGrad;
      ctx.fill();

      // Hit glow
      const hitGlow = ctx.createRadialGradient(cx, badgeY - R * 0.5, 0, cx, badgeY, R * 1.2);
      hitGlow.addColorStop(0, `rgba(255,120,120,${(0.3 + Math.sin(angle * 2) * 0.08) * (isHover ? 1.4 : 1)})`);
      hitGlow.addColorStop(1, 'rgba(255,0,0,0)');
      ctx.beginPath();
      ctx.arc(cx, badgeY, R * 1.4, 0, Math.PI * 2);
      ctx.fillStyle = hitGlow;
      ctx.fill();

      // ── COIN SPIN ──
      const scaleX = Math.cos(angle);
      const absScale = Math.abs(scaleX);

      ctx.save();
      ctx.translate(cx, badgeY);
      ctx.scale(scaleX, 1);

      // Badge body
      const body = ctx.createRadialGradient(-R * 0.2, -R * 0.25, 0, 0, 0, R);
      body.addColorStop(0, isHover ? '#3a0000' : '#250000');
      body.addColorStop(0.6, '#0e0000');
      body.addColorStop(1, '#000000');
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, Math.PI * 2);
      ctx.fillStyle = body;
      ctx.fill();

      // Red border ring
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,0,0,${0.7 + Math.sin(angle * 3) * 0.2})`;
      ctx.lineWidth = isHover ? 5 : 4;
      ctx.shadowColor = 'red';
      ctx.shadowBlur = isHover ? 40 : 25;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // "STG" text
      const fs = R * 0.6;
      ctx.font = `900 ${fs}px 'Inter', Arial, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(255,80,80,1)';
      ctx.shadowBlur = isHover ? 25 : 18;
      ctx.scale(scaleX < 0 ? -1 : 1, 1);
      ctx.fillStyle = '#ffffff';
      ctx.fillText('STG', 0, 0);
      ctx.shadowBlur = 0;

      ctx.restore();

      // ── Bottom glow ──
      const poolY = badgeY + R * 1.0;
      const poolGlow = ctx.createRadialGradient(cx, poolY, 0, cx, poolY, R * 1.3);
      poolGlow.addColorStop(0, `rgba(255,40,40,${(0.18 + Math.sin(angle * 2) * 0.06) * (isHover ? 1.3 : 1)})`);
      poolGlow.addColorStop(1, 'rgba(255,0,0,0)');
      ctx.beginPath();
      ctx.ellipse(cx, poolY, R * 1.3, R * 0.25, 0, 0, Math.PI * 2);
      ctx.fillStyle = poolGlow;
      ctx.fill();

      // ── "STG ENTERPRISE" label ──
      const labelY = lineY + W * 0.11;
      const entFontSize = Math.max(10, W * 0.08);
      ctx.font = `800 ${entFontSize}px 'Inter', sans-serif`;
      
      const stgPart = 'STG ';
      const entPart = 'ENTERPRISE';
      const stgW = ctx.measureText(stgPart).width;
      const entW = ctx.measureText(entPart).width;
      const totalTextW = stgW + entW;
      
      const boxHPadding = W * 0.06;
      const boxVPadding = W * 0.035;
      const boxW = totalTextW + boxHPadding * 2;
      const boxH = entFontSize + boxVPadding * 2;
      const boxX = cx - boxW / 2;
      const boxTop = labelY - boxH / 2;
      
      const boxGrad = ctx.createLinearGradient(boxX, boxTop, boxX, boxTop + boxH);
      boxGrad.addColorStop(0, isHover ? 'rgba(20,10,12,0.95)' : 'rgba(10,10,12,0.92)');
      boxGrad.addColorStop(1, 'rgba(2,2,4,0.96)');
      
      ctx.fillStyle = boxGrad;
      ctx.strokeStyle = `rgba(255,0,0,${isHover ? 0.6 : 0.35})`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.roundRect(boxX, boxTop, boxW, boxH, 8);
      ctx.fill();
      ctx.stroke();
      
      const textStartX = cx - totalTextW / 2;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(stgPart, textStartX, labelY);
      ctx.fillStyle = '#ff0000';
      ctx.fillText(entPart, textStartX + stgW, labelY);

      // ── Sub-texts ──
      const subY1 = boxTop + boxH + W * 0.085;
      const sub1Size = Math.max(9, W * 0.07);
      ctx.font = `800 ${sub1Size}px 'Inter', sans-serif`;
      ctx.fillStyle = isHover ? '#fff' : 'rgba(220,220,220,0.9)';
      ctx.textAlign = 'center';
      ctx.fillText('THE NEXT GEN', cx, subY1);

      const subY2 = subY1 + W * 0.08;
      const sub2Size = Math.max(8, W * 0.05);
      ctx.font = `400 ${sub2Size}px 'Inter', sans-serif`;
      ctx.fillStyle = isHover ? '#aaa' : 'rgba(140,140,140,0.75)';
      ctx.fillText('ELITE SOLUTIONS', cx, subY2);

      animId = requestAnimationFrame(draw);
    };

    const lineY = badgeY + R * 1.15; // Define lineY here for consistency
    draw();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: size, height: size * 1.55, maxWidth: '100%', cursor: 'pointer' }}
    />
  );
};

export default STGCoin;
