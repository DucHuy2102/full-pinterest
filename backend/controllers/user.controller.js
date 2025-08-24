import UserModel from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const normalizedEmail = email.toLowerCase();
        const isUserExist = await UserModel.findOne({
            $or: [{ username }, { email: normalizedEmail }],
        });
        if (isUserExist) {
            return res.status(400).json({
                success: false,
                message: 'User already exists !!!',
            });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = await new UserModel({
            username,
            email,
            hashedPassword,
        }).save();
        const { hashedPassword: pass, ...rest } = newUser._doc;
        res.status(201).json({
            success: true,
            message: 'User signed up successfully',
            user: rest,
        });
    } catch (error) {
        console.log('Error in signup controller', error);
        res.status(500).json({
            success: false,
            message: 'Error in signup controller',
        });
    }
};

export const signin = async (req, res) => {
    // signin logic
};

export const signout = async (req, res) => {
    // signout logic
};

export const forgotPassword = async (req, res) => {
    // forgot password logic
};

export const resetPassword = async (req, res) => {
    // reset password logic
};

export const verifyEmail = async (req, res) => {
    // verify email logic
};

export const getUserByUsername = async (req, res) => {
    const { username } = req.params;
    if (!username) {
        return res.status(400).json({ message: 'Invalid username' });
    }
    try {
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const { hashedPassword, ...rest } = user._doc;
        res.status(200).json({ user: rest });
    } catch (error) {
        console.log('Error in getUserByUsername controller', error);
        res.status(500).json({ message: 'Error in getUserByUsername controller' });
    }
};
