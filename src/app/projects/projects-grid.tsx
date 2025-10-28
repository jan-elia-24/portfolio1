"use client";
import { motion } from "framer-motion";
import FeaturedCard from "@/components/featured-card";
import { fetchRepos } from "@/lib/github";

export default async function ProjectsGrid() {
  const items = await fetchRepos("jan-elia-24", 12);
  if (!items) return null;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((p, i) => (
        <motion.div
          key={p.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
        >
          <FeaturedCard p={p} />
        </motion.div>
      ))}
    </div>
  );
}
