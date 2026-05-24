# BookNook

> Own your library, completely.

BookNook is a self-hosted, open-source book management system. No subscriptions, no lock-in — just your library, on your server.

> **Status:** In active development. Docker installation and usage instructions are coming soon. The landing page is the focus of the readme standup instructions

# Todos:
## Landing
- [X] Landing page
- [ ] Live Demo
## Application
- [ ] Frontend
- [ ] Backend API:
  - [ ] Database Integration
  - [ ] Authentication
  - [ ] Book Management
- [ ] Docker Container
- [ ] Docker installation and usage instructions

## Planned Features

- **Easy and Extensible** — Get started with the Docker image and extend it with your own customizations
- **Broad Format Support** — Aims to support various book formats, languages, and genres
- **Curated for You** — Personalized recommendations based on your reading history and taste
- **Dark Mode** — Full light/dark theme support
- **Self-hosted** — Your data stays on your server

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Cloudflare Workers |
| Framework | [Hono](https://hono.dev) |
| Bundler | Vite + `@cloudflare/vite-plugin` |
| Deployment | Wrangler |

## Development

**Prerequisites:** [Bun](https://bun.sh) and [Node.js](https://nodejs.org)

```bash
# Install dependencies
bun install

# Start dev server with hot reload
bun run dev
```

The dev server runs at `http://localhost:5173`.

## Deployment

```bash
# Authenticate with Cloudflare (first time only)
wrangler login

# Build and deploy to Cloudflare Workers
bun run deploy
```

## Project Structure

```
BookNook/
├── index.html          # Entry point (Vite dev)
├── src/
│   ├── index.tsx       # Hono app + API routes
│   └── renderer.tsx    # JSX renderer
├── public/
│   ├── styles.css      # Design system + theming
│   ├── script.js       # Theme toggle, nav
│   └── assets/         # SVGs, images
├── vite.config.ts
└── wrangler.jsonc
```

## License

MIT
