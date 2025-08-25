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
