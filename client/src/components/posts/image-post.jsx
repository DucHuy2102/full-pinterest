import FsLightbox from 'fslightbox-react';
import ImageCustom from '../share/image-custom';
import { useState } from 'react';

export default function ImagePost({ image }) {
    const [toggler, setToggler] = useState(false);

    return (
        <div className='flex flex-1' onClick={() => setToggler(!toggler)}>
            <ImageCustom
                src={image}
                alt='Image detail'
                className=' sm:rounded-tl-2xl sm:rounded-bl-2xl w-full cursor-zoom-in'
                width={736}
            />
            <FsLightbox toggler={toggler} sources={[image]} />
        </div>
    );
}
