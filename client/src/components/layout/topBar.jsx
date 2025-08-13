import { CiSearch } from 'react-icons/ci';
import UserButton from './userButton';

export default function TopBar() {
    return (
        <div
            className='fixed ml-[72px] top-0 left-0 right-0 z-10
        w-[calc(100%-72px)] flex items-center gap-3 bg-white p-4'
        >
            {/* search */}
            <div className='flex flex-1 items-center gap-2 bg-[#f1f1f1] px-6 h-12 rounded-[16px]'>
                <CiSearch className='text-xl text-black font-bold' />
                <input
                    type='text'
                    placeholder='Search...'
                    className='bg-transparent border-none outline-none 
                    text-lg text-zinc-700 flex-1'
                />
            </div>

            {/* user */}
            <UserButton />
        </div>
    );
}
