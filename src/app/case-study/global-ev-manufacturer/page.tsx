import { CaseStudyLayout } from "@/components/case-study";
import type { CaseStudyMetric } from "@/components/case-study";
import { GlobalEvManufacturerDiagram } from "@/components/case-study/diagrams/global-ev-manufacturer-diagram";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Teknisk ledning för finansiella integrationer | Rasmus Thunborg",
  description:
    "Utvalt projekt: teknisk ledning, AWS serverless och finansiella integrationer för en världsledande elbilstillverkare.",
  path: "/case-study/global-ev-manufacturer",
});

const metrics: CaseStudyMetric[] = [
  {
    label: "Leveranstakt",
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
    before: "3 månader",
    after: "3 veckor",
    delta: "↓ 77%",
    improvement: "positive",
  },
  {
    label: "Säkerhetsincidenter",
    before: "Varierande",
    after: "0",
    delta: "↓ 100%",
    improvement: "positive",
  },
];

export default function GlobalEvManufacturerCaseStudyPage() {
  return (
      <CaseStudyLayout
        slug="global-ev-manufacturer"
        title="Teknisk Ledning för Finansiella Integrationer"
        industry="Automotive / FinTech"
        timeline="4 år (2021–2025)"
        problemNarrative={
          <>
            <p className="mb-4">
              Kundens kundfinansieringsflöde krävde integrationer mot
              flera externa finansiella leverantörer. Systemet kördes på AWS
              serverless men saknade senior teknisk ledning.
              Arkitekturbeslut fattades ad hoc och onboarding av nya
              utvecklare tog tre månader.
            </p>
            <p className="mb-4">
              Varje ny leverantörsintegration innebar osäkerhet kring
              OAuth2-flöden, TLS-konfiguration och datamodellering. Utan en
              tydlig teknisk riktning växte komplexiteten snabbare än
              teamets förmåga att hantera den.
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
              Satte teknisk riktning tillsammans med solution architect,
              koordinerade genomförandet och jobbade tätt med Digital
              Lead/PO. Drev arkitekturbeslut från dag ett.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                AWS Lambda/DynamoDB serverless:
              </strong>{" "}
              Ny funktionalitet på serverless-stack med .NET,
              TypeScript och React. Automatiserade tester och
              Terraform-baserad infrastruktur.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Mentoring och kunskapsöverföring:
              </strong>{" "}
              Strukturerad mentoring av utvecklare.               Dokumenterad
              vision för mjukvaruarkitekturen och beslutsdagbok som minskade
              onboarding-tiden från tre månader till tre veckor.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Datadog/Kibana monitoring:
              </strong>{" "}
              Post-production monitoring som gav teamet realtidsinsyn i
              systemhälsa och prestanda.
            </li>
          </ul>
        }
        metrics={metrics}
        outcomeNarrative={
          <>
            <p className="mb-4">
              Under de fyra år jag samarbetade med kunden ökade teamets leveranstakt med
              45%. Uptime förbättrades från 98.5% till 99.9% och
              onboarding-tiden minskade från tre månader till tre veckor.
            </p>
            <p>
              Den strukturerade tekniska ledningen gav kunden en stabil
              grund för sina finansiella integrationer. Teamet kunde hantera
              nya leverantörer med förtroende och noll säkerhetsincidenter
              under hela uppdragsperioden.
            </p>
          </>
        }
      />
  );
}
