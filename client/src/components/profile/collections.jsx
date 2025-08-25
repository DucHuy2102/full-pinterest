import { useQuery } from '@tanstack/react-query';
import CollectionItem from './collection-item';
import axios from 'axios';

const fetchBoardById = async ({ queryKey }) => {
    const [_, userId] = queryKey;
    const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/boards/${userId}`);
    return res.data;
};

export default function Collections({ userId }) {
    const { isPending, error, data } = useQuery({
        queryKey: ['boards', userId],
        queryFn: fetchBoardById,
    });

    if (isPending)
        return (
            <p className='text-center text-xl font-semibold italic text-zinc-600'>
                Please wait, loading profile user information...
            </p>
        );
    if (error)
        return (
            <p className='text-center text-xl font-bold text-red-500'>
                Something went wrong! Please try again later.
            </p>
        );
    if (!data)
        return <p className='text-center text-xl font-bold text-red-500'>Collections not found</p>;

    return (
        <div
            className='w-full py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
            2xl:grid-cols-6 3xl:grid-cols-7 gap-4 overflow-hidden'
        >
            {data?.map((board, index) => (
                <CollectionItem key={index} board={board} />
            ))}
        </div>
    );
}
