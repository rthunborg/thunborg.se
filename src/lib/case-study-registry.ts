export interface CaseStudyCardMeta {
  slug: string;
  title: string;
  context: string;
  role: string;
  metrics: { label: string; value: string }[];
}

export const caseStudyRegistry: CaseStudyCardMeta[] = [
  {
    slug: "nordic-hr-group",
    title: "Automatiserad Credential-Rotation",
    context: "Nordeuropeisk HR-Koncern",
    role: "Platform Engineering",
    metrics: [
      { label: "Rotation", value: "manuell → var 30:e dag" },
      { label: "Deploy", value: "manuell → automatiserad" },
      { label: "Miljöer", value: "1 → 3" },
    ],
  },
  {
    slug: "nordic-shipping",
    title: "Från Excel-kaos till realtidsplattform för säsongsrekrytering",
    context: "Nordiskt Rederi",
    role: "Arkitektur och fullstack",
    metrics: [
      { label: "Datadelning", value: "↓ ~95%" },
      { label: "Versionskontroll", value: "Eliminerat kaos" },
      { label: "Spårbarhet", value: "Noll → revisionsklar" },
      { label: "Koncept → produktion", value: "4 mån, 1 resurs" },
    ],
  },
  {
    slug: "global-furniture-group",
    title: "Backend-Arkitektur för 3D-Modellering",
    context: "Världsledande Möbelkoncern",
    role: "Solution Architecture",
    metrics: [
      { label: "Design till MVP", value: "8 veckor" },
      { label: "API-endpoints", value: "24 st" },
      { label: "AD-compliance", value: "100%" },
    ],
  },
  {
    slug: "nordic-fashion-chain",
    title: "Från Legacy till Eventdriven Arkitektur",
    context: "Ledande Nordisk Modekedja",
    role: "Senior Software Engineering",
    metrics: [
      { label: "Deploy-frekvens", value: "1/mån → 3/vecka" },
      { label: "Incidenter", value: "↓ 88%" },
      { label: "Lead time", value: "3v → 4d" },
      { label: "Tillgänglighet", value: "97% → 99.8%" },
    ],
  },
  {
    slug: "global-ev-manufacturer",
    title: "Teknisk Ledning för Finansiella Integrationer",
    context: "Världsledande Elbilstillverkare",
    role: "Interim Technical Lead",
    metrics: [
      { label: "Leveranstakt", value: "↑ 45%" },
      { label: "Uptime", value: "98.5% → 99.9%" },
      { label: "Onboarding", value: "3 mån → 3v" },
      { label: "Säkerhetsincidenter", value: "0" },
    ],
  }
];
