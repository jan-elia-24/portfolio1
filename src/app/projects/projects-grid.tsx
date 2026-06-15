import FeaturedCard from "@/components/featured-card";
import { fetchRepos } from "@/lib/github";

export default async function ProjectsGrid() {
  try {
    const all = await fetchRepos("jan-elia-24", 20);
    if (!all || all.length === 0) return <div>No projects found</div>;

    const items = all.slice(0, 9);

    return (
      <div className="flex flex-col gap-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p) => (
            <FeaturedCard key={p.slug} p={p} />
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="https://github.com/jan-elia-24?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-sm font-medium text-neutral-300 transition-all duration-200 hover:border-white/40 hover:bg-white/5 hover:text-white active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.24 3.4 9.68 8.12 11.26.6.12.82-.27.82-.58 0-.29-.01-1.06-.02-2.08-3.3.73-4-1.63-4-1.63-.55-1.43-1.34-1.81-1.34-1.81-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.28 1.86 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.63-.31-5.4-1.36-5.4-6.05 0-1.34.47-2.44 1.25-3.3-.12-.31-.54-1.57.12-3.27 0 0 1.02-.33 3.34 1.26a11.7 11.7 0 0 1 6.08 0c2.32-1.59 3.34-1.26 3.34-1.26.66 1.7.24 2.96.12 3.27.78.86 1.25 1.96 1.25 3.3 0 4.7-2.77 5.74-5.41 6.05.43.38.82 1.12.82 2.26 0 1.63-.02 2.95-.02 3.35 0 .32.22.71.83.58A11.51 11.51 0 0 0 23.5 12.3 11.5 11.5 0 0 0 12 .5z" />
            </svg>
            View all repositories on GitHub
          </a>
        </div>
      </div>
    );
  } catch {
    return <div>Failed to load projects</div>;
  }
}