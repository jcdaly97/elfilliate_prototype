# e.l.f.iliate – Local Dev

Quick steps to run this prototype locally.

## Prerequisites
- Node 18+ and Yarn installed

## Setup
1) Install deps
```
yarn
```

2) Start the dev server
```
yarn start
```
- Opens at http://localhost:3000 (or the next free port).

## Notes
- Static assets live under `public/elfilliate-assets/images/**`.
- A static top navigation image is rendered from `public/elfilliate-assets/images/fake-top-nav.png`.
- Some ESLint checks are disabled for smoother prototyping (`.env`).

## Troubleshooting
- Port 3000 in use
  - Either accept the prompt to use another port or free it:
  - Windows: `netstat -aon | findstr :3000` → `taskkill /PID <pid> /F`

- ESLint plugin conflict (Windows path casing)
  - We set the following in `.env` to avoid blocking dev:
    - `SKIP_PREFLIGHT_CHECK=true`
    - `DISABLE_ESLINT_PLUGIN=true`
    - `ESLINT_NO_DEV_ERRORS=true`
  - Restart `yarn start` after modifying `.env`.

## Scripts
- `yarn start` – run dev server
- `yarn build` – production build to `build/`
- `yarn test` – test runner (if enabled)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
