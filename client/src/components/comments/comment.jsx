import { GoHeart } from 'react-icons/go';
import { FcLike } from 'react-icons/fc';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import ImageKit from '../share/image-custom';
import { Link } from 'react-router';
import { useState } from 'react';
import { format } from 'timeago.js';

export default function Comment({ _id, user, description, createdAt }) {
    const [isLikeComment, setIsLikeComment] = useState(false);
    const { username, avatar } = user;

    const handleLikeComment = (idComment) => {
        console.log({ idComment });
        // call api here, if success then set state
        setIsLikeComment((prev) => !prev);
    };

    return (
        <div className='flex items-start justify-center gap-4'>
            <Link to={`/${username}`}>
                <ImageKit src={avatar} alt={username} className='w-9 h-9 rounded-full' />
            </Link>
            <div className='flex flex-col gap-0.5 w-full'>
                <p className='text-sm'>
                    <Link to={`/${username}`} className='text-sm font-bold cursor-pointer'>
                        {username}
                    </Link>
                    <span className='ml-2'>{description}</span>
                </p>
                <div className='flex items-center gap-4 text-sm'>
                    <span className='text-zinc-700'>{format(createdAt)}</span>
                    <span className='cursor-pointer hover:font-medium'>Reply</span>
                    <span className='cursor-pointer' onClick={() => handleLikeComment(_id)}>
                        {isLikeComment ? (
                            <FcLike className='w-4 h-4' />
                        ) : (
                            <GoHeart className='w-4 h-4' />
                        )}
                    </span>
                    <span className='cursor-pointer'>
                        <HiOutlineDotsHorizontal className='' />
                    </span>
                </div>
            </div>
        </div>
    );
}
