import { CaseStudyLayout } from "@/components/case-study";
import type { CaseStudyMetric } from "@/components/case-study";
import { GlobalEvManufacturerDiagram } from "@/components/case-study/diagrams/global-ev-manufacturer-diagram";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Technical leadership for financial integrations | Rasmus Thunborg",
  description:
    "Selected project: technical leadership, AWS serverless, and financial integrations for a global EV manufacturer.",
  path: "/case-study/global-ev-manufacturer",
  openGraphType: "article",
});

const description =
  "Technical leadership, AWS serverless, and financial integrations for a global EV manufacturer.";

const metrics: CaseStudyMetric[] = [
  {
    label: "Delivery pace",
    before: "Baseline",
    after: "+45%",
    delta: "↑ 45%",
    improvement: "positive",
  },
  {
    label: "Uptime",
    before: "98.5%",
    after: "99.9%",
    delta: "↑ 1.4pp",
    improvement: "positive",
  },
  {
    label: "Onboarding",
    before: "3 months",
    after: "3 weeks",
    delta: "↓ 77%",
    improvement: "positive",
  },
  {
    label: "Security incidents",
    before: "Variable",
    after: "0",
    delta: "↓ 100%",
    improvement: "positive",
  },
];

export default function GlobalEvManufacturerCaseStudyPage() {
  return (
      <CaseStudyLayout
        slug="global-ev-manufacturer"
        title="Technical Leadership for Financial Integrations"
        description={description}
        industry="Automotive / FinTech"
        timeline="4 years (2021–2025)"
        problemNarrative={
          <>
            <p className="mb-4">
              The client&apos;s customer financing flow required integrations
              with several external financial providers. The system ran on AWS
              serverless but lacked senior technical leadership. Architecture
              decisions were made ad hoc, and onboarding new developers took
              three months.
            </p>
            <p className="mb-4">
              Each new provider integration introduced uncertainty around
              OAuth2 flows, TLS configuration, and data modeling. Without clear
              technical direction, complexity grew faster than the team&apos;s
              ability to manage it.
            </p>
          </>
        }
        architectureViewer={<GlobalEvManufacturerDiagram />}
        interventionNarrative={
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong className="text-[#EDEDED]">
                Interim Tech Lead:
              </strong>{" "}
              Set technical direction together with the solution architect,
              coordinated delivery, and worked closely with the Digital
              Lead/PO. Drove architecture decisions from day one.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                AWS Lambda/DynamoDB serverless:
              </strong>{" "}
              New functionality on a serverless stack with .NET, TypeScript,
              and React. Automated tests and Terraform-based infrastructure.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Mentoring and knowledge transfer:
              </strong>{" "}
              Structured developer mentoring. Documented the software
              architecture vision and decision log, reducing onboarding time
              from three months to three weeks.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Datadog/Kibana monitoring:
              </strong>{" "}
              Post-production monitoring that gave the team real-time insight
              into system health and performance.
            </li>
          </ul>
        }
        metrics={metrics}
        outcomeNarrative={
          <>
            <p className="mb-4">
              During the four years I worked with the client, the team&apos;s
              delivery pace increased by 45%. Uptime improved from 98.5% to
              99.9%, and onboarding time dropped from three months to three
              weeks.
            </p>
            <p>
              The structured technical leadership gave the client a stable
              foundation for their financial integrations. The team could
              handle new providers with confidence and had zero security
              incidents during the full engagement.
            </p>
          </>
        }
      />
  );
}
