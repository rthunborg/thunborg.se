import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { createPageMetadata } from "@/lib/metadata";
import { CaseStudiesItemListJsonLd } from "@/components/seo/page-jsonld";

export const metadata = createPageMetadata({
  title: "Software architecture case studies | Rasmus Thunborg",
  description:
    "Selected software architecture case studies covering backend systems, cloud, technical leadership, integrations, modernization, and Agentic AI.",
  keywords: [
    "Rasmus Thunborg",
    "software architecture case studies",
    "selected projects",
    "case studies",
    "software architecture",
    "backend",
    "technical leadership",
  ],
  path: "/case-studies",
});

const caseStudies = [
  {
    slug: "nordic-shipping",
    company: "Nordic Shipping Company",
    title: "From Excel Chaos to a Real-Time Seasonal Recruitment Platform",
    summary:
      "Replaced manual Excel flows with a modern real-time platform with role-based access for seven external partners, an audit trail, and a GDPR-ready foundation.",
    metric: { label: "Data sharing", delta: "↓ ~95%" },
    industry: "Maritime / HR",
    timeline: "4 months (2025–2026)",
  },
  {
    slug: "nordic-hr-group",
    company: "Northern European HR Group",
    title: "Automated Credential Rotation",
    summary:
      "Moved from manually handled credentials to automated rotation every 30 days with AWS Lambda and GitHub Actions.",
    metric: { label: "Security risk", delta: "High → Minimal" },
    industry: "HR / Enterprise SAAS",
    timeline: "4 months (2026)",
  },
  {
    slug: "nordic-fashion-chain",
    company: "Leading Nordic Fashion Chain",
    title: "From Legacy to Event-Driven Architecture",
    summary:
      "Modernized legacy systems for order, inventory, and WMS with .NET microservices, event sourcing, and Azure/Kubernetes.",
    metric: { label: "Incidents", delta: "↓ 88%" },
    industry: "Fashion / E-commerce",
    timeline: "2.5 years (on demand)",
  },
  {
    slug: "global-furniture-group",
    company: "Global Furniture Group",
    title: "Backend Architecture for 3D Modeling",
    summary:
      "Complete .NET backend architecture for an internal 3D modeling app, including IAM, CI/CD, and legacy migration.",
    metric: { label: "Design to MVP", delta: "8 weeks" },
    industry: "Retail / Enterprise",
    timeline: "6 months (2021)",
  },
  {
    slug: "global-ev-manufacturer",
    company: "Global EV Manufacturer",
    title: "Technical Leadership for Financial Integrations",
    summary:
      "Senior technical leadership that drove architecture decisions, mentored the team, and stabilized complex financial integrations.",
    metric: { label: "Delivery pace", delta: "+45%" },
    industry: "Automotive / FinTech",
    timeline: "4 years (2021–2025)",
  }

] as const;

const cardClasses =
  "group block bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6 sm:p-8 hover:border-[rgba(245,158,11,0.3)] transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]";

export default function CaseStudiesPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "case-studies" }]}>
        <CaseStudiesItemListJsonLd caseStudies={caseStudies} />
        <div className="mb-12 md:mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
            Selected projects
          </h1>
          <p className="text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
            A few assignments where I worked close to architecture, code,
            integrations, platform, and technical leadership. Each project
            shows a different part of my practical experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-study/${study.slug}`}
              className={cardClasses}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#919191] border border-[rgba(255,255,255,0.08)] rounded-full px-3 py-1">
                  {study.industry}
                </span>
                <span className="font-mono text-xs text-[#666666]">
                  {study.timeline}
                </span>
              </div>

              <p className="font-mono text-sm text-[#F59E0B] mb-2">
                {study.company}
              </p>
              <h2 className="text-xl font-bold text-[#EDEDED] mb-3 group-hover:text-[#F59E0B] transition-colors duration-200">
                {study.title}
              </h2>
              <p className="text-sm text-[#A1A1A1] leading-relaxed mb-4">
                {study.summary}
              </p>

              <div className="flex items-center gap-2 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                <span className="font-mono text-xs text-[#919191]">
                  {study.metric.label}:
                </span>
                <span className="font-mono text-sm font-semibold text-[#F59E0B]">
                  {study.metric.delta}
                </span>
              </div>
            </Link>
          ))}
        </div>
    </PageShell>
  );
}
