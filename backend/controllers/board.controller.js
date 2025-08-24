import BoardModel from '../models/board.model.js';
import PinModel from '../models/pin.model.js';

export const getBoardsByUserId = async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }
    try {
        const boards = await BoardModel.find({ user: userId });
        const boardsWithCounts = await Promise.all(
            boards.map(async (board) => {
                const pinCount = await PinModel.countDocuments({ board: board._id });
                const firstPin = await PinModel.findOne({ board: board._id }).sort({
                    createdAt: 1,
                });
                return { ...board.toObject(), pinCount, firstPin };
            })
        );
        res.status(200).json(boardsWithCounts);
    } catch (error) {
        console.log('Error in getBoardsByUserId controller', error);
        res.status(500).json({ message: 'Error in getBoardsByUserId controller' });
    }
};
