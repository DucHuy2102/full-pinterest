import { Link } from 'react-router-dom';
import { LuDot } from 'react-icons/lu';
import ImageKit from '../share/image-custom';
import { format } from 'timeago.js';

export default function CollectionItem({ board }) {
    const imageSrc = board.firstPin?.image;

    return (
        <Link
            to={`/search?boardId=${board._id}`}
            className='cursor-pointer mb-14 hover:scale-105 transition-transform duration-200'
        >
            <ImageKit src={imageSrc} alt='Image avatar' className='h-full w-full rounded-2xl' />

            <div className='flex flex-col gap-0.5 mt-2'>
                <h1 className='font-semibold text-[16px]'>{board.title}</h1>
                <span className='text-sm font-medium text-zinc-700'>
                    {board.pinCount} Pins
                    <LuDot className='inline' />
                    {format(board.createdAt)}
                </span>
            </div>
        </Link>
    );
}
