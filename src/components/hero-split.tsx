"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HeroSplit() {
  const [lightGone, setLightGone] = useState(false);
  const [burst, setBurst] = useState(false);
  const [done, setDone] = useState(false);

  const handleImageHover = () => {
    if (done) return;
    if (!lightGone) {
      // First hover: light leaves image → cursor
      window.dispatchEvent(new CustomEvent("light-transfer-start"));
      setBurst(true);
      setTimeout(() => setBurst(false), 900);
      setLightGone(true);
    } else {
      // Second hover: light returns to image → cursor back to normal
      window.dispatchEvent(new CustomEvent("light-transfer-end"));
      setLightGone(false);
      setDone(true);
    }
  };

  useEffect(() => {
    return () => {
      window.dispatchEvent(new CustomEvent("light-transfer-end"));
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(16,185,129,0.20),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-12 md:pt-28 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div
          className="relative aspect-square rounded-3xl overflow-hidden select-none cursor-pointer"
          onMouseEnter={handleImageHover}
        >
          <Image
            src="/Gemini_Generated_Image_9cp8xx9cp8xx9cp8.png"
            alt="Coder & Designer"
            fill
            className="object-cover"
            style={{
              filter: lightGone ? "brightness(0.45)" : "brightness(1)",
              transition: "filter 1.2s ease",
            }}
            priority
          />
          {burst && (
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ zIndex: 2 }}
            >
              <div style={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(219,242,223,0.95) 0%, rgba(219,242,223,0.3) 50%, transparent 70%)",
                animation: "light-burst 0.9s ease-out forwards",
              }} />
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" style={{ zIndex: 1 }} />
        </div>

        {/* Text + CTAs */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Coder{" "}
            </motion.span>

            <motion.span
              className="text-emerald-400 inline-block cursor-pointer"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: [0, -15, 0],
                transition: {
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 0.3,
                },
              }}
              whileHover={{
                scale: 1.3,
                rotate: 720,
                transition: {
                  duration: 0.8,
                  ease: "backOut",
                },
              }}
              whileTap={{
                scale: 0.8,
                rotate: -180,
                transition: { duration: 0.3 },
              }}
            >
              &lt;/&gt;
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              {" "}
              Designer
            </motion.span>
          </h1>
          <p className="mt-4 text-neutral-300 max-w-prose">
            Java & JavaScript developer with a passion for clean design — building modern full-stack experiences with Next.js, React, Angular, and Node, turning ideas into smooth, powerful web apps.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-medium transition-all duration-200 hover:bg-emerald-400 hover:scale-105 hover:shadow-[0_0_24px_rgba(16,185,129,0.35)] active:scale-95"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-xl border border-white/15 transition-all duration-200 hover:border-white/40 hover:bg-white/5 active:scale-95"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}