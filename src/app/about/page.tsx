import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ContactButton } from "./contact-button";
import { site } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Om Rasmus Thunborg | CV och erfarenhet",
  description:
    "CV-profil för Rasmus Thunborg: Expert Software Engineer i Göteborg med erfarenhet från backend, molnarkitektur, teknisk ledning, integrationer och Agentic AI.",
  keywords: [
    "Rasmus Thunborg",
    "CV",
    "Expert Software Engineer",
    "mjukvaruarkitekt Göteborg",
    "backend-utvecklare",
    "Agentic AI",
  ],
  path: "/about",
});

const assignments = [
  {
    name: "Visma Enterprise",
    years: "2026",
    duration: "4 mån",
    role: "Platform Engineer",
    focus: "AWS, CI/CD, credential-rotation och IAM för HR-plus.",
  },
  {
    name: "Lindex",
    years: "2023–2025",
    duration: "2.5 år",
    role: "Senior Software Engineer",
    focus: ".NET microservices, Azure/Kubernetes, event sourcing och retail-flöden.",
  },
  {
    name: "Polestar",
    years: "2021–2025",
    duration: "4 år",
    role: "Senior Software Engineer / Interim Technical Lead",
    focus: "Finansiella integrationer, AWS serverless, teknisk ledning och mentoring.",
  },
  {
    name: "IKEA",
    years: "2021",
    duration: "6 mån",
    role: "Senior Solution Architect",
    focus: ".NET backend-arkitektur, IAM, Microsoft Graph och legacy-kartläggning.",
  },
  {
    name: "Ericsson",
    years: "2020",
    duration: "1 år",
    role: "Backend Developer",
    focus: "C#/.NET Core, Azure, Docker, MongoDB och interna orderflöden.",
  },
  {
    name: "Volvo",
    years: "2019–2020",
    duration: "1 år",
    role: "Backend Developer",
    focus: "Microservices, provkörningsbokningar, React och Kubernetes.",
  },
] as const;

const skillGroups = [
  {
    label: "Backend och arkitektur",
    items: ".NET, C#, REST, GraphQL, DDD, SOLID, microservices, event sourcing",
  },
  {
    label: "Moln och plattform",
    items: "Azure, AWS Lambda, Kubernetes, Terraform, Docker, CI/CD, IAM",
  },
  {
    label: "Data och integration",
    items: "SQL, MongoDB, DynamoDB, Cosmos DB, Kafka, Service Bus, Snowflake",
  },
  {
    label: "AI och utvecklarflöden",
    items: "Agentic AI, MCP, A2A, prompt engineering, LLM-säkerhet, Codex",
  },
] as const;

const certifications = [
  "SnowPro Core Certification",
  "Microsoft Certified: Azure Fundamentals",
  "GenAI Cybersecurity Solutions: OWASP Top 10 for LLM Apps",
  "Intro to Google's A2A Protocol: Interoperable AI Agents",
  "Introducing MLOps: From Model Development to Deployment",
  "The Product Management for AI and Data Science",
  "How to Tell a Story with Data",
  "Ledarskap 1",
] as const;

const languages = [
  "Svenska: modersmål",
  "Engelska: modersmål",
  "Norska: flytande",
  "Danska: medel",
  "Spanska: grundläggande",
] as const;

