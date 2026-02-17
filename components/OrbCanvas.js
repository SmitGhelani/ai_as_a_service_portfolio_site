"use client";
import { useEffect, useRef } from "react";

export default function OrbCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const SIZE = 460;
    canvas.width = canvas.height = SIZE;
    const C = SIZE / 2;
    let rafId, t = 0;

    const nodes = Array.from({ length: 220 }, () => ({
      theta: Math.acos(2 * Math.random() - 1),
      phi: Math.random() * Math.PI * 2,
      r: 148 + Math.random() * 22,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      t += 0.0045;

      // Outer glow
      [180, 200, 220].forEach((rr, i) => {
        const g = ctx.createRadialGradient(C, C, rr * 0.3, C, C, rr);
        g.addColorStop(0, "transparent");
        g.addColorStop(0.7, `rgba(${i === 0 ? "0,229,255" : "123,47,255"},${0.04 - i * 0.008})`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(C, C, rr, 0, Math.PI * 2); ctx.fill();
      });

      // Core glow
      const cg = ctx.createRadialGradient(C, C, 0, C, C, 55);
      cg.addColorStop(0, "rgba(255,255,255,0.12)");
      cg.addColorStop(0.5, "rgba(0,229,255,0.08)");
      cg.addColorStop(1, "transparent");
      ctx.fillStyle = cg;
      ctx.beginPath(); ctx.arc(C, C, 55, 0, Math.PI * 2); ctx.fill();

      // Project nodes
      const vis = nodes.map((n) => {
        const ph = n.phi + t;
        const sx = Math.sin(n.theta) * Math.cos(ph);
        const sy = Math.cos(n.theta);
        const sz = Math.sin(n.theta) * Math.sin(ph);
        return { x: C + sx * n.r, y: C + sy * n.r * 0.68, z: sz, b: (sz + 1) / 2 };
      }).sort((a, b) => a.z - b.z);

      // Edges
      for (let i = 0; i < vis.length; i++) {
        for (let j = i + 1; j < vis.length; j++) {
          const d = Math.hypot(vis[i].x - vis[j].x, vis[i].y - vis[j].y);
          if (d < 52 && vis[i].z > -0.2 && vis[j].z > -0.2) {
            const a = 0.14 * vis[i].b * vis[j].b * (1 - d / 52);
            ctx.beginPath();
            ctx.moveTo(vis[i].x, vis[i].y);
            ctx.lineTo(vis[j].x, vis[j].y);
            ctx.strokeStyle = `rgba(0,229,255,${a})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Dots
      vis.forEach((v) => {
        if (v.z < -0.3) return;
        ctx.beginPath();
        ctx.arc(v.x, v.y, 1.2 + v.b * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${v.z > 0 ? "0,229,255" : "123,47,255"},${0.3 + v.b * 0.65})`;
        ctx.fill();
      });

      // Equatorial ring
      ctx.save();
      ctx.translate(C, C);
      ctx.scale(1, 0.27);
      const rg = ctx.createLinearGradient(-178, 0, 178, 0);
      rg.addColorStop(0, "transparent");
      rg.addColorStop(0.3, "rgba(0,229,255,0.22)");
      rg.addColorStop(0.7, "rgba(123,47,255,0.22)");
      rg.addColorStop(1, "transparent");
      ctx.strokeStyle = rg;
      ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.arc(0, 0, 182, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();

      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "460px", height: "460px", maxWidth: "100%" }}
    />
  );
}
