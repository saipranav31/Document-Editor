import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { startRealtimeServer } from './realtime.js';
import { connectToDatabase } from './db.js';
import documentsRouter from './routes/documents.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
app.use('/api/documents', documentsRouter);
const port = process.env.PORT ? Number(process.env.PORT) : 4000;
const server = http.createServer(app);
startRealtimeServer(server);
connectToDatabase()
    .then(() => {
    server.listen(port, () => {
        console.log(`server listening on http://localhost:${port}`);
    });
})
    .catch((err) => {
    console.error('failed to connect to MongoDB', err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map