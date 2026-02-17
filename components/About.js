import dynamic from "next/dynamic";
import Reveal from "./Reveal";

const TechCanvas = dynamic(() => import("./TechCanvas"), { ssr: false });

const features = [
  { icon: "⚡", title: "Rapid Prototyping", desc: "From concept to working prototype in 2 weeks. Fast without sacrificing quality." },
  { icon: "🔒", title: "Enterprise Security", desc: "SOC2 compliant pipelines with on-premise deployment options for sensitive data." },
  { icon: "🌐", title: "Scalable Architecture", desc: "Cloud-native systems built to scale from 100 to 100M requests seamlessly." },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "120px 60px", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}
        className="about-grid">
        <Reveal>
          <div>
            <div className="section-tag-left">About NeuralForge</div>
            <h2 style={{ fontSize: "clamp(30px,4vw,54px)", fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.05 }}>
              We Don&apos;t Just Build AI.<br /><span className="gradient-text">We Build Advantage.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)", lineHeight: 1.8, marginBottom: 14, marginTop: 24 }}>
              Founded by ML engineers from Google, OpenAI, and DeepMind, NeuralForge AI bridges the gap between cutting-edge research and real-world business impact.
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)", lineHeight: 1.8, marginBottom: 14 }}>
              Every solution we deliver is custom-engineered for your specific use case, infrastructure, and data — never a generic off-the-shelf product wrapped in a new label.
            </p>

            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 16 }}>
              {features.map((f) => (
                <div key={f.title} className="feature-row">
                  <div style={{ width: 36, height: 36, border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0, color: "var(--accent)" }}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 5 }}>{f.title}</h4>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)", margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <TechCanvas />
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 1024px) { .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; } }
      `}</style>
    </section>
  );
}
