import ImageKit from 'imagekit-javascript';
import axios from 'axios';

const ik = new ImageKit({
    publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL,
    authenticationEndpoint: `${import.meta.env.VITE_API_ENDPOINT}/imagekit/auth`,
});

export const authenticator = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/imagekit/auth`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw new Error(
            `Authentication request failed: ${error.response?.status} - ${
                error.response?.data || error.message
            }`
        );
    }
};

export const uploadImage = async (imageFile) => {
    try {
        const authParams = await authenticator();

        const uploadResult = await ik.upload({
            file: imageFile,
            fileName: imageFile.name,
            token: authParams.token,
            expire: authParams.expire,
            signature: authParams.signature,
        });

        return uploadResult.url;
    } catch (error) {
        console.error('Image upload failed:', error);
        return null;
    }
};
