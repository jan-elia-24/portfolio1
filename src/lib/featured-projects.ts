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
    slug: "bookbreeze",
    title: "BookBreeze – Books & Quotes",
    blurb: "A fullstack web app where users can explore books and save inspiring quotes.",
    tags: ["React", "Node.js", "MongoDB"],
    repo: "https://github.com/jan-elia-24/bookbreeze",
    demo: "https://bookbreeze-rust.vercel.app",
    cover: "/covers/bookbreeze.png",
  },
  {
    slug: "kino",
    title: "Kino – Cinema Web App",
    blurb: "Server-side rendered cinema website built with Node.js and Pug templates.",
    tags: ["Pug", "Express", "Node.js"],
    repo: "https://github.com/jan-elia-24/kino",
    cover: "/covers/kino.png",
  },
  {
    slug: "esc-her",
    title: "[Esc] Hacker Escape Rooms",
    blurb: "Responsive website built in a team, focusing on UX and smooth animations.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/jan-elia-24/esc-her",
    cover: "/covers/esc.png",
  },
  {
    slug: "wordle",
    title: "Wordle Clone",
    blurb: "Word guessing game built with React and Node backend, featuring a highscore system.",
    tags: ["React", "Node.js", "MongoDB"],
    repo: "https://github.com/jan-elia-24/wordle",
    demo: "https://wordle-wj04.onrender.com/",
    cover: "/covers/wordle.png",
  },
  {
    slug: "warehouse",
    title: "Warehouse Product Manager",
    blurb: "CRUD management system built with Angular and .NET 9 API.",
    tags: ["Angular", ".NET", "SQL"],
    repo: "https://github.com/jan-elia-24/warehouse",
    cover: "/covers/warehouse.png",
  },
  {
    slug: "dungeon",
    title: "Dungeon Crawler CLI",
    blurb: "Text-based Java game with object-oriented structure and inheritance.",
    tags: ["Java", "OOP"],
    repo: "https://github.com/jan-elia-24/dungeon",
    cover: "/covers/dungeon.png",
  },
];
