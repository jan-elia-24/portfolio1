import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-3 text-neutral-300">Page not found.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-medium hover:bg-emerald-400">
          Go Home
        </Link>
        <Link href="/projects" className="px-4 py-2 rounded-xl border border-white/15 hover:bg-white/10">
          View Projects
        </Link>
      </div>
    </main>
  );
}
