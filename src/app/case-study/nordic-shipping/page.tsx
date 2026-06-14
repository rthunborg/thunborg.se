import { CaseStudyLayout } from "@/components/case-study";
import type { CaseStudyMetric } from "@/components/case-study";
import { NordicShippingDiagram } from "@/components/case-study/diagrams/nordic-shipping-diagram";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title:
    "Från Excel-kaos till realtidsplattform för säsongsrekrytering | Rasmus Thunborg",
  description:
    "Utvalt projekt: en realtidsplattform med rollbaserad åtkomst, ändringslogg och GDPR-grund, levererad på fyra månader av en resurs.",
  path: "/case-study/nordic-shipping",
});

const metrics: CaseStudyMetric[] = [
  {
    label: "Tid för datadelning med extern part",
    before: "Manuellt Excel-utskick, ~30–60 min/mottagare",
    after: "Omedelbar tillgång via rollstyrd inloggning",
    delta: "↓ ~95%",
    improvement: "positive",
  },
  {
    label: "Datakvalitet och versionskontroll",
    before: "Flera parallella Excel-versioner",
    after: "En gemensam realtidsdatabas med RLS",
    delta: "Eliminerat versionskaos",
    improvement: "positive",
  },
  {
    label: "Spårbarhet vid revision/GDPR",
    before: "Ingen loggning, okontrollerad spridning",
    after: "Fullständig ändringslogg + rollbaserad åtkomst",
    delta: "Från noll → revisionsklar",
    improvement: "positive",
  },
  {
    label: "Tid från koncept till produktion",
    before: "—",
    after: "MVP levererat på 4 månader av en resurs",
    delta: "542 commits, 42 migrationer",
    improvement: "positive",
  },
];

export default function NordicShippingCaseStudyPage() {
  return (
    <CaseStudyLayout
      slug="nordic-shipping"
      title="Från Excel-kaos till realtidsplattform för säsongsrekrytering"
      industry="Maritim / HR"
      timeline="4 månader (okt 2025 – feb 2026)"
      problemNarrative={
        <>
          <p className="mb-4">
            Nordiskt Rederis säsongsrekrytering hanterades genom ett nät av
            Excel-filer som skickades mellan HR, rekryterare och ett halvdussin
            externa parter: cateringpartner, bemanningspartner, lönekontor,
            logistikpartner och besättningsplanering. Varje part behövde sin egen
            delmängd av personaldata, men alla arbetade mot samma källfiler.
            Resultatet var versionskaos: ingen visste säkert vilken fil som var
            den senaste, ändringar tappades bort mellan e-postkedjor, och
            manuella kopieringsfel ledde till felaktiga uppgifter hos
            mottagarna.
          </p>
          <p className="mb-4">
            Utöver det operativa slitaget fanns en växande GDPR-risk. Känslig
            personaldata (personnummer, löneuppgifter, hälsointyg) spreds
            okontrollerat via mejl och delade mappar utan åtkomstkontroll eller
            spårbarhet. Det saknades helt möjlighet att veta vem som hade sett
            eller ändrat vad. Vid en revision skulle organisationen inte kunna
            redovisa dataflödet.
          </p>
          <p>
            Samtidigt ökade trycket inför varje rekryteringssäsong. HR-teamet
            lade oproportionerligt mycket tid på att manuellt sammanställa,
            filtrera och skicka ut datautdrag istället för att fokusera på sitt
            kärnuppdrag. Varje ny medarbetare som lades till innebar manuell
            uppdatering i flera flikar och flera utskick, en process som varken
            skalade eller var hållbar.
          </p>
        </>
      }
      architectureViewer={<NordicShippingDiagram />}
      interventionNarrative={
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong className="text-[#EDEDED]">
              Realtidsplattform med rollbaserad åtkomst:
            </strong>{" "}
            En fullständig webbapplikation byggdes med Next.js 16, React 19,
            TypeScript och Supabase (PostgreSQL). Sju distinkta roller
            (HR-admin, rekryterare, cateringpartner, bemanningspartner,
            lönekontor, logistikpartner och besättning) får var sin
            skräddarsydd vy av samma datakälla, styrd av Row Level Security
            direkt i databasen.
          </li>
          <li>
            <strong className="text-[#EDEDED]">
              Hybridschema med dynamiska kolumner:
            </strong>{" "}
            Kärndatan lagras relationellt medan partspecifika fält hanteras via
            JSONB (<code>custom_data</code>). Det ger HR-admin full kontroll
            över vilka kolumner varje extern part ser och kan redigera, utan
            databasändringar eller ny deployment.
          </li>
          <li>
            <strong className="text-[#EDEDED]">
              Automatiserade påminnelser och notifieringar:
            </strong>{" "}
            Cron-jobb på Vercel triggar dagliga
            bemanningspartner-masterdata-påminnelser och
            personalcertifieringssystem-deadline-notiser (mån–fre 06:00 UTC),
            vilket eliminerar manuell uppföljning och minskar risken att
            deadlines missas.
          </li>
          <li>
            <strong className="text-[#EDEDED]">
              Import/export med validering:
            </strong>{" "}
            Stöd för CSV- och Excel-import med typkontroll och felrapportering,
            samt filtrerad export med valbara fält. Besättningsspecifik export
            för besättningsklara medarbetare finns som dedikerat flöde.
          </li>
          <li>
            <strong className="text-[#EDEDED]">
              Fullständig ändringslogg och GDPR-grund:
            </strong>{" "}
            Alla fältändringar loggas i{" "}
            <code>employee_column_changes</code>. Soft delete (arkivering
            istället för radering), aktivitetsspårning per användare och
            sessionhantering med HTTP-only cookies ger en solid grund för
            GDPR-efterlevnad.
          </li>
          <li>
            <strong className="text-[#EDEDED]">
              Rum- och kapacitetshantering:
            </strong>{" "}
            Digitalt stöd för hotellrumsallokering baserat på kön och
            befattning, kopplat till bemanningspartner-datum och
            kapacitetsplanering, en process som tidigare sköttes helt på
            papper.
          </li>
        </ul>
      }
      metrics={metrics}
      outcomeNarrative={
        <>
          <p className="mb-4">
            Nordiskt Rederi gick från ett manuellt, felbenäget Excel-flöde till
            en modern realtidsplattform som sju externa parter kan logga in på
            och se exakt den data de behöver, inget mer, inget mindre.
            HR-teamet sparar timmar per vecka genom att slippa sammanställa och
            skicka utdrag, och risken för felaktiga uppgifter hos mottagarna har
            i praktiken eliminerats. Den automatiserade deadlinebevakningen
            innebär att kritiska datum för bemanningspartnern och
            personalcertifieringssystemet inte längre faller mellan stolarna.
          </p>
          <p>
            Tekniskt vilar lösningen på en modern stack (Next.js, Supabase,
            TypeScript) med Row Level Security som primärt skyddslager, komplett
            ändringslogg och en arkitektur som enkelt kan utökas med nya roller
            eller datafält utan ombyggnad. Plattformen är redo för produktion på
            Vercel med automatiserade nattliga databasbackuper och
            staging-miljö. En infrastruktur som ger Nordiskt Rederi trygghet
            att vidareutveckla systemet långt efter engagemangets slut.
          </p>
        </>
      }
    />
  );
}
