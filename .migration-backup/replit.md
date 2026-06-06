# FaChat Landing

FaChat is a WhatsApp AI assistant for Argentine businesses — a landing page that presents the product, pricing, and FAQs, with CTAs that open WhatsApp demos.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/fachat/` — React + Vite landing page (served at `/`)
- `artifacts/fachat/src/pages/` — Home, Privacidad, Terminos pages
- `artifacts/fachat/src/components/` — Navbar, Hero, Features, HowItWorks, Pricing, FAQ, Footer
- `artifacts/fachat/src/index.css` — global styles, brand tokens, animations
- `artifacts/fachat/public/` — favicon.png, apple-touch-icon.png

## Architecture decisions

- Pure frontend app — no backend needed. Pricing data fetches from an external ngrok endpoint with a silent fallback to hardcoded defaults.
- wouter used for client-side routing (/, /privacidad, /terminos)
- lucide-react pinned to 0.383.0 (the version the original project used; catalog 0.545.0 has a different ESM structure that breaks Vite's bundler)
- Tailwind v4 with @theme inline for brand colors and font families

## Product

FaChat landing page with: hero section with WhatsApp chat mockup, 8-feature grid, 4-step "how it works", 3-tier pricing (Básico/Profesional/Enterprise), FAQ accordion, and legal pages (Política de Privacidad + Términos y Condiciones).

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
