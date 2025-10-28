"use client";
import PageBg from "@/components/page-bg";
import Timeline from "@/components/timeline";
import { useCallback } from "react";

const experience = [
  {
    period: "2025 — Present",
    title: "Full-Stack Developer (Portfolio & Open-Source)",
    org: "Next.js · React · Angular · Node · C# · Java",
    location: "Remote · Sweden",
    bullets: [
      "Built a dynamic portfolio with GitHub integration, case-studies, and SSR.",
      "Designed premium UX: page transitions, scroll reveal, cursor glow/trail, animated toasts.",
      "Implemented email flow with Resend; added SEO, sitemap, OG cards.",
    ],
  },
  {
    period: "2025",
    title: "BookBreeze – Book CRUD App with Auth",
    org: "Angular 20 · .NET 9 API · JWT · Bootstrap",
    location: "Project",
    bullets: [
      "Full-stack book management: create, edit, delete with JWT authentication.",
      "Separate 'My Quotes' view, dark mode, responsive navbar, and 404 page.",
      "Deployed frontend on Vercel, API on Render with in-memory storage.",
    ],
  },
  {
    period: "2025",
    title: "Kino – Cinema Site (SSR)",
    org: "Node.js · Pug · Integration tests",
    location: "Project",
    bullets: [
      "Server-rendered movie pages from API with dynamic routes and error handling.",
      "Wrote integration tests to verify titles and HTTP status for not-found pages.",
    ],
  },
  {
    period: "2025",
    title: "Wordle-Style Game (Full-Stack)",
    org: "React · Node/Express · MongoDB · EJS",
    location: "Project",
    bullets: [
      "Color-feedback engine, timer/attempts, and server-rendered high scores.",
      "Added deterministic tests by mocking word randomization.",
    ],
  },
  {
    period: "2025",
    title: "ESC_HER – Website Redesign",
    org: "Responsive UI · GitHub collaboration",
    location: "Group Project",
    bullets: [
      "Led code structure, animations, and accessibility tweaks across views.",
      "Improved desktop/mobile parity and content order as per stakeholder brief.",
    ],
  },
  {
    period: "2025",
    title: "Warehouse Product Manager (CRUD)",
    org: "Angular 20 · .NET 9 API",
    location: "Project",
    bullets: [
      "JWT-protected API, optimistic UI updates, and typed client models.",
      "Built CI-friendly structure and modular feature routing.",
    ],
  },
  {
    period: "2024 — 2025",
    title: "Java & JavaScript Studies",
    org: "Lernia YH – Systemutvecklare",
    location: "Distance (Piteå)",
    bullets: [
      "OOAD, REST, async JS, SSR, testing, Git/GitHub, CI/CD.",
      "Hands-on labs: DI container, logging, MySQL (Sakila) connectivity.",
    ],
  },
];

const education = [
  {
    period: "2024 — 2026 (expected)",
    title: "System Developer — Java & JavaScript",
    org: "Lernia Yrkeshögskola",
    location: "Sweden",
    bullets: [
      "Focus: Next.js/React, Angular, Node/Express, Java 24/25, databases, testing.",
      "Upcoming LIA (internship): Feb–May 2026 — open to full-stack roles.",
    ],
  },
];

const skills = [
  "Next.js", "React", "Angular", "Tailwind",
  "Node.js", "Express", "C#", ".NET 9",
  "Java 24/25", "REST APIs", "MongoDB", "SQL",
  "Testing", "Git/GitHub", "CI/CD",
];

const jobExperience = [
  {
    period: "Sep 2023 - Present · 2 yrs 2 mos",
    title: "Superuser",
    org: "Health and Sports Nutrition Group AB",
    location: "Eskilstuna, Sweden",
    type: "Full-time",
  },
  {
    period: "May 2019 - Aug 2023 · 4 yrs 4 mos", 
    title: "Sales / Operations Manager",
    org: "K-Rauta",
    location: "Uppsala, Sweden",
    type: "Full-time",
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
              <h3 className="font-semibold mb-3">Work Experience</h3>
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