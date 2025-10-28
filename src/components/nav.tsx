"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Om mig" },
  { href: "/projects", label: "Projekt" },
  { href: "/cv", label: "CV" },
  { href: "#contact", label: "Kontakt" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">JE</Link>
        <ul className="flex items-center gap-6 text-sm">
          {links.map((l) => {
            const active = l.href !== "/" ? pathname === l.href : pathname === "/";
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`hover:opacity-100 opacity-80 ${active ? "underline underline-offset-4" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="#contact"
              className="px-3 py-1 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-black font-medium"
            >
              Hire me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
