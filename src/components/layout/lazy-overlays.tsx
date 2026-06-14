"use client";

import dynamic from "next/dynamic";

const FloatingCta = dynamic(
  () => import("@/components/contact/floating-cta").then((m) => m.FloatingCta),
  { ssr: false }
);
const ScrollToTop = dynamic(
  () => import("@/components/contact/scroll-to-top").then((m) => m.ScrollToTop),
  { ssr: false }
);

export function LazyOverlays() {
  return (
    <>
      <FloatingCta />
      <ScrollToTop />
    </>
  );
}
