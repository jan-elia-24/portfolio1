"use client";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const res = await fetch("/api/contact", {
      method: "POST",
      body: new FormData(form),
    });

    if (res.ok) {
    toast.success(
      <div className="flex flex-col gap-1">
        <p className="text-base font-semibold text-emerald-400">
          Message sent! 🚀
        </p>
        <p className="text-sm text-neutral-300">
          I’ll get back to you as soon as possible.
        </p>
      </div>,
      {
        style: {
          background: "rgba(10,10,10,0.85)",
          border: "1px solid rgba(16,185,129,0.4)",
          boxShadow: "0 0 20px rgba(16,185,129,0.2)",
        },
        duration: 4000,
      }
    );
    form.reset();
  } else {
    toast.error(
      <div className="flex flex-col gap-1">
        <p className="text-base font-semibold text-red-400">Oops 😬</p>
        <p className="text-sm text-neutral-300">
          Something went wrong — try again!
        </p>
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
    <form onSubmit={onSubmit} className="grid gap-3 max-w-lg">
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
      <button
        disabled={status === "sending"}
        className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-medium hover:bg-emerald-400 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      {status === "sent" && (
        <p className="text-emerald-400">Thanks! I’ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
