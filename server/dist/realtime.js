import { setupWSConnection, Doc, docs as roomDocs } from 'y-websocket/bin/utils';
import { WebSocketServer, WebSocket } from 'ws';
import { YDocState } from './models/YDocState.js';
import * as Y from 'yjs';
export function startRealtimeServer(httpServer) {
    const wss = new WebSocketServer({ server: httpServer });
    wss.on('connection', async (ws, req) => {
        try {
            const url = new URL(req.url ?? '/', 'http://localhost');
            const roomId = url.pathname.slice(1) || 'default';
            let ydoc = roomDocs.get(roomId);
            if (!ydoc) {
                // initialize room doc and load persisted state
                ydoc = new Y.Doc();
                const existing = await YDocState.findOne({ roomId });
                if (existing) {
                    Y.applyUpdate(ydoc, new Uint8Array(existing.state));
                }
                ydoc.gc = false;
                roomDocs.set(roomId, ydoc);
            }
            // debounced persist on updates
            const saveDebounceMs = 1000;
            let saveTimer = null;
            const scheduleSave = () => {
                if (saveTimer)
                    clearTimeout(saveTimer);
                saveTimer = setTimeout(async () => {
                    try {
                        const state = Y.encodeStateAsUpdate(ydoc);
                        await YDocState.findOneAndUpdate({ roomId }, { $set: { state: Buffer.from(state), updatedAt: new Date() } }, { upsert: true });
                    }
                    catch (err) {
                        console.error('persist yjs state failed', err);
                    }
                }, saveDebounceMs);
            };
            const updateHandler = () => scheduleSave();
            ydoc.on('update', updateHandler);
            ws.once('close', () => {
                if (saveTimer)
                    clearTimeout(saveTimer);
                // one last save on disconnect
                try {
                    const state = Y.encodeStateAsUpdate(ydoc);
                    void YDocState.findOneAndUpdate({ roomId }, { $set: { state: Buffer.from(state), updatedAt: new Date() } }, { upsert: true });
                }
                catch { }
            });
        }
        catch (e) {
            console.error('load/persist wiring failed', e);
        }
        setupWSConnection(ws, req);
    });
    console.log('y-websocket realtime server ready');
}
//# sourceMappingURL=realtime.js.map