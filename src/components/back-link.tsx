"use client";

import { useRouter } from "next/navigation";

export function BackLink() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex items-center min-h-[44px] text-sm text-[#A1A1A1] hover:text-[#F59E0B] outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none mb-12 md:mb-16 lg:mb-20"
    >
      ← Tillbaka
    </button>
  );
}
