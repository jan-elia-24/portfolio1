import Link from "next/link";

type Repo = {
  title: string;
  blurb: string;
  repo: string;
  demo?: string;
  tags: string[];
  updated: string;
};

export default function RepoCard({ r }: { r: Repo }) {
  return (
    <div className="rounded-2xl border border-white/10 p-4 hover:border-emerald-400/50 transition">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-lg">{r.title}</h3>
        <Link href={r.repo} className="text-sm underline opacity-80 hover:opacity-100" target="_blank">
          GitHub →
        </Link>
      </div>
      <p className="text-sm text-neutral-300 mt-1 line-clamp-2">{r.blurb}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {r.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/15">
            {t}
          </span>
        ))}
      </div>
      {r.demo && (
        <div className="mt-3">
          <Link href={r.demo} target="_blank" className="text-sm underline opacity-80 hover:opacity-100">
            Demo
          </Link>
        </div>
      )}
    </div>
  );
}
