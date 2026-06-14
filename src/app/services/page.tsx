import { PageShell } from "@/components/page-shell";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Vad jag kan bidra med | Rasmus Thunborg",
  description:
    "Områden där Rasmus Thunborg kan bidra: mjukvaruarkitektur, backend, molnplattformar, teknisk ledning, integrationer och Agentic AI.",
  keywords: [
    "Rasmus Thunborg",
    "mjukvaruarkitektur",
    "backend",
    "molnarkitektur",
    "teknisk ledning",
    "Agentic AI",
  ],
  path: "/services",
});

const contributionAreas = [
  {
    name: "Mjukvaruarkitektur",
    tagline: "Tekniska vägval som håller över tid",
    scope:
      "Jag hjälper team förstå sin nuvarande arkitektur, hitta flaskhalsar och välja en riktning som går att genomföra utan att tappa leveransförmåga.",
    examples: [
      "Domänmodellering och systemgränser",
      "Modernisering av legacy-system",
      "Tekniska beslutsunderlag och arkitekturdokumentation",
    ],
  },
  {
    name: "Backend och integrationer",
    tagline: "Robusta tjänster, API:er och dataflöden",
    scope:
      "Min tyngdpunkt ligger i .NET, C#, API-design, integrationsflöden och system som behöver fungera stabilt även när verksamheten är komplex.",
    examples: [
      ".NET microservices och REST/GraphQL",
      "Eventdrivna flöden med Kafka, Service Bus och Event Grid",
      "Integrationer mot externa leverantörer och interna plattformar",
    ],
  },
  {
    name: "Moln och plattform",
    tagline: "Leveransbar infrastruktur med tydligt ägarskap",
    scope:
      "Jag arbetar praktiskt med Azure, AWS, Kubernetes, Terraform och CI/CD. Fokus ligger på miljöer som går att förstå, drifta och förändra.",
    examples: [
      "AWS Lambda, DynamoDB och Secrets Manager",
      "Azure, Kubernetes, Cosmos DB och Blob Storage",
      "GitHub Actions, Azure DevOps och infrastructure as code",
    ],
  },
  {
    name: "Teknisk ledning",
    tagline: "Riktning, tempo och kvalitet i samma arbete",
    scope:
      "Jag kan kliva in nära ett team och bidra med teknisk riktning, mentoring, prioritering och genomförande utan att skapa onödiga processlager.",
    examples: [
      "Interim technical lead i produktteam",
      "Mentoring och kunskapsöverföring",
      "Samarbete med produktägare, arkitekter och drift",
    ],
  },
  {
    name: "Agentic AI",
    tagline: "Praktisk AI i utvecklarflöden och systemdesign",
    scope:
      "Jag följer och arbetar aktivt med agentbaserade utvecklarflöden, MCP, A2A, LLM-säkerhet och hur AI kan användas utan att tappa kontroll över kvalitet.",
    examples: [
      "AI-stöd i utveckling, analys och testning",
      "Model Context Protocol och agentintegrationer",
      "LLM-säkerhet, prompt engineering och ansvarsfull användning",
    ],
  },
  {
    name: "Teknisk analys",
    tagline: "Från oklar situation till konkret nästa steg",
    scope:
      "Jag är van vid att gå in i komplexa sammanhang, analysera teknik och organisation tillsammans, och formulera en väg framåt som är tydlig nog att agera på.",
    examples: [
      "Kodbas- och arkitekturgenomgångar",
      "Riskbedömning inför större tekniska beslut",
      "Planer för migration, stabilisering och leveransförbättring",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "services" }]}>
      <div className="mb-12 md:mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
          Vad jag kan bidra med
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-[#A1A1A1]">
          En praktisk översikt över de områden där jag brukar skapa mest nytta
          i team, produkter och tekniska organisationer.
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
