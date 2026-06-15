import { CaseStudyLayout } from "@/components/case-study";
import type { CaseStudyMetric } from "@/components/case-study";
import { NordicShippingDiagram } from "@/components/case-study/diagrams/nordic-shipping-diagram";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title:
    "From Excel chaos to a real-time seasonal recruitment platform | Rasmus Thunborg",
  description:
    "Selected project: a real-time platform with role-based access, change logging, and a GDPR-ready foundation, delivered in four months by one person.",
  path: "/case-study/nordic-shipping",
  openGraphType: "article",
});

const description =
  "A real-time platform with role-based access, change logging, and a GDPR-ready foundation, delivered in four months by one person.";

const metrics: CaseStudyMetric[] = [
  {
    label: "Time to share data with an external party",
    before: "Manual Excel send-out, ~30–60 min/recipient",
    after: "Immediate access through role-based login",
    delta: "↓ ~95%",
    improvement: "positive",
  },
  {
    label: "Data quality and version control",
    before: "Several parallel Excel versions",
    after: "One shared real-time database with RLS",
    delta: "Version chaos eliminated",
    improvement: "positive",
  },
  {
    label: "Audit/GDPR traceability",
    before: "No logging, uncontrolled distribution",
    after: "Complete change log + role-based access",
    delta: "From none → audit-ready",
    improvement: "positive",
  },
  {
    label: "Time from concept to production",
    before: "—",
    after: "MVP delivered in 4 months by one person",
    delta: "542 commits, 42 migrations",
    improvement: "positive",
  },
];

export default function NordicShippingCaseStudyPage() {
  return (
    <CaseStudyLayout
      slug="nordic-shipping"
      title="From Excel Chaos to a Real-Time Seasonal Recruitment Platform"
      description={description}
      industry="Maritime / HR"
      timeline="4 months (Oct 2025 – Feb 2026)"
      problemNarrative={
        <>
          <p className="mb-4">
            The Nordic shipping company&apos;s seasonal recruitment process was
            handled through a network of Excel files sent between HR,
            recruiters, and half a dozen external parties: catering partner,
            staffing partner, payroll office, logistics partner, and crew
            planning. Each party needed its own subset of employee data, but
            everyone worked from the same source files. The result was version
            chaos: no one knew for sure which file was latest, changes were lost
            across email threads, and manual copy errors led to incorrect data
            for recipients.
          </p>
          <p className="mb-4">
            Beyond the operational drag, there was a growing GDPR risk.
            Sensitive employee data (personal identity numbers, payroll
            details, health certificates) was distributed uncontrolled through
            email and shared folders without access control or traceability.
            There was no way to know who had seen or changed what. In an audit,
            the organization would not be able to account for the data flow.
          </p>
          <p>
            At the same time, pressure increased before each recruitment
            season. The HR team spent a disproportionate amount of time manually
            compiling, filtering, and sending data extracts instead of focusing
            on its core work. Every new employee added meant manual updates in
            several tabs and several send-outs, a process that was neither
            scalable nor sustainable.
          </p>
        </>
      }
      architectureViewer={<NordicShippingDiagram />}
      interventionNarrative={
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong className="text-[#EDEDED]">
              Real-time platform with role-based access:
            </strong>{" "}
            A complete web application was built with Next.js 16, React 19,
            TypeScript, and Supabase (PostgreSQL). Seven distinct roles (HR
            admin, recruiter, catering partner, staffing partner, payroll
            office, logistics partner, and crew) each get a tailored view of
            the same data source, governed by Row Level Security directly in
            the database.
          </li>
          <li>
            <strong className="text-[#EDEDED]">
              Hybrid schema with dynamic columns:
            </strong>{" "}
            Core data is stored relationally while party-specific fields are
            handled through JSONB (<code>custom_data</code>). This gives HR
            admin full control over which columns each external party can see
            and edit, without database changes or a new deployment.
          </li>
          <li>
            <strong className="text-[#EDEDED]">
              Automated reminders and notifications:
            </strong>{" "}
            Cron jobs on Vercel trigger daily staffing-partner master-data
            reminders and personnel-certification deadline notifications
            (Mon–Fri 06:00 UTC), eliminating manual follow-up and reducing the
            risk of missed deadlines.
          </li>
          <li>
            <strong className="text-[#EDEDED]">
              Import/export with validation:
            </strong>{" "}
            Support for CSV and Excel import with type checks and error
            reporting, plus filtered export with selectable fields. A
            crew-specific export for crew-ready employees is available as a
            dedicated flow.
          </li>
          <li>
            <strong className="text-[#EDEDED]">
              Complete change log and GDPR-ready foundation:
            </strong>{" "}
            All field changes are logged in{" "}
            <code>employee_column_changes</code>. Soft delete (archiving
            instead of deletion), activity tracking per user, and session
            management with HTTP-only cookies provide a solid foundation for
            GDPR compliance.
          </li>
          <li>
            <strong className="text-[#EDEDED]">
              Room and capacity management:
            </strong>{" "}
            Digital support for hotel room allocation based on gender and role,
            connected to staffing-partner dates and capacity planning, replacing
            a process that had previously been handled entirely on paper.
          </li>
        </ul>
      }
      metrics={metrics}
      outcomeNarrative={
        <>
          <p className="mb-4">
            The Nordic shipping company moved from a manual, error-prone Excel
            flow to a modern real-time platform where seven external parties
            can log in and see exactly the data they need, nothing more and
            nothing less. The HR team saves hours per week because it no longer
            has to compile and send extracts, and the risk of incorrect data for
            recipients has effectively been eliminated. Automated deadline
            monitoring means critical dates for the staffing partner and
            personnel-certification system no longer fall through the cracks.
          </p>
          <p>
            Technically, the solution rests on a modern stack (Next.js,
            Supabase, TypeScript) with Row Level Security as the primary
            protection layer, a complete change log, and an architecture that
            can be extended with new roles or data fields without a rebuild.
            The platform is ready for production on Vercel with automated
            nightly database backups and a staging environment. It gives the
            Nordic shipping company the confidence to keep developing the
            system long after the engagement ends.
          </p>
        </>
      }
    />
  );
}
