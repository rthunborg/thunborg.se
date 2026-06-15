import type { CaseStudyMetric } from "@/components/case-study";
import { site } from "@/lib/site-config";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

interface JsonLdProps {
  data: { [key: string]: JsonLdValue };
}

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;

function serializeJsonLd(data: JsonLdProps["data"]) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

export function ProfilePageJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${site.url}/about#profile-page`,
        url: `${site.url}/about`,
        name: `About ${site.name}`,
        description: site.description,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        dateModified: "2026-06-13",
        mainEntity: { "@id": personId },
      }}
    />
  );
}

interface ServiceJsonLdItem {
  readonly name: string;
  readonly tagline: string;
  readonly scope: string;
  readonly examples: readonly string[];
}

interface ServicesJsonLdProps {
  services: readonly ServiceJsonLdItem[];
}

export function ServicesJsonLd({ services }: ServicesJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        "@id": `${site.url}/services#services`,
        name: "Software architecture services",
        url: `${site.url}/services`,
        description:
          "Software architecture, backend, cloud, technical leadership, integrations, and Agentic AI services.",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: service.name,
            serviceType: service.name,
            description: `${service.tagline}. ${service.scope}`,
            provider: { "@id": personId },
            areaServed: ["Sweden", "Europe"],
            audience: {
              "@type": "BusinessAudience",
              audienceType:
                "Technology leaders, product leaders, and executive teams",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${service.name} examples`,
              itemListElement: service.examples.map((example, exampleIndex) => ({
                "@type": "Offer",
                position: exampleIndex + 1,
                itemOffered: {
                  "@type": "Service",
                  name: example,
                  provider: { "@id": personId },
                },
              })),
            },
          },
        })),
      }}
    />
  );
}

interface CaseStudyListItem {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly industry: string;
}

interface CaseStudiesItemListJsonLdProps {
  caseStudies: readonly CaseStudyListItem[];
}

export function CaseStudiesItemListJsonLd({
  caseStudies,
}: CaseStudiesItemListJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${site.url}/case-studies#case-studies`,
        name: "Selected software architecture case studies",
        url: `${site.url}/case-studies`,
        itemListElement: caseStudies.map((study, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${site.url}/case-study/${study.slug}`,
          item: {
            "@type": "Article",
            headline: study.title,
            description: study.summary,
            url: `${site.url}/case-study/${study.slug}`,
            about: study.industry,
            author: { "@id": personId },
          },
        })),
      }}
    />
  );
}

interface CaseStudyArticleJsonLdProps {
  slug: string;
  title: string;
  description: string;
  industry: string;
  timeline: string;
  metrics: readonly CaseStudyMetric[];
}

export function CaseStudyArticleJsonLd({
  slug,
  title,
  description,
  industry,
  timeline,
  metrics,
}: CaseStudyArticleJsonLdProps) {
  const url = `${site.url}/case-study/${slug}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${url}#article`,
        headline: title,
        description,
        url,
        mainEntityOfPage: url,
        image: `${site.url}/og-image.svg`,
        author: { "@id": personId },
        publisher: { "@id": personId },
        inLanguage: "en",
        dateModified: "2026-06-13",
        about: [
          industry,
          "software architecture",
          "technical leadership",
          "backend systems",
        ],
        temporalCoverage: timeline,
        isPartOf: { "@id": websiteId },
        hasPart: metrics.map((metric) => ({
          "@type": "PropertyValue",
          name: metric.label,
          value: metric.delta,
          description: `${metric.before || "Before"} to ${metric.after}`,
        })),
      }}
    />
  );
}
