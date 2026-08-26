# Naomi's — Vintage Clothing & Homeware

A small ecommerce catalog for a one-woman vintage shop, selling secondhand clothing and homeware with honest, flaw-and-all descriptions. Built with TanStack Start and Stripe Checkout, deployed on Netlify.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19, TanStack Router) for routing and server functions
- [Tailwind CSS 4](https://tailwindcss.com) for styling
- [Stripe Checkout](https://stripe.com/docs/checkout) for payments
- [Vite 7](https://vitejs.dev) as the build tool
- Deployed on [Netlify](https://www.netlify.com)

## Running locally

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

The app runs at `http://localhost:3000`.

To enable checkout, set a Stripe secret key as an environment variable:

```bash
STRIPE_SECRET_KEY=sk_test_...
```

Without it, the "Claim it" button on each product shows as unavailable rather than erroring.

## Project structure

- `src/data/products.ts` — the product catalog (clothing and homeware items, each with era, description, and price)
- `src/routes/index.tsx` — the catalog page with category filtering
- `src/routes/products/$productId.tsx` — individual product page
- `src/components/BuyButton.tsx` — triggers a Stripe Checkout session
- `src/lib/stripe.ts` — server functions for Stripe Checkout
- `src/routes/checkout/success.tsx`, `src/routes/checkout/cancel.tsx` — post-checkout pages
