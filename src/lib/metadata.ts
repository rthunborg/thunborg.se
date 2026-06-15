import type { Metadata } from "next";
import { site } from "@/lib/site-config";

const openGraphImage = {
  url: "/og-image.svg",
  width: 1200,
  height: 630,
  alt: "Rasmus Thunborg: Software Architect",
};

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  openGraphType?: "website" | "profile" | "article";
}

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords,
  openGraphType = "website",
}: PageMetadataOptions): Metadata {
  const url = path ? `${site.url}${path}` : site.url;

  return {
    title,
    description,
    keywords,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: openGraphType,
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [openGraphImage.url],
    },
    alternates: {
      canonical: url,
    },
  };
}