export default function AboutPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "about" }]}>
      <div className="mb-12 md:mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
          Rasmus Thunborg
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-[#A1A1A1]">
          Expert Software Engineer i Göteborg. Jag kombinerar klassisk
          backend- och systemarkitektur med Agentic AI, praktisk teknisk
          ledning och en stark förmåga att översätta teknisk analys till
          affärsnytta.
        </p>
      </div>

      <section className="mb-16 md:mb-24">
        <div className="max-w-2xl space-y-6 text-base leading-relaxed text-[#A1A1A1]">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-[#EDEDED]">
              Profil
            </h2>
            <p>
              Jag har över tio års erfarenhet, framför allt inom
              backend-utveckling med .NET, men arbetar lika naturligt med
              TypeScript, React, Tailwind, molnplattformar och moderna
              utvecklarverktyg. Jag trivs bäst där teknik, produkt och
              leverans möts.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-[#EDEDED]">
              Teknisk tyngdpunkt
            </h2>
            <p>
              Mina uppdrag har ofta handlat om integrationer, legacy-system,
              molnarkitektur och team som behöver en tydligare teknisk riktning.
              Jag har byggt och moderniserat system i både AWS- och
              Azure-miljöer, med särskilt fokus på robusta API:er, säker
              åtkomst, automatiserad leverans och driftbar arkitektur.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-[#EDEDED]">
              Arbetssätt
            </h2>
            <p>
              Jag arbetar nära koden och nära teamet. I praktiken betyder det
              tekniska beslut som går att genomföra, dokumentation som går att
              använda och lösningar som teamet kan äga vidare efter min insats.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-[#919191]">
          UTVALDA UPPDRAG
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {assignments.map((assignment) => (
            <div
              key={assignment.name}
              className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111111] p-5"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="font-mono text-sm text-[#F59E0B]">
                  {assignment.name}
                </p>
                <p className="font-mono text-xs text-[#666666]">
                  {assignment.years}
                </p>
              </div>
              <p className="mb-1 text-sm text-[#EDEDED]">{assignment.role}</p>
              <p className="mb-3 font-mono text-xs text-[#666666]">
                {assignment.duration}
              </p>
              <p className="text-sm leading-relaxed text-[#A1A1A1]">
                {assignment.focus}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-[#919191]">
          TEKNISK PROFIL
        </p>
        <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111111] p-6 sm:p-8">
          <div className="space-y-5">
            {skillGroups.map((group, index) => (
              <div
                key={group.label}
                className={index === 0 ? "" : "border-t border-[rgba(255,255,255,0.08)] pt-5"}
              >
                <span className="font-mono text-sm text-[#919191]">
                  {group.label}
                </span>
                <p className="mt-1 text-sm leading-relaxed text-[#A1A1A1]">
                  {group.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-[#919191]">
          BAKGRUND
        </p>
        <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111111] p-6 sm:p-8">
          <div>
            <span className="font-mono text-sm text-[#919191]">
              Utbildning
            </span>
            <p className="text-base text-[#EDEDED]">
              Kandidatexamen i Software Engineering &amp; Management,
              Göteborgs universitet
            </p>
          </div>
          <div className="mt-5 border-t border-[rgba(255,255,255,0.08)] pt-5">
            <span className="font-mono text-sm text-[#919191]">
              Certifieringar och kurser
            </span>
            <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-[#A1A1A1]">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 border-t border-[rgba(255,255,255,0.08)] pt-5">
            <span className="font-mono text-sm text-[#919191]">Språk</span>
            <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {languages.map((language) => (
                <li key={language} className="text-sm text-[#A1A1A1]">
                  {language}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 border-t border-[rgba(255,255,255,0.08)] pt-5">
            <a
              href={site.cvPath}
              download
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-[#0A0A0A] outline-none ring-offset-[#0A0A0A] transition-colors duration-200 ease-out hover:bg-[#D97706] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              Ladda ner CV (PDF)
            </a>
          </div>
        </div>
      </section>

      <section>
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-[#919191]">
          KONTAKT
        </p>
        <div className="space-y-3">
          <p className="text-base text-[#A1A1A1]">
            Vill du prata om ett uppdrag, en roll eller ett tekniskt problem?
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ContactButton />
            <Link
              href="/case-studies"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[rgba(255,255,255,0.15)] px-6 py-3 text-sm font-semibold text-[#EDEDED] outline-none ring-offset-[#0A0A0A] transition-colors duration-200 ease-out hover:border-[#F59E0B] hover:text-[#F59E0B] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              Se utvalda projekt
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
