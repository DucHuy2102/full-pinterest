import userRouter from './user.route.js';
import pinRouter from './pin.route.js';
import commentRouter from './comment.route.js';
import boardRouter from './board.route.js';
import ImageKit from 'imagekit';

const imagekit = new ImageKit({
    publicKey: process.env.VITE_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.VITE_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.VITE_IMAGEKIT_URL,
});

export default function SetupRoutes(app) {
    app.use('/users', userRouter);
    app.use('/pins', pinRouter);
    app.use('/comments', commentRouter);
    app.use('/boards', boardRouter);

    app.use('/imagekit/auth', (req, res) => {
        try {
            const result = imagekit.getAuthenticationParameters();
            res.status(200).json(result);
        } catch (error) {
            console.error('Authentication failed:', error);
            res.status(500).json({ message: 'Authentication failed' });
        }
    });
}
