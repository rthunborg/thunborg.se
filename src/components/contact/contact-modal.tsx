"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { site } from "@/lib/site-config";

type FormState = "idle" | "submitting" | "success" | "error";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedSubject?: string;
}

const inputStyles =
  "w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.12)] rounded-lg px-4 py-3 text-[#EDEDED] text-sm placeholder:text-[#666666] focus:border-[#F59E0B] focus:outline-none focus:ring-1 focus:ring-[#F59E0B] transition-colors";

const labelStyles = "block text-sm font-medium text-[#A1A1A1] mb-1.5";

function obfuscateEmail(user: string, domain: string) {
  return `${user}@${domain}`;
}

export function ContactModal({
  open,
  onOpenChange,
  preselectedSubject,
}: ContactModalProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(preselectedSubject ?? "");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileError, setTurnstileError] = useState(false);
  const [mountTimestamp, setMountTimestamp] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  useEffect(() => {
    if (open) {
      setMountTimestamp(btoa(String(Date.now())));
    }
  }, [open]);

  useEffect(() => {
    if (preselectedSubject !== undefined) {
      setSubject(preselectedSubject);
    }
  }, [preselectedSubject]);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setFormState("idle");
        setErrorMessage("");
        setName("");
        setOrganization("");
        setEmail("");
        setPhone("");
        setSubject(preselectedSubject ?? "");
        setMessage("");
        setHoneypot("");
        setTurnstileToken(null);
        setTurnstileError(false);
        turnstileRef.current?.reset();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open, preselectedSubject]);

  useEffect(() => {
    if (formState === "success") {
      const timer = setTimeout(() => {
        onOpenChange(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formState, onOpenChange]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (siteKey && turnstileError) {
      setFormState("error");
      setErrorMessage(
        `Verification could not be loaded. Email me directly at ${site.email}`,
      );
      return;
    }

    if (siteKey && !turnstileToken) {
      setFormState("error");
      setErrorMessage("Complete the verification before submitting the form.");
      return;
    }

    setFormState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          organization: organization || undefined,
          email,
          phone: phone || undefined,
          subject: subject || undefined,
          message,
          honeypot: honeypot || undefined,
          turnstileToken: turnstileToken || undefined,
          _t: mountTimestamp,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "SERVER_ERROR");
      }

      setFormState("success");
    } catch (error) {
      setFormState("error");
      if (siteKey) {
        turnstileRef.current?.reset();
        setTurnstileToken(null);
      }
      setErrorMessage(
        error instanceof Error && error.message !== "SERVER_ERROR"
          ? error.message
          : `Something went wrong. Try again or email me directly at ${site.email}`,
      );
    }
  }

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
  const isSubmitDisabled =
    formState === "submitting" ||
    Boolean(siteKey && (!turnstileToken || turnstileError));

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                className="fixed z-50 w-full max-w-lg bg-[#111111] border border-[rgba(255,255,255,0.08)] overflow-y-auto max-h-[90vh] bottom-0 left-0 right-0 rounded-t-2xl md:rounded-xl md:bottom-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 p-6 md:p-8 focus:outline-none"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-12 text-center"
                      role="status"
                    >
                      <Dialog.Title className="sr-only">
                        Message sent
                      </Dialog.Title>
                      <Dialog.Close asChild>
                        <button
                          className="absolute top-6 right-6 rounded-lg p-2 text-[#A1A1A1] hover:text-[#EDEDED] hover:bg-[rgba(255,255,255,0.06)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                          aria-label="Close"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </Dialog.Close>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="mb-4"
                      >
                        <CheckCircle className="h-12 w-12 text-[#22C55E] mx-auto" />
                      </motion.div>
                      <p className="text-lg font-semibold text-[#EDEDED] mb-2">
                        Thanks!
                      </p>
                      <p className="text-sm text-[#A1A1A1]">
                        I&apos;ll get back to you as soon as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form-wrapper"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <Dialog.Title className="text-xl font-bold text-[#EDEDED]">
                          Get in touch
                        </Dialog.Title>
                        <Dialog.Close asChild>
                          <button
                            className="rounded-lg p-2 text-[#A1A1A1] hover:text-[#EDEDED] hover:bg-[rgba(255,255,255,0.06)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                            aria-label="Close"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </Dialog.Close>
                      </div>

                      <Dialog.Description className="text-sm text-[#A1A1A1] mb-6">
                        Briefly tell me what you want to discuss, and I&apos;ll
                        get back to you as soon as I can.
                      </Dialog.Description>
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      noValidate={false}
                    >
                      <div className="absolute -left-[9999px]" aria-hidden="true">
                        <label htmlFor="contact-website">Website</label>
                        <input
                          id="contact-website"
                          type="text"
                          name="website"
                          tabIndex={-1}
                          autoComplete="off"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-name" className={labelStyles}>
                          Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={inputStyles}
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-organization"
                          className={labelStyles}
                        >
                          Organization
                        </label>
                        <input
                          id="contact-organization"
                          type="text"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          className={inputStyles}
                          placeholder="Company, team, or context"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className={labelStyles}>
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={inputStyles}
                          placeholder="name@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className={labelStyles}
                        >
                          Phone
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={inputStyles}
                          placeholder="+46 70 123 45 67"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-subject" className={labelStyles}>
                          Subject
                        </label>
                        <select
                          id="contact-subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className={inputStyles}
                        >
                          <option value="">Choose a subject...</option>
                          <option value="Assignment or collaboration">
                            Assignment or collaboration
                          </option>
                          <option value="Recruitment or consulting role">
                            Recruitment or consulting role
                          </option>
                          <option value="Agentic AI or speaking engagement">
                            Agentic AI or speaking engagement
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className={labelStyles}
                        >
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className={`${inputStyles} resize-y`}
                          placeholder="Write a few lines about what you want to discuss..."
                        />
                      </div>

                      {formState === "error" && (
                        <div
                          role="alert"
                          className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3"
                        >
                          {errorMessage}
                        </div>
                      )}

                      {siteKey && !turnstileError && (
                        <div className="flex justify-center">
                          <Turnstile
                            ref={turnstileRef}
                            siteKey={siteKey}
                            onSuccess={(token) => {
                              setTurnstileToken(token);
                              setTurnstileError(false);
                            }}
                            onError={() => {
                              setTurnstileToken(null);
                              setTurnstileError(true);
                            }}
                            onExpire={() => setTurnstileToken(null)}
                            options={{ theme: "dark" }}
                          />
                        </div>
                      )}

                      {siteKey && !turnstileError && !turnstileToken && (
                        <p className="text-sm text-[#A1A1A1] text-center">
                          Complete the verification to submit the form.
                        </p>
                      )}

                      {turnstileError && (
                        <p className="text-sm text-[#A1A1A1] text-center">
                          Verification could not be loaded. Contact me directly
                          by{" "}
                          <a
                            href={`mailto:${obfuscateEmail("rasmus", "thunborg.se")}`}
                            className="text-[#F59E0B] underline"
                          >
                            email
                          </a>
                          .
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitDisabled}
                        aria-disabled={isSubmitDisabled}
                        className="w-full inline-flex items-center justify-center gap-2 min-h-11 rounded-lg bg-[#F59E0B] px-8 py-3 text-base font-semibold text-[#0A0A0A] transition-colors duration-200 ease-out hover:bg-[#D97706] focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 ring-offset-[#111111] focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed motion-reduce:transition-none"
                      >
                        {formState === "submitting" && (
                          <svg
                            className="animate-spin"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="8"
                              cy="8"
                              r="6.5"
                              stroke="#0A0A0A"
                              strokeOpacity="0.3"
                              strokeWidth="3"
                            />
                            <path
                              d="M14.5 8a6.5 6.5 0 0 0-6.5-6.5"
                              stroke="#0A0A0A"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                        {formState === "submitting" ? "Sending..." : "Send"}
                      </button>
                    </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
