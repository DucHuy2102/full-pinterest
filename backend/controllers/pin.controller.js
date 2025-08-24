import PinModel from '../models/pin.model.js';
import UserModel from '../models/user.model.js';

export const getPins = async (req, res) => {
    try {
        const LIMIT = 21;
        const pageNumber = Number(req.query.cursor) || 0;
        const search = req.query.search || '';
        const userId = req.query.userId || '';
        const boardId = req.query.boardId || '';

        const query = {};
        if (search) {
            query.$or = [{ title: { $regex: search, $options: 'i' } }, { tags: { $in: [search] } }];
        }

        if (userId) {
            query.user = userId;
        }

        if (boardId) {
            query.board = boardId;
        }

        const pins = await PinModel.find(query)
            .limit(LIMIT)
            .skip(pageNumber * LIMIT);
        const hasNextPage = pins.length === LIMIT;
        res.status(200).json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
    } catch (error) {
        console.error('Error in getPins controller:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getPinById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'Invalid pin ID' });
    }
    try {
        const pin = await PinModel.findById(id).populate('user', 'fullname username avatar');
        if (!pin) {
            return res.status(404).json({ message: 'Pin not found' });
        }
        res.status(200).json(pin);
    } catch (error) {
        console.error('Error in getPinById controller:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
