import type { Metadata } from "next";
import { SITE_URL } from "@/lib/content";

type MetaInput = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({ title, description, path }: MetaInput): Metadata {
  const canonical = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Glow Installations",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
