"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{ padding: scrolled ? "13px 60px" : "22px 60px" }}>
        <div className="nav-logo">
          NEURALFORGE<span style={{ color: "#00e5ff" }}>.</span>
        </div>

        <ul className="nav-links">
          {["services", "about", "process", "tech", "testimonials", "pricing"].map((s) => (
            <li key={s}>
              <a href={`#${s}`} onClick={(e) => { e.preventDefault(); scrollTo(s); }}>
                {s}
              </a>
            </li>
          ))}
        </ul>

        <button className="nav-cta" onClick={() => scrollTo("contact")}>
          Get Started
        </button>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          style={{ position: "absolute", top: 26, right: 26, background: "none", border: "none", color: "var(--text)", fontSize: 26, cursor: "none" }}
          onClick={() => setMenuOpen(false)}
        >✕</button>
        {["services", "about", "process", "tech", "testimonials", "pricing", "contact"].map((s) => (
          <a key={s} href={`#${s}`} onClick={(e) => { e.preventDefault(); scrollTo(s); }}>
            {s}
          </a>
        ))}
      </div>
    </>
  );
}
