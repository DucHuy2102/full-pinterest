import { Link } from 'react-router-dom';
import ImageKit from '../components/share/image-custom';
import Interactions from '../components/comments/interactions';
import Comments from '../components/comments/comments';
import { IoMdArrowBack } from 'react-icons/io';

export default function PostPage() {
    return (
        <div className='flex justify-center gap-1 md:gap-2 lg:gap-3 xl:gap-4 my-3'>
            <Link
                to={'/'}
                className='cursor-pointer rounded-xl md:rounded-2xl hover:bg-[#f1f1f1] p-1 sm:p-2 h-fit hidden sm:block group'
            >
                <IoMdArrowBack className='text-2xl md:text-3xl text-zinc-500 group-hover:text-zinc-800' />
            </Link>
            <div
                className='flex flex-col sm:flex-row w-[80%] 3xl:w-full border border-[#e9e9e9] 
            overflow-hidden rounded-4xl max-h-[650px]'
            >
                <div className='flex flex-1'>
                    <ImageKit
                        src={'Pinterest/pins/pin1.jpeg'}
                        alt='Image detail'
                        className='rounded-tl-2xl rounded-bl-2xl w-full'
                        width={736}
                    />
                </div>
                <div className='h-full flex flex-col flex-1 gap-8 p-4 overflow-hidden'>
                    <Interactions />
                    <Link to={'/'} className='flex justify-start items-center gap-2 group'>
                        <ImageKit
                            src={'Pinterest/general/noAvatar.png'}
                            alt='Image detail'
                            className='rounded-full w-8 h-8'
                        />
                        <span className='font-medium text-sm group-hover:text-blue-500'>dHuy</span>
                    </Link>
                    <Comments />
                </div>
            </div>
        </div>
    );
}
