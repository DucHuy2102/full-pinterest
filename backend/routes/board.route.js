import express from 'express';
import { getBoardsByUserId } from '../controllers/board.controller.js';

const router = express.Router();

router.get('/:userId', getBoardsByUserId);

export default router;
