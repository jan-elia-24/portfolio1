"use client";
import { useEffect, useRef } from "react";

const LIGHT_BG  = "radial-gradient(50% 50% at 50% 50%, rgba(219,242,223,1) 0%, rgba(219,242,223,0.25) 35%, rgba(0,0,0,0) 70%)";
const NORMAL_BG = "radial-gradient(50% 50% at 50% 50%, rgba(16,185,129,1) 0%, rgba(16,185,129,0.25) 35%, rgba(0,0,0,0) 70%)";
const LIGHT_SIZE    = 520;
const LIGHT_OPACITY = 0.38;

export default function CursorGlow({ size = 280, opacity = 0.18 }) {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const tgt = useRef({ x: 0, y: 0 });
  const curSize = useRef(size);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      tgt.current.x = e.clientX;
      tgt.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const activate = () => {
      curSize.current = LIGHT_SIZE;
      if (ref.current) {
        ref.current.style.background = LIGHT_BG;
        ref.current.style.width   = LIGHT_SIZE + "px";
        ref.current.style.height  = LIGHT_SIZE + "px";
        ref.current.style.opacity = String(LIGHT_OPACITY);
      }
    };

    const deactivate = () => {
      curSize.current = size;
      if (ref.current) {
        ref.current.style.background = NORMAL_BG;
        ref.current.style.width   = size + "px";
        ref.current.style.height  = size + "px";
        ref.current.style.opacity = String(opacity);
      }
    };

    window.addEventListener("light-transfer-start", activate);
    window.addEventListener("light-transfer-end",   deactivate);

    let raf = 0;
    const loop = () => {
      pos.current.x += (tgt.current.x - pos.current.x) * 0.15;
      pos.current.y += (tgt.current.y - pos.current.y) * 0.15;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x - curSize.current / 2}px, ${pos.current.y - curSize.current / 2}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("light-transfer-start", activate);
      window.removeEventListener("light-transfer-end",   deactivate);
    };
  }, [size, opacity]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[45] blur-3xl"
      style={{
        width: size,
        height: size,
        background: NORMAL_BG,
        opacity,
        mixBlendMode: "screen",
        transition: "width 1s ease, height 1s ease, opacity 1s ease, background 1s ease",
      }}
    />
  );
}
