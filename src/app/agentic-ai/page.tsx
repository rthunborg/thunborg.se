import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Agentic AI consulting for software teams | Rasmus Thunborg",
  description:
    "Practical Agentic AI consulting for software teams: MCP, A2A, LLM security, and AI-driven developer workflows with engineering quality controls.",
  keywords: [
    "Agentic AI",
    "Agentic AI consulting",
    "Rasmus Thunborg",
    "Model Context Protocol",
    "MCP",
    "Google Agent2Agent",
    "LLM security",
    "AI development",
  ],
  path: "/agentic-ai",
});

const focusAreas = [
  {
    name: "Agent-based developer workflows",
    text: "I actively work with how AI agents can support analysis, implementation, testing, documentation, and code review without replacing technical judgment.",
  },
  {
    name: "MCP and tool integration",
    text: "Model Context Protocol makes agent workflows practically useful when they are connected to the right tools, data, and constraints. I focus on integrations that create value in real workflows.",
  },
  {
    name: "A2A and multi-agent systems",
    text: "I follow Google Agent2Agent and patterns for collaboration between agents, especially where responsibility, traceability, and handoff between roles need to be clear.",
  },
  {
    name: "LLM security and quality",
    text: "AI support needs guardrails, testability, and clear boundaries. I work with OWASP perspectives, prompt injection risks, and practical controls for systems that use LLMs.",
  },
] as const;

const practicalUses = [
  "Faster mapping of codebases and dependencies",
  "Better technical decision support and documentation",
  "Support for test design, edge cases, and quality assurance",
  "Automated workflows around development and delivery",
  "Reasonable security boundaries for AI-assisted internal tools",
] as const;

export default function AgenticAiPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "agentic-ai" }]}>
      <div className="mb-12 md:mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
          Agentic AI
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-[#A1A1A1]">
          I see Agentic AI as a practical tool for better software work:
          faster understanding, clearer decision support, and more consistent
          delivery. It works best when combined with experienced system design
          and clear quality boundaries.
        </p>
      </div>

      <section className="mb-16 md:mb-24">
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-[#919191]">
          FOCUS
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
          PRACTICAL USE
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
          CONNECTION TO MY PROFILE
        </p>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-[#A1A1A1]">
          <p>
            My background is not AI first and software development second. It
            is the other way around. I come from backend systems, integrations,
            cloud platforms, and technical leadership, and I use AI where it
            genuinely strengthens the work.
          </p>
          <p>
            That makes me most interested in AI that makes technical teams more
            effective, not solutions that only look impressive in a demo.
          </p>
          <Link
            href="/about"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[rgba(255,255,255,0.15)] px-6 py-3 text-sm font-semibold text-[#EDEDED] outline-none ring-offset-[#0A0A0A] transition-colors duration-200 ease-out hover:border-[#F59E0B] hover:text-[#F59E0B] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            Read about me
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
