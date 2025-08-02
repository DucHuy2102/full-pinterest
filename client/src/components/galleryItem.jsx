export default function GalleryItem({ id, media, height }) {
    return (
        <div className='flex' style={{ gridRowEnd: `span ${Math.ceil(height / 100)}` }}>
            <img
                src={media}
                alt={`Gallery item ${id}`}
                className='w-full object-cover rounded-2xl'
            />
        </div>
    );
}
