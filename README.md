<<<<<<< HEAD
# REVERA — AI Automation & Web Development Agency

A premium, production-ready Next.js 15 website for REVERA, an AI automation and web development agency helping Australian businesses grow with AI.

## Tech Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS** with custom design system
- **Framer Motion** for animations
- **Lucide React** icons
- **shadcn/ui**-style components
- **Supabase** (data layer)
- **Stripe** (payments)
- **Vercel** deployment ready

## Features

- 15+ pages: Home, About, Services, AI Receptionists, AI Chatbots, Web Development, Case Studies, Pricing, Contact, Book Demo, Dashboard, Privacy, Terms
- Glassmorphism design with animated gradients and mouse glow effects
- Fully responsive (mobile → desktop)
- Dark mode
- SEO optimised: metadata, Open Graph, Twitter cards, sitemap.xml, robots.txt, JSON-LD schema
- Real business photos from Unsplash
- Framer Motion animations throughout (fade, slide, scale, parallax, counters)
- Server Components where appropriate

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in Supabase and Stripe credentials

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server only) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_SECRET_KEY` | Stripe secret key (server only) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret |
| `NEXT_PUBLIC_SITE_URL` | Production site URL |

## Deployment

Deploy to Vercel with zero configuration:

```bash
vercel deploy --prod
```

## Project Structure

```
src/
  app/              # Routes (App Router)
    api/            # API routes (Stripe, contact)
    *.tsx           # Pages
    layout.tsx      # Root layout + metadata
    sitemap.ts      # Dynamic sitemap
    robots.ts       # Robots config
  components/       # UI components
    ui/             # Primitives (Button)
  lib/              # Utilities + integrations
    supabase.ts     # Supabase client
    stripe.ts       # Stripe config
    utils/index.ts  # cn(), images, constants
public/             # Static assets
```

Built with ❤️ by REVERA.
=======
# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```
>>>>>>> 810ebb87c5facaf3619eac103b43e2cd99847ea1
