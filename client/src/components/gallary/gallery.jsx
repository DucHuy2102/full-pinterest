import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from '@tanstack/react-query';
import GalleryItem from './galleryItem';
import axios from 'axios';

const fetchPins = async ({ pageParam = 0, queryKey }) => {
    const [, search, userId, boardId] = queryKey;
    const searchParam = search?.trim() || '';
    const userIdParam = userId?.trim() || '';
    const boardIdParam = boardId?.trim() || '';

    const res = await axios.get(
        `${
            import.meta.env.VITE_API_ENDPOINT
        }/pins?cursor=${pageParam}&search=${searchParam}&userId=${userIdParam}&boardId=${boardIdParam}`
    );
    return res.data;
};

export default function Gallery({ search, userId, boardId }) {
    const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['pins', search, userId, boardId],
        queryFn: fetchPins,
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.nextCursor,
    });

    if (status === 'loading')
        return (
            <p className='text-center text-xl font-semibold italic text-zinc-600'>
                Please wait, loading pins...
            </p>
        );
    if (status === 'error')
        return (
            <p className='text-center text-xl font-bold text-red-500'>
                Something went wrong! Please try again later.
            </p>
        );

    const allPins = data?.pages.flatMap((page) => page.pins) || [];

    return (
        <InfiniteScroll
            dataLength={allPins.length}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={
                <p className='text-center text-xl font-semibold text-zinc-600 my-3 italic'>
                    Loading more pins...
                </p>
            }
            endMessage={
                <p className='text-center text-xl font-semibold text-teal-700 my-3'>
                    Yay! You have seen it all
                </p>
            }
        >
            <div
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
                2xl:grid-cols-6 3xl:grid-cols-7 auto-rows-[10px] gap-4'
            >
                {allPins.map((item, index) => (
                    <GalleryItem key={index} {...item} />
                ))}
            </div>
        </InfiniteScroll>
    );
}
