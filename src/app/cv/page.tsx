"use client";
import PageBg from "@/components/page-bg";
import Timeline from "@/components/timeline";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const experience = [
  {
    period: "2026",
    title: "Svea Byggpartner AB",
    org: "Next.js 15 · Tailwind CSS · Framer Motion",
    location: "Project · Company Website",
    bullets: [
      "Built a professional business website for a handcraft and carpentry company using Next.js 15 and Tailwind CSS.",
      "Implemented smooth animations and transitions with Framer Motion for an engaging user experience.",
      "Lightbox integration for project showcasing and contact functionality for job inquiries.",
    ],
  },
  {
    period: "2026",
    title: "Washify – Car Wash Booking System",
    org: "Next.js 15 · TypeScript · Supabase · Tailwind CSS",
    location: "Thesis Project",
    bullets: [
      "Developed a mobile-first car wash booking system as a final thesis project.",
      "Built with Next.js 15 and TypeScript, backed by Supabase for authentication and database management.",
      "Focused on clean UX and MVP-scoped feature set with scalability considerations for production.",
    ],
  },
  {
    period: "2026",
    title: "Artist Booking Site",
    org: "WordPress · Gutenberg · ACF · CPT UI · Ninja Forms",
    location: "LIA Internship @ Webbkompaniet",
    bullets: [
      "Built a custom artist booking site using the Frost FSE theme with tailored Gutenberg blocks (artist-list, artist-single).",
      "Managed custom post types and advanced fields via CPT UI and ACF for structured artist data.",
      "Integrated Ninja Forms for booking requests with iterative feedback from supervisor Daniel.",
    ],
  },
  {
    period: "2025",
    title: "Portfolio & Open-Source (Full-Stack Developer)",
    org: "Next.js · React  · Node · Tailwind · Resend",
    location: "Project",
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
    location: "Group Project",
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
    title: "Warehouse Product Manager (CRUD)",
    org: "Angular 20 · .NET 9 API",
    location: "Project",
    bullets: [
      "JWT-protected API, optimistic UI updates, and typed client models.",
      "Built CI-friendly structure and modular feature routing.",
    ],
  },
];

const education = [
  {
    period: "Aug 2024 — Jun 2026",
    title: "System Developer — Java & JavaScript",
    org: "Lernia Yrkeshögskola · Distance (Piteå)",
    location: "Sweden",
    bullets: [
      "Focus: Next.js/React, Angular, Node/Express, Java, Spring Boot, Hibernate, databases, testing.",
      "LIA (internship): Feb–May 2026 — completed in WordPress development.",
    ],
  },
];

const skills = [
  "Java 24/25", "Spring Boot", "Spring Security", "JPA/Hibernate",
  "JUnit", "Mockito", "Maven",
  "Next.js", "React", "Angular", "Tailwind",
  "Node.js", "Express", "C#", ".NET 9",
  "REST APIs", "MongoDB", "SQL", "MySQL", "Flyway",
  "Docker", "Git/GitHub", "CI/CD",
];

