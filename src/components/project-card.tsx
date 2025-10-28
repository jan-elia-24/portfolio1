import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-400/50 transition block p-4"
    >
      <h3 className="font-semibold text-lg">{p.title}</h3>
      <p className="text-sm text-neutral-300 mt-1">{p.blurb}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full border border-white/15"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
