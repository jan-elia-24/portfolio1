"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash || "");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") setHash(window.location.hash || "");
  }, [pathname]);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-logo text-2xl">
          JanElia
        </Link>

        <ul className="flex items-center gap-6 text-sm">
          {links.map((l) => {
            const isContact = l.href === "/#contact";
            const isActive = isContact
              ? pathname === "/" && hash === "#contact"
              : l.href === "/"
              ? pathname === "/"
              : pathname === l.href;

            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => {
                    if (isContact && typeof window !== "undefined") {
                      window.location.hash = "#contact";
                    }
                  }}
                  className={`hover:opacity-100 opacity-80 transition ${
                    isActive ? "underline underline-offset-4" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}

          <li>
            <Link
              href="/#contact"
              className="px-3 py-1 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-black font-medium transition"
              onClick={() => {
                if (typeof window !== "undefined")
                  window.location.hash = "#contact";
              }}
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
