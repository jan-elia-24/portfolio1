"use client";
import { motion } from "framer-motion";
import FeaturedCard from "@/components/featured-card";
import { fetchRepos } from "@/lib/github";
import Reveal from "@/components/reveal";

export default async function ProjectsGrid() {
  const items = await fetchRepos("jan-elia-24", 12);
  if (!items) return null;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((p, i) => (
        <Reveal key={p.slug} delay={i * 0.05}>
          <FeaturedCard p={p} />
        </Reveal>
      ))}
    </div>
  );
}
