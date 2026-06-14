import { CaseStudyLayout } from "@/components/case-study";
import type { CaseStudyMetric } from "@/components/case-study";
import { NordicFashionChainDiagram } from "@/components/case-study/diagrams/nordic-fashion-chain-diagram";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Från legacy till eventdriven arkitektur | Rasmus Thunborg",
  description:
    "Utvalt projekt: modernisering av legacy-system för order, lager och WMS med .NET microservices, event sourcing och Azure/Kubernetes.",
  path: "/case-study/nordic-fashion-chain",
});

const metrics: CaseStudyMetric[] = [
  {
    label: "Deploy-frekvens",
    before: "1/mån",
    after: "3/vecka",
    delta: "↑ 1100%",
    improvement: "positive",
  },
  {
    label: "Incidenter",
    before: "8/mån",
    after: "1/mån",
    delta: "↓ 88%",
    improvement: "positive",
  },
  {
    label: "Lead time",
    before: "3 veckor",
    after: "4 dagar",
    delta: "↓ 81%",
    improvement: "positive",
  },
  {
    label: "Tillgänglighet",
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
        title="Från Legacy till Eventdriven Arkitektur"
        industry="Fashion / E-handel"
        timeline="2.5 år (on demand, 8–24h/vecka)"
        problemNarrative={
          <>
            <p className="mb-4">
              Kundens orderhantering, lagerflöden och WMS-system var tätt
              kopplade till Oracle-databaser och PostNord-integrationer.
              Varje förändring innebar kaskadrisker: en uppdatering i ett
              system kunde slå ut flöden i tre andra.
            </p>
            <p className="mb-4">
              Integrationer hanterades manuellt och deploy-cykeln var
              begränsad till en gång per månad. Incidentfrekvensen var hög
              och teamet spenderade mer tid på brandkårsutryckningar än på
              nya leveranser.
            </p>
            <p>
              Situationen bromsade både e-handeln och butiksverksamheten.
              Kunden behövde en modernisering som kunde genomföras stegvis,
              utan att stänga ner pågående verksamhet.
            </p>
          </>
        }
        architectureViewer={<NordicFashionChainDiagram />}
        interventionNarrative={
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong className="text-[#EDEDED]">
                .NET microservices med DDD och event sourcing:
              </strong>{" "}
              Bröt upp legacy-monoliten i domänspecifika tjänster med tydliga
              aggregates och eventdrivna flöden. Varje tjänst kunde deployas
              och skalas oberoende.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Azure/Kubernetes med Terraform IaC:
              </strong>{" "}
              All infrastruktur definierad som kod. Reproducerbara miljöer,
              automatiserade deployments och konsekvent konfiguration mellan
              staging och produktion.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Cosmos DB, Service Bus, Event Grid och Kafka:
              </strong>{" "}
              Rätt verktyg för varje integration. Service Bus för kommandon,
              Event Grid för notifieringar, Kafka för högkapacitetsströmmar
              och Cosmos DB för domändata.
            </li>
            <li>
              <strong className="text-[#EDEDED]">
                Grafana observability:
              </strong>{" "}
              End-to-end monitoring över alla tjänster. Teamet kunde
              identifiera och åtgärda problem innan de påverkade
              slutanvändare.
            </li>
          </ul>
        }
        metrics={metrics}
        outcomeNarrative={
          <>
            <p className="mb-4">
              Deploy-frekvensen ökade från en gång per månad till tre gånger
              per vecka. Incidenter minskade med 88% och lead time gick från
              tre veckor till fyra dagar.
            </p>
            <p>
              Den nya eventdrivna arkitekturen eliminerade kaskadrisker och
              gav kunden möjlighet att reagera snabbare på säsongstoppar och
              marknadsförändringar. Teamet kunde fokusera på nya leveranser
              istället för att hantera systemfel.
            </p>
          </>
        }
      />
  );
}
