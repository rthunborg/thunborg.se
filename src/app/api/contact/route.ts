import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site-config";

interface ContactBody {
  namn: string;
  organisation?: string;
  epost: string;
  telefon?: string;
  amne?: string;
  meddelande: string;
  honeypot?: string;
  turnstileToken?: string;
  _t?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_REQUEST_BYTES = 32 * 1024;
const CONTACT_FIELDS = [
  "namn",
  "organisation",
  "epost",
  "telefon",
  "amne",
  "meddelande",
  "honeypot",
  "turnstileToken",
  "_t",
] as const;

type ContactField = (typeof CONTACT_FIELDS)[number];

const FIELD_LIMITS: Record<ContactField, number> = {
  namn: 120,
  organisation: 160,
  epost: 254,
  telefon: 40,
  amne: 140,
  meddelande: 5000,
  honeypot: 500,
  turnstileToken: 4096,
  _t: 128,
};

type ValidationResult =
  | { ok: true; body: ContactBody }
  | { ok: false; error: string; status: 400 | 413 };

function fakeOk() {
  return NextResponse.json({ ok: true });
}

async function verifyTurnstile(token: string, secret: string): Promise<boolean> {

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
      },
    );
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

async function parseContactBody(request: Request): Promise<ValidationResult> {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return {
      ok: false,
      error: "Meddelandet är för stort.",
      status: 413,
    };
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return { ok: false, error: "Kunde inte läsa formuläret.", status: 400 };
  }

  if (new TextEncoder().encode(rawBody).length > MAX_REQUEST_BYTES) {
    return {
      ok: false,
      error: "Meddelandet är för stort.",
      status: 413,
    };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    return { ok: false, error: "Ogiltigt formulärdata.", status: 400 };
  }

  if (!isRecord(parsed)) {
    return { ok: false, error: "Ogiltigt formulärdata.", status: 400 };
  }

  const values: Partial<Record<ContactField, string>> = {};
  for (const field of CONTACT_FIELDS) {
    const value = parsed[field];
    if (value === undefined || value === null || value === "") continue;
    if (typeof value !== "string") {
      return { ok: false, error: "Ogiltigt formulärdata.", status: 400 };
    }

    if (value.length > FIELD_LIMITS[field]) {
      return {
        ok: false,
        error: "Meddelandet är för stort.",
        status: 413,
      };
    }

    values[field] = value.trim();
  }

  if (!values.namn || !values.epost || !values.meddelande) {
    return {
      ok: false,
      error: "Alla obligatoriska fält måste fyllas i.",
      status: 400,
    };
  }

  if (!EMAIL_REGEX.test(values.epost)) {
    return { ok: false, error: "Ogiltig e-postadress.", status: 400 };
  }

  return {
    ok: true,
    body: {
      namn: values.namn,
      organisation: values.organisation,
      epost: values.epost,
      telefon: values.telefon,
      amne: values.amne,
      meddelande: values.meddelande,
      honeypot: values.honeypot,
      turnstileToken: values.turnstileToken,
      _t: values._t,
    },
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  try {
    const parsedBody = await parseContactBody(request);
    if (!parsedBody.ok) {
      return NextResponse.json(
        { error: parsedBody.error },
        { status: parsedBody.status },
      );
    }

    const { body } = parsedBody;

    // 1. Honeypot check
    if (body.honeypot) {
      return fakeOk();
    }

    // 2. Timestamp check
    if (body._t) {
      try {
        const ts = Number(atob(body._t));
        if (Date.now() - ts < 3000) {
          return fakeOk();
        }
      } catch {
        return fakeOk();
      }
    }

    // 3. Turnstile verification (required when secret key is configured)
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      if (!body.turnstileToken) {
        return NextResponse.json(
          { error: "Verifieringen saknas. Uppdatera sidan och försök igen." },
          { status: 400 },
        );
      }
      const valid = await verifyTurnstile(body.turnstileToken, turnstileSecret);
      if (!valid) {
        return NextResponse.json(
          { error: "Verifieringen misslyckades. Försök igen." },
          { status: 400 },
        );
      }
    }

    // 4. Send email
    const to = process.env.CONTACT_TO_EMAIL || site.email;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlBody = `
      <h2>Nytt meddelande via ${site.domain}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Namn</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(body.namn)}</td></tr>
        ${body.organisation ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Organisation</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(body.organisation)}</td></tr>` : ""}
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">E-post</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(body.epost)}">${escapeHtml(body.epost)}</a></td></tr>
        ${body.telefon ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Telefon</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(body.telefon)}</td></tr>` : ""}
        ${body.amne ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Ämne</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(body.amne)}</td></tr>` : ""}
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Meddelande</td><td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-wrap;">${escapeHtml(body.meddelande)}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `noreply@${site.domain}`,
      to,
      replyTo: body.epost,
      subject: `Meddelande via ${site.domain}: ${body.namn}`,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Ett internt fel uppstod." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
