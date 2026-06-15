import { CaseStudyLayout } from "@/components/case-study";
import type { CaseStudyMetric } from "@/components/case-study";
import { NordicFashionChainDiagram } from "@/components/case-study/diagrams/nordic-fashion-chain-diagram";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "From legacy to event-driven architecture | Rasmus Thunborg",
  description:
    "Selected project: modernization of legacy systems for order, inventory, and WMS with .NET microservices, event sourcing, and Azure/Kubernetes.",
  path: "/case-study/nordic-fashion-chain",
  openGraphType: "article",
});

const description =
  "Modernization of legacy systems for order, inventory, and WMS with .NET microservices, event sourcing, and Azure/Kubernetes.";

const metrics: CaseStudyMetric[] = [
  {
    label: "Deploy frequency",
    before: "1/month",
    after: "3/week",
    delta: "↑ 1100%",
    improvement: "positive",
  },
  {
    label: "Incidents",
    before: "8/month",
    after: "1/month",
    delta: "↓ 88%",
    improvement: "positive",
  },
  {
    label: "Lead time",
    before: "3 weeks",
    after: "4 days",
    delta: "↓ 81%",
    improvement: "positive",
  },
  {
    label: "Availability",
    before: "97%",
    after: "99.8%",
    delta: "↑ 2.8pp",
    improvement: "positive",
  },
];

export default function NordicFashionChainCaseStudyPage() {
  return (
      <CaseStudyLayout
        slug="nordic-fashion-chain"
        title="From Legacy to Event-Driven Architecture"
        description={description}
        industry="Fashion / E-commerce"
        timeline="2.5 years (on demand, 8–24h/week)"
        problemNarrative={
          <>
            <p className="mb-4">
              The client&apos;s order handling, inventory flows, and WMS systems
              were tightly coupled to Oracle databases and PostNord
              integrations. Every change carried cascading risk: an update in
              one system could break flows in three others.
            </p>
            <p className="mb-4">
              Integrations were handled manually and the deployment cycle was
              limited to once per month. Incident frequency was high, and the
              team spent more time on firefighting than on new delivery.
            </p>
            <p>
              The situation slowed both e-commerce and store operations. The
              client needed modernization that could be carried out
              incrementally without shutting down ongoing business.
            </p>
          </>
        }
        architectureViewer={<NordicFashionChainDiagram />}
        interventionNarrative={
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong className="text-[#EDEDED]">
                .NET microservices with DDD and event sourcing:
              </strong>{" "}
              Broke up the legacy monolith into domain-specific services with
              clear aggregates and event-driven flows. Each service could be
              deployed and scaled independently.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Azure/Kubernetes with Terraform IaC:
              </strong>{" "}
              All infrastructure defined as code. Reproducible environments,
              automated deployments, and consistent configuration between
              staging and production.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Cosmos DB, Service Bus, Event Grid, and Kafka:
              </strong>{" "}
              The right tool for each integration. Service Bus for commands,
              Event Grid for notifications, Kafka for high-capacity streams,
              and Cosmos DB for domain data.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Grafana observability:
              </strong>{" "}
              End-to-end monitoring across all services. The team could
              identify and fix problems before they affected end users.
            </li>
          </ul>
        }
        metrics={metrics}
        outcomeNarrative={
          <>
            <p className="mb-4">
              Deploy frequency increased from once per month to three times
              per week. Incidents decreased by 88%, and lead time went from
              three weeks to four days.
            </p>
            <p>
              The new event-driven architecture eliminated cascading risks and
              helped the client respond faster to seasonal peaks and market
              changes. The team could focus on new delivery instead of handling
              system failures.
            </p>
          </>
        }
      />
  );
}
