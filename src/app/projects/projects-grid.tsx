import FeaturedCard from "@/components/featured-card";
import { fetchRepos } from "@/lib/github";

export default async function ProjectsGrid() {
  try {
    const items = await fetchRepos("jan-elia-24", 12);
    if (!items || items.length === 0) return <div>No projects found</div>;

    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((p) => (
          <FeaturedCard key={p.slug} p={p} />
        ))}
      </div>
    );
  } catch (error) {
    return <div>Failed to load projects</div>;
  }
}
