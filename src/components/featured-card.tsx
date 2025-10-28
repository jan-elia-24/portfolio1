"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Featured } from "@/lib/featured-projects";

export default function FeaturedCard({ p }: { p: Featured }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateX: 4, rotateY: -3 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 hover:border-emerald-400/50 transition will-change-transform"
    >
      {/* cover image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={p.cover || "/placeholder.jpg"}
          alt={p.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <h3 className="text-xl font-semibold text-white drop-shadow-md">
          {p.title}
        </h3>
        <p className="text-sm text-neutral-300 mt-1 line-clamp-2">
          {p.blurb}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full border border-white/15 bg-black/30 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3 text-sm">
          <Link
            href={p.repo}
            target="_blank"
            className="text-emerald-400 hover:underline"
          >
            GitHub ↗
          </Link>
          {p.demo && (
            <Link
              href={p.demo}
              target="_blank"
              className="text-emerald-400 hover:underline"
            >
              Demo ↗
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
