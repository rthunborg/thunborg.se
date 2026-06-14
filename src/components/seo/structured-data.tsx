import { site } from "@/lib/site-config";

export function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": `${site.url}/#person`,
                name: site.name,
                jobTitle: "Expert Software Engineer",
                url: site.url,
                image: `${site.url}/og-image.svg`,
                email: `mailto:${site.email}`,
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Göteborg",
                    addressCountry: "SE"
                },
                description: site.description,
                knowsAbout: [
                    ".NET", "C#", "Azure", "AWS", "Kubernetes", "Terraform",
                    "Microservices", "Event Sourcing", "Domain-Driven Design",
                    "CI/CD", "legacy-modernisering", "teknisk ledning",
                    "Agentic AI", "Model Context Protocol", "Google Agent2Agent"
                ],
                sameAs: [site.linkedin]
            },
            {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                url: site.url,
                name: site.name,
                description: site.description,
                inLanguage: "sv"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
