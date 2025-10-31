# Jan Elia — Portfolio

A modern, responsive portfolio built with **Next.js (App Router)**, featuring live GitHub integration, elegant motion, and a polished developer experience.

## 🚀 Features

- **Dynamic Projects** — Fetches your public GitHub repositories and renders project cards
- **Case Studies** — `/projects/[slug]` pages with sticky TOC and GitHub Open Graph covers
- **Responsive & Accessible** — Tailwind CSS v4 styles, skip‑to‑content link, semantic headings
- **Delightful Motion** — Framer Motion page transitions, reveal‑on‑scroll, 3D card tilt, cursor glow/trail
- **Performance‑minded** — Optimized images via `next/image`, remote patterns, caching (`revalidate`)
- **PWA‑ready** — App icons + `manifest.ts` for install experience
- **404 UX** — Cinematic not‑found with glitch + scanline effects

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Email:** Resend (API route)
- **Data:** GitHub REST API
- **Deploy:** Vercel

## 📁 Project Structure

```
src/
  app/
    (home files ...)
    projects/
      page.tsx
      [slug]/
        page.tsx
        loading.tsx
    cv/
      page.tsx
    api/
      contact/
        route.ts          # Resend email handler
    not-found.tsx
    manifest.ts
  components/
    featured-card.tsx
    project-skeleton.tsx
    cursor-trail.tsx
    cursor-glow.tsx
    page-bg.tsx
    timeline.tsx
    case-toc.tsx
    back-to-projects.tsx
    nav.tsx
    footer.tsx
  lib/
    github.ts            # fetchRepos(), fetchRepo()
    date.ts
public/
  bg/...
  me.jpg
```

## 🔧 Configuration

Create `.env.local` in the project root:

```
# Optional but recommended (higher GitHub rate limits)
GITHUB_TOKEN=ghp_your_token_here

# For contact form emails (server-side only)
RESEND_API_KEY=re_********************************
```

> Keep `.env.local` out of version control (Next.js `.gitignore` already does this).

## 🧑‍💻 Getting Started

```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Open
http://localhost:3000
```
### Notes
- Tailwind v4 uses the new `@import "tailwindcss";` in `globals.css` (no `tailwind.config.*` required for basics).
- Remote images (GitHub Open Graph) are whitelisted in `next.config.mjs` via `images.remotePatterns`.
- Contact form posts to `/api/contact` and sends mail via Resend.

## 🎨 Customization

- **Profile & copy:** `src/app/cv/page.tsx`, `src/components/about-card.tsx`
- **Project source:** `src/lib/github.ts` (tweak sorting/filtering, topics → tags mapping)
- **Covers:** Uses GitHub OG by default; override with `cover` on cards
- **Brand color:** Emerald accent in CSS utilities (Tailwind classes) and small custom rules in `globals.css`

## 📦 Deployment (Vercel)
1. Push to GitHub
2. Create a new Vercel project → import repo
3. Add **Environment Variables** in Vercel:
   - `RESEND_API_KEY`
   - `GITHUB_TOKEN` (optional)
4. Deploy. Vercel will detect Next.js/App Router automatically.

## 🤝 Contributing / Reuse

This is a personal portfolio, but you’re welcome to take inspiration or fork it. If you find issues, open one or submit a PR.

## 📄 License

MIT — feel free to use this as a template for your own portfolio.

---

Built with ❤️ using **Next.js** and **Tailwind CSS**.
