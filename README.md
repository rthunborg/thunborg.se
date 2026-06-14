# thunborg.se

Personal website and CV profile for **Rasmus Thunborg**.

The site uses a dark, restrained visual language with amber accents, compact cards, and direct Swedish copy. The content is personal-first: CV, selected work, work style, Agentic AI, and contact.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 App Router |
| Language | TypeScript strict |
| Styling | Tailwind CSS v4 |
| UI | React, Radix, lucide-react |
| Animation | Framer Motion |
| Contact | Next.js route handler, Nodemailer, optional Turnstile |
| Deployment | Vercel |
| Analytics | Vercel Analytics |

## Development

```bash
npm run dev
npm run build
npm run lint
```

## Environment

Copy `.env.example` to `.env.local` for local contact-form testing. Real secrets must not be committed.

## Project Structure

```text
src/app/             Next.js App Router pages and API routes
src/components/      Shared UI and page components
src/lib/             Site identity and utility code
public/              Static assets, CV PDF, crawler-facing text files
```

## Deployment

The project is intended for Vercel. Configure the production domain as `thunborg.se` and set the contact-form SMTP environment variables in Vercel.
