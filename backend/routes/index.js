import userRouter from './user.route.js';
import pinRouter from './pin.route.js';
import commentRouter from './comment.route.js';
import boardRouter from './board.route.js';

export default function SetupRoutes(app) {
    app.use('/users', userRouter);
    app.use('/pins', pinRouter);
    app.use('/comments', commentRouter);
    app.use('/boards', boardRouter);
}
