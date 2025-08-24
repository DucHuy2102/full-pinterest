import { Link } from 'react-router-dom';
import UserButton from './userButton';
import ImageKit from '../../share/image-custom';
import SearchBar from './searchBar';

export default function TopBar() {
    return (
        <div
            className='fixed top-0 left-0 right-0 z-10 w-full sm:w-[calc(100%-72px)] sm:ml-[72px]
        flex items-center gap-5 sm:gap-3 bg-white p-3 sm:p-4'
        >
            <Link to={'/'} className='block sm:hidden'>
                <ImageKit src='Pinterest/general/logo.png' alt='Logo' className='w-7 h-7' />
            </Link>

            {/* search */}
            <SearchBar />

            {/* user */}
            <UserButton />
        </div>
    );
}
