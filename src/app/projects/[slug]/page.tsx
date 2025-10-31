import PageBg from "@/components/page-bg";
import Link from "next/link";
import { fetchRepo } from "@/lib/github";
import { notFound } from "next/navigation";
import BackToProjects from "@/components/back-to-projects";
import CaseToc from "@/components/case-toc";
import { formatLocalDate } from "@/lib/date";
import Image from "next/image";
import { projectContent, getDefaultContent } from "@/lib/project-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const title = `${slug} – Case Study`;
  return { title, description: `Case study for ${slug}` };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const repo = await fetchRepo("jan-elia-24", slug);
  if (!repo) return notFound();

  const content = projectContent[slug] || getDefaultContent(repo); 

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
            <span
              key={t}
              className="rounded-full border border-white/15 bg-black/30 px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4 text-sm">
          <Link
            href={repo.html_url}
            target="_blank"
            className="text-emerald-400 hover:underline"
          >
            GitHub ↗
          </Link>
          {repo.homepage && (
            <Link
              href={repo.homepage}
              target="_blank"
              className="text-emerald-400 hover:underline"
            >
              Live demo ↗
            </Link>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-400">
          <span>
            Last updated:{" "}
            {repo.pushed_at ? formatLocalDate(repo.pushed_at) : "—"}
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
          <BackToProjects />

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={`https://opengraph.githubassets.com/1/jan-elia-24/${repo.name}`}
              alt={`${repo.name} cover`}
              width={1200}
              height={630}
              sizes="(max-width: 768px) 100vw, 960px"
              className="w-full h-auto block"
            />
          </div>

          <section id="overview">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-neutral-300">
              {content.overview}
            </p>
          </section>

          <section id="role-stack">
            <h2 className="text-xl font-semibold">Role & Stack</h2>
            <ul className="mt-2 text-neutral-300 list-disc pl-5">
              <li>Role: {content.role}</li>
              <li>Stack: {content.stack.join(", ")}</li>
            </ul>
          </section>

          <section id="features">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <ul className="mt-2 text-neutral-300 list-disc pl-5">
              {content.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <section id="learnings">
            <h2 className="text-xl font-semibold">Challenges & Learnings</h2>
            <p className="mt-2 text-neutral-300">
              {content.learnings}
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}