"use client";
import Reveal from "./Reveal";

const steps = [
  { num: "01", title: "Discovery", desc: "Deep-dive into your business goals, data landscape, and constraints to define the right AI approach for maximum impact." },
  { num: "02", title: "Design & Prototype", desc: "Architecture design, model selection, and rapid prototyping to validate feasibility and hit your performance targets early." },
  { num: "03", title: "Build & Train", desc: "Full-cycle development — data pipelines, model training, evaluation, optimization, and robust API integration." },
  { num: "04", title: "Deploy & Monitor", desc: "Production launch with CI/CD pipelines, performance monitoring, drift detection, and continuous model improvement." },
];

export function Process() {
  return (
    <section id="process" style={{ padding: "120px 60px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="section-tag">How We Work</div>
            <h2 style={{ fontSize: "clamp(30px,4vw,54px)", fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.05 }}>
              From Idea To<br /><span className="gradient-text">Intelligent System</span>
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, position: "relative" }}
          className="process-grid">
          <div style={{ position: "absolute", top: 35, left: "12%", width: "76%", height: 1, background: "linear-gradient(90deg,transparent,var(--accent),var(--accent2),transparent)", zIndex: 0 }}
            className="process-line" />
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div className="process-step" style={{ padding: "0 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
                <div className="step-num">{s.num}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .process-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; } .process-line { display: none; } }
        @media (max-width: 768px) { .process-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
const techs = [
  { logo: "🔥", name: "PyTorch" }, { logo: "🌊", name: "TensorFlow" },
  { logo: "🤗", name: "Hugging Face" }, { logo: "⚡", name: "LangChain" },
  { logo: "🔮", name: "OpenAI API" }, { logo: "🧬", name: "Anthropic" },
  { logo: "☁️", name: "AWS SageMaker" }, { logo: "🌐", name: "Azure ML" },
  { logo: "📊", name: "MLflow" }, { logo: "🐳", name: "Docker / K8s" },
  { logo: "🗄️", name: "Pinecone" }, { logo: "🐍", name: "Python" },
];

export function TechStack() {
  return (
    <section id="tech" style={{ padding: "120px 60px", background: "var(--surface)", borderTop: "1px solid var(--border)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div className="section-tag">Our Stack</div>
            <h2 style={{ fontSize: "clamp(30px,4vw,54px)", fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.05 }}>
              Built With The Best<br /><span className="gradient-text">AI Technologies</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 2 }} className="tech-grid-responsive">
            {techs.map((t) => (
              <div key={t.name} className="tech-item">
                <span className="tech-logo">{t.logo}</span>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: 1, textTransform: "uppercase" }}>{t.name}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 1024px) { .tech-grid-responsive { grid-template-columns: repeat(4,1fr) !important; } }
        @media (max-width: 768px) { .tech-grid-responsive { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
const testimonials = [
  { stars: "★★★★★", quote: "NeuralForge built us a document intelligence system that processes 10,000 contracts daily. What used to take a team of 20 lawyers now takes minutes. Genuinely transformative.", initials: "SM", name: "Sarah Mitchell", role: "CTO · LexBridge Legal Group" },
  { stars: "★★★★★", quote: "Our predictive maintenance AI reduced downtime by 67% across all manufacturing plants. The ROI in the first 6 months paid for the entire project three times over.", initials: "DR", name: "David Reeves", role: "VP Operations · IndusTech Global" },
  { stars: "★★★★★", quote: "The custom RAG chatbot handles 85% of our support tickets automatically with a 94% satisfaction score. Our team now focuses only on complex, high-value cases.", initials: "AK", name: "Aisha Kamara", role: "Head of Product · FinFlow SaaS" },
];

export function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "120px 60px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div className="section-tag">Client Stories</div>
            <h2 style={{ fontSize: "clamp(30px,4vw,54px)", fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.05 }}>
              Trusted By Industry<br /><span className="gradient-text">Leaders Worldwide</span>
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="testi-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="testimonial-card">
                <div style={{ color: "#ffd700", fontSize: 13, marginBottom: 18, letterSpacing: 2 }}>{t.stars}</div>
                <blockquote style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", lineHeight: 1.85, marginBottom: 24, fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg,var(--accent),var(--accent2))", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 15, color: "#000", flexShrink: 0 }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .testi-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 768px) { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
const plans = [
  {
    name: "Starter", price: "$4,999", desc: "Perfect for startups and SMEs exploring AI for the first time.", featured: false,
    features: [
      { text: "Single AI model deployment", yes: true },
      { text: "Up to 100K API calls/month", yes: true },
      { text: "REST API integration", yes: true },
      { text: "4 weeks delivery timeline", yes: true },
      { text: "30-day post-launch support", yes: true },
      { text: "Custom model fine-tuning", yes: false },
      { text: "On-premise deployment", yes: false },
    ],
  },
  {
    name: "Professional", price: "$14,999", desc: "For growth-stage companies needing production-grade AI systems.", featured: true,
    features: [
      { text: "Multi-model AI pipeline", yes: true },
      { text: "Unlimited API calls", yes: true },
      { text: "Custom fine-tuning included", yes: true },
      { text: "6 weeks delivery timeline", yes: true },
      { text: "90-day dedicated support", yes: true },
      { text: "MLOps & monitoring setup", yes: true },
      { text: "On-premise deployment", yes: false },
    ],
  },
  {
    name: "Enterprise", price: "Custom", desc: "Bespoke AI transformation for large organizations with complex needs.", featured: false,
    features: [
      { text: "Full AI ecosystem buildout", yes: true },
      { text: "On-premise or private cloud", yes: true },
      { text: "Custom model development", yes: true },
      { text: "Dedicated AI team embedded", yes: true },
      { text: "12-month SLA support", yes: true },
      { text: "Team training & workshops", yes: true },
      { text: "Compliance & audit support", yes: true },
    ],
  },
];

export function Pricing() {
  const scrollContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" style={{ padding: "120px 60px", background: "var(--surface)", borderTop: "1px solid var(--border)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="section-tag">Investment</div>
            <h2 style={{ fontSize: "clamp(30px,4vw,54px)", fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.05 }}>
              Transparent Pricing.<br /><span className="gradient-text">Real ROI.</span>
            </h2>
            <p style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 13, marginTop: 16, maxWidth: 520, marginLeft: "auto", marginRight: "auto", lineHeight: 1.65 }}>
              All plans include dedicated AI engineering, deployment support, and post-launch monitoring.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }} className="pricing-grid-resp">
            {plans.map((p) => (
              <div key={p.name} className={`pricing-card ${p.featured ? "featured" : ""}`}>
                {p.featured && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(90deg,var(--accent),var(--accent2))", color: "#000", fontFamily: "var(--font-mono)", fontSize: 10, padding: "4px 16px", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 18 }}>{p.name}</div>
                <div style={{ fontSize: p.price === "Custom" ? 34 : 48, fontWeight: 800, letterSpacing: -2, marginBottom: 8, marginTop: p.price === "Custom" ? 8 : 0 }}>
                  {p.price !== "Custom" && <span style={{ fontSize: 18, fontWeight: 400, color: "var(--muted)", verticalAlign: "top", marginTop: 8, display: "inline-block" }}>$</span>}
                  {p.price === "Custom" ? "Custom" : p.price.slice(1)}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid var(--border)" }}>{p.desc}</div>
                <ul className="plan-features" style={{ listStyle: "none", marginBottom: 36 }}>
                  {p.features.map((f) => (
                    <li key={f.text} className={f.yes ? "" : "no"}>{f.text}</li>
                  ))}
                </ul>
                {p.featured ? (
                  <button className="btn-primary" style={{ width: "100%", justifyContent: "center", border: "none" }} onClick={scrollContact}>Get Started</button>
                ) : (
                  <button className="btn-outline" style={{ width: "100%", textAlign: "center" }} onClick={scrollContact}>
                    {p.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 1024px) { .pricing-grid-resp { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
export function Contact() {
  return (
    <section id="contact" style={{ padding: "120px 60px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100 }}
        className="contact-grid">
        <Reveal>
          <div>
            <div className="section-tag-left">Get In Touch</div>
            <h2 style={{ fontSize: "clamp(30px,4vw,54px)", fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.05 }}>
              Let&apos;s Build Your<br /><span className="gradient-text">AI Solution</span>
            </h2>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)", lineHeight: 1.75, marginBottom: 36, marginTop: 24 }}>
              Tell us about your project and we&apos;ll schedule a free 30-minute consultation to explore how AI can drive real, measurable business value.
            </p>
            {[
              { icon: "📧", label: "Email", val: "hello@neuralforge.ai" },
              { icon: "📞", label: "Phone", val: "+1 (415) 000-0000" },
              { icon: "📍", label: "Headquarters", val: "San Francisco, CA · Remote Global" },
            ].map((c) => (
              <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 20 }}>
                <div style={{ width: 38, height: 38, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 3 }}>{c.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: 2, textTransform: "uppercase" }}>First Name</label>
                <input className="form-input" type="text" placeholder="John" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: 2, textTransform: "uppercase" }}>Last Name</label>
                <input className="form-input" type="text" placeholder="Doe" />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: 2, textTransform: "uppercase" }}>Email Address</label>
              <input className="form-input" type="email" placeholder="john@company.com" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: 2, textTransform: "uppercase" }}>Company</label>
              <input className="form-input" type="text" placeholder="Your Company Inc." />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: 2, textTransform: "uppercase" }}>Service Interested In</label>
              <select className="form-input">
                <option value="">Select a service...</option>
                {["Custom LLM Solutions", "Computer Vision Systems", "Predictive Analytics", "AI Automation Agents", "Conversational AI", "AI Strategy Consulting"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: 2, textTransform: "uppercase" }}>Tell us about your project</label>
              <textarea className="form-input" placeholder="Describe your use case, challenges, and goals..." style={{ height: 130, resize: "vertical" }} />
            </div>
            <button className="btn-primary" type="submit" style={{ width: "100%", justifyContent: "center" }}>
              Send Message →
            </button>
          </form>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 1024px) { .contact-grid { grid-template-columns: 1fr !important; gap: 60px !important; } }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "80px 60px 36px", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid var(--border)" }}
          className="footer-grid">
          <div>
            <span style={{ fontSize: 22, fontWeight: 800, background: "linear-gradient(90deg,var(--accent),var(--accent2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 14, display: "block" }}>
              NEURALFORGE<span style={{ WebkitTextFillColor: "#00e5ff" }}>.</span>
            </span>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", lineHeight: 1.75, marginBottom: 22 }}>
              Building the next generation of AI systems that transform how businesses operate.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["𝕏", "in", "gh", "yt"].map((s) => (
                <a key={s} href="#" className="social-btn">{s}</a>
              ))}
            </div>
          </div>

          {[
            { title: "Services", links: ["LLM Solutions", "Computer Vision", "Predictive Analytics", "AI Agents", "Conversational AI", "AI Consulting"] },
            { title: "Company", links: ["About Us", "Our Team", "Careers", "Blog", "Case Studies", "Press"] },
            { title: "Resources", links: ["Documentation", "API Reference", "Whitepapers", "AI Research", "Privacy Policy", "Terms of Service"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--accent)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 18 }}>{col.title}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <li key={l}><a href="#" style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", textDecoration: "none" }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className="footer-bottom-resp">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)" }}>© 2025 NeuralForge AI Inc. All rights reserved.</p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)" }}>Made with intelligence. Powered by innovation.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; } .footer-bottom-resp { flex-direction: column; gap: 10px; text-align: center; } }
      `}</style>
    </footer>
  );
}
