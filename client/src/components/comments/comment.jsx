import { GoHeart } from 'react-icons/go';
import { FcLike } from 'react-icons/fc';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import ImageKit from '../share/image-custom';
import { Link } from 'react-router';
import { useState } from 'react';

export default function Comment({ id, user, comment, time }) {
    const [isLikeComment, setIsLikeComment] = useState(false);

    const handleLikeComment = (idComment) => {
        console.log({ idComment });
        // call api here, if success then set state
        setIsLikeComment((prev) => !prev);
    };

    return (
        <div className='flex items-start justify-center gap-4'>
            <ImageKit src={user.avatar} alt={user.name} className='w-9 h-9 rounded-full' />
            <div className='flex flex-col gap-0.5 w-full'>
                <p className='text-sm'>
                    <Link to={`/user/${user.id}`} className='text-sm font-bold cursor-pointer'>
                        {user.name}
                    </Link>
                    <span className='ml-2'>{comment}</span>
                </p>
                <div className='flex items-center gap-4 text-sm'>
                    <span className='text-zinc-700'>{time}</span>
                    <span className='cursor-pointer hover:font-medium'>Reply</span>
                    <span className='cursor-pointer' onClick={() => handleLikeComment(id)}>
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
