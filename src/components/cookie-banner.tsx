"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type CookieConsent = "accepted" | "declined" | null;

export default function CookieBanner({
  onConsent,
}: {
  onConsent: (consent: CookieConsent) => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) setVisible(true);
    else onConsent(stored as CookieConsent);
  }, [onConsent]);

  const handle = (consent: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", consent);
    onConsent(consent);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[520px] z-[70] rounded-2xl border border-white/10 px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(16px)" }}
        >
          <p className="text-sm text-neutral-300 flex-1">
            Denna sida använder cookies för att analysera besök och förbättra upplevelsen.{" "}
            <span className="text-neutral-500">Du kan när som helst ändra ditt val.</span>
          </p>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => handle("declined")}
              className="px-4 py-2 rounded-xl border border-white/10 text-sm text-neutral-400 hover:text-white transition"
            >
              Neka
            </button>
            <button
              onClick={() => handle("accepted")}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-medium transition"
            >
              Acceptera
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
