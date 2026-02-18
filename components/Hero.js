"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Reveal from "./Reveal";

const OrbCanvas = dynamic(() => import("./OrbCanvas"), { ssr: false });

export default function Hero() {
  const statsRef = useRef(null);

  useEffect(() => {
    const runCounters = () => {
      document.querySelectorAll(".stat-num[data-target]").forEach((el) => {
        const target = +el.dataset.target;
        const suffix = el.dataset.suffix || "+";
        let cur = 0;
        const step = target / 55;
        const iv = setInterval(() => {
          cur = Math.min(cur + step, target);
          el.textContent = Math.floor(cur) + suffix;
          if (cur >= target) clearInterval(iv);
        }, 22);
      });
    };

    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { runCounters(); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "120px 60px 80px", overflow: "hidden", position: "relative", zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1200, width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
        className="hero-grid">
        <div>
          <Reveal>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "var(--accent)", marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 40, height: 1, background: "var(--accent)", display: "inline-block" }} />
              AI-Powered Solutions
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 style={{ fontSize: "clamp(40px,5vw,72px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: -2, marginBottom: 28 }}>
              Build The<br />
              <span className="gradient-text">Future With</span><br />
              Custom AI
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--muted)", fontFamily: "var(--font-mono)", marginBottom: 48, maxWidth: 460 }}>
              We craft bespoke artificial intelligence systems that transform business operations, automate complex workflows, and unlock competitive advantages at scale.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                Start Your Project
              </a>
              <a href="#services" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}>
                Explore Services
              </a>
            </div>
          </Reveal>

          {/* <Reveal delay={0.4}>
            <div ref={statsRef} style={{ display: "flex", gap: 40, marginTop: 56 }}>
              {[
                { target: 150, suffix: "+", label: "Projects Deployed" },
                { target: 98, suffix: "%", label: "Client Satisfaction" },
                { target: 40, suffix: "+", label: "AI Experts" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="stat-num" data-target={s.target} data-suffix={s.suffix}
                    style={{ fontSize: 38, fontWeight: 800, background: "linear-gradient(90deg,var(--accent),var(--accent2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    0{s.suffix}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: 2, textTransform: "uppercase", marginTop: 4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal> */}
        </div>

        <Reveal delay={0.2} className="hero-visual" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <OrbCanvas />
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
