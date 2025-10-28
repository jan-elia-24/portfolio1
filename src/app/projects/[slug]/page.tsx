import PageBg from "@/components/page-bg";
import Link from "next/link";
import { fetchRepo } from "@/lib/github";
import { notFound } from "next/navigation";
import BackToProjects from "@/components/back-to-projects";
import CaseToc from "@/components/case-toc";
import { formatLocalDate } from "@/lib/date";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  const title = `${params.slug} – Case Study`;
  return { title, description: `Case study for ${params.slug}` };
}

export default async function ProjectDetail({ params }: Props) {
  const repo = await fetchRepo("jan-elia-24", params.slug);
  if (!repo) return notFound();

  return (
    <article className="relative">
      <PageBg src="/bg/project-detail.jpg" dim={0.6} />

      <header className="mx-auto max-w-5xl px-4 pt-20 pb-8">
        <h1 className="text-4xl font-bold">{repo.name}</h1>
        <p className="mt-2 text-neutral-300 max-w-2xl">
          {repo.description || "No description provided."}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {repo.language && (
            <span className="rounded-full border border-white/15 bg-black/30 px-2 py-1">
              {repo.language}
            </span>
          )}
          {(repo.topics || []).map((t: string) => (
            <span key={t} className="rounded-full border border-white/15 bg-black/30 px-2 py-1">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4 text-sm">
          <Link href={repo.html_url} target="_blank" className="text-emerald-400 hover:underline">
            GitHub ↗
          </Link>
          {repo.homepage && (
            <Link href={repo.homepage} target="_blank" className="text-emerald-400 hover:underline">
              Live demo ↗
            </Link>
          )}
        </div>

        {/* Last updated and Edit on GitHub */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-400">
          <span>
            Last updated: {repo.pushed_at ? formatLocalDate(repo.pushed_at) : "—"}
          </span>

          <span className="opacity-30">•</span>

          <a
            href={`https://github.com/jan-elia-24/${repo.name}/edit/main/README.md`}
            target="_blank"
            className="text-emerald-400 hover:underline"
          >
            Edit README on GitHub ↗
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pb-20 grid lg:grid-cols-[1fr_minmax(0,1.6fr)] gap-8">
        <CaseToc />

        <div className="grid gap-10">
          {/* Back button and Hero cover */}
          <BackToProjects />
          
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={`https://opengraph.githubassets.com/1/jan-elia-24/${repo.name}`}
              alt={`${repo.name} cover`}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>

          <section id="overview">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-neutral-300">
              Brief summary of the project goal, target users, and outcome.
            </p>
          </section>

          <section id="role-stack">
            <h2 className="text-xl font-semibold">Role & Stack</h2>
            <ul className="mt-2 text-neutral-300 list-disc pl-5">
              <li>Role: Developer / Designer</li>
              <li>Stack: Next.js, React, Tailwind, Node, C#, Java (adapt per project)</li>
            </ul>
          </section>

          <section id="features">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <ul className="mt-2 text-neutral-300 list-disc pl-5">
              <li>Feature 1 — short description</li>
              <li>Feature 2 — short description</li>
              <li>Feature 3 — short description</li>
            </ul>
          </section>

          <section id="learnings">
            <h2 className="text-xl font-semibold">Challenges & Learnings</h2>
            <p className="mt-2 text-neutral-300">
              What was tricky? How did you solve it? What did you learn?
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}