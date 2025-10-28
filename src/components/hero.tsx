"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* bakgrund-glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(16,185,129,0.20),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Designer <span className="text-emerald-400">&lt;/&gt;</span> Coder
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-neutral-300 max-w-2xl"
        >
          Jag bygger snabba, mörka och moderna upplevelser med Next.js, React, Node och Java.
          Scrolla för mer — eller hoppa direkt till projekten.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          <Link href="/projects" className="px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-medium">
            Se projekt
          </Link>
          <Link href="#contact" className="px-5 py-2.5 rounded-xl border border-white/15">
            Kontakta mig
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
