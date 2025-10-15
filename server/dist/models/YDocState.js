import mongoose, { Schema } from 'mongoose';
const YDocStateSchema = new Schema({
    roomId: { type: String, required: true, unique: true, index: true },
    state: { type: Buffer, required: true },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });
export const YDocState = mongoose.models.YDocState ||
    mongoose.model('YDocState', YDocStateSchema);
//# sourceMappingURL=YDocState.js.map