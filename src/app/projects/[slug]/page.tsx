import PageBg from "@/components/page-bg";
import Link from "next/link";
import { fetchRepo } from "@/lib/github";
import { notFound } from "next/navigation";

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

      <header className="mx-auto max-w-5xl px-4 pt-20 pb-10">
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
      </header>

      <section className="mx-auto max-w-5xl px-4 pb-20 grid gap-10">
        {/* Hero cover placeholder */}
        <div className="aspect-video rounded-2xl border border-white/10 bg-neutral-900/40" />

        {/* Case sections */}
        <section>
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-2 text-neutral-300">
            Brief summary of the project goal, target users, and outcome.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Role & Stack</h2>
          <ul className="mt-2 text-neutral-300 list-disc pl-5">
            <li>Role: Developer / Designer</li>
            <li>Stack: Next.js, React, Tailwind, Node, C#, Java (adapt per project)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Key Features</h2>
          <ul className="mt-2 text-neutral-300 list-disc pl-5">
            <li>Feature 1 — short description</li>
            <li>Feature 2 — short description</li>
            <li>Feature 3 — short description</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Challenges & Learnings</h2>
          <p className="mt-2 text-neutral-300">
            What was tricky? How did you solve it? What did you learn?
          </p>
        </section>
      </section>
    </article>
  );
}
