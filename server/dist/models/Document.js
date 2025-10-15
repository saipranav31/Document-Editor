import mongoose, { Schema } from 'mongoose';
const DocumentSchema = new Schema({
    key: { type: String, required: true, index: true, unique: true },
    content: { type: Object, required: true },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });
export const Document = mongoose.models.Document ||
    mongoose.model('Document', DocumentSchema);
//# sourceMappingURL=Document.js.map