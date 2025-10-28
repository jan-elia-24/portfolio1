import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">Utvalda projekt</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Kontakt</h2>
        <p className="mt-2 text-neutral-300">Formulär kommer i nästa steg.</p>
      </section>
    </>
  );
}
