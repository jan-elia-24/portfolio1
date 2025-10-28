"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function HeroSplit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50); // percentage 0–100
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) setFromClientX(e.clientX); };
    const onTouch = (e: TouchEvent) => { if (dragging.current) setFromClientX(e.touches[0].clientX); };
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [setFromClientX]);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(16,185,129,0.20),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-12 md:pt-28 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Split preview */}
        <div
          ref={containerRef}
          className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 select-none"
          onMouseDown={(e) => { dragging.current = true; setFromClientX(e.clientX); }}
          onTouchStart={(e) => { dragging.current = true; setFromClientX(e.touches[0].clientX); }}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
            if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
          }}
        >
          {/* Base (Coder) */}
          <Image
            src="/me-coder.jpg" // add your image later
            alt="Coder"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay (Designer) clipped by pos */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}
          >
            <Image
              src="/me-designer.jpg" // add your image later
              alt="Designer"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Divider + handle */}
          <div
            className="absolute top-0 bottom-0 w-px bg-white/60"
            style={{ left: `${pos}%`, transform: "translateX(-0.5px)" }}
          />
          <button
            aria-label="Drag to compare"
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full border border-white/30 bg-black/40 backdrop-blur flex items-center justify-center"
            style={{ left: `${pos}%` }}
            onMouseDown={(e) => { e.preventDefault(); dragging.current = true; }}
            onTouchStart={(e) => { e.preventDefault(); dragging.current = true; }}
          >
            ↔
          </button>
        </div>

        {/* Text + CTAs */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Designer <span className="text-emerald-400">&lt;/&gt;</span> Coder
          </h1>
          <p className="mt-4 text-neutral-300 max-w-prose">
            Fueled by curiosity and clean design, I craft modern experiences with Next.js, React, Angular, Node, C#, and Java — turning ideas into smooth, powerful web apps.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/projects" className="px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-medium">
              View Projects
            </Link>
            <Link href="#contact" className="px-5 py-2.5 rounded-xl border border-white/15">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
