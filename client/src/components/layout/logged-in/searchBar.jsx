import { useNavigate } from 'react-router';
import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';

export default function SearchBar() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm?.trim() !== '') navigate(`/search?search=${searchTerm.trim()}`);
        setSearchTerm('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-1 items-center gap-2 bg-[#f1f1f1] px-3 h-8 sm:px-6 sm:h-12 rounded-[16px]'
        >
            <CiSearch className='text-lg sm:text-xl text-black font-bold' />
            <input
                type='text'
                placeholder='Search...'
                className='bg-transparent border-none outline-none 
                    text-[16px] sm:text-lg text-zinc-700 flex-1'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
    );
}
