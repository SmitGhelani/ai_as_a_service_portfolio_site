import Reveal from "./Reveal";

const services = [
  { num: "01", icon: "🧠", title: "Custom LLM Solutions", desc: "Fine-tuned large language models trained on your domain data for intelligent document processing, customer service, and content generation at scale.", tag: "NLP · LLM · RAG" },
  { num: "02", icon: "👁️", title: "Computer Vision Systems", desc: "Real-time image recognition, object detection, quality inspection, and visual intelligence pipelines for manufacturing, retail, and healthcare.", tag: "Vision · CNN · YOLO" },
  { num: "03", icon: "📈", title: "Predictive Analytics", desc: "Data-driven forecasting models that predict demand, churn, revenue, and operational anomalies before they impact your business performance.", tag: "ML · Forecasting" },
  { num: "04", icon: "🤖", title: "AI Automation Agents", desc: "Autonomous AI agents that handle complex multi-step workflows, data extraction, research tasks, and end-to-end business process automation.", tag: "Agents · RPA · AI" },
  { num: "05", icon: "💬", title: "Conversational AI", desc: "Enterprise chatbots and voice assistants that understand context deeply, integrate with your systems, and deliver consistently accurate responses.", tag: "Chatbot · Voice · NLU" },
  { num: "06", icon: "🔬", title: "AI Strategy Consulting", desc: "End-to-end AI roadmapping, technology selection, team training, and implementation guidance for organizations at any stage of AI maturity.", tag: "Strategy · MLOps" },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "120px 60px", position: "relative", zIndex: 1 }}>
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <div className="section-tag">What We Build</div>
          <h2 style={{ fontSize: "clamp(30px,4vw,54px)", fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.05 }}>
            AI Solutions That<br /><span className="gradient-text">Actually Work</span>
          </h2>
          <p style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 13, marginTop: 16, maxWidth: 520, marginLeft: "auto", marginRight: "auto", lineHeight: 1.65 }}>
            From prototype to production — enterprise-grade AI tailored to your exact needs and business goals.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, maxWidth: 1200, margin: "0 auto", border: "1px solid var(--border)" }}
          className="services-grid-responsive">
          {services.map((s) => (
            <div key={s.num} className="service-card">
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)", letterSpacing: 2, marginBottom: 24 }}>{s.num}</div>
              <span className="service-icon">{s.icon}</span>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 12, letterSpacing: -0.3 }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", lineHeight: 1.75 }}>{s.desc}</p>
              <span className="service-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 1024px) { .services-grid-responsive { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 768px) { .services-grid-responsive { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
