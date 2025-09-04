import axios from 'axios';
import { IoIosArrowDown } from 'react-icons/io';
import Comment from './comment';
import CommentForm from './comment-form';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchCommentsById = async ({ queryKey }) => {
    const [_, postId] = queryKey;
    const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/comments/${postId}`);
    return res.data;
};

export default function Comments({ postId }) {
    const [showAllComments, setShowAllComments] = useState(false);
    const { isPending, error, data } = useQuery({
        queryKey: ['comments', postId],
        queryFn: fetchCommentsById,
    });
    console.log({ data });
    const totalComment = data?.length;

    const handleShowAllComments = () => {
        setShowAllComments((prev) => !prev);
    };

    if (isPending)
        return (
            <p className='text-center text-xl font-semibold italic text-zinc-600'>
                Please wait, loading comments...
            </p>
        );
    if (error)
        return (
            <p className='text-center text-xl font-bold text-red-500'>
                Something went wrong! Please try again later.
            </p>
        );
    if (!data)
        return (
            <p className='text-center text-xl font-bold text-red-500'>There are no comments yet!</p>
        );

    return (
        <div className='flex flex-col flex-1 gap-2 min-h-0 border-t border-gray-200'>
            {totalComment > 0 ? (
                <>
                    <div className='flex items-center justify-between mt-2'>
                        <span className='font-medium'>
                            {totalComment} {totalComment > 2 ? 'comments' : 'comment'}
                        </span>
                        {totalComment > 3 && (
                            <button
                                className='flex items-center justify-center gap-1 cursor-pointer text-zinc-700
                        rounded-lg px-2 py-1.5 bg-zinc-100 sm:bg-gray-50 hover:bg-gray-100 transition-colors duration-200'
                                onClick={handleShowAllComments}
                            >
                                <span className='text-sm font-medium'>
                                    Show {showAllComments ? 'less' : 'more'}
                                </span>
                                <IoIosArrowDown
                                    className={`${
                                        showAllComments && 'transform rotate-180 duration-200'
                                    } `}
                                />
                            </button>
                        )}
                    </div>

                    {/* laptop screen & tablet */}
                    <div className='hidden sm:flex flex-col flex-1 gap-4 overflow-y-auto'>
                        {showAllComments
                            ? data?.map((comment) => (
                                  <Comment key={comment._id} postId={postId} {...comment} />
                              ))
                            : data
                                  ?.slice(0, 3)
                                  .map((comment) => (
                                      <Comment key={comment._id} postId={postId} {...comment} />
                                  ))}
                    </div>

                    {/* mobile screen */}
                    <div className='flex flex-col flex-1 gap-4 overflow-y-auto sm:hidden'>
                        {showAllComments
                            ? data?.map((comment) => (
                                  <Comment key={comment._id} postId={postId} {...comment} />
                              ))
                            : data
                                  ?.slice(0, 3)
                                  .map((comment) => (
                                      <Comment key={comment._id} postId={postId} {...comment} />
                                  ))}
                    </div>
                </>
            ) : (
                <p className='flex flex-1 justify-center text-lg font-semibold text-zinc-500 mt-3'>
                    There are no comments yet!
                </p>
            )}

            <CommentForm postId={postId} />
        </div>
    );
}
