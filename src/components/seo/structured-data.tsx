import { site } from "@/lib/site-config";

export function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": `${site.url}/#person`,
                name: site.name,
                jobTitle: "Software Architect",
                url: site.url,
                image: `${site.url}/images/rasmus-thunborg-headshot.jpg`,
                email: `mailto:${site.email}`,
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Gothenburg",
                    addressCountry: "SE"
                },
                description: site.description,
                alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "University of Gothenburg"
                },
                hasOccupation: {
                    "@type": "Occupation",
                    name: "Software Architect",
                    skills: [
                        "Software architecture",
                        "Backend systems",
                        "Cloud architecture",
                        "Technical leadership",
                        "Legacy modernization",
                        "Agentic AI"
                    ]
                },
                knowsAbout: [
                    ".NET", "C#", "Azure", "AWS", "Kubernetes", "Terraform",
                    "Microservices", "Event Sourcing", "Domain-Driven Design",
                    "CI/CD", "legacy modernization", "technical leadership",
                    "Agentic AI", "Model Context Protocol", "Google Agent2Agent"
                ],
                knowsLanguage: ["Swedish", "English", "Norwegian", "Danish"],
                sameAs: [site.linkedin]
            },
            {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                url: site.url,
                name: site.name,
                description: site.description,
                inLanguage: "en",
                publisher: { "@id": `${site.url}/#person` }
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
