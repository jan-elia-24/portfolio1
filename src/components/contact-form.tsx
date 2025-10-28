"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: form });

    setStatus(res.ok ? "sent" : "error");
    if (res.ok) (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-lg">
      <input
        required name="name" placeholder="Name"
        className="rounded-xl px-3 py-2 border border-white/10 bg-black/30 backdrop-blur"
      />
      <input
        required type="email" name="email" placeholder="Email"
        className="rounded-xl px-3 py-2 border border-white/10 bg-black/30 backdrop-blur"
      />
      <textarea
        required name="message" rows={5} placeholder="Message"
        className="rounded-xl px-3 py-2 border border-white/10 bg-black/30 backdrop-blur"
      />
      <button
        disabled={status === "sending"}
        className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-medium hover:bg-emerald-400 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      {status === "sent" && <p className="text-emerald-400">Thanks! I’ll get back to you soon.</p>}
      {status === "error" && <p className="text-red-400">Something went wrong. Please try again.</p>}
    </form>
  );
}
