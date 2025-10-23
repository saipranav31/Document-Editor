import pkg from 'y-websocket/bin/utils';
const { setupWSConnection } = pkg;
import { WebSocketServer, WebSocket } from 'ws';
export function startRealtimeServer(httpServer) {
    const wss = new WebSocketServer({ server: httpServer });
    wss.on('connection', (ws, req) => {
        setupWSConnection(ws, req);
    });
    console.log('y-websocket realtime server ready');
}
//# sourceMappingURL=realtime.js.map