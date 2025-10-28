"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[80vh] text-center overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black">
      {/* subtle glow background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.1),transparent_70%)]" />

      {/* animated 404 text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-700 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]"
      >
        404
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="glitch mx-auto mt-2"
        data-text="NOT FOUND"
      >
        NOT FOUND
      </motion.div>

      {/* message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-neutral-300 max-w-md text-lg"
      >
        Looks like you ventured into the void. Let’s get you back to familiar
        territory.
      </motion.p>

      {/* buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex gap-4"
      >
        <Link
          href="/"
          className="px-5 py-2 rounded-xl font-medium bg-emerald-500 text-black hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition"
        >
          Go Home
        </Link>
        <Link
          href="/projects"
          className="px-5 py-2 rounded-xl border border-white/10 text-neutral-200 hover:text-emerald-400 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition"
        >
          View Projects
        </Link>
      </motion.div>
    </main>
  );
}
