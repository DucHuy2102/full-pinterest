import { IoIosArrowDown } from 'react-icons/io';
import Comment from './comment';
import CommentForm from './comment-form';
import { useState } from 'react';

const COMMENTS = [
    {
        id: 1,
        user: {
            id: 1,
            name: 'User1',
            avatar: 'Pinterest/general/noAvatar.png',
        },
        comment:
            'This is a comment on a post. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        time: '1h',
    },
    {
        id: 2,
        user: {
            id: 2,
            name: 'User2',
            avatar: 'Pinterest/general/noAvatar.png',
        },
        comment: 'This is another comment',
        time: '2h',
    },
    {
        id: 3,
        user: {
            id: 3,
            name: 'User3',
            avatar: 'Pinterest/general/noAvatar.png',
        },
        comment: 'This is a comment',
        time: '1h',
    },
    {
        id: 4,
        user: {
            id: 4,
            name: 'User4',
            avatar: 'Pinterest/general/noAvatar.png',
        },
        comment: 'This is another comment',
        time: '2h',
    },
    {
        id: 5,
        user: {
            id: 5,
            name: 'User5',
            avatar: 'Pinterest/general/noAvatar.png',
        },
        comment: 'This is a comment',
        time: '1h',
    },
    {
        id: 6,
        user: {
            id: 6,
            name: 'User6',
            avatar: 'Pinterest/general/noAvatar.png',
        },
        comment: 'This is another comment',
        time: '2h',
    },
    {
        id: 7,
        user: {
            id: 7,
            name: 'User7',
            avatar: 'Pinterest/general/noAvatar.png',
        },
        comment: 'This is a comment',
        time: '1h',
    },
    {
        id: 8,
        user: {
            id: 8,
            name: 'User8',
            avatar: 'Pinterest/general/noAvatar.png',
        },
        comment: 'This is a comment',
        time: '1.5h',
    },
];

export default function Comments() {
    const [showAllComments, setShowAllComments] = useState(false);
    const totalComment = COMMENTS.length;

    const handleShowAllComments = () => {
        setShowAllComments((prev) => !prev);
    };

    return (
        <div className='flex flex-col flex-1 gap-2 min-h-0 border-t border-gray-200'>
            <div className='flex items-center justify-between mt-2'>
                <span className='font-medium'>
                    {totalComment} {totalComment > 2 ? 'comments' : 'comment'}
                </span>
                <button
                    className='flex items-center justify-center gap-1 cursor-pointer text-zinc-700
                    rounded-lg px-2 py-1.5 bg-zinc-100 sm:bg-gray-50 hover:bg-gray-100 transition-colors duration-200'
                    onClick={handleShowAllComments}
                >
                    <span className='text-sm font-medium'>
                        Show {showAllComments ? 'less' : 'more'}
                    </span>
                    <IoIosArrowDown
                        className={`${showAllComments && 'transform rotate-180 duration-200'} `}
                    />
                </button>
            </div>

            {/* laptop screen & tablet */}
            <div className='hidden sm:flex flex-col flex-1 gap-4 overflow-y-auto'>
                {showAllComments
                    ? COMMENTS.map((comment) => <Comment key={comment.id} {...comment} />)
                    : COMMENTS.slice(0, 5).map((comment) => (
                          <Comment key={comment.id} {...comment} />
                      ))}
            </div>

            {/* mobile screen */}
            <div className='flex flex-col flex-1 gap-4 overflow-y-auto sm:hidden'>
                {showAllComments
                    ? COMMENTS.map((comment) => <Comment key={comment.id} {...comment} />)
                    : COMMENTS.slice(0, 1).map((comment) => (
                          <Comment key={comment.id} {...comment} />
                      ))}
            </div>

            <CommentForm />
        </div>
    );
}
