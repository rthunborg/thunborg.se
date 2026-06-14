export const site = {
  name: "Rasmus Thunborg",
  shortName: "thunborg",
  domain: "thunborg.se",
  url: "https://thunborg.se",
  email: "rasmus@thunborg.se",
  location: "Gothenburg, Sweden",
  linkedin: "https://www.linkedin.com/in/rthunborg/",
  cvPath: "/cv/rasmus-thunborg-cv.pdf",
  description:
    "Software Architect in Gothenburg with 10+ years of experience in backend systems, cloud architecture, technical leadership, and Agentic AI.",
} as const;

export const mainNavigation = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/case-studies" },
  { label: "How I work", href: "/methodology" },
  { label: "Agentic AI", href: "/agentic-ai" },
  { label: "Services", href: "/services" },
] as const;

export const publicRoutes = [
  "",
  "/about",
  "/services",
  "/methodology",
  "/agentic-ai",
  "/case-studies",
  "/case-study/global-furniture-group",
  "/case-study/nordic-hr-group",
  "/case-study/global-ev-manufacturer",
  "/case-study/nordic-fashion-chain",
  "/case-study/nordic-shipping",
] as const;
