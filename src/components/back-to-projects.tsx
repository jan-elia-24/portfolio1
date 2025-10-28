"use client";
import Link from "next/link";

export default function BackToProjects() {
  return (
    <div className="sticky top-16 z-10 mx-auto max-w-5xl px-4 py-3">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-neutral-200 backdrop-blur hover:border-emerald-400 hover:text-emerald-400 transition"
      >
        ← Back to Projects
      </Link>
    </div>
  );
}
