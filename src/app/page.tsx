import HeroSplit from "@/components/hero-split";
import FeaturedCard from "@/components/featured-card";
import { featured } from "@/lib/featured-projects";

export default function HomePage() {
  return (
    <>
      <HeroSplit />

      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.slice(0, 6).map((p) => (
            <FeaturedCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-neutral-300">Form coming next.</p>
      </section>
    </>
  );
}
