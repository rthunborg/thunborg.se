"use client";
import { useContactModal } from "@/components/contact";

export function ContactButton() {
  const { openContactModal } = useContactModal();
  return (
    <button
      type="button"
      onClick={() => openContactModal()}
      className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0A0A] font-semibold rounded-lg text-sm outline-none ring-offset-[#0A0A0A] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 transition-colors duration-200 ease-out motion-reduce:transition-none"
    >
      Kontakta mig
    </button>
  );
}
