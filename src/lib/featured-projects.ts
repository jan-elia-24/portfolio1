export type Featured = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  repo: string;
  demo?: string;
  cover?: string;
};

export const featured: Featured[] = [
  {
    slug: "washify",
    title: "Washify – Bilvårdsbokning",
    blurb: "Fullstack Next.js-projekt med autentisering, API och adminpanel.",
    tags: ["Next.js", "Node", "MongoDB"],
    repo: "https://github.com/jan-elia-24/washify",
    demo: "https://washify.vercel.app",
    cover: "/covers/washify.png",
  },
  {
    slug: "kino",
    title: "Kino – Filmwebb med SSR",
    blurb: "Server-renderad biowebb i Node.js med Pug och integrationstester.",
    tags: ["Pug", "Express", "Node.js"],
    repo: "https://github.com/jan-elia-24/kino",
    cover: "/covers/kino.png",
  },
  {
    slug: "esc-her",
    title: "[Esc] Hacker Escape Rooms",
    blurb: "Responsiv webbplats byggd i grupp med fokus på UX och animationer.",
    tags: ["HTML", "CSS", "JS"],
    repo: "https://github.com/jan-elia-24/esc-her",
    cover: "/covers/esc.png",
  },
  {
    slug: "wordle",
    title: "Wordle-klon",
    blurb: "Spel med React och Node backend samt highscore via EJS SSR.",
    tags: ["React", "Node", "MongoDB"],
    repo: "https://github.com/jan-elia-24/wordle",
    cover: "/covers/wordle.png",
  },
  {
    slug: "warehouse",
    title: "Warehouse Manager",
    blurb: "CRUD-app för lagerhantering byggd i Angular + .NET 9 API.",
    tags: ["Angular", ".NET", "SQL"],
    repo: "https://github.com/jan-elia-24/warehouse",
    cover: "/covers/warehouse.png",
  },
  {
    slug: "dungeon",
    title: "Dungeon Crawler CLI",
    blurb: "Textbaserat Java-spel med objektorienterad struktur och arv.",
    tags: ["Java", "OOP"],
    repo: "https://github.com/jan-elia-24/dungeon",
    cover: "/covers/dungeon.png",
  },
];
