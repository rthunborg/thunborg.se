import { site } from "@/lib/site-config";

interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface BreadcrumbJsonLdProps {
  segments: BreadcrumbSegment[];
}

export function BreadcrumbJsonLd({ segments }: BreadcrumbJsonLdProps) {
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: site.url,
    },
    ...segments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: segment.label,
      ...(segment.href ? { item: `${site.url}${segment.href}` } : {}),
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
