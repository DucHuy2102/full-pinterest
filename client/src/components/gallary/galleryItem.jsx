import { Link } from 'react-router';
import ImageKit from '../share/image-custom';

export default function GalleryItem({ _id, image, width, height }) {
    const optimizedHeight = (372 * height) / width;

    return (
        <div
            className='relative flex group'
            style={{ gridRowEnd: `span ${Math.ceil(height / 100)}` }}
        >
            <ImageKit
                src={image}
                alt={`Gallery item ${_id}`}
                className='w-full object-cover rounded-2xl cursor-pointer'
                width={372}
                height={optimizedHeight}
            />
            <Link
                to={`/pin/${_id}`}
                className='hidden absolute w-full h-full top-0 left-0 bg-gray-500/30 opacity-50 
                rounded-2xl group-hover:flex items-center justify-center'
            />
            <button
                className='bg-red-500 text-white rounded-xl hidden group-hover:block
            px-4 py-3 absolute top-4 right-4 font-semibold cursor-pointer hover:bg-red-600'
            >
                Save
            </button>
            <div
                className='hidden group-hover:flex items-center justify-center gap-2 
            absolute bottom-4 right-4'
            >
                <button
                    className='w-8 h-8 rounded-full bg-white hover:bg-gray-100
                flex items-center justify-center cursor-pointer'
                >
                    <img
                        src='/general/share.svg'
                        alt='Button Share'
                        className='w-[20px] h-[20px]'
                    />
                </button>
                <button
                    className='w-8 h-8 rounded-full bg-white hover:bg-gray-100
                flex items-center justify-center cursor-pointer'
                >
                    <img src='/general/more.svg' alt='Button More' className='w-[20px] h-[20px]' />
                </button>
            </div>
        </div>
    );
}
