import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';
import useAuthStore from '../../store/authStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const deleteComment = async (id) => {
    const response = await axios.delete(`${import.meta.env.VITE_API_ENDPOINT}/comments/${id}`, {
        withCredentials: true,
    });
    return response.data;
};

export default function MenuOptions({ user, postId, commentId, onClickEdit }) {
    const { user: userStore } = useAuthStore();
    const [isOpenChoice, setIsOpenChoice] = useState(false);
    const [checkUser, setCheckUser] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        if (isOpenChoice) {
            const handleClickOutside = (event) => {
                if (menuRef.current && !menuRef.current.contains(event.target)) {
                    setIsOpenChoice(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isOpenChoice]);

    const handleClick = (username) => {
        if (username === userStore.username) {
            setCheckUser(true);
        }
        setIsOpenChoice((prev) => !prev);
    };

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: deleteComment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments', postId] });
            setIsOpenChoice(false);
        },
    });

    const handleDeleteComment = (commentId) => {
        mutation.mutate(commentId);
    };

    return (
        <div className='cursor-pointer relative'>
            <HiOutlineDotsHorizontal
                className='text-[16px]'
                onClick={() => handleClick(user.username)}
            />
            {isOpenChoice && (
                <div
                    ref={menuRef}
                    className='absolute left-4 top-3 bg-white shadow-sm z-10
                border border-gray-300 flex flex-col gap-1 rounded-md w-16'
                >
                    <span className='cursor-pointer p-1 hover:bg-gray-100 hover:text-zinc-700 rounded-t-md w-full h-full text-center'>
                        Hide
                    </span>
                    {checkUser && (
                        <span
                            onClick={() => {
                                onClickEdit();
                                setIsOpenChoice(false);
                            }}
                            className='cursor-pointer p-1 hover:bg-yellow-400 hover:text-black w-full h-full text-center'
                        >
                            Edit
                        </span>
                    )}
                    {checkUser && (
                        <span
                            className='cursor-pointer p-1 hover:bg-red-500 hover:text-white rounded-b-md w-full h-full text-center'
                            onClick={() => handleDeleteComment(commentId)}
                        >
                            Delete
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}
