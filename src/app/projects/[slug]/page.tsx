import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featured } from "@/lib/featured-projects";

type Props = {
  params: { slug: string };
};

export default function ProjectPage({ params }: Props) {
  const project = featured.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <article className="relative">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={project.cover || "/placeholder.jpg"}
          alt={project.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-black/20" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-4">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-neutral-300 leading-relaxed text-lg">
          {project.blurb}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href={project.repo}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-medium hover:bg-emerald-400"
          >
            GitHub ↗
          </Link>
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="px-4 py-2 rounded-xl border border-white/15 hover:bg-white/10"
            >
              Live Demo ↗
            </Link>
          )}
        </div>
      </section>
    </article>
  );
}
