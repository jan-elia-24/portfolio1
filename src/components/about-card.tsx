"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutCard() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-black/40 backdrop-blur-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 overflow-hidden rounded-2xl border border-white/10">
        <Image
          src="/me.jpg"
          alt="Portrait of Jan Elia"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-6 flex-1">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I'm <span className="text-emerald-400">Jan Elia</span>
          </h1>
          <p className="text-lg text-emerald-300 mt-2">
            Full-Stack Developer & Problem Solver
          </p>
        </div>

        <div className="space-y-4 text-neutral-300 leading-relaxed">
          <p>
            I've discovered my true calling in programming and creative
            problem-solving. There's an incredible sense of{" "}
            <span className="text-emerald-300">inner peace</span> that comes
            from turning complex challenges into elegant, working solutions.
          </p>
          <p>
            Whether I'm debugging tricky code, architecting entire systems from
            scratch, or exploring new technologies, I thrive on the journey from
            "impossible" to "done".
          </p>
          <p>
            When I'm not immersed in code, you'll find me optimizing workflows,
            diving deep into the latest web trends, or finding better ways to
            build.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-medium transition"
          >
            View My Work
          </Link>
          <Link
            href="/cv"
            className="px-5 py-2.5 rounded-xl border border-white/15 hover:bg-white/5 transition"
          >
            See Full CV
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_30%,rgba(16,185,129,0.15),transparent_70%)]" />
    </motion.section>
  );
}
