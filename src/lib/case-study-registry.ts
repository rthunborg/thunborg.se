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
    title: "Automated Credential Rotation",
    context: "Northern European HR Group",
    role: "Platform Engineering",
    metrics: [
      { label: "Rotation", value: "manual → every 30 days" },
      { label: "Deploy", value: "manual → automated" },
      { label: "Environments", value: "1 → 3" },
    ],
  },
  {
    slug: "nordic-shipping",
    title: "From Excel Chaos to a Real-Time Seasonal Recruitment Platform",
    context: "Nordic Shipping Company",
    role: "Architecture and full-stack",
    metrics: [
      { label: "Data sharing", value: "↓ ~95%" },
      { label: "Version control", value: "Chaos eliminated" },
      { label: "Traceability", value: "None → audit-ready" },
      { label: "Concept → production", value: "4 months, 1 person" },
    ],
  },
  {
    slug: "global-furniture-group",
    title: "Backend Architecture for 3D Modeling",
    context: "Global Furniture Group",
    role: "Solution Architecture",
    metrics: [
      { label: "Design to MVP", value: "8 weeks" },
      { label: "API endpoints", value: "24" },
      { label: "AD-compliance", value: "100%" },
    ],
  },
  {
    slug: "nordic-fashion-chain",
    title: "From Legacy to Event-Driven Architecture",
    context: "Leading Nordic Fashion Chain",
    role: "Backend Architecture",
    metrics: [
      { label: "Deploy frequency", value: "1/month → 3/week" },
      { label: "Incidents", value: "↓ 88%" },
      { label: "Lead time", value: "3w → 4d" },
      { label: "Availability", value: "97% → 99.8%" },
    ],
  },
  {
    slug: "global-ev-manufacturer",
    title: "Technical Leadership for Financial Integrations",
    context: "Global EV Manufacturer",
    role: "Interim Technical Lead",
    metrics: [
      { label: "Delivery pace", value: "↑ 45%" },
      { label: "Uptime", value: "98.5% → 99.9%" },
      { label: "Onboarding", value: "3 months → 3w" },
      { label: "Security incidents", value: "0" },
    ],
  }
];
