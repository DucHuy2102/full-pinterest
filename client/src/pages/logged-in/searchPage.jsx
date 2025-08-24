import { useSearchParams } from 'react-router';
import Gallery from '../../components/gallary/gallery';

export default function SearchPage() {
    const [searchParams, _] = useSearchParams();
    const searchValue = searchParams.get('search') || '';
    const boardId = searchParams.get('boardId') || '';

    return (
        <div className='flex flex-col'>
            {(searchParams || boardId) && (
                <p className='text-start text-xl font-semibold text-zinc-600 mt-3'>
                    Search results for:{' '}
                    <span className='italic text-blue-500'>{searchValue || boardId}</span>
                </p>
            )}
            <div className='my-5 sm:my-3 mx-5 sm:mx-4 md:mx-3 lg:mx-2 xl:mx-1 2xl:mx-0'>
                <Gallery search={searchValue} boardId={boardId} />
            </div>
        </div>
    );
}
