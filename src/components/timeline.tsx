"use client";
type Item = {
  period: string;
  title: string;
  org: string;
  location?: string;
  bullets?: string[];
};
export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-s border-white/10 pl-6 space-y-8">
      {items.map((it, i) => (
        <li key={i} className="group">
          <span className="absolute -left-[9px] top-1.5 size-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,.6)]" />
          <div>
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <div className="text-sm text-neutral-400 mt-1">{it.org}</div>
          </div>
          <div className="mt-1 text-sm text-neutral-400">
            <span>{it.period}</span>
            {it.location ? <span className="mx-2 opacity-40">•</span> : null}
            {it.location}
          </div>
          {!!it.bullets?.length && (
            <ul className="mt-3 space-y-1.5 text-neutral-300 text-sm">
              {it.bullets.map((b, j) => (
                <li key={j} className="leading-relaxed">• {b}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}