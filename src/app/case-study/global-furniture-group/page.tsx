import { CaseStudyLayout } from "@/components/case-study";
import type { CaseStudyMetric } from "@/components/case-study";
import { GlobalFurnitureGroupDiagram } from "@/components/case-study/diagrams/global-furniture-group-diagram";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title:
    "Backend architecture for 3D modeling | Rasmus Thunborg",
  description:
    "Selected project: complete .NET backend architecture for internal 3D modeling, IAM, CI/CD, and legacy migration.",
  path: "/case-study/global-furniture-group",
  openGraphType: "article",
});

const description =
  "Complete .NET backend architecture for internal 3D modeling, IAM, CI/CD, and legacy migration.";

const metrics: CaseStudyMetric[] = [
  {
    label: "Design to MVP",
    before: "",
    after: "8 weeks",
    delta: "Delivered",
    improvement: "positive",
  },
  {
    label: "API-endpoints",
    before: "0",
    after: "24",
    delta: "Ny backend",
    improvement: "positive",
  },
  {
    label: "AD-compliance",
    before: "Missing",
    after: "100%",
    delta: "Full compliance",
    improvement: "positive",
  },
  {
    label: "Legacy mapping",
    before: "None",
    after: "Complete",
    delta: "Complete plan",
    improvement: "positive",
  },
];

export default function GlobalFurnitureGroupCaseStudyPage() {
  return (
      <CaseStudyLayout
        slug="global-furniture-group"
        title="Backend Architecture for 3D Modeling"
        description={description}
        industry="Retail / Enterprise"
        timeline="6 months (2021)"
        problemNarrative={
          <>
            <p className="mb-4">
              The client was developing a new internal application for 3D
              modeling. The project needed a complete .NET backend architecture
              from the ground up: authentication, authorization, API design,
              and data model.
            </p>
            <p className="mb-4">
              In parallel, an older Python backend handled existing
              integrations. The system was undocumented and no one on the team
              had complete knowledge of its functionality. The migration
              required reverse engineering before it could be planned.
            </p>
            <p>
              The client needed a senior software architect who could design
              the entire backend layer, integrate with Active Directory, and
              map the legacy system for an orderly transition.
            </p>
          </>
        }
        architectureViewer={<GlobalFurnitureGroupDiagram />}
        interventionNarrative={
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong className="text-[#EDEDED]">
                .NET backend architecture from scratch:
              </strong>{" "}
              Designed and implemented the full backend solution with a clear
              domain model, API contracts, and security architecture.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                IAM with Active Directory and Microsoft Graph:
              </strong>{" "}
              Identity and access management based on the client&apos;s
              existing Active Directory. Integrated Microsoft Graph and Azure AD
              for robust authentication and authorization.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                CI/CD in Azure DevOps:
              </strong>{" "}
              Automated pipelines for build, testing, and deployment. Optimized
              the MongoDB data model for 3D model data.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Reverse engineering of Python legacy:
              </strong>{" "}
              Mapped existing integrations and functionality in the
              undocumented Python backend. Defined a complete migration
              strategy to the new platform.
            </li>
          </ul>
        }
        metrics={metrics}
        outcomeNarrative={
          <>
            <p className="mb-4">
              Within eight weeks, the MVP was delivered with 24 API endpoints,
              full AD compliance, and a complete data model in MongoDB. The
              team had a production-ready backend to build on.
            </p>
            <p>
              The legacy mapping gave the client a clear view of what needed to
              be migrated and in what order. The migration plan minimized the
              risk of disruption and gave the project a safe path forward.
            </p>
          </>
        }
      />
  );
}
