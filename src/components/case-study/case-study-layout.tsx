import type { CaseStudyLayoutProps } from "./types";
import { MetricCard } from "./metric-card";
import { PageShell } from "@/components/page-shell";

export function CaseStudyLayout({
  slug,
  title,
  industry,
  timeline,
  problemNarrative,
  architectureViewer,
  interventionNarrative,
  metrics,
  outcomeNarrative,
}: CaseStudyLayoutProps) {
  return (
    <PageShell breadcrumbSegments={[{ label: "case-studies", href: "/case-studies" }, { label: slug }]}>
    <article>
      {/* Header */}
      <header className="max-w-4xl mx-auto pb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#919191] border border-[rgba(255,255,255,0.08)] rounded-full px-3 py-1 inline-block">
            {industry}
          </span>
          <span className="font-mono text-sm text-[#F59E0B]">{timeline}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDED] font-sans tracking-tight">
          {title}
        </h1>
      </header>

      {/* Starting point */}
      <section className="max-w-4xl mx-auto py-12 sm:py-16 border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[#919191] mb-4">
          Starting point
        </h2>
        <div className="text-[#EDEDED]/90 text-base sm:text-lg leading-relaxed">
          {problemNarrative}
        </div>
      </section>

      {/* Architecture Viewer */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16">
        {architectureViewer}
      </section>

      {/* Contribution */}
      <section className="max-w-4xl mx-auto py-12 sm:py-16 border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[#919191] mb-4">
          My contribution
        </h2>
        <div className="text-[#EDEDED]/90 text-base sm:text-lg leading-relaxed">
          {interventionNarrative}
        </div>
      </section>

      {/* Impact metrics */}
      <section className="max-w-4xl mx-auto py-12 sm:py-16 border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[#919191] mb-6">
          Measurable impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="max-w-4xl mx-auto py-12 sm:py-16 border-t border-[rgba(255,255,255,0.08)]">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[#919191] mb-4">
          Outcome
        </h2>
        <div className="text-[#EDEDED]/90 text-base sm:text-lg leading-relaxed">
          {outcomeNarrative}
        </div>
      </section>
    </article>
    </PageShell>
  );
}
