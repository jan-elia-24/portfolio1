import Hero from "@/components/hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Placeholder-sektioner (fyller vi senare) */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Om mig</h2>
        <p className="mt-2 text-neutral-300">Kort intro kommer här…</p>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Kontakt</h2>
        <p className="mt-2 text-neutral-300">Formulär kommer i nästa steg.</p>
      </section>
    </>
  );
}
