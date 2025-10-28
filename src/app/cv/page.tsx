import Link from "next/link";
import Timeline from "@/components/timeline";

export const metadata = {
  title: "CV – Jan Elia",
};

export default function CVPage() {
  const experience = [
    {
      title: "Full-Stack Developer (Student Projects)",
      org: "Next.js, Node, Java",
      period: "2024–2025",
      details: "Built production-like apps: booking systems, SSR sites, APIs, test automation.",
    },
    {
      title: "Java & JavaScript Program",
      org: "Lernia YH (Distance Campus Piteå)",
      period: "2024–2026",
      details: "Focus on modern web, Java backend, databases, CI/CD, testing.",
    },
  ];

  const education = [
    {
      title: "System Developer – Java & JavaScript",
      org: "Lernia YH",
      period: "2024–2026",
    },
  ];

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <header className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Curriculum Vitae</h1>
        <Link
          href="/cv/jan-elia-cv.pdf"
          target="_blank"
          className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-medium hover:bg-emerald-400"
        >
          Download PDF
        </Link>
      </header>

      <div className="mt-10 grid md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <Timeline items={experience} />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <Timeline items={education} />
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["Next.js", "React", "TypeScript", "Node.js", "Express", "Java", "MongoDB", "PostgreSQL", "Tailwind", "Git/GitHub"].map(s => (
            <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-white/15 bg-black/30 backdrop-blur">
              {s}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}
