whReal-time Collaborative Document Editor

Quick start

- Server
  - open a terminal:
    - `cd server`
    - `npm run dev`
  - server runs at `http://localhost:4000` and hosts a Yjs websocket.

- Client
  - open another terminal:
    - `cd client`
    - `npm run dev`
  - open the printed URL (default `http://localhost:5173`).

Notes
- Collaboration uses Yjs + y-websocket with room `doc-1`.
- No database yet; content is in-memory per websocket room.

