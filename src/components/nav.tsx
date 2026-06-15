"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sync = () => setHash(window.location.hash || "");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") setHash(window.location.hash || "");
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (l: { href: string }) => {
    const isContact = l.href === "/#contact";
    if (isContact) return pathname === "/" && hash === "#contact";
    if (l.href === "/") return pathname === "/";
    return pathname === l.href;
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-neutral-950/70 backdrop-blur-md border-b border-white/10">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 bg-black/90 backdrop-blur text-white px-4 py-2 rounded-lg border border-white/10 text-sm font-medium transition-opacity duration-300 focus:opacity-100 opacity-0"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="logo-link font-logo text-3xl" onClick={() => setOpen(false)}>
          <span className="text-white">Jan</span><span className="logo-elia">Elia</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => {
                  if (l.href === "/#contact" && typeof window !== "undefined") {
                    window.location.hash = "#contact";
                  }
                }}
                className={`nav-link ${isActive(l) ? "is-active" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/me"
              className="px-3 py-1 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-black font-medium transition"
            >
              Me
            </Link>
          </li>
        </ul>

        {/* Menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-end w-8 h-8 gap-[7px]"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <motion.span
            className="block h-px bg-white rounded-full origin-right"
            animate={open ? { width: 24, rotate: -45, y: 5, x: 1 } : { width: 24, rotate: 0, y: 0, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="block h-px bg-white rounded-full origin-right"
            animate={open ? { width: 24, rotate: 45, y: -4, x: 1 } : { width: 16, rotate: 0, y: 0, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur"
          >
            <ul className="flex flex-col px-4 py-4 gap-1 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => {
                      setOpen(false);
                      if (l.href === "/#contact" && typeof window !== "undefined") {
                        window.location.hash = "#contact";
                      }
                    }}
                    className={`block py-2.5 px-3 rounded-xl transition hover:bg-white/5 ${
                      isActive(l) ? "text-emerald-400" : "text-neutral-200"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/me"
                  onClick={() => setOpen(false)}
                  className="block text-center py-2.5 px-3 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-black font-medium transition"
                >
                  Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
