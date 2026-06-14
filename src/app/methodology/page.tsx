import { PageShell } from "@/components/page-shell";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "How I work | Rasmus Thunborg",
  description:
    "My working method: understand the situation, create direction, deliver close to the code, and hand over so the team can own the result.",
  keywords: [
    "Rasmus Thunborg",
    "working method",
    "software architecture",
    "technical leadership",
    "software engineering",
  ],
  path: "/methodology",
});

const phases = [
  {
    number: "01",
    name: "Understand",
    tagline: "I start with reality, not a ready-made solution",
    description:
      "I read code, talk to the team, and map how the system actually behaves. The goal is to separate technical symptoms from causes and find where the effort creates the most value.",
    deliverable: "A clear view of the current state, risks, and priorities",
  },
  {
    number: "02",
    name: "Direct",
    tagline: "Technical decisions need to be usable",
    description:
      "I define a direction the team can follow: system boundaries, data flows, risks, sequencing, and clear tradeoffs. Decisions are documented with enough detail to hold up over time.",
    deliverable: "Decisions, principles, and next steps the team can act on",
  },
  {
    number: "03",
    name: "Deliver",
    tagline: "Architecture becomes real in the code",
    description:
      "I work close to implementation: code, review, testing, pipelines, operability, and observability. That makes the solution meet real constraints instead of staying as a diagram.",
    deliverable: "Delivered change with a working technical foundation",
  },
  {
    number: "04",
    name: "Hand over",
    tagline: "The team should be able to continue without me",
    description:
      "I prioritize knowledge transfer, documentation, and clear ownership. A good engagement should make the team stronger, not create a new dependency.",
    deliverable: "Transferred knowledge, documentation, and clear ownership",
  },
] as const;

export default function MetodikPage() {
  return (
      <PageShell breadcrumbSegments={[{ label: "methodology" }]}>
        <div className="mb-12 md:mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
            How I work
          </h1>
          <p className="text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
            My method is simple: understand the situation, create direction,
            deliver close to the code, and hand over so the team can continue
            owning the result.
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
                      Deliverable
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
