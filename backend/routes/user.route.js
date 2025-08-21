import express from 'express';
import {
    verifyEmail,
    forgotPassword,
    resetPassword,
    signin,
    signout,
    signup,
} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/verify-email', verifyEmail);

export default router;
