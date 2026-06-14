"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContactModal } from "@/components/contact";

const ACCENT_RGB = { r: 245, g: 158, b: 11 }; // #F59E0B
const TOLERANCE = 20;

function isAccentBackground(el: Element): boolean {
  const bg = getComputedStyle(el).backgroundColor;
  const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return false;
  const r = Number(match[1]);
  const g = Number(match[2]);
  const b = Number(match[3]);
  return (
    Math.abs(r - ACCENT_RGB.r) < TOLERANCE &&
    Math.abs(g - ACCENT_RGB.g) < TOLERANCE &&
    Math.abs(b - ACCENT_RGB.b) < TOLERANCE
  );
}

type FloatingCtaVisibleProps = {
  onContact: () => void;
};

/** Renders only while visible; unmount resets overlap state without effects. */
function FloatingCtaVisible({ onContact }: FloatingCtaVisibleProps) {
  const [inverted, setInverted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let rafId: number;

    const checkOverlap = () => {
      const btn = buttonRef.current;
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const elements = document.elementsFromPoint(cx, cy);
      const behind = elements.filter(
        (el) => el !== btn && !btn.contains(el),
      );
      setInverted(behind.some(isAccentBackground));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkOverlap);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    rafId = requestAnimationFrame(checkOverlap);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      onClick={() => onContact()}
      aria-label="Kontakt"
      className={`fixed bottom-6 left-1/2 z-40 rounded-full px-6 py-3 text-sm font-semibold shadow-lg min-h-12 min-w-12 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] motion-reduce:transition-none ${
        inverted ? "shadow-black/20" : "shadow-amber-500/20"
      }`}
      initial={{ opacity: 0, y: 20, x: "-50%" }}
      animate={{
        opacity: 1,
        y: 0,
        x: "-50%",
        backgroundColor: inverted ? "#0A0A0A" : "#F59E0B",
        color: inverted ? "#F59E0B" : "#0A0A0A",
      }}
      exit={{ opacity: 0, y: 20, x: "-50%" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      Bolla en idé?
    </motion.button>
  );
}

export function FloatingCta() {
  const { openContactModal } = useContactModal();
  const [pastScroll, setPastScroll] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const scrollEl = document.getElementById("scroll-sentinel");
    const footerEl = document.getElementById("footer-sentinel");
    if (!scrollEl || !footerEl) return;

    const scrollObserver = new IntersectionObserver(
      ([entry]) => setPastScroll(!entry.isIntersecting),
      { threshold: 0 },
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    scrollObserver.observe(scrollEl);
    footerObserver.observe(footerEl);

    return () => {
      scrollObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  const visible = pastScroll && !footerVisible;

  return (
    <AnimatePresence>
      {visible && (
        <FloatingCtaVisible onContact={() => openContactModal()} />
      )}
    </AnimatePresence>
  );
}
