# Model Rollout Phase Tracker

A responsive dashboard-style interface for exploring staged model rollout information. It includes rollout phase cards, summary metrics, Free vs. Pro tier comparisons, search and status filters, and an account-status checklist.

> **Important:** This is a community-built tracking interface, not an official Google product or source of rollout confirmation. Model names, availability, dates, quotas, and rollout details can change; verify current information with official Google announcements and product documentation before relying on it.

## Features

- Browse rollout phases and milestone details
- Filter phases by status and search across phase information
- Compare information for Free and Pro/Ultra tiers
- View overview metrics and an account-status checklist
- Responsive interface for desktop and mobile screens

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- Motion
- Google GenAI SDK and Express dependencies are included in the project

## Getting started

### Prerequisites

- Node.js and npm
- A current browser

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite prints the local development URL in the terminal.

### Build for production

```bash
npm run build
npm run preview
```

### Type-check

```bash
npm run lint
```

## Configuration

The repository includes an `.env.example` file documenting `GEMINI_API_KEY` and `APP_URL` for environments that use the server-side integration. Copy the example to `.env` only when your setup requires these values, then replace the placeholders with your own credentials and deployment URL.

**Never commit real API keys, access tokens, or other secrets.** Keep local `.env` files out of version control and configure production secrets through your hosting provider.

## Project structure

```text
src/
  components/   Reusable dashboard and status components
  data/         Rollout phase data
  App.tsx       Main application and view/filter state
  main.tsx      Application entry point
  types.ts      TypeScript types
index.html      HTML entry point and page metadata
```

## Data accuracy

Treat rollout information as informational and verify claims against official sources before making decisions. If you update phase details, include source links and a last-verified date for each time-sensitive claim.

## License

No license is currently specified. Unless a license is added, reuse and redistribution are not automatically granted.
