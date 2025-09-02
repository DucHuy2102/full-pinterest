import { Image } from '@imagekit/react';
import { forwardRef, useCallback, useState } from 'react';

const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL;

const ImageCustom = forwardRef(function ImageCustom(
    { src, alt, className, width, height },
    externalRef
) {
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    const imgRef = useCallback(
        (img) => {
            if (!img) return;

            const handleLoad = () => {
                setShowPlaceholder(false);
                img.removeEventListener('load', handleLoad);
            };

            if (img.complete) {
                setShowPlaceholder(false);
            } else {
                img.addEventListener('load', handleLoad);
            }

            if (typeof externalRef === 'function') {
                externalRef(img);
            } else if (externalRef) {
                externalRef.current = img;
            }
        },
        [externalRef]
    );

    const transformation = showPlaceholder
        ? [{ width, height, quality: 10, blur: 90 }]
        : [{ width, height }];

    return (
        <Image
            urlEndpoint={urlEndpoint}
            src={src}
            alt={alt || 'Image placeholder'}
            transformation={transformation}
            className={`${className} object-cover cursor-pointer 
                transition-transform duration-300 ease-in-out`}
            loading='lazy'
            ref={imgRef}
        />
    );
});

export default ImageCustom;
