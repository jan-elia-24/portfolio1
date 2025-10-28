export type GhRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics?: string[];
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

export async function fetchRepos(username: string, limit = 12) {
  const res = await fetch(
    `https://api.github.com/users/jan-elia-24/repos?sort=updated&per_page=${limit}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate: 3600 }, // cache 1 h
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const data = (await res.json()) as GhRepo[];
  return data
    .filter((r) => !r.fork)
    .map((r) => ({
      title: r.name,
      blurb: r.description ?? "—",
      repo: r.html_url,
      demo: r.homepage || undefined,
      tags: r.topics && r.topics.length ? r.topics : r.language ? [r.language] : [],
      updated: r.pushed_at,
    }));
}
