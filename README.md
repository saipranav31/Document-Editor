Real-time Collaborative Document Editor

Overview
A full-stack, real-time collaborative editor with autosave and persistence. Multiple users can edit the same document simultaneously. Content is saved to MongoDB and reloaded on revisit.

Tech Stack
- Client: React + Vite + TypeScript, TipTap (ProseMirror), Yjs
- Realtime: y-websocket
- Server: Node.js (tsx) + Express
- Database: MongoDB Atlas (Mongoose)

Key Features
- Real-time collaboration (shared document via Yjs + y-websocket)
- Autosave (periodic JSON snapshot to MongoDB)
- Document reload on revisit
- Full-screen editor layout with basic toolbar (bold, italic, H2, undo/redo)

Local Development
- Prereqs: Node 18+ (or 20+), MongoDB Atlas URI
- Server
  - cd server
  - npm install
  - Set env var MONGODB_URI (or add server/.env)
  - npm run dev
  - Expected logs: “y-websocket realtime server ready” and “server listening on http://localhost:4000”
- Client (production preview recommended)
  - cd client
  - npm install
  - npm run build
  - npx vite preview --host 127.0.0.1 --port 5178
  - Open http://127.0.0.1:5178

Environment
- Server
  - MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>
  - PORT=4000 (optional)

Document Model (REST)
- GET /api/documents/:key → returns { key, content }
- PUT /api/documents/:key { content } → upserts and returns the document

Realtime Rooms
- Default room: doc-1
- All connected clients to the same room share updates immediately via ws://<server>/doc-1

Deployment
- Frontend (Vercel)
  - Project root: client
  - Build output: dist
- Backend (Render)
  - Project root: server
  - Build: npm install && npm run build
  - Start: npm run start
  - Environment: MONGODB_URI
- Client WebSocket URL (production)
  - Update in client/src/App.tsx: new WebsocketProvider('wss://YOUR_SERVER_HOST', roomId, ydoc)

Troubleshooting
- Blank page in dev
  - Ensure server is running and PORT 4000 is free
  - Clear client caches: delete client/dist and node_modules/.vite, then rebuild
  - Hard refresh browser (Ctrl+Shift+R)
- Mongo Atlas connection blocked
  - Allow your current IP in Atlas → Network Access

Skills & Exposure (What this project demonstrates)
- Frontend Engineering
  - TypeScript-first React app with Vite and TipTap (ProseMirror)
  - Real-time collaborative editing with Yjs
  - Production-friendly build and preview flow
- Realtime Systems
  - WebSocket transport (y-websocket)
  - Conflict-free real-time data structure (CRDT: Yjs)
- Backend & APIs
  - Node.js (ESM via tsx), Express route design
  - REST endpoints for loading/saving documents
  - Mongoose schema design and MongoDB persistence
- DevOps & Deployments
  - Monorepo layout (client/server)
  - Environment variable management
  - Deploy client on Vercel and server on Render

License
MIT

