import mongoose from 'mongoose';

const broadSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

const BroadModel = mongoose.model('Broad', broadSchema);

export default BroadModel;
