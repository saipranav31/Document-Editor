import mongoose from 'mongoose';
import type { InferSchemaType } from 'mongoose';
declare const DocumentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    key: string;
    content: any;
    updatedAt: NativeDate;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    key: string;
    content: any;
    updatedAt: NativeDate;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    key: string;
    content: any;
    updatedAt: NativeDate;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export type DocumentModel = InferSchemaType<typeof DocumentSchema>;
export declare const Document: mongoose.Model<{
    key: string;
    content: any;
    updatedAt: NativeDate;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    key: string;
    content: any;
    updatedAt: NativeDate;
} & mongoose.DefaultTimestampProps, {}, {}> & {
    key: string;
    content: any;
    updatedAt: NativeDate;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export {};
//# sourceMappingURL=Document.d.ts.map