import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://recontech.in";

  const staticPages = [
    "",
    "/credit-cards",
    "/loans",
    "/investments",
    "/income-tax",
    "/insurance",
    "/blog",
    "/about",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/disclaimer",
  ];

  const blogPosts = [
    "/blog/best-credit-cards-2026",
    "/blog/save-tax-section-80c",
    "/blog/sip-beginners-guide",
    "/blog/home-loan-tips-2026",
    "/blog/health-insurance-mistakes",
    "/blog/new-vs-old-tax-regime",
    "/blog/emergency-fund-guide",
    "/blog/mutual-fund-taxation",
  ];

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-06-14"),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/blog" ? 0.9 : 0.8,
  }));

  const blogEntries = blogPosts.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-06-10"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
