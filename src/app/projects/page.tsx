import FeaturedCard from "@/components/featured-card";
import { featured } from "@/lib/featured-projects";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">All Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((p) => (
          <FeaturedCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}
