"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { ContactModal } from "./contact-modal";

interface ContactModalContextValue {
  openContactModal: (opts?: { subject?: string }) => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [preselectedSubject, setPreselectedSubject] = useState<
    string | undefined
  >();

  const openContactModal = useCallback(
    (opts?: { subject?: string }) => {
      setPreselectedSubject(opts?.subject);
      setOpen(true);
    },
    [],
  );

  const closeContactModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ContactModalContext.Provider
      value={{ openContactModal, closeContactModal }}
    >
      {children}
      <ContactModal
        open={open}
        onOpenChange={setOpen}
        preselectedSubject={preselectedSubject}
      />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return ctx;
}
