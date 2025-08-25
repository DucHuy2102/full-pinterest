import express from 'express';
import { getCommentsByPostId } from '../controllers/comment.controller.js';

const router = express.Router();
router.get('/:postId', getCommentsByPostId);

export default router;
