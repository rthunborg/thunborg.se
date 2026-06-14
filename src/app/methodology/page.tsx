import { PageShell } from "@/components/page-shell";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Så arbetar jag | Rasmus Thunborg",
  description:
    "Min arbetsmetodik: förstå läget, skapa riktning, genomföra nära koden och lämna över så teamet kan äga resultatet.",
  keywords: [
    "Rasmus Thunborg",
    "arbetsmetodik",
    "mjukvaruarkitektur",
    "teknisk ledning",
    "software engineering",
  ],
  path: "/methodology",
});

const phases = [
  {
    number: "01",
    name: "Förstå",
    tagline: "Jag börjar med verkligheten, inte en färdig lösning",
    description:
      "Jag läser kod, pratar med teamet och kartlägger systemets faktiska beteende. Målet är att skilja tekniska symptom från orsaker och hitta var insatsen gör mest nytta.",
    deliverable: "En tydlig bild av nuläge, risker och prioriteringar",
  },
  {
    number: "02",
    name: "Rikta",
    tagline: "Tekniska beslut ska gå att använda",
    description:
      "Jag formulerar en riktning som teamet kan följa: systemgränser, dataflöden, risker, sekvensering och tydliga tradeoffs. Beslut dokumenteras lagom mycket, men tillräckligt för att bära över tid.",
    deliverable: "Beslut, principer och nästa steg som teamet kan agera på",
  },
  {
    number: "03",
    name: "Genomför",
    tagline: "Arkitektur blir verklig först i koden",
    description:
      "Jag arbetar nära implementationen: kod, granskning, testning, pipelines, driftbarhet och observability. Det gör att lösningen möter verkliga begränsningar istället för att stanna som ett diagram.",
    deliverable: "Levererad förändring med fungerande teknisk grund",
  },
  {
    number: "04",
    name: "Lämna över",
    tagline: "Teamet ska kunna fortsätta utan mig",
    description:
      "Jag prioriterar kunskapsöverföring, dokumentation och tydligt ägarskap. En bra insats ska göra teamet starkare, inte skapa ett nytt beroende.",
    deliverable: "Överlämnad kunskap, dokumentation och tydligt ägarskap",
  },
] as const;

export default function MetodikPage() {
  return (
      <PageShell breadcrumbSegments={[{ label: "methodology" }]}>
        <div className="mb-12 md:mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
            Så arbetar jag
          </h1>
          <p className="text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
            Min metod är enkel: förstå läget, skapa riktning, genomföra nära
            koden och lämna över så att teamet kan äga resultatet vidare.
          </p>
        </div>

        <div className="space-y-0">
          {phases.map((phase, index) => (
            <section
              key={phase.number}
              className={`py-12 md:py-16 ${index < phases.length - 1 ? "border-b border-[rgba(255,255,255,0.08)]" : ""}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12">
                <div>
                  <span className="font-mono text-4xl font-bold text-[rgba(245,158,11,0.2)]">
                    {phase.number}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#EDEDED] mb-1">
                    {phase.name}
                  </h2>
                  <p className="font-mono text-sm text-[#F59E0B] mb-4">
                    {phase.tagline}
                  </p>
                  <p className="text-base text-[#A1A1A1] leading-relaxed mb-6 max-w-[540px]">
                    {phase.description}
                  </p>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#919191] uppercase tracking-widest whitespace-nowrap pt-0.5">
                      Leverabel
                    </span>
                    <p className="text-sm text-[#EDEDED]">
                      {phase.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
    </PageShell>
  );
}
