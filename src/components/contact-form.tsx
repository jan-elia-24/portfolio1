"use client";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
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
      setStatus("error");
      toast.error(
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold text-red-400">Oops 😬</p>
          <p className="text-sm text-neutral-300">Something went wrong — try again!</p>
        </div>,
        {
          style: {
            background: "rgba(20,0,0,0.9)",
            border: "1px solid rgba(239,68,68,0.4)",
            boxShadow: "0 0 20px rgba(239,68,68,0.2)",
          },
          duration: 4000,
        }
      );
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
          <input
            required
            name="name"
            placeholder="Name"
            className="rounded-xl px-3 py-2 border border-white/10 bg-black/30 backdrop-blur"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-xl px-3 py-2 border border-white/10 bg-black/30 backdrop-blur"
          />
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Message"
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
            <p className="text-sm text-red-400">Something went wrong — please try again.</p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
