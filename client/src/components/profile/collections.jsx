import CollectionItem from './collection-item';

export default function Collections() {
    return (
        <div
            className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
            2xl:grid-cols-6 3xl:grid-cols-7 gap-4 overflow-hidden'
        >
            {Array.from({ length: 10 }, (_, index) => ({
                id: index,
                title: `Collection ${index + 1}`,
            })).map((collection, index) => (
                <CollectionItem key={index} collection={collection} />
            ))}
        </div>
    );
}
