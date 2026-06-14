import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sidan hittades inte | Rasmus Thunborg",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
        <div className="flex flex-col items-center justify-center text-center py-16 md:py-24">
          <p className="font-mono text-sm text-[#666666] uppercase tracking-widest mb-4">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-4">
            Sidan hittades inte
          </h1>
          <p className="text-base leading-relaxed text-[#A1A1A1] max-w-md mb-8">
            Sidan du letar efter finns inte eller har flyttats.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0A0A] font-semibold rounded-lg text-sm outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none"
          >
            Till startsidan
          </Link>
        </div>
      </div>
    </div>
  );
}
