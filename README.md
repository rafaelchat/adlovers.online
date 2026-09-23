# AdLovers Website

React + Vite site with an Express server for local API routes.

## Requirements

- Node.js 20+
- npm

## Local Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Open:

```text
http://localhost:3000
```

The site works without `GEMINI_API_KEY`. When the key is missing, the audit endpoints return simulated reports so the frontend remains usable during local work.

## Scripts

```bash
npm run dev      # Start local Express + Vite dev server
npm run lint     # Type-check the project
npm run build    # Build frontend and bundled server
npm run start    # Run the production build from dist/
npm run clean    # Remove dist/
npm run check    # Type-check and build
```

## Key Files

- `src/App.tsx`: main page routing state
- `src/components/Hero.tsx`: homepage hero and lead magnet modal
- `src/components/RevOpsCenter.tsx`: audit form and result UI
- `src/components/PricingPlaybooks.tsx`: plans, pricing, and risk-reversal milestone
- `server.ts`: Express API routes and Vite middleware

## Environment

```text
GEMINI_API_KEY=""            # Optional. Enables live Gemini audit generation when set.
APP_URL="http://localhost:3000"
PORT=3000                    # Optional. Defaults to 3000.
```
