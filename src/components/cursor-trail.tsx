"use client";
import { useEffect, useRef } from "react";

export default function CursorTrail({ count = 10 }: { count?: number }) {
  const dots = useRef<HTMLDivElement[]>([]);
  const pts = useRef<{ x: number; y: number }[]>(
    Array.from({ length: count }, () => ({ x: 0, y: 0 }))
  );
  const tgt = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      tgt.current.x = e.clientX;
      tgt.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      // ease head towards target
      pts.current[0].x += (tgt.current.x - pts.current[0].x) * 0.25;
      pts.current[0].y += (tgt.current.y - pts.current[0].y) * 0.25;

      // each dot follows the one before it
      for (let i = 1; i < pts.current.length; i++) {
        pts.current[i].x += (pts.current[i - 1].x - pts.current[i].x) * 0.25;
        pts.current[i].y += (pts.current[i - 1].y - pts.current[i].y) * 0.25;
      }

      // draw
      dots.current.forEach((el, i) => {
        const p = pts.current[i];
        const s = 10 - i * 0.7; // size taper
        el.style.transform = `translate3d(${p.x - s / 2}px, ${p.y - s / 2}px, 0)`;
        el.style.width = s + "px";
        el.style.height = s + "px";
        el.style.opacity = String(0.28 - i * 0.02);
      });

      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) dots.current[i] = el;
          }}
          className="rounded-full bg-emerald-400/80 shadow-[0_0_20px_rgba(16,185,129,0.45)] mix-blend-screen will-change-transform"
          style={{ position: "absolute", left: 0, top: 0 }}
          aria-hidden
        />
      ))}
    </div>
  );
}