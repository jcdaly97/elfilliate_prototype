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

## Mobile App (Expo)

Location: `elfilliate/elfilliate-mobile`

Quick start
- Node: use Node 20.19.4 or newer (Node 22.x recommended)
- Install deps:
  - `cd elfilliate/elfilliate-mobile`
  - Remove npm lock if present (avoid mixing npm/yarn):
    - Git Bash: `rm -f package-lock.json`
    - PowerShell: `Remove-Item package-lock.json -Force`
  - `yarn install` (or `yarn install --network-timeout 600000` on slow networks)
- Start Expo:
  - `expo start` (or `yarn start`)
  - Press `w` for web, `a` for Android, or scan QR with Expo Go

Android (optional emulator)
- Install Android Studio and SDK Platform/Platform‑Tools/Build‑Tools
- Set environment variables (Windows):
  - `ANDROID_SDK_ROOT` or `ANDROID_HOME` → `C:\Users\<you>\AppData\Local\Android\Sdk`
  - Add to PATH: `%ANDROID_SDK_ROOT%\platform-tools; %ANDROID_SDK_ROOT%\emulator`
- Then in the Expo terminal press `a`

Web support
- If prompted to install web deps:
  - `npx expo install react-native-web @expo/metro-runtime`
- If bundler complains about assets, ensure filenames and imports use lowercase (e.g. `.jpg`) and correct relative paths.
- Clear cache: `expo start -c`

Common Windows notes
- PowerShell can block `npm`/`npx` scripts; use `cmd.exe` or run:
  - `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`
- If you see engine errors (e.g., React Native requires newer Node), install a newer Node with nvm-windows:
  - `nvm install 22.11.0 && nvm use 22.11.0`

Mobile assets
- Put mobile images in `elfilliate/elfilliate-mobile/assets/images/`
- Import with `require(...)` using the correct relative depth from `src/**` files.
- Keep filenames lowercase (e.g., `product-1.jpg`, `social-1.jpg`).

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

- Expo web bundling errors (assets or peer deps)
  - Install web deps: `npx expo install react-native-web @expo/metro-runtime`
  - Use lowercase asset filenames; verify relative `require(...)` paths
  - Restart with clean cache: `expo start -c`

## Scripts
- `yarn start` – run dev server
- `yarn build` – production build to `build/`
- `yarn test` – test runner (if enabled)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
