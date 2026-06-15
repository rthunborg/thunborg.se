import { PageShell } from "@/components/page-shell";
import { createPageMetadata } from "@/lib/metadata";
import { ServicesJsonLd } from "@/components/seo/page-jsonld";

export const metadata = createPageMetadata({
  title: "Software architecture consulting | Rasmus Thunborg",
  description:
    "Software architecture consulting for backend systems, cloud platforms, technical leadership, integrations, legacy modernization, and Agentic AI.",
  keywords: [
    "Rasmus Thunborg",
    "software architecture consultant",
    "software architect Gothenburg",
    "software architecture",
    "backend",
    "cloud architecture",
    "technical leadership",
    "Agentic AI",
  ],
  path: "/services",
});

const contributionAreas = [
  {
    name: "Software architecture",
    tagline: "Technical choices that hold up over time",
    scope:
      "I help teams understand their current architecture, find bottlenecks, and choose a direction they can execute without losing delivery capacity.",
    examples: [
      "Domain modeling and system boundaries",
      "Legacy system modernization",
      "Technical decision support and architecture documentation",
    ],
  },
  {
    name: "Backend and integrations",
    tagline: "Robust services, APIs, and data flows",
    scope:
      "My center of gravity is .NET, C#, API design, integration flows, and systems that need to stay reliable even when the business domain is complex.",
    examples: [
      ".NET microservices and REST/GraphQL",
      "Event-driven flows with Kafka, Service Bus, and Event Grid",
      "Integrations with external suppliers and internal platforms",
    ],
  },
  {
    name: "Cloud and platform",
    tagline: "Deliverable infrastructure with clear ownership",
    scope:
      "I work hands-on with Azure, AWS, Kubernetes, Terraform, and CI/CD. The focus is on environments that can be understood, operated, and changed.",
    examples: [
      "AWS Lambda, DynamoDB, and Secrets Manager",
      "Azure, Kubernetes, Cosmos DB, and Blob Storage",
      "GitHub Actions, Azure DevOps, and infrastructure as code",
    ],
  },
  {
    name: "Technical leadership",
    tagline: "Direction, pace, and quality in the same work",
    scope:
      "I can work close to a team and contribute technical direction, mentoring, prioritization, and delivery without creating unnecessary process layers.",
    examples: [
      "Interim technical lead in product teams",
      "Mentoring and knowledge transfer",
      "Collaboration with product owners, architects, and operations",
    ],
  },
  {
    name: "Agentic AI",
    tagline: "Practical AI in developer workflows and system design",
    scope:
      "I follow and actively work with agent-based developer workflows, MCP, A2A, LLM security, and how AI can be used without losing control over quality.",
    examples: [
      "AI support in development, analysis, and testing",
      "Model Context Protocol and agent integrations",
      "LLM security, prompt engineering, and responsible use",
    ],
  },
  {
    name: "Technical analysis",
    tagline: "From unclear situation to concrete next step",
    scope:
      "I am used to entering complex situations, analyzing technology and organization together, and defining a way forward that is clear enough to act on.",
    examples: [
      "Codebase and architecture reviews",
      "Risk assessment before major technical decisions",
      "Plans for migration, stabilization, and delivery improvement",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "services" }]}>
      <ServicesJsonLd services={contributionAreas} />
      <div className="mb-12 md:mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
          Where I can help
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-[#A1A1A1]">
          A practical overview of the areas where I usually create the most
          value for teams, products, and technical organizations.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contributionAreas.map((area) => (
          <article
            key={area.name}
            className="flex flex-col rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111111] p-8"
          >
            <h2 className="mb-1 text-xl font-bold text-[#EDEDED]">
              {area.name}
            </h2>
            <p className="mb-4 font-mono text-sm text-[#919191]">
              {area.tagline}
            </p>
            <p className="mb-6 text-sm leading-relaxed text-[#A1A1A1]">
              {area.scope}
            </p>
            <ul className="mt-auto space-y-2" aria-label={area.name}>
              {area.examples.map((example) => (
                <li
                  key={example}
                  className="flex items-start gap-2 text-sm text-[#A1A1A1]"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F59E0B]"
                    aria-hidden="true"
                  />
                  {example}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
