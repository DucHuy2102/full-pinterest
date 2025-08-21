import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import UserButton from './userButton';
import ImageKit from '../../share/image-custom';

export default function TopBar() {
    return (
        <div
            className='fixed top-0 left-0 right-0 z-10 w-full sm:w-[calc(100%-72px)] sm:ml-[72px]
        flex items-center gap-5 sm:gap-3 bg-white p-3 sm:p-4'
        >
            <Link to={'/'} className='block sm:hidden'>
                <ImageKit src='Pinterest/general/logo.png' alt='Logo' className='w-7 h-7' />
            </Link>

            {/* search */}
            <div className='flex flex-1 items-center gap-2 bg-[#f1f1f1] px-3 h-8 sm:px-6 sm:h-12 rounded-[16px]'>
                <CiSearch className='text-lg sm:text-xl text-black font-bold' />
                <input
                    type='text'
                    placeholder='Search...'
                    className='bg-transparent border-none outline-none 
                    text-[16px] sm:text-lg text-zinc-700 flex-1'
                />
            </div>

            {/* user */}
            <UserButton />
        </div>
    );
}
