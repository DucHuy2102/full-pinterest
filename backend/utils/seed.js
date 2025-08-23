import { fakerEN } from '@faker-js/faker';
import bcryptjs from 'bcryptjs';
import connectDatabase from '../database/connectDb.js';
import UserModel from '../models/user.model.js';
import PinModel from '../models/pin.model.js';
import BoardModel from '../models/broad.model.js';
import CommentModel from '../models/comment.model.js';

connectDatabase();

const seedDB = async () => {
    await UserModel.deleteMany({});
    await PinModel.deleteMany({});
    await BoardModel.deleteMany({});
    await CommentModel.deleteMany({});

    const users = [];
    for (let i = 1; i <= 10; i++) {
        const hashedPassword = await bcryptjs.hash('p@ssword2025', 10);
        const user = new UserModel({
            fullname: fakerEN.person.fullName(),
            username: fakerEN.internet.username().toLowerCase(),
            email: fakerEN.internet.email().toLowerCase(),
            hashedPassword: hashedPassword,
            avatar: fakerEN.image.avatar(),
        });
        users.push(await user.save());
    }

    const boards = [];
    for (const user of users) {
        for (let i = 1; i <= 10; i++) {
            const board = new BoardModel({
                title: fakerEN.lorem.words(3),
                user: user._id,
            });
            boards.push(await board.save());
        }
    }

    const pins = [];
    for (const user of users) {
        const userBoards = boards.filter((board) => board.user.toString() === user._id.toString());
        if (userBoards.length === 0) continue;
        for (let i = 1; i <= 10; i++) {
            const mediaSize = Math.random() < 0.5 ? '800/1200' : '800/600';
            const pin = new PinModel({
                image: `https://picsum.photos/id/${i + 10}/${mediaSize}`,
                width: 800,
                height: mediaSize === '800/1200' ? 1200 : 600,
                title: fakerEN.lorem.sentence(),
                description: fakerEN.lorem.paragraph(),
                link: fakerEN.internet.url(),
                board: userBoards[Math.floor(Math.random() * userBoards.length)]._id,
                tags: fakerEN.helpers.arrayElements(fakerEN.lorem.words(5).split(' '), {
                    min: 2,
                    max: 5,
                }),
                user: user._id,
            });
            pins.push(await pin.save());
        }
    }

    for (const user of users) {
        for (let i = 1; i <= 10; i++) {
            const randomPin = pins[Math.floor(Math.random() * pins.length)];
            const comment = new CommentModel({
                description: fakerEN.lorem.sentence(),
                pin: randomPin._id,
                user: user._id,
            });
            await comment.save();
        }
    }

    console.log('Database seeded successfully!');
    process.exit(0);
};

seedDB().catch((error) => {
    console.error('Error seeding database:', error);
    process.exit(1);
});
