"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mx = useRef(0), my = useRef(0);
  const rx = useRef(0), ry = useRef(0);

  useEffect(() => {
    const onMove = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    let rafId;
    const animRing = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + "px";
        ringRef.current.style.top = ry.current + "px";
      }
      rafId = requestAnimationFrame(animRing);
    };
    animRing();

    const grow = () => {
      if (!cursorRef.current || !ringRef.current) return;
      cursorRef.current.style.width = "20px";
      cursorRef.current.style.height = "20px";
      ringRef.current.style.width = "54px";
      ringRef.current.style.height = "54px";
      ringRef.current.style.borderColor = "rgba(0,229,255,0.8)";
    };
    const shrink = () => {
      if (!cursorRef.current || !ringRef.current) return;
      cursorRef.current.style.width = "10px";
      cursorRef.current.style.height = "10px";
      ringRef.current.style.width = "36px";
      ringRef.current.style.height = "36px";
      ringRef.current.style.borderColor = "rgba(0,229,255,0.5)";
    };

    const targets = document.querySelectorAll("a, button, .service-card, .tech-item, .testimonial-card");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
