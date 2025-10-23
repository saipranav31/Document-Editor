# Document Editor

A full‑stack, real‑time collaborative editor with autosave and persistence. Built with React (Vite + TypeScript), TipTap (ProseMirror), Yjs for CRDT-based realtime collaboration, an Express backend, and MongoDB Atlas.

## Demo URLs (Local Dev)
- PC: `http://localhost:5175`
- Phone (same Wi‑Fi): `http://<YOUR_PC_IP>:5175`

> Tip: Find your IP with `ipconfig`. If Windows blocks access, run `./setup-firewall.ps1` once as Administrator.

## Features
- **Realtime collaboration** with Yjs + y-websocket
- **Autosave** snapshots to MongoDB (gracefully falls back to in‑memory/localStorage when offline)
- **Load on revisit** (content reloads from DB)
- **Polished editor UI** with bold/italic/underline, H2, lists, blockquote, code block, alignment, color, undo/redo
- **Mobile-friendly** layout

## Tech Stack
- **Frontend**: React 18, Vite, TypeScript, TipTap (ProseMirror), Yjs, y-websocket
- **Backend**: Node.js, Express, TypeScript (tsx), WebSocket server via `y-websocket`
- **Database**: MongoDB Atlas with Mongoose
- **Deploy**: GitHub Pages (frontend), Render (backend)

## Monorepo Structure
```
.
├─ client/       # React + Vite app (TypeScript)
├─ server/       # Express + y-websocket + Mongoose (TypeScript)
└─ .github/workflows/deploy-pages.yml  # GH Pages workflow for client/dist
```

## Local Development
### Prerequisites
- Node.js 18+ (or 20+)
- A MongoDB Atlas connection string

### Backend (server)
```bash
# from repo root
npm --prefix "server" install
npm --prefix "server" run dev
```
Environment file `server/.env` (gitignored):
```
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/?retryWrites=true&w=majority&appName=<AppName>
PORT=4000
```
Expected logs:
- y-websocket realtime server ready
- server listening on http://0.0.0.0:4000

### Frontend (client)
```bash
# from repo root
npm --prefix "client" install
npm --prefix "client" run dev
```
Vite will serve at `http://localhost:5175`.

### Phone Access (same Wi‑Fi)
- Update `client/src/config.ts` → `SERVER_IP` with your PC’s IPv4
- Open `http://<YOUR_PC_IP>:5175` on your phone

## Production Deployment
### Frontend → GitHub Pages
- Build output: `client/dist`
- We use a GitHub Actions workflow to build and deploy only the client. It also drops a `.nojekyll` file to bypass Jekyll.
- Ensure Vite base matches your repo name: `client/vite.config.ts` → `base: '/Document-Editor/'`

### Backend → Render
- Root: `server`
- Build: `npm install && npm run build`
- Start: `npm run start`
- Environment: set `MONGODB_URI` in Render dashboard
- After deploy, you’ll get `https://<your-backend>.onrender.com`

### Frontend production config
In `client/src/config.ts` (already environment-aware):
- Localhost uses `http://localhost:4000` and `ws://localhost:4000`
- GitHub Pages runs in static mode (no network)
- If you want full realtime in production, update it to use your backend host with `https://` and `wss://`

## API
- `GET /api/documents/:key` → `{ key, content }`
- `PUT /api/documents/:key` `{ content }` → upsert

## Troubleshooting
- **Blank page in dev**
  - Ensure backend is running on port 4000
  - Clear Vite caches: delete `client/dist` and `client/node_modules/.vite`, then rebuild
  - Hard refresh browser (Ctrl+Shift+R)
- **MongoDB Atlas connection blocked**
  - Add your public IP in Atlas: Security → Network Access
- **GitHub Pages Liquid/Jekyll errors**
  - Use the provided Actions workflow (Pages Source = GitHub Actions)
  - It deploys only `client/dist` with `.nojekyll`

## Scripts
- Client
  - `npm --prefix client run dev`
  - `npm --prefix client run build`
  - `npm --prefix client run preview`
- Server
  - `npm --prefix server run dev`
  - `npm --prefix server run build`
  - `npm --prefix server run start`

## License
MIT
