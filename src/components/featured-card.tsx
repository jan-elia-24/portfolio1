"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import type { Featured } from "@/lib/github";

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

        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags?.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full border border-white/15 bg-black/30 backdrop-blur-sm"
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
            GitHub ↗
          </Link>
          {p.demo && (
            <Link
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              Demo ↗
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
