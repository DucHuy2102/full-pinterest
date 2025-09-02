import CommentModel from '../models/comment.model.js';
import UserModel from '../models/user.model.js';

export const getCommentsByPostId = async (req, res) => {
    const { postId } = req.params;
    if (!postId) {
        return res.status(400).json({ message: 'Post ID is required' });
    }
    try {
        const comments = await CommentModel.find({ pin: postId })
            .populate('user', 'username avatar')
            .sort({ createdAt: -1 });
        res.status(200).json(comments);
    } catch (error) {
        console.log('Error in getCommentsByPostId controller', error);
        res.status(500).json({ message: 'Error in getCommentsByPostId controller' });
    }
};

export const addComment = async (req, res) => {
    const { comment, image, postId } = req.body;
    if (!postId) {
        return res.status(400).json({ message: 'Post ID is required' });
    }
    const userId = req.userId;
    try {
        const newComment = await CommentModel.create({
            description: comment,
            image,
            pin: postId,
            user: userId,
        });
        const user = await UserModel.findById(userId);
        res.status(201).json({ ...newComment.toObject(), user });
    } catch (error) {
        console.log('Error in addComment controller', error);
        res.status(500).json({ message: 'Error in addComment controller' });
    }
};

export const deleteComment = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'Comment ID is required' });
    try {
        const deletedComment = await CommentModel.findByIdAndDelete(id);
        if (!deletedComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        console.log('Error in deleteComment controller', error);
        res.status(500).json({ message: 'Error in deleteComment controller' });
    }
};
