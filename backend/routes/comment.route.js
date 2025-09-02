import express from 'express';
import {
    addComment,
    deleteComment,
    getCommentsByPostId,
} from '../controllers/comment.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();
router.get('/:postId', getCommentsByPostId);
router.post('/create', verifyToken, addComment);
router.delete('/:id', verifyToken, deleteComment);

export default router;
