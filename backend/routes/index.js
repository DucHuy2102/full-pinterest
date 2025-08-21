import userRouter from './user.route.js';

export default function SetupRoutes(app) {
    app.use('/users', userRouter);
}
