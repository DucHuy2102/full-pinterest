import GalleryItem from './galleryItem';

const items = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    media: `/pins/pin${i + 1}.jpeg`,
    width: 1260,
    height: [1400, 1260, 1880, 1000][Math.floor(Math.random() * 4)],
}));

export default function Gallery() {
    return (
        <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
            2xl:grid-cols-6 3xl:grid-cols-7 auto-rows-[10px] gap-4'
        >
            {items.map((item) => (
                <GalleryItem key={item.id} {...item} />
            ))}
        </div>
    );
}
