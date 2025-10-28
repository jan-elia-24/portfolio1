"use client";
import PageBg from "@/components/page-bg";
import Timeline from "@/components/timeline";
import { useCallback } from "react";

const experience = [
  {
    period: "2025 — Present",
    title: "Full-Stack Developer (Student Projects)",
    org: "Next.js, React, Angular, Node, C#, Java",
    location: "Remote • Sweden",
    bullets: [
      "Built dynamic portfolio with GitHub integration, case studies and SSR.",
      "Designed smooth UX: page transitions, cursor glow/trail, scroll reveal.",
      "Implemented email contact flow with Resend + toasts.",
    ],
  },
  {
    period: "2024 — 2025",
    title: "Java & JavaScript Studies",
    org: "Lernia YH – Systemutvecklare",
    location: "Distance (Piteå)",
    bullets: [
      "OOAD, REST, async JS, SSR, CI/CD, Mongo/SQL, testing.",
      "Group projects: ESC_HER, Kino, Wordle clone w/ highscores.",
    ],
  },
];

const education = [
  {
    period: "2024 — 2026",
    title: "Systemutvecklare Java & JavaScript (YH)",
    org: "Lernia",
    location: "SE",
    bullets: ["Focus: Next.js, Angular, Node, Java 24/25, testing & deployment."],
  },
];

const skills = [
  "Next.js", "React", "Angular", "Tailwind", "Node", "Express",
  "C#", ".NET", "Java 24/25", "REST", "MongoDB", "SQL", "Git/GitHub",
];

const jobExperience = [
  {
    period: "sep. 2023 - nu · 2 år 2 mån",
    title: "Superuser",
    org: "Health and Sports Nutrition Group AB",
    location: "Eskilstuna, Södermanlands län, Sverige",
    type: "Heltid",
  },
  {
    period: "maj 2019 - aug. 2023 · 4 år 4 mån",
    title: "Säljare/ Driftansvarig",
    org: "K-Rauta",
    location: "Uppsala, Uppsala län, Sverige", 
    type: "Heltid",
  },
];

export default function CVPage() {
  const onDownload = useCallback(() => {
    window.open("/cv/jan-elia-cv.pdf", "_blank");
  }, []);

  return (
    <>
      <PageBg src="/bg/cv.jpg" dim={0.6} />
      <section className="mx-auto max-w-5xl px-4 py-16 print:px-8 print:py-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <h1 className="text-4xl font-bold leading-tight">Jan Elia</h1>
            <p className="text-neutral-300 mt-1">
              Full-Stack Developer — Next.js, React, Angular, Node, C#, Java
            </p>
          </div>
          <button
            onClick={onDownload}
            className="self-start md:self-auto rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-neutral-100 backdrop-blur hover:border-emerald-400 hover:text-emerald-400 transition print:hidden"
            aria-label="Download CV as PDF"
          >
            ⬇️ Download PDF
          </button>
        </header>

        {/* Grid: Timeline + Sidebar */}
        <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,.8fr)] gap-10">
          <main className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold mb-4">Experience</h2>
              <Timeline items={experience} />
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              <Timeline items={education} />
            </section>
          </main>

          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            <section className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur p-4">
              <h3 className="font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-full border border-white/15 bg-neutral-900/60">
                    {s}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur p-4">
              <h3 className="font-semibold mb-3">Jobberfarenheter</h3>
              <div className="space-y-6">
                {jobExperience.map((job, index) => (
                  <div key={index} className="text-sm">
                    <div className="font-medium text-neutral-100">{job.title}</div>
                    <div className="text-neutral-400 mt-1">{job.org} · {job.type}</div>
                    <div className="text-xs text-neutral-500 mt-1">{job.period}</div>
                    <div className="text-xs text-neutral-500">{job.location}</div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </>
  );
}