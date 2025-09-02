import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

export default function PreviewImage({ previewImage, onRemove }) {
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <FsLightbox toggler={toggler} sources={[previewImage]} />
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
                        onRemove();
                    }}
                >
                    &times;
                </button>
            </div>
        </>
    );
}
