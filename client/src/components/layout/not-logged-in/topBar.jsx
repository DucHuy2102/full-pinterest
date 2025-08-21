import { FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LINKS = [
    { to: '/about', label: 'About' },
    { to: '/', label: 'Businesses' },
    { to: '/', label: 'Create' },
    { to: '/', label: 'News' },
];

export default function TopBar() {
    return (
        <div className='flex items-center justify-between py-4 px-5 sm:px-10 bg-white'>
            <Link to='/' className='flex items-center'>
                <FaPinterest className='text-4xl md:text-3xl text-red-500' />
                <span className='ml-2 text-2xl font-bold text-red-500 hidden sm:block'>
                    Pinterest
                </span>
            </Link>
            <div className='flex items-center justify-center gap-4 ml-2 sm:ml-0'>
                {LINKS.map((link, index) => (
                    <Link key={index} to={link.to} className='mx-2'>
                        <span
                            className='font-bold text-[#1C6EA4] hover:text-[#154D71] 
                            hover:underline text-lg'
                        >
                            {link.label}
                        </span>
                    </Link>
                ))}
                <button
                    className='text-white font-bold bg-red-500 hover:bg-red-600
                    px-5 py-3 text-[16px] rounded-xl cursor-pointer hidden md:block'
                >
                    Log in
                </button>
                <button
                    className='text-zinc-700 font-bold bg-gray-200/70 hover:bg-gray-300/70
                    px-5 py-3 text-[16px] rounded-xl cursor-pointer hidden md:block'
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}
