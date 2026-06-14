export const site = {
  name: "Rasmus Thunborg",
  shortName: "thunborg",
  domain: "thunborg.se",
  url: "https://thunborg.se",
  email: "rasmus@thunborg.se",
  location: "Göteborg, Sverige",
  linkedin: "https://www.linkedin.com/in/rasmusthunborg/",
  cvPath: "/cv/rasmus-thunborg-cv.pdf",
  description:
    "Expert Software Engineer i Göteborg med 10+ års erfarenhet av backend, molnarkitektur, teknisk ledning och Agentic AI.",
} as const;

export const mainNavigation = [
  { label: "Om mig", href: "/about" },
  { label: "Erfarenhet", href: "/case-studies" },
  { label: "Så arbetar jag", href: "/methodology" },
  { label: "Agentic AI", href: "/agentic-ai" },
  { label: "Bidrag", href: "/services" },
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