function calcDuration(start: Date, end?: Date) {
  const to = end ?? new Date();
  const totalMonths =
    (to.getFullYear() - start.getFullYear()) * 12 + (to.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ");
}

const jobExperience = [
  {
    start: new Date(2023, 8),
    end: undefined,
    startLabel: "Sep 2023",
    endLabel: "Present",
    title: "Superuser",
    org: "Health and Sports Nutrition Group AB",
    location: "Eskilstuna, Sweden",
    type: "Full-time",
  },
  {
    start: new Date(2019, 4),
    end: new Date(2023, 7),
    startLabel: "May 2019",
    endLabel: "Aug 2023",
    title: "Sales / Operations Manager",
    org: "K-Rauta",
    location: "Uppsala, Sweden",
    type: "Full-time",
  },
];

export default function CVPage() {
  const onDownload = useCallback(() => {
    window.open("/cv/CV Jan Elia.pdf", "_blank");
  }, []);
  const [hoveredExpYear, setHoveredExpYear] = useState<string | null>(null);
  const [pdfOpen, setPdfOpen] = useState(false);
  const experienceHovered = hoveredExpYear !== null;
  const [educationHovered, setEducationHovered] = useState(false);
  const [openYears, setOpenYears] = useState<Record<string, boolean>>({});

  const toggleYear = (year: string) =>
    setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));

  const years = [...new Set(experience.map((e) => e.period.slice(0, 4)))].sort(
    (a, b) => Number(b) - Number(a)
  );
  const latestYear = years[0];
  const olderYears = years.slice(1);

  return (
    <>
      <AnimatePresence>
        {(experienceHovered || educationHovered) && (
          <motion.div
            key="exp-backdrop"
            className="fixed inset-0 z-40 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ backdropFilter: "blur(4px)", background: "rgba(0,0,0,0.35)" }}
          />
        )}
      </AnimatePresence>
      <PageBg src="/bg/cv.jpg" dim={0.6} />
      <main id="main" className="mx-auto max-w-5xl px-4 py-16 print:px-8 print:py-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <h1 className="cv-name font-display text-5xl font-bold leading-tight tracking-wide">Jan Elia</h1>
            <p className="text-neutral-300 mt-1">
              Full-Stack Developer — Java · JavaScript · .NET · SQL · WordPress
            </p>
          </div>
          <button
            onClick={() => setPdfOpen(true)}
            className="btn-cv-shimmer self-start md:self-auto rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-neutral-100 backdrop-blur hover:border-emerald-400 hover:text-emerald-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95 transition-all duration-200 print:hidden"
          >
            View Full CV →
          </button>
        </header>

        {/* Grid: Timeline + Sidebar */}
        <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,.8fr)] gap-10">
          <div className="space-y-10 relative z-50">
            <section
              className="transition-all duration-300"
              style={{
                filter: educationHovered ? "blur(2px)" : "none",
                opacity: educationHovered ? 0.4 : 1,
              }}
            >
              <h2 className="text-xl font-semibold mb-4">Experience</h2>
              <Timeline
                items={experience.filter((e) => e.period.startsWith(latestYear))}
                onHoverChange={(h) => setHoveredExpYear(h ? latestYear : null)}
                dimmed={educationHovered || (hoveredExpYear !== null && hoveredExpYear !== latestYear)}
              />
              {olderYears.map((year) => (
                <div key={year} className="mt-6">
                  <button
                    onClick={() => toggleYear(year)}
                    className="flex items-center gap-3 w-full group mb-4"
                  >
                    <span className="h-px flex-1 bg-white/10 group-hover:bg-emerald-400/20 transition-colors duration-300" />
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-400/40 bg-emerald-400/5 text-xs font-semibold text-emerald-300 group-hover:border-emerald-400 group-hover:bg-emerald-400/10 group-hover:text-emerald-400 transition-all duration-300">
                      {year}
                      <motion.span
                        animate={{ rotate: openYears[year] ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="inline-block"
                      >
                        ↓
                      </motion.span>
                    </span>
                    <span className="h-px flex-1 bg-white/10 group-hover:bg-emerald-400/20 transition-colors duration-300" />
                  </button>
                  <AnimatePresence initial={false}>
                    {openYears[year] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ overflowX: "visible", overflowY: "hidden" }}
                      >
                        <Timeline
                          items={experience.filter((e) => e.period.startsWith(year))}
                          onHoverChange={(h) => setHoveredExpYear(h ? year : null)}
                          dimmed={educationHovered || (hoveredExpYear !== null && hoveredExpYear !== year)}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </section>

            <section
              className="transition-all duration-300"
              style={{
                filter: experienceHovered ? "blur(2px)" : "none",
                opacity: experienceHovered ? 0.4 : 1,
              }}
            >
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              <Timeline items={education} onHoverChange={setEducationHovered} dimmed={experienceHovered} />
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            <section className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur p-4">
              <h3 className="font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-full border border-white/15 bg-neutral-900/60 transition-all duration-200 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300 cursor-default">
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
                    <div className="text-xs text-neutral-500 mt-1">
                      {job.startLabel} - {job.endLabel} · {calcDuration(job.start, job.end)}
                    </div>
                    <div className="text-xs text-neutral-500">{job.location}</div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>

      {/* CV Document Modal */}
      <AnimatePresence>
        {pdfOpen && (
          <>
            <motion.div
              key="cv-backdrop"
              className="fixed inset-0 z-[60] pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.7)" }}
              onClick={() => setPdfOpen(false)}
            />

            <motion.div
              key="cv-doc"
              className="fixed z-[61] inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 top-[4vh] bottom-[4vh] md:w-[680px] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Doc toolbar */}
              <div className="flex items-center justify-between px-5 py-3 shrink-0 border-b border-white/10" style={{ background: "rgba(10,10,10,0.7)", backdropFilter: "blur(12px)" }}>
                <span className="logo-link font-logo text-lg">
                  <span className="text-white">Jan</span><span className="logo-elia">Elia</span>
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="/cv/CV Jan Elia.pdf"
                    download
                    className="flex items-center gap-1.5 rounded-lg border border-emerald-400/40 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-300 hover:text-emerald-200 px-3 py-1.5 text-xs font-medium transition"
                  >
                    ⬇️ Download PDF
                  </a>
                  <button
                    onClick={() => setPdfOpen(false)}
                    className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-neutral-400 hover:text-white hover:border-white/30 transition"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* PDF */}
              <iframe
                src="/cv/CV Jan Elia.pdf#navpanes=0&toolbar=0"
                className="flex-1 w-full"
                title="Jan Elia CV"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}