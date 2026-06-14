import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Agentic AI | Rasmus Thunborg",
  description:
    "Rasmus Thunborgs inriktning inom Agentic AI, MCP, A2A, LLM-säkerhet och praktiska AI-drivna utvecklarflöden.",
  keywords: [
    "Agentic AI",
    "Rasmus Thunborg",
    "Model Context Protocol",
    "MCP",
    "Google Agent2Agent",
    "LLM-säkerhet",
    "AI-utveckling",
  ],
  path: "/agentic-ai",
});

const focusAreas = [
  {
    name: "Agentbaserade utvecklarflöden",
    text: "Jag arbetar aktivt med hur AI-agenter kan hjälpa i analys, implementation, testning, dokumentation och kodgranskning utan att ersätta tekniskt omdöme.",
  },
  {
    name: "MCP och verktygsintegration",
    text: "Model Context Protocol gör agentflöden praktiskt användbara när de kopplas till rätt verktyg, data och begränsningar. Jag fokuserar på integrationer som ger nytta i verkliga arbetsflöden.",
  },
  {
    name: "A2A och multi-agent-system",
    text: "Jag följer Google Agent2Agent och mönster för samverkan mellan agenter, särskilt där ansvar, spårbarhet och handoff mellan roller behöver vara tydligt.",
  },
  {
    name: "LLM-säkerhet och kvalitet",
    text: "AI-stöd behöver guardrails, testbarhet och tydliga gränser. Jag arbetar med OWASP-perspektiv, prompt injection-risker och praktiska kontroller för system som använder LLM:er.",
  },
] as const;

const practicalUses = [
  "Snabbare kartläggning av kodbaser och beroenden",
  "Bättre tekniska beslutsunderlag och dokumentation",
  "Stöd för testdesign, edge cases och kvalitetssäkring",
  "Automatiserade arbetsflöden kring utveckling och leverans",
  "Rimliga säkerhetsgränser för AI-stödda interna verktyg",
] as const;

export default function AgenticAiPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "agentic-ai" }]}>
      <div className="mb-12 md:mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
          Agentic AI
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-[#A1A1A1]">
          Jag ser Agentic AI som ett praktiskt verktyg för bättre
          mjukvaruarbete: snabbare förståelse, tydligare beslutsunderlag och
          mer konsekvent genomförande. Det fungerar bäst när det kombineras med
          erfaren systemdesign och tydliga kvalitetsgränser.
        </p>
      </div>

      <section className="mb-16 md:mb-24">
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-[#919191]">
          FOKUS
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {focusAreas.map((area) => (
            <article
              key={area.name}
              className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111111] p-6"
            >
              <h2 className="mb-2 text-lg font-semibold text-[#EDEDED]">
                {area.name}
              </h2>
              <p className="text-sm leading-relaxed text-[#A1A1A1]">
                {area.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-[#919191]">
          PRAKTISK ANVÄNDNING
        </p>
        <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111111] p-6 sm:p-8">
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {practicalUses.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#A1A1A1]">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F59E0B]"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-[#919191]">
          KOPPLING TILL MIN PROFIL
        </p>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-[#A1A1A1]">
          <p>
            Min bakgrund är inte AI först och mjukvaruutveckling sedan. Den är
            tvärtom. Jag kommer från backend, integrationer, molnplattformar och
            teknisk ledning, och använder AI där det faktiskt stärker arbetet.
          </p>
          <p>
            Det gör att jag är mest intresserad av AI som gör tekniska team mer
            effektiva, inte av lösningar som bara ser imponerande ut i en demo.
          </p>
          <Link
            href="/about"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[rgba(255,255,255,0.15)] px-6 py-3 text-sm font-semibold text-[#EDEDED] outline-none ring-offset-[#0A0A0A] transition-colors duration-200 ease-out hover:border-[#F59E0B] hover:text-[#F59E0B] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            Läs min CV-profil
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
