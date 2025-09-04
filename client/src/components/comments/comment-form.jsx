import { useEffect, useRef, useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import EmojiPicker from 'emoji-picker-react';
import { HiOutlinePhoto } from 'react-icons/hi2';
import { IoSendOutline } from 'react-icons/io5';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import PreviewImage from './preview-image';
import { uploadImage } from '../../utils/upload-image';
import useCommentStore from '../../store/commentStore';

const fetchComment = async ({ comment, isEditing, commentId }) => {
    const method = isEditing ? 'put' : 'post';
    const endpoint = isEditing ? `update/${commentId}` : 'create';
    const res = await axios[method](
        `${import.meta.env.VITE_API_ENDPOINT}/comments/${endpoint}`,
        comment,
        {
            withCredentials: true,
        }
    );
    return res.data;
};

export default function CommentForm({ postId }) {
    const { comment: commentStore, isEditing } = useCommentStore();
    const clearComment = useCommentStore((state) => state.clearComment);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [commentImage, setCommentImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [newComment, setNewComment] = useState('');
    const emojiPickerRef = useRef(null);
    const iconEmojiRef = useRef(null);
    const fileInputRef = useRef(null);

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (data) => fetchComment(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments', postId] });
            setNewComment('');
            setCommentImage(null);
            setPreviewImage(null);
            fileInputRef.current.value = null;
        },
    });

    useEffect(() => {
        if (isEditing) {
            setNewComment(commentStore.description);
            if (commentStore.image) {
                setCommentImage(commentStore.image);
                setPreviewImage(commentStore.image);
            }
        }
    }, [isEditing, commentStore, clearComment]);

    useEffect(() => {
        if (!showEmojiPicker) return;

        const handleClickOutside = (event) => {
            const clickedOutsideEmojiPicker =
                emojiPickerRef.current && !emojiPickerRef.current.contains(event.target);
            const clickedOutsideIconEmoji =
                iconEmojiRef.current && !iconEmojiRef.current.contains(event.target);

            if (clickedOutsideEmojiPicker && clickedOutsideIconEmoji) {
                setShowEmojiPicker(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showEmojiPicker]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCommentImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageUrl = commentStore?.image || null;
        if (commentImage && commentImage !== commentStore?.image) {
            console.log(commentImage && commentImage !== commentStore?.image, {
                commentImage,
                commentStore,
            });
            imageUrl = await uploadImage(commentImage);
            if (!imageUrl) {
                console.error('Image upload failed. Comment not submitted.');
                return;
            }
        }
        const dataToSubmit = {
            comment: newComment.trim(),
            image: imageUrl,
            postId,
        };

        mutation.mutate({
            comment: dataToSubmit,
            isEditing: isEditing,
            commentId: isEditing ? commentStore.commentId : null,
        });
        clearComment();
    };

    const onRemove = () => {
        setPreviewImage(null);
        setCommentImage(null);
        fileInputRef.current.value = null;
    };

    return (
        <>
            {previewImage && <PreviewImage previewImage={previewImage} onRemove={onRemove} />}
            <form
                className='bg-[#f1f1f1] px-4 py-2 rounded-4xl flex items-center gap-4'
                onSubmit={handleSubmit}
            >
                <input
                    type='text'
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder='Add a comment...'
                    className='flex flex-1 border-none outline-none bg-transparent text-[16px]'
                />
                <div className='relative text-2xl flex items-center justify-center gap-2'>
                    <div ref={emojiPickerRef} className='cursor-pointer'>
                        <BsEmojiSmile onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
                    </div>
                    {showEmojiPicker && (
                        <div ref={iconEmojiRef} className='absolute z-10 bottom-12 right-0'>
                            <EmojiPicker
                                onEmojiClick={(emoji) => setNewComment(newComment + emoji.emoji)}
                            />
                        </div>
                    )}
                    <div className='cursor-pointer'>
                        <HiOutlinePhoto
                            className='text-3xl'
                            onClick={() => fileInputRef.current.click()}
                        />
                        <input
                            type='file'
                            className='hidden'
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </div>
                    {(newComment || commentImage) && (
                        <button
                            type='submit'
                            className='cursor-pointer bg-red-500 rounded-lg px-1.5 py-1 text-white 
                                flex items-center justify-center'
                        >
                            <IoSendOutline className='text-[16px]' />
                        </button>
                    )}
                </div>
            </form>
        </>
    );
}
