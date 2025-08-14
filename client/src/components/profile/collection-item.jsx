import { LuDot } from 'react-icons/lu';
import ImageKit from '../share/image-custom';

export default function CollectionItem({ collection }) {
    const imageSrc = `Pinterest/pins/pin${collection.id + 2}.jpeg`;

    return (
        <div className='cursor-pointer mb-14'>
            <ImageKit src={imageSrc} alt='Image avatar' className='h-full w-full rounded-2xl' />

            <div className='flex flex-col gap-0.5 mt-2'>
                <h1 className='font-semibold text-[16px]'>{collection.title}</h1>
                <span className='text-sm font-medium text-zinc-700'>
                    10 Pins
                    <LuDot className='inline' />
                    1w
                </span>
            </div>
        </div>
    );
}
