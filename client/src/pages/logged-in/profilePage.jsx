import { LuUpload } from 'react-icons/lu';
import ImageCustom from '../../components/share/image-custom';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { LuDot } from 'react-icons/lu';
import { useState } from 'react';
import Gallery from '../../components/gallary/gallery';
import Collections from '../../components/profile/collections';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router';

const fetchPinById = async ({ queryKey }) => {
    const [_, username] = queryKey;
    const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/users/${username}`);
    return res.data;
};

export default function ProfilePage() {
    const [chosenTab, setChosenTab] = useState('created');
    const { username } = useParams();
    const { isPending, error, data } = useQuery({
        queryKey: ['profile', username],
        queryFn: fetchPinById,
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
    if (!data) return <p className='text-center text-xl font-bold text-red-500'>User not found</p>;
    return (
        <div
            className='my-5 sm:my-3 mx-5 sm:mx-4 md:mx-3 lg:mx-2 xl:mx-1 2xl:mx-0 
        flex flex-col gap-4 justify-center items-center'
        >
            <ImageCustom
                src={data?.user.avatar}
                alt='Image avatar'
                className='rounded-full w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] 
                md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px] xl:w-[140px] xl:h-[140px] 
                2xl:w-[150px] 2xl:h-[150px]'
            />
            <h1 className='text-2xl font-bold'>{data?.user.fullname}</h1>
            <p className='flex flex-col items-center justify-center'>
                <span className='text-zinc-500 font-semibold'>@{data?.user.username}</span>
                <span className='text-zinc-800 font-semibold'>
                    10 followers
                    <LuDot className='inline' />5 followings
                </span>
            </p>
            <div className='flex justify-center items-center gap-5'>
                <button className='cursor-pointer p-2.5 rounded-full hover:bg-gray-200'>
                    <LuUpload className='text-xl text-black' />
                </button>
                <button
                    className='cursor-pointer bg-gray-100 hover:bg-gray-200 
                font-medium px-4 rounded-3xl py-2'
                >
                    Message
                </button>
                <button
                    className='cursor-pointer bg-red-500 hover:bg-red-600 text-white 
                font-medium px-4 rounded-3xl py-2'
                >
                    Follow
                </button>
                <button className='cursor-pointer p-2.5 rounded-full hover:bg-gray-200'>
                    <HiOutlineDotsHorizontal className='text-xl text-black' />
                </button>
            </div>
            <div className='flex items-center gap-4'>
                <button
                    className={`cursor-pointer font-medium px-2 py-2 tracking-wide ${
                        chosenTab === 'created' && 'border-b-[3px] border-black'
                    }`}
                    onClick={() => setChosenTab('created')}
                >
                    Created
                </button>

                <button
                    className={`cursor-pointer font-medium px-2 py-2 tracking-wide ${
                        chosenTab === 'saved' && 'border-b-[3px] border-black'
                    }`}
                    onClick={() => setChosenTab('saved')}
                >
                    Saved
                </button>
            </div>
            {chosenTab === 'created' ? (
                <Gallery userId={data?.user._id} />
            ) : (
                <Collections userId={data?.user._id} />
            )}
        </div>
    );
}
