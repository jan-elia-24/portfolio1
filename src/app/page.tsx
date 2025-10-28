import HeroSplit from "@/components/hero-split";
import FeaturedCard from "@/components/featured-card";
import { fetchFeaturedRepos } from "@/lib/github";  
import ContactForm from "@/components/contact-form";
import PageBg from "@/components/page-bg";
import Reveal from "@/components/reveal";

export default async function HomePage() {  
  const featured = await fetchFeaturedRepos("jan-elia-24");  

  return (
    <>
      <PageBg src="/bg/home.jpg" dim={0.55} />
      <HeroSplit />

      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        </Reveal>
        <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.slice(0, 6).map((p) => (  
              <FeaturedCard key={p.slug} p={p} />
            ))}
          </div>
        </Reveal>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-neutral-300">
          Want to collaborate or have a question? Send me a message.
        </p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </section>
    </>
  );
}