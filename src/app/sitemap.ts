import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://jan-elia.dev/", lastModified: new Date() },
    { url: "https://jan-elia.dev/projects", lastModified: new Date() },
    { url: "https://jan-elia.dev/cv", lastModified: new Date() },
    // Add project detail pages if you want them indexed:
    // { url: "https://jan-elia.dev/projects/bookbreeze", lastModified: new Date() },
  ];
}
