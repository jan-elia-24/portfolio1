type Item = {
  title: string;
  org: string;
  period: string;
  details?: string;
};

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-s border-white/10 space-y-8 pl-6">
      {items.map((it) => (
        <li key={it.title + it.period} className="relative">
          <span className="absolute -left-[9px] top-1 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,.7)]" />
          <h3 className="text-lg font-semibold">{it.title}</h3>
          <p className="text-sm text-neutral-300">{it.org}</p>
          <p className="text-xs text-neutral-400 mt-1">{it.period}</p>
          {it.details && <p className="text-sm text-neutral-300 mt-2">{it.details}</p>}
        </li>
      ))}
    </ol>
  );
}
