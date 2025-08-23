import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        fullname: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        hashedPassword: { type: String, required: true },
        avatar: {
            type: String,
            default:
                'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png',
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
