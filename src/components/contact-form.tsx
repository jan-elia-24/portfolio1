"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "ratelimit">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [nameWarning, setNameWarning] = useState(false);
  const shimmerRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(shimmerRef, { once: true, margin: "-80px" });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const res = await fetch("/api/contact", {
      method: "POST",
      body: new FormData(form),
    });

    if (res.ok) {
      setStatus("sent");
    } else {
      const body = await res.json().catch(() => ({}));
      if (res.status === 429) {
        setStatus("ratelimit");
      } else {
        setStatus("error");
        setErrorMsg(body.error ?? "An unexpected error occurred.");
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <motion.div
          key="confirmation"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-lg rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-6 py-8 flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-semibold text-emerald-400">Message received!</p>
              <p className="text-sm text-neutral-400 mt-0.5">I typically respond within 24 hours.</p>
            </div>
          </div>
          <button
            onClick={() => setStatus("idle")}
            className="self-start px-4 py-2 rounded-xl border border-white/10 text-sm text-neutral-400 hover:text-white hover:border-white/30 transition"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid gap-3 max-w-lg"
        >
          <div className="flex flex-col gap-1">
            <input
              required
              name="name"
              placeholder="Full name"
              suppressHydrationWarning
              className={`rounded-xl px-3 py-2 border bg-black/30 backdrop-blur transition-colors ${nameWarning ? "border-yellow-400/50" : "border-white/10"}`}
              onBlur={(e) => {
                const parts = e.target.value.trim().split(/\s+/);
                setNameWarning(parts.length < 2 || parts.some((p) => p.length < 2));
              }}
              onChange={() => setNameWarning(false)}
            />
            {nameWarning && (
              <p className="text-xs text-yellow-400 px-1">Please enter both your first and last name.</p>
            )}
          </div>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            suppressHydrationWarning
            className="rounded-xl px-3 py-2 border border-white/10 bg-black/30 backdrop-blur"
          />
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Message"
            suppressHydrationWarning
            className="rounded-xl px-3 py-2 border border-white/10 bg-black/30 backdrop-blur"
          />
          <div className="flex items-center justify-between gap-4">
            <span
              ref={shimmerRef}
              className="text-sm font-medium"
              style={inView ? {
                background: "linear-gradient(90deg, #525252 0%, #ffffff 30%, #a7f3d0 50%, #ffffff 70%, #525252 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer-sweep 5s ease infinite",
              } : {
                color: "#737373",
              }}
            >
              I typically respond within 24 hours.
            </span>
            <button
              disabled={status === "sending"}
              className="px-5 py-2 rounded-xl bg-emerald-500 text-black font-medium hover:bg-emerald-400 disabled:opacity-60 transition"
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
          </div>
          {status === "error" && (
            <p className="text-sm text-red-400">Something went wrong: {errorMsg}</p>
          )}
          {status === "ratelimit" && (
            <p className="text-sm text-yellow-400">Too many attempts. Please wait a moment and try again.</p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
