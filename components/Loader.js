"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2000);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, background: "var(--bg)", zIndex: 10000,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "opacity 0.6s, visibility 0.6s",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "Syne, sans-serif", fontSize: 26, fontWeight: 800,
            background: "linear-gradient(90deg,#00e5ff,#7b2fff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}
        >
          NEURALFORGE AI
        </div>
        <div className="loader-text" style={{ marginTop: 14 }}>INITIALIZING SYSTEMS</div>
        <div className="loader-bar-wrap">
          <div className="loader-bar" />
        </div>
      </div>
    </div>
  );
}
