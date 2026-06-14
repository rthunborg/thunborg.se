import { ProfileNavigation } from "@/components/homepage/profile-navigation";
import { TeaserCard } from "@/components/homepage/teaser-card";
import { HomepageCTAs } from "./homepage-ctas";
import { site } from "@/lib/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Rasmus Thunborg | Software Architect",
  description: site.description,
});

const teasers = [
  {
    heading: "How I work",
    hook: "My structure for moving from an unclear technical situation to stable delivery.",
    href: "/methodology",
  },
  {
    heading: "Services",
    hook: "Architecture, backend, cloud, technical leadership, and Agentic AI.",
    href: "/services",
  },
  {
    heading: "Experience",
    hook: "Selected assignments with concrete technical impact.",
    href: "/case-studies",
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#0A0A0A] px-4">
      <div className="w-full max-w-2xl py-16 md:py-24 lg:py-32 xl:py-40">
        <h1 className="mb-6 text-center text-3xl font-bold leading-tight tracking-tight text-[#EDEDED] sm:text-4xl lg:text-5xl">
          Rasmus Thunborg
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-center text-base text-[#A1A1A1]">
          Software Architect in Gothenburg with 10+ years of experience in
          backend systems, cloud architecture, technical leadership, and modern
          AI-driven developer workflows.
        </p>
        <ProfileNavigation />
      </div>

      <div className="w-full max-w-4xl pb-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {teasers.map((teaser) => (
            <TeaserCard key={teaser.href} {...teaser} />
          ))}
        </div>
      </div>

      <div className="w-full max-w-2xl pb-16">
        <HomepageCTAs />
      </div>
    </div>
  );
}
