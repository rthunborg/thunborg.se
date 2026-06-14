"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactModal } from "@/components/contact";
import { mainNavigation, site } from "@/lib/site-config";

const contactLinks = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "Download CV", href: site.cvPath },
] as const;

const linkClasses =
  "text-muted-foreground hover:text-amber-500 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm min-h-11 min-w-11 inline-flex items-center justify-center md:min-h-0 md:min-w-0 md:py-1 md:inline-block";

const headingClasses =
  "font-sans text-sm font-semibold text-foreground tracking-wide uppercase mb-4";

function FooterLinkList({
  links,
}: {
  links: ReadonlyArray<{ readonly label: string; readonly href: string }>;
}) {
  return (
    <ul className="space-y-3" role="list">
      {links.map((link) => (
        <li key={link.label} className="flex justify-center md:justify-start">
          <Link href={link.href} className={linkClasses}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  const { openContactModal } = useContactModal();

  return (
    <footer aria-label="Footer" className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <nav aria-label="Footer navigation">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
            <div className="text-center md:text-left">
              <p className={headingClasses}>{site.name}</p>
              <p className="text-muted-foreground text-sm">
                Expert Software Engineer.
              </p>
              <p className="text-muted-foreground text-sm">
                Backend, cloud architecture, and Agentic AI.
              </p>
              <p className="text-muted-foreground text-sm">
                Gothenburg, Sweden.
              </p>
            </div>

            <div className="text-center md:text-left">
              <p className={headingClasses}>Profile</p>
              <FooterLinkList links={mainNavigation} />
            </div>

            <div className="text-center md:text-left">
              <p className={headingClasses}>Contact</p>
              <FooterLinkList links={contactLinks} />
            </div>
          </div>
        </nav>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 text-sm text-muted-foreground">
            <Link
              href="/"
              className="opacity-50 hover:opacity-100 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm flex-shrink-0"
              aria-label="Back to homepage"
            >
              <Image
                src="/images/rt-mark.svg"
                alt="Rasmus Thunborg"
                width={40}
                height={40}
                className="w-10 h-auto"
              />
            </Link>

            <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:flex-wrap md:gap-3 text-center">
              <span>&copy; 2026 {site.name}</span>
              <span className="hidden md:block" aria-hidden="true">
                &middot;
              </span>
              <button
                type="button"
                onClick={() => openContactModal()}
                aria-label="Open contact form"
                className="font-mono hover:underline cursor-pointer bg-transparent border-none p-0 text-inherit"
              >
                {site.email}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
