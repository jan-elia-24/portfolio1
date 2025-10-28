export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  repo?: string;
  demo?: string;
  cover?: string;
};

export const projects: Project[] = [
  {
    slug: "washify",
    title: "Washify – Next.js bilvårdsbokning",
    blurb: "Full-stack projekt med SSR, API och autentisering.",
    tags: ["Next.js", "Node", "MongoDB"],
    repo: "https://github.com/jan-elia-24/washify",
  },
  {
    slug: "kino",
    title: "Kino – filmwebb med Pug SSR",
    blurb: "Server-renderad biowebb byggd i Node.js och Pug.",
    tags: ["Pug", "Express", "Node.js"],
    repo: "https://github.com/jan-elia-24/kino",
  },
];
