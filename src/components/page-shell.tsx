import { BackLink } from "@/components/back-link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { site } from "@/lib/site-config";
import Link from "next/link";

interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface PageShellProps {
  breadcrumbSegments: BreadcrumbSegment[];
  children: React.ReactNode;
}

export function PageShell({ breadcrumbSegments, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <BreadcrumbJsonLd segments={breadcrumbSegments} />
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
        <nav
          aria-label="Breadcrumbs"
          className="border-b border-[rgba(255,255,255,0.08)] pb-4 mb-6"
        >
          <p className="font-mono text-[13px]">
            <Link
              href="/"
              className="text-[#666666] hover:text-[#A1A1A1] outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none min-h-[44px] inline-flex items-center"
            >
              {site.shortName}
            </Link>
            {breadcrumbSegments.map((segment, index) => {
              const isLast = index === breadcrumbSegments.length - 1;
              return (
                <span key={segment.label}>
                  <span className="text-[#666666]"> / </span>
                  {isLast || !segment.href ? (
                    <span className="text-[#A1A1A1]">{segment.label}</span>
                  ) : (
                    <Link
                      href={segment.href}
                      className="text-[#666666] hover:text-[#A1A1A1] outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none min-h-[44px] inline-flex items-center"
                    >
                      {segment.label}
                    </Link>
                  )}
                </span>
              );
            })}
          </p>
        </nav>

        <BackLink />

        {children}
      </div>
    </div>
  );
}
