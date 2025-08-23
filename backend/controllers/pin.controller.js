import PinModel from '../models/pin.model.js';

export const getPins = async (req, res) => {
    try {
        const LIMIT = 21;
        const pageNumber = Number(req.query.cursor) || 0;
        const pins = await PinModel.find()
            .limit(LIMIT)
            .skip(pageNumber * LIMIT);
        const hasNextPage = pins.length === LIMIT;
        res.status(200).json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
    } catch (error) {
        console.error('Error in getPins controller:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
