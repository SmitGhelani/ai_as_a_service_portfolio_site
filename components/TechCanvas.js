"use client";
import { useEffect, useRef } from "react";

export default function TechCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const SIZE = 460;
    canvas.width = canvas.height = SIZE;
    const C = SIZE / 2;
    let rafId, t = 0;

    const hexes = Array.from({ length: 18 }, () => ({
      angle: Math.random() * Math.PI * 2,
      speed: (Math.random() - 0.5) * 0.007,
      dist: [68, 138, 196][Math.floor(Math.random() * 3)],
      size: 16 + Math.random() * 14,
      pulse: Math.random() * Math.PI * 2,
      col: Math.random() > 0.5 ? "0,229,255" : "123,47,255",
    }));

    const hexPath = (x, y, s) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        ctx.lineTo(x + s * Math.cos(a), y + s * Math.sin(a));
      }
      ctx.closePath();
    };

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      t += 0.008;

      // Rings
      [68, 138, 196].forEach((r) => {
        ctx.beginPath(); ctx.arc(C, C, r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,229,255,0.05)"; ctx.lineWidth = 1; ctx.stroke();
      });

      // Core glow
      const cg = ctx.createRadialGradient(C, C, 0, C, C, 48);
      cg.addColorStop(0, "rgba(0,229,255,0.18)");
      cg.addColorStop(1, "transparent");
      ctx.fillStyle = cg;
      ctx.beginPath(); ctx.arc(C, C, 48, 0, Math.PI * 2); ctx.fill();

      // Center hex
      hexPath(C, C, 28);
      ctx.strokeStyle = "rgba(0,229,255,0.6)"; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = "rgba(0,229,255,0.06)"; ctx.fill();

      // Orbiting hexes
      hexes.forEach((h) => {
        h.angle += h.speed;
        const p = 0.5 + 0.5 * Math.sin(t * 1.4 + h.pulse);
        const x = C + h.dist * Math.cos(h.angle);
        const y = C + h.dist * Math.sin(h.angle) * 0.6;
        const a = 0.18 + p * 0.38;

        ctx.beginPath(); ctx.moveTo(C, C); ctx.lineTo(x, y);
        ctx.strokeStyle = `rgba(${h.col},${0.04 + p * 0.08})`; ctx.lineWidth = 0.7; ctx.stroke();

        hexPath(x, y, h.size);
        ctx.strokeStyle = `rgba(${h.col},${a})`; ctx.lineWidth = 1; ctx.stroke();

        const fg = ctx.createRadialGradient(x, y, 0, x, y, h.size);
        fg.addColorStop(0, `rgba(${h.col},${a * 0.3})`);
        fg.addColorStop(1, "transparent");
        ctx.fillStyle = fg; ctx.fill();
      });

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
