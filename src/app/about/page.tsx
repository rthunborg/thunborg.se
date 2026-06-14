import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { ContactButton } from "./contact-button";
import { site } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Rasmus Thunborg | CV and experience",
  description:
    "CV profile for Rasmus Thunborg: Software Architect in Gothenburg with experience in backend systems, cloud architecture, technical leadership, integrations, and Agentic AI.",
  keywords: [
    "Rasmus Thunborg",
    "CV",
    "Software Architect",
    "software architect Gothenburg",
    "backend developer",
    "Agentic AI",
  ],
  path: "/about",
});

const assignments = [
  {
    name: "Visma Enterprise",
    years: "2026",
    duration: "4 months",
    role: "Platform Engineer",
    focus: "AWS, CI/CD, credential rotation, and IAM for HR-plus.",
  },
  {
    name: "Lindex",
    years: "2023–2025",
    duration: "2.5 years",
    role: "Senior Backend Consultant",
    focus: ".NET microservices, Azure/Kubernetes, event sourcing, and retail flows.",
  },
  {
    name: "Polestar",
    years: "2021–2025",
    duration: "4 years",
    role: "Senior Backend Consultant / Interim Technical Lead",
    focus: "Financial integrations, AWS serverless, technical leadership, and mentoring.",
  },
  {
    name: "IKEA",
    years: "2021",
    duration: "6 months",
    role: "Senior Solution Architect",
    focus: ".NET backend architecture, IAM, Microsoft Graph, and legacy mapping.",
  },
  {
    name: "Ericsson",
    years: "2020",
    duration: "1 year",
    role: "Backend Developer",
    focus: "C#/.NET Core, Azure, Docker, MongoDB, and internal order flows.",
  },
  {
    name: "Volvo",
    years: "2019–2020",
    duration: "1 year",
    role: "Backend Developer",
    focus: "Microservices, test-drive booking, React, and Kubernetes.",
  },
] as const;

const skillGroups = [
  {
    label: "Backend and architecture",
    items: ".NET, C#, REST, GraphQL, DDD, SOLID, microservices, event sourcing",
  },
  {
    label: "Cloud and platform",
    items: "Azure, AWS Lambda, Kubernetes, Terraform, Docker, CI/CD, IAM",
  },
  {
    label: "Data and integration",
    items: "SQL, MongoDB, DynamoDB, Cosmos DB, Kafka, Service Bus, Snowflake",
  },
  {
    label: "AI and developer workflows",
    items: "Agentic AI, MCP, A2A, prompt engineering, LLM security, Codex",
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
  "Leadership 1",
] as const;

const languages = [
  "Swedish: native",
  "English: native",
  "Norwegian: fluent",
  "Danish: intermediate",
  "Spanish: basic",
] as const;

export default function AboutPage() {
  return (
    <PageShell breadcrumbSegments={[{ label: "about" }]}>
      <div className="mb-12 grid gap-8 md:mb-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
        <div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
            Rasmus Thunborg
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#A1A1A1]">
            Software Architect in Gothenburg. I combine classic backend and
            systems architecture with Agentic AI, hands-on technical leadership,
            and a practical eye for turning technical analysis into business
            value.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.cvPath}
              download
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-[#0A0A0A] outline-none ring-offset-[#0A0A0A] transition-colors duration-200 ease-out hover:bg-[#D97706] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              Download CV (PDF)
            </a>
            <Link
              href="/case-studies"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[rgba(255,255,255,0.15)] px-6 py-3 text-sm font-semibold text-[#EDEDED] outline-none ring-offset-[#0A0A0A] transition-colors duration-200 ease-out hover:border-[#F59E0B] hover:text-[#F59E0B] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              View projects
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#111111] shadow-[0_24px_60px_rgba(0,0,0,0.28)] lg:mx-0">
          <Image
            src="/images/rasmus-thunborg-headshot.jpg"
            alt="Black-and-white headshot of Rasmus Thunborg"
            width={600}
            height={800}
            priority
            className="aspect-[3/4] w-full object-cover"
          />
        </div>
      </div>

      <section className="mb-16 md:mb-24">
        <div className="max-w-2xl space-y-6 text-base leading-relaxed text-[#A1A1A1]">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-[#EDEDED]">
              Profile
            </h2>
            <p>
              I have more than ten years of experience, primarily in backend
              development with .NET, and I work just as naturally with
              TypeScript, React, Tailwind, cloud platforms, and modern
              developer tools. I do my best work where technology, product, and
              delivery meet.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-[#EDEDED]">
              Technical focus
            </h2>
            <p>
              My assignments have often centered on integrations, legacy
              systems, cloud architecture, and teams that need clearer
              technical direction. I have built and modernized systems in both
              AWS and Azure environments, with particular focus on robust APIs,
              secure access, automated delivery, and operable architecture.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-[#EDEDED]">
              Way of working
            </h2>
            <p>
              I work close to both code and team. In practice, that means
              technical decisions that can be implemented, documentation that
              can be used, and solutions the team can continue to own after my
              involvement.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-[#EDEDED]">
              Outside work
            </h2>
            <p>
              I was born and raised in Gothenburg, which is also where I am
              based today. Outside work I like gaming, working out, travelling,
              reading, and getting out into the forest when I need a proper
              reset.
            </p>
            <p>
              I am probably best described as an outgoing introvert. I like
              people, and I love spending time with my partner, family, and
              friends, but home is where I recharge. That also means remote
              work has never felt like a problem. Quiet focus, decent coffee,
              and no commute is a suspiciously effective combination.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 md:mb-24">
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-[#919191]">
          SELECTED ASSIGNMENTS
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
          TECHNICAL PROFILE
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
          BACKGROUND
        </p>
        <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111111] p-6 sm:p-8">
          <div>
            <span className="font-mono text-sm text-[#919191]">
              Education
            </span>
            <p className="text-base text-[#EDEDED]">
              Bachelor&apos;s degree in Software Engineering &amp; Management,
              University of Gothenburg
            </p>
          </div>
          <div className="mt-5 border-t border-[rgba(255,255,255,0.08)] pt-5">
            <span className="font-mono text-sm text-[#919191]">
              Certifications and courses
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
            <span className="font-mono text-sm text-[#919191]">Languages</span>
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
              Download CV (PDF)
            </a>
          </div>
        </div>
      </section>

      <section>
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-[#919191]">
          CONTACT
        </p>
        <div className="space-y-3">
          <p className="text-base text-[#A1A1A1]">
            Want to discuss an assignment, a role, or a technical problem?
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ContactButton />
            <Link
              href="/case-studies"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[rgba(255,255,255,0.15)] px-6 py-3 text-sm font-semibold text-[#EDEDED] outline-none ring-offset-[#0A0A0A] transition-colors duration-200 ease-out hover:border-[#F59E0B] hover:text-[#F59E0B] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              See selected projects
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
