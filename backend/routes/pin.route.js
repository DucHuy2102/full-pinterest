import express from 'express';
import { getPins } from '../controllers/pin.controller.js';

const router = express.Router();

// Get all pins: http://localhost:5000/pins
router.get('/', getPins);

export default router;
