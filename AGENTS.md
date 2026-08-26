# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

An ecommerce catalog for "Naomi's" — a small vintage clothing and homeware shop. Built with TanStack Start and deployed on Netlify. Products are secondhand, one-off items sold via Stripe Checkout.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (custom CSS variables for the vintage color palette) |
| Payments | Stripe Checkout |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   ├── favicon.ico
│   └── placeholder.png       # Placeholder product photo
├── src/
│   ├── components/
│   │   └── BuyButton.tsx     # Triggers a Stripe Checkout session for a given product
│   ├── data/
│   │   └── products.ts       # Product catalog: id, name, category, era, price, descriptions
│   ├── lib/
│   │   └── stripe.ts         # Server functions: getStripeEnabled, createCheckoutSession
│   ├── routes/
│   │   ├── __root.tsx        # Root layout: header, footer, global styles
│   │   ├── index.tsx         # Catalog page with category filter (all / clothing / homeware)
│   │   ├── products/
│   │   │   └── $productId.tsx  # Product detail page
│   │   └── checkout/
│   │       ├── success.tsx   # Post-checkout success page
│   │       └── cancel.tsx    # Post-checkout cancel page
│   ├── router.tsx            # TanStack Router setup
│   └── styles.css            # Tailwind import, Google Fonts, CSS variables, global styles
├── netlify.toml               # Build command (vite build), publish dir (dist/client), dev port 8888
├── vite.config.ts             # TanStack Start, React, Tailwind, Netlify plugins
└── tsconfig.json              # `@/*` alias for `src/*`
```

## Key Concepts

### Product data

`src/data/products.ts` exports a typed `Product[]` with a `category` field (`'clothing' | 'homeware'`). There is no database — the catalog is static data, since it's a small, hand-curated shop where Naomi edits the file directly to add or remove pieces. If the catalog needs to grow into something dynamic (inventory counts, admin editing), reach for the `general-database` skill rather than growing this file indefinitely.

### Routing

File-based routing via TanStack Router:
- `__root.tsx` — shared header/footer shell
- `index.tsx` → `/` — catalog with client-side category filtering
- `products/$productId.tsx` → `/products/:productId` — loader looks up the product by numeric id, throws if not found

### Checkout flow

- `BuyButton` calls the `createCheckoutSession` server function with a product id
- `src/lib/stripe.ts` builds a one-off Stripe Checkout session from the matching product's price/name/image
- Redirects to `/checkout/success` or `/checkout/cancel` depending on outcome
- If `STRIPE_SECRET_KEY` isn't set, `getStripeEnabled` returns `false` and the button renders as disabled instead of failing at checkout time

## Design System

Defined as CSS variables in `src/styles.css`:
- `--cream` / `--paper` — warm background tones
- `--ink` / `--ink-soft` — text colors (no pure black)
- `--rust` / `--rust-dark` — primary accent (buttons, links)
- `--olive` — homeware category tag
- `--mustard` — clothing category tag

Display font is Fraunces (serif, used italic for editorial moments); body font is Karla. Both loaded via Google Fonts import in `styles.css`.

## Conventions

- Components: PascalCase
- Routes: kebab-case files, TanStack file-based conventions (`$param`, `__root`)
- Import paths use the `@/` alias for `src/*`
- Tailwind utility classes for layout/spacing; CSS variables (via inline `style`) for the color palette, since the palette isn't part of the default Tailwind theme

## Development Commands

```bash
pnpm dev      # Start dev server on :3000
pnpm build    # Production build
```

## Environment Variables

```
STRIPE_SECRET_KEY=...   # Required for checkout to actually redirect to Stripe
SITE_URL=...            # Used to build success/cancel redirect URLs; defaults to http://localhost:3000
```
