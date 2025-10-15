import mongoose from 'mongoose';
export type YDocStateModel = {
    roomId: string;
    state: Buffer;
    updatedAt: Date;
};
export declare const YDocState: mongoose.Model<YDocStateModel, {}, {}, {}, mongoose.Document<unknown, {}, YDocStateModel, {}, {}> & YDocStateModel & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=YDocState.d.ts.map