import PageBg from "@/components/page-bg";
import AboutCard from "@/components/about-card";

export default function MePage() {
  return (
    <>
      <PageBg src="/bg/me.jpg" dim={0.6} />
      <main id="main" className="mx-auto max-w-6xl px-4 py-20">
        <AboutCard />
      </main>
    </>
  );
}