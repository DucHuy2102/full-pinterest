import { FiHeart } from 'react-icons/fi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { LuUpload } from 'react-icons/lu';

export default function Interactions() {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center gap-3 sm:gap-2'>
                <div className='flex items-center justify-center gap-0.5 cursor-pointer'>
                    <span className='p-2 sm:p-3 rounded-2xl hover:bg-gray-50 cursor-pointer'>
                        <FiHeart className='text-xl sm:text-2xl text-black' />
                    </span>
                    <span className='text-[16px] sm:text-lg font-semibold'>777</span>
                </div>
                <span className='p-2 sm:p-3 rounded-2xl hover:bg-gray-50 cursor-pointer'>
                    <LuUpload className='text-xl sm:text-2xl text-black' />
                </span>
                <span className='p-2 sm:p-3 rounded-2xl hover:bg-gray-50 cursor-pointer'>
                    <HiOutlineDotsHorizontal className='text-xl sm:text-2xl text-black' />
                </span>
            </div>
            <button
                className='py-2 px-3 sm:py-3 sm:px-5 bg-red-600 hover:bg-red-700 rounded-2xl sm:rounded-3xl 
            cursor-pointer text-white text-sm sm:text-lg font-semibold'
            >
                Save
            </button>
        </div>
    );
}
