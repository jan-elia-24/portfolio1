"use client";
import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "role-stack", label: "Role & Stack" },
  { id: "features", label: "Key Features" },
  { id: "learnings", label: "Challenges & Learnings" },
];

export default function CaseToc() {
  const [active, setActive] = useState<string>("overview");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        // pick the most visible section
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <aside className="hidden lg:block sticky top-24 self-start w-56">
      <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur p-3">
        <p className="text-sm mb-2 text-neutral-400">On this page</p>
        <nav className="flex flex-col gap-1">
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-2 py-1 rounded text-sm transition ${
                active === s.id
                  ? "text-emerald-400 bg-white/5"
                  : "text-neutral-300 hover:text-emerald-300"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}