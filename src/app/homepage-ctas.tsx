"use client";

import Link from "next/link";
import { useContactModal } from "@/components/contact";
import { site } from "@/lib/site-config";

const linkStyles =
  "inline-flex items-center justify-center min-h-[44px] px-6 py-3 border border-[rgba(255,255,255,0.15)] hover:border-[#F59E0B] text-[#EDEDED] hover:text-[#F59E0B] font-semibold rounded-lg text-sm outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none";

export function HomepageCTAs() {
  const { openContactModal } = useContactModal();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link href="/about" className={linkStyles}>
        Read my CV
      </Link>
      <button
        type="button"
        onClick={() => openContactModal()}
        className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0A0A] font-semibold rounded-lg text-sm outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none"
      >
        Get in touch
      </button>
      <a
        href={site.cvPath}
        download
        className={linkStyles}
      >
        Download CV
      </a>
    </div>
  );
}
