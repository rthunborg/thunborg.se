import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PROFILE_OPTIONS = [
  {
    id: "about",
    label: "Read my CV profile, background, and technical breadth.",
    href: "/about",
    ariaLabel: "Read my CV profile, background, and technical breadth.",
  },
  {
    id: "case-studies",
    label: "See selected projects and assignments from recent years.",
    href: "/case-studies",
    ariaLabel: "See selected projects and assignments from recent years.",
  },
  {
    id: "methodology",
    label: "Understand how I work with architecture, code, and teams.",
    href: "/methodology",
    ariaLabel: "Understand how I work with architecture, code, and teams.",
  },
  {
    id: "agentic-ai",
    label: "Explore my focus on Agentic AI and modern developer workflows.",
    href: "/agentic-ai",
    ariaLabel:
      "Explore my focus on Agentic AI and modern developer workflows.",
  },
] as const;

export function ProfileNavigation() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <nav
        aria-label="Choose what you want to read about"
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
          Want to know where I can help? Read here.
        </Link>
      </div>
    </div>
  );
}
