import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cgsmahavidyalaya.com";

  const routes = [
    "",
    "/about-us",
    "/our-team",
    "/our-team/prabandhak",
    "/our-team/ranjni",
    "/our-team/virat",
    "/our-team/himani",
    "/our-team/nishu",
    "/our-team/mauli",
    "/our-team/kashi",
    "/photo-gallery",
    "/contact-us",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/our-team/") ? 0.7 : 0.8,
  }));
}
