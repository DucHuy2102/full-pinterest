import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const followUser = async ({ username }) => {
    const res = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/users/follow/${username}`,
        {},
        { withCredentials: true }
    );
    return res.data;
};

export default function FollowButton({ isFollowing, username }) {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: followUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['profile', username] });
        },
    });

    const handleFollow = (e) => {
        e.preventDefault();
        // console.log('Follow button clicked', username);
        mutation.mutate({ username });
    };

    return (
        <button
            onClick={handleFollow}
            disabled={mutation.isPending}
            className={`cursor-pointer bg-red-500 hover:bg-red-600 text-white
            font-medium px-4 rounded-3xl py-2 ${
                mutation.isPending ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
            {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
    );
}
