import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import Gallary from '../components/gallary/gallery';
import Comments from '../components/comments/comments';
import ImageKit from '../components/share/image-custom';
import Interactions from '../components/comments/interactions';
import { FaArrowUp } from 'react-icons/fa';

export default function PostPage() {
    const [goToTop, setGoToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setGoToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='relative flex flex-col items-center justify-center w-full h-full gap-4'>
            {goToTop && (
                <button
                    className='fixed z-30 bottom-[10%] right-10 flex items-center justify-center p-3 gap-1 cursor-pointer
            rounded-full bg-gray-200 hover:bg-black transition-colors duration-200 group'
                    onClick={handleGoToTop}
                >
                    <FaArrowUp
                        className='text-2xl text-gray-700 group-hover:text-white 
                transition-colors duration-200'
                    />
                </button>
            )}
            <div className='flex justify-center gap-1 md:gap-2 lg:gap-3 xl:gap-4 my-5 sm:my-3'>
                <Link
                    to={'/'}
                    className='cursor-pointer rounded-xl md:rounded-2xl hover:bg-[#f1f1f1] 
                    p-1 sm:p-2 h-fit hidden sm:block group'
                >
                    <IoMdArrowBack className='text-xl sm:text-2xl md:text-3xl text-zinc-500 group-hover:text-zinc-800' />
                </Link>
                <div
                    className='flex flex-col sm:flex-row w-[80%] lg:w-[85%] 2xl:w-[90%] 3xl:w-full sm:max-h-[650px]
                    border border-[#e9e9e9] overflow-hidden rounded-3xl sm:rounded-4xl bg-white'
                >
                    <div className='flex flex-1'>
                        <ImageKit
                            src={'Pinterest/pins/pin1.jpeg'}
                            alt='Image detail'
                            className=' sm:rounded-tl-2xl sm:rounded-bl-2xl w-full'
                            width={736}
                        />
                    </div>
                    <div className='h-full flex flex-col flex-1 gap-4 sm:gap-8 p-4 overflow-hidden'>
                        <Interactions />
                        <Link
                            to={'/dHuy'}
                            className='w-fit flex justify-start items-center gap-2 group cursor-pointer'
                        >
                            <ImageKit
                                src={'Pinterest/general/noAvatar.png'}
                                alt='Image detail'
                                className='rounded-full w-8 h-8'
                            />
                            <span className='font-medium text-[16px] sm:text-sm group-hover:text-blue-500'>
                                dHuy
                            </span>
                        </Link>
                        <Comments />
                    </div>
                </div>
            </div>
            <Gallary />
        </div>
    );
}
