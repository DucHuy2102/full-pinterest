import express from 'express';
import {
    getUserByUsername,
    verifyEmail,
    forgotPassword,
    resetPassword,
    signin,
    signout,
    signup,
    followUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

// endpoint for sign up: https://localhost:5000/users/sign-up
router.post('/sign-up', signup);

// endpoint for sign in: https://localhost:5000/users/sign-in
router.post('/sign-in', signin);

// endpoint for sign out: https://localhost:5000/users/sign-out
router.post('/sign-out', signout);

// endpoint for forgot password: https://localhost:5000/users/forgot-password
router.post('/forgot-password', forgotPassword);

// endpoint for reset password: https://localhost:5000/users/reset-password
router.post('/reset-password', resetPassword);

// endpoint for verify email: https://localhost:5000/users/verify-email
router.get('/verify-email', verifyEmail);

// get user by username - endpoint: https://localhost:5000/users/:username
router.get('/:username', getUserByUsername);

router.post('/follow/:username', verifyToken, followUser);

export default router;
