import express from 'express';
import { getPinById, getPins } from '../controllers/pin.controller.js';

const router = express.Router();

// Get all pins: http://localhost:5000/pins
router.get('/', getPins);

// Get a single pin by ID: http://localhost:5000/pins/:id
router.get('/:id', getPinById);

export default router;
