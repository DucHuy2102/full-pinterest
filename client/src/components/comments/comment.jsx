import { GoHeart } from 'react-icons/go';
import { FcLike } from 'react-icons/fc';
import ImageCustom from '../share/image-custom';
import { Link } from 'react-router';
import { useState } from 'react';
import { format } from 'timeago.js';
import FsLightbox from 'fslightbox-react';
import MenuOptions from './menu-options';
import useCommentStore from '../../store/commentStore';

export default function Comment({ postId, _id, user, description, image, createdAt }) {
    const { username, avatar } = user;
    const [isLikeComment, setIsLikeComment] = useState(false);
    const [toggler, setToggler] = useState(false);
    const setComment = useCommentStore((state) => state.setComment);

    const handleLikeComment = (idComment) => {
        console.log({ idComment });
        // call api here, if success then set state
        setIsLikeComment((prev) => !prev);
    };

    const handleEditComment = (commentId, description, image) => {
        setComment({
            commentId,
            description,
            image,
        });
    };

    return (
        <div className='flex items-start justify-center gap-4'>
            <Link to={`/${username}`}>
                <ImageCustom src={avatar} alt={username} className='w-9 h-9 rounded-full' />
            </Link>
            <div className='flex flex-col gap-0.5 w-full'>
                <div className='text-sm'>
                    <Link to={`/${username}`} className='text-sm font-bold cursor-pointer'>
                        {username}
                    </Link>
                    {description && <span className='ml-2'>{description}</span>}
                    {image && (
                        <div onClick={() => setToggler(!toggler)} className='w-fit'>
                            <ImageCustom
                                src={image}
                                alt={description}
                                className='w-40 h-40 rounded-md my-2'
                            />
                            <FsLightbox toggler={toggler} sources={[image]} />
                        </div>
                    )}
                </div>
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
                    <MenuOptions
                        user={user}
                        postId={postId}
                        commentId={_id}
                        onClickEdit={() => handleEditComment(_id, description, image)}
                    />
                </div>
            </div>
        </div>
    );
}
