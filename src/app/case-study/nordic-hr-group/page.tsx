import { CaseStudyLayout } from "@/components/case-study";
import type { CaseStudyMetric } from "@/components/case-study";
import { NordicHrGroupDiagram } from "@/components/case-study/diagrams/nordic-hr-group-diagram";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Automated credential rotation | Rasmus Thunborg",
  description:
    "Selected project: from manually handled credentials to automated rotation with AWS Lambda, GitHub Actions, and least privilege.",
  path: "/case-study/nordic-hr-group",
  openGraphType: "article",
});

const description =
  "From manually handled credentials to automated rotation with AWS Lambda, GitHub Actions, and least privilege.";

const metrics: CaseStudyMetric[] = [
  {
    label: "Credential-rotation",
    before: "Manual",
    after: "Every 30 days",
    delta: "Automated",
    improvement: "positive",
  },
  {
    label: "Deploy-process",
    before: "Manual",
    after: "CI/CD",
    delta: "Automated",
    improvement: "positive",
  },
  {
    label: "Environments",
    before: "1",
    after: "3",
    delta: "Test/Staging/Prod",
    improvement: "positive",
  },
  {
    label: "Security risk",
    before: "High",
    after: "Minimal",
    delta: "↓ Significant",
    improvement: "positive",
  },
];

export default function NordicHrGroupCaseStudyPage() {
  return (
      <CaseStudyLayout
        slug="nordic-hr-group"
        title="Automated Credential Rotation"
        description={description}
        industry="HR / Enterprise SAAS"
        timeline="4 months (2026)"
        problemNarrative={
          <>
            <p className="mb-4">
              The client&apos;s HR platform handles sensitive HR and payroll
              data for their customers. Service accounts for MSSQL databases
              and RabbitMQ queues had historically been managed manually, with
              passwords rarely or never rotated.
            </p>
            <p className="mb-4">
              Every credential that is not rotated is a security risk. With
              regulatory requirements for handling sensitive employee data, the
              situation was not acceptable.
            </p>
            <p>
              The client needed an automated solution that rotates credentials
              through AWS Secrets Manager without operational disruption for
              end users, plus an environment strategy that enables safe testing
              before production deployment.
            </p>
          </>
        }
        architectureViewer={<NordicHrGroupDiagram />}
        interventionNarrative={
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong className="text-[#EDEDED]">
                Lambda function (.NET 8 Native AOT):
              </strong>{" "}
              Took a completed Lambda function from the development
              environment to production-ready deployment. Native AOT kept cold
              starts minimal.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                CI/CD in GitHub Actions:
              </strong>{" "}
              Designed and implemented pipelines for build, test, and upload
              of Lambda artifacts to S3. Added branch protection and code
              review flows.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                CloudFormation + IAM least privilege:
              </strong>{" "}
              Infrastructure as code with minimal permissions. Each component
              has exactly the rights it needs, nothing more.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Three-environment strategy:
              </strong>{" "}
              Separate AWS accounts for test, staging, and production with
              environment-specific parameters. Changes are validated at each
              step before they reach production.
            </li>
          </ul>
        }
        metrics={metrics}
        outcomeNarrative={
          <>
            <p className="mb-4">
              Credentials are now rotated automatically every 30 days without
              operational disruption. The deployment process moved from manual
              to fully automated with CI/CD.
            </p>
            <p>
              The security risk dropped from high to minimal. The platform
              team has a documented deployment sequence and can handle future
              changes with confidence.
            </p>
          </>
        }
      />
  );
}
