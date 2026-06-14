import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PROFILE_OPTIONS = [
  {
    id: "about",
    label: "Läs min CV-profil, bakgrund och tekniska bredd.",
    href: "/about",
    ariaLabel: "Läs min CV-profil, bakgrund och tekniska bredd.",
  },
  {
    id: "case-studies",
    label: "Se utvalda projekt och uppdrag från de senaste åren.",
    href: "/case-studies",
    ariaLabel: "Se utvalda projekt och uppdrag från de senaste åren.",
  },
  {
    id: "methodology",
    label: "Förstå hur jag arbetar med arkitektur, kod och team.",
    href: "/methodology",
    ariaLabel: "Förstå hur jag arbetar med arkitektur, kod och team.",
  },
  {
    id: "agentic-ai",
    label: "Utforska min inriktning inom Agentic AI och moderna utvecklarflöden.",
    href: "/agentic-ai",
    ariaLabel:
      "Utforska min inriktning inom Agentic AI och moderna utvecklarflöden.",
  },
] as const;

export function ProfileNavigation() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <nav
        aria-label="Välj vad du vill läsa om"
        className="flex flex-col gap-4"
      >
        <ul className="flex flex-col gap-4">
          {PROFILE_OPTIONS.map((option) => (
            <li key={option.id}>
              <Link
                href={option.href}
                aria-label={option.ariaLabel}
                className="group flex items-center rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#111111] p-6 text-base font-normal text-[#EDEDED] no-underline outline-none ring-offset-[#0A0A0A] transition-[border-color,box-shadow] duration-200 ease-out hover:border-[#F59E0B] hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none sm:text-lg"
              >
                <span>{option.label}</span>
                <ChevronRight
                  aria-hidden="true"
                  className="animate-nudge-right ml-auto h-5 w-5 flex-shrink-0 text-[#F59E0B] transition-colors duration-200 group-hover:text-[#F59E0B] group-focus-visible:text-[#F59E0B]"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 text-center">
        <Link
          href="/services"
          className="min-h-11 inline-flex items-center text-sm text-[#A1A1A1] no-underline outline-none ring-offset-[#0A0A0A] transition-colors duration-200 ease-out hover:text-[#EDEDED] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none"
        >
          Vill du veta vad jag kan bidra med? Läs här.
        </Link>
      </div>
    </div>
  );
}
