"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import type { Featured } from "@/lib/github";
import ExternalIcon from "@/components/external-icon";

const TAG_COLORS: Record<string, string> = {
  typescript:   "bg-blue-500/15 text-blue-300 border-blue-500/30",
  javascript:   "bg-yellow-400/15 text-yellow-300 border-yellow-400/30",
  java:         "bg-orange-500/15 text-orange-300 border-orange-500/30",
  python:       "bg-green-500/15 text-green-300 border-green-500/30",
  "c#":         "bg-violet-500/15 text-violet-300 border-violet-500/30",
  css:          "bg-sky-500/15 text-sky-300 border-sky-500/30",
  html:         "bg-red-500/15 text-red-300 border-red-500/30",
  react:        "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  nextjs:       "bg-neutral-400/15 text-neutral-200 border-neutral-400/30",
  "next.js":    "bg-neutral-400/15 text-neutral-200 border-neutral-400/30",
  tailwind:     "bg-teal-500/15 text-teal-300 border-teal-500/30",
  tailwindcss:  "bg-teal-500/15 text-teal-300 border-teal-500/30",
  docker:       "bg-blue-400/15 text-blue-300 border-blue-400/30",
  mysql:        "bg-orange-400/15 text-orange-300 border-orange-400/30",
  postgresql:   "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  springboot:   "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "spring-boot":"bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  angular:      "bg-red-600/15 text-red-300 border-red-600/30",
  nodejs:       "bg-green-600/15 text-green-300 border-green-600/30",
  php:          "bg-purple-500/15 text-purple-300 border-purple-500/30",
};

function tagClass(tag: string) {
  return (
    TAG_COLORS[tag.toLowerCase()] ??
    "bg-white/5 text-neutral-300 border-white/15"
  );
}

export default function FeaturedCard({ p }: { p: Featured }) {
  const [hover, setHover] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-50, 50], [12, -12]);
  const rotateY = useTransform(mx, [-50, 50], [-12, 12]);

  function onMove(e: React.MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const offX = e.clientX - rect.left - rect.width / 2;
    const offY = e.clientY - rect.top - rect.height / 2;
    mx.set(offX / 6);
    my.set(offY / 6);
  }

  function resetTilt() {
    mx.set(0);
    my.set(0);
    setHover(false);
  }

  return (
    <motion.article
      // Reveal animation
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      // Hover and tilt effects
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(16,185,129,0.25)" }}
      transition={{ type: "spring", stiffness: 180, damping: 16 }}
      className="group relative rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md overflow-hidden hover:border-emerald-500/40"
    >
      <Link href={`/projects/${p.slug}`} aria-label={`Open ${p.title}`}>
        <div className="relative aspect-video">
          <Image
            src={p.cover || "/placeholder.jpg"}
            alt={p.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
        </div>
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-sm text-neutral-300 mt-1 line-clamp-2">{p.blurb}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags?.slice(0, 3).map((t) => (
            <span
              key={t}
              className={`text-xs px-2.5 py-0.5 rounded-full border font-medium tracking-wide ${tagClass(t)}`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4 text-sm">
          <Link
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline"
          >
            GitHub <ExternalIcon />
          </Link>
          {p.demo && (
            <Link
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              Demo <ExternalIcon />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
