import type { MetadataRoute } from "next";
import { BLOG_POSTS, ROLES, SERVICES, SITE_URL } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/faq",
    "/quote",
    "/blog",
    "/open-roles",
    "/gallery",
    "/services/santa-barbara-christmas-lights",
    "/services/san-luis-obispo-christmas-lights",
  ];
  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);
  const blogRoutes = BLOG_POSTS.map((p) => `/post/${p.slug}`);
  const roleRoutes = ROLES.map((r) => `/open-roles/${r.slug}`);

  const monthlyGeo = new Set([
    "/services/santa-barbara-christmas-lights",
    "/services/san-luis-obispo-christmas-lights",
  ]);

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...roleRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: monthlyGeo.has(route) ? "monthly" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
