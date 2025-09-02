import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
    {
        description: { type: String },
        image: { type: String },
        pin: { type: mongoose.Schema.Types.ObjectId, ref: 'Pin', required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

const CommentModel = mongoose.model('Comment', commentSchema);

export default CommentModel;
