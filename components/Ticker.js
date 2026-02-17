const items = [
  "Machine Learning", "Natural Language Processing", "Computer Vision",
  "Generative AI", "Neural Networks", "Predictive Analytics",
  "AI Automation", "Deep Learning", "Reinforcement Learning",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
