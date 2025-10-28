"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow({ size = 280, opacity = 0.18 }) {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const tgt = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (e: MouseEvent) => {
      tgt.current.x = e.clientX;
      tgt.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const loop = () => {
      // ease towards target
      pos.current.x += (tgt.current.x - pos.current.x) * 0.15;
      pos.current.y += (tgt.current.y - pos.current.y) * 0.15;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x - size / 2}px, ${pos.current.y - size / 2}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [size]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 -z-10 blur-3xl"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(16,185,129,1) 0%, rgba(16,185,129,0.25) 35%, rgba(0,0,0,0) 70%)",
        opacity,
        mixBlendMode: "screen",
      }}
    />
  );
}
