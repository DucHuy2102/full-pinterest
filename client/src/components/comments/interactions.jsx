import { FiHeart } from 'react-icons/fi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { LuUpload } from 'react-icons/lu';

export default function Interactions() {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center gap-2'>
                <div className='flex items-center justify-center gap-0.5 cursor-pointer'>
                    <span className='p-3 rounded-2xl hover:bg-gray-50 cursor-pointer'>
                        <FiHeart className='text-2xl text-black' />
                    </span>
                    <span className='text-lg font-semibold'>777</span>
                </div>
                <span className='p-3 rounded-2xl hover:bg-gray-50 cursor-pointer'>
                    <LuUpload className='text-2xl text-black' />
                </span>
                <span className='p-3 rounded-2xl hover:bg-gray-50 cursor-pointer'>
                    <HiOutlineDotsHorizontal className='text-2xl text-black' />
                </span>
            </div>
            <button
                className='py-3 px-5 bg-red-600 hover:bg-red-700 rounded-3xl cursor-pointer 
                text-white text-lg font-semibold'
            >
                Save
            </button>
        </div>
    );
}
