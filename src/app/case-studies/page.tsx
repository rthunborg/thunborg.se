import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Utvalda projekt | Rasmus Thunborg",
  description:
    "Utvalda projekt och uppdrag från Rasmus Thunborgs arbete med mjukvaruarkitektur, backend, moln, teknisk ledning och modernisering.",
  keywords: [
    "Rasmus Thunborg",
    "utvalda projekt",
    "case studies",
    "mjukvaruarkitektur",
    "backend",
    "teknisk ledning",
  ],
  path: "/case-studies",
});

const caseStudies = [
  {
    slug: "nordic-shipping",
    company: "Nordiskt Rederi",
    title: "Från Excel-kaos till realtidsplattform för säsongsrekrytering",
    summary:
      "Ersatte manuella Excel-flöden med en modern realtidsplattform med rollbaserad åtkomst för sju externa parter, ändringslogg och GDPR-grund.",
    metric: { label: "Datadelning", delta: "↓ ~95%" },
    industry: "Maritim / HR",
    timeline: "4 månader (2025–2026)",
  },
  {
    slug: "nordic-hr-group",
    company: "Nordeuropeisk HR-Koncern",
    title: "Automatiserad Credential-Rotation",
    summary:
      "Från manuellt hanterade credentials till automatiserad rotation var 30:e dag med AWS Lambda och GitHub Actions.",
    metric: { label: "Säkerhetsrisk", delta: "Hög → Minimal" },
    industry: "HR / Enterprise SAAS",
    timeline: "4 månader (2026)",
  },
  {
    slug: "nordic-fashion-chain",
    company: "Ledande Nordisk Modekedja",
    title: "Från Legacy till Eventdriven Arkitektur",
    summary:
      "Moderniserade legacy-system för order, lager och WMS med .NET microservices, event sourcing och Azure/Kubernetes.",
    metric: { label: "Incidenter", delta: "↓ 88%" },
    industry: "Fashion / E-handel",
    timeline: "2.5 år (on demand)",
  },
  {
    slug: "global-furniture-group",
    company: "Världsledande Möbelkoncern",
    title: "Backend-Arkitektur för 3D-Modellering",
    summary:
      "Komplett .NET backend-arkitektur för intern 3D-modelleringsapp, inklusive IAM, CI/CD och legacy-migration.",
    metric: { label: "Design till MVP", delta: "8 veckor" },
    industry: "Detaljhandel / Enterprise",
    timeline: "6 månader (2021)",
  },
  {
    slug: "global-ev-manufacturer",
    company: "Världsledande Elbilstillverkare",
    title: "Teknisk Ledning för Finansiella Integrationer",
    summary:
      "Senior teknisk ledning som drev arkitekturbeslut, handledde teamet och stabiliserade komplexa finansiella integrationer.",
    metric: { label: "Leveranstakt", delta: "+45%" },
    industry: "Automotive / FinTech",
    timeline: "4 år (2021–2025)",
  }

] as const;

const cardClasses =
  "group block bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-lg p-6 sm:p-8 hover:border-[rgba(245,158,11,0.3)] transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]";

export default function CaseStudiesPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "case-studies" }]}>
        <div className="mb-12 md:mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
            Utvalda projekt
          </h1>
          <p className="text-lg text-[#A1A1A1] max-w-2xl leading-relaxed">
            Några uppdrag där jag har arbetat nära arkitektur, kod,
            integrationer, plattform och teknisk ledning. Varje projekt visar
            en annan del av min praktiska erfarenhet.
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
