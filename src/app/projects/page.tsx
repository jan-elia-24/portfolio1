import PageBg from "@/components/page-bg";
import ProjectSkeleton from "@/components/project-skeleton";
import { Suspense } from "react";
import ProjectsGrid from "./projects-grid";

function SkeletonGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProjectSkeleton key={i} />
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageBg src="/bg/projects.jpg" dim={0.55} />
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-3xl font-bold mb-8">All Projects</h1>
        <Suspense fallback={<SkeletonGrid />}>
          <ProjectsGrid />
        </Suspense>
      </section>
    </>
  );
}
