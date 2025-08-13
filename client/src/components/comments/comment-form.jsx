import { useEffect, useRef, useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import EmojiPicker from 'emoji-picker-react';
import FsLightbox from 'fslightbox-react';
import { HiOutlinePhoto } from 'react-icons/hi2';
import { IoSendOutline } from 'react-icons/io5';

export default function CommentForm() {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [commentImage, setCommentImage] = useState(null);
    console.log({ commentImage });
    const [previewImage, setPreviewImage] = useState(null);
    const [newComment, setNewComment] = useState('');
    const [toggler, setToggler] = useState(false);
    const emojiPickerRef = useRef(null);
    const iconEmojiRef = useRef(null);
    const fileInputRef = useRef(null);

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

    // call api to upload image to server here ...
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCommentImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <FsLightbox toggler={toggler} sources={[previewImage]} />
            {previewImage && (
                <div
                    className='relative w-20 h-20 rounded-md overflow-hidden self-start mb-2 cursor-zoom-in'
                    onClick={() => setToggler(!toggler)}
                >
                    <img src={previewImage} alt='Preview' className='w-full h-full object-cover' />
                    <button
                        className='absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 
                        leading-none text-xs cursor-pointer flex items-center justify-center'
                        onClick={(e) => {
                            e.stopPropagation();
                            setPreviewImage(null);
                            setCommentImage(null);
                            fileInputRef.current.value = null;
                        }}
                    >
                        &times;
                    </button>
                </div>
            )}
            <form className='bg-[#f1f1f1] px-4 py-2 rounded-4xl flex items-center gap-4'>
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
                    {newComment && (
                        <div
                            className='cursor-pointer bg-red-500 rounded-lg px-1.5 py-1 text-white 
                                flex items-center justify-center'
                        >
                            <IoSendOutline className='text-[16px]' />
                        </div>
                    )}
                </div>
            </form>
        </>
    );
}
