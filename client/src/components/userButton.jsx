import { useEffect, useRef, useState } from 'react';

const UserLoggedIn = () => {
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        if (openUserMenu) {
            const handleClickOutside = (event) => {
                if (menuRef.current && !menuRef.current.contains(event.target)) {
                    setOpenUserMenu(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [openUserMenu]);

    return (
        <div className='relative hidden sm:flex items-center gap-4'>
            <img
                src='/general/noAvatar.png'
                alt='Avatar User'
                className='w-9 h-9 rounded-full object-cover'
            />
            <img
                src='/general/arrow.svg'
                alt='Avatar User'
                className='w-4 h-4 rounded-full object-cover cursor-pointer'
                onClick={() => setOpenUserMenu((prev) => !prev)}
            />
            {openUserMenu && (
                <div
                    ref={menuRef}
                    className='absolute bg-white right-0 top-[120%] p-4 rounded-3xl z-10
                    flex flex-col text-sm shadow-md shadow-gray-300 w-[360px]'
                >
                    <span className='text-zinc-500 text-[12px] font-semibold py-2 px-3'>
                        Currently in
                    </span>
                    <div className='flex items-center gap-3 hover:bg-[#f6f6f3] rounded-lg cursor-pointer py-2 px-3'>
                        <img
                            src='/general/noAvatar.png'
                            alt='Avatar User'
                            className='w-[60px] h-[60px] rounded-full object-cover'
                        />
                        <div className='flex flex-col items-start gap-0.5 w-full'>
                            <div className='text-[16px] font-semibold'>User Name</div>
                            <div className='flex items-center justify-between w-full'>
                                <span className='text-gray-500 text-[14px] font-semibold'>
                                    Personal
                                </span>
                                <img
                                    src='/general/arrow.svg'
                                    alt='Avatar User'
                                    className='w-3 h-3 rounded-full object-cover text-gray-500'
                                />
                            </div>
                            <div className='text-gray-500 text-[14px] font-semibold'>
                                user@example.com
                            </div>
                        </div>
                    </div>
                    <div className='text-[16px] font-semibold w-full hover:bg-[#f6f6f3] cursor-pointer rounded-lg py-2 px-3'>
                        Convert to business
                    </div>
                    <span className='text-zinc-500 text-[12px] font-semibold py-2 px-3'>
                        Your accounts
                    </span>
                    <div className='text-[16px] font-semibold w-full hover:bg-[#f6f6f3] cursor-pointer rounded-lg py-2 px-3'>
                        Add Pinterest account
                    </div>
                    <div className='text-[16px] font-semibold w-full hover:bg-[#f6f6f3] cursor-pointer rounded-lg py-2 px-3'>
                        Log out
                    </div>
                </div>
            )}
        </div>
    );
};

const UserLoggedOut = () => {
    return (
        <a href='/' className='text-[18px] p-4 rounded-4xl hover:bg-[#f1f1f1]'>
            Login / Sign Up
        </a>
    );
};

export default function UserButton() {
    const currentUser = true;

    return currentUser ? <UserLoggedIn /> : <UserLoggedOut />;
}
