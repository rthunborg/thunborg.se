import Link from "next/link";

interface TeaserCardProps {
  heading: string;
  hook: string;
  href: string;
}

export function TeaserCard({ heading, hook, href }: TeaserCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-6 outline-none ring-offset-[#0A0A0A] transition-colors duration-200 ease-out hover:border-[#F59E0B]/40 hover:bg-[rgba(255,255,255,0.04)] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 motion-reduce:transition-none"
    >
      <h2 className="mb-2 text-lg font-semibold tracking-tight text-[#EDEDED]">
        {heading}
      </h2>
      <p className="mb-4 text-sm leading-relaxed text-[#A1A1A1]">{hook}</p>
      <span className="text-sm font-medium text-[#F59E0B] transition-colors duration-200 ease-out group-hover:text-[#FBBF24] motion-reduce:transition-none">
        Läs mer &rarr;
      </span>
    </Link>
  );
}
