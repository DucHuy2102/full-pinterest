import UserButton from './userButton';

export default function TopBar() {
    return (
        <div className='my-4 flex items-center gap-4'>
            {/* search */}
            <div className='flex flex-1 items-center gap-4 bg-[#f1f1f1] p-4 rounded-[16px]'>
                <img src='/general/search.svg' alt='Search' />
                <input
                    type='text'
                    placeholder='Search...'
                    className='bg-transparent border-none outline-none text-[18px] flex-1'
                />
            </div>

            {/* user */}
            <UserButton />
        </div>
    );
}
