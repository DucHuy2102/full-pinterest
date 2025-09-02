import axios from 'axios';
import { forwardRef } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import ImageCustom from '../../share/image-custom';
import useAuthStore from '../../../store/authStore';

const MenuUser = forwardRef((_, ref) => {
    const { user } = useAuthStore();
    const clearUser = useAuthStore((state) => state.clearUser);

    const handleLogout = async () => {
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_ENDPOINT}/users/sign-out`,
                {},
                {
                    withCredentials: true,
                }
            );
            if (res.status === 200) {
                clearUser();
            }
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    };

    return (
        <div
            ref={ref}
            className='absolute bg-white right-0 top-[120%] p-4 rounded-3xl z-10
                flex flex-col text-sm w-[360px] border border-gray-100'
        >
            <span className='text-zinc-500 text-[12px] font-semibold py-2 px-3'>Currently in</span>
            <div className='flex items-center gap-3 hover:bg-[#f6f6f3] rounded-lg cursor-pointer py-2 px-3'>
                <ImageCustom
                    src={user?.avatar}
                    alt='Avatar User'
                    className='w-[60px] h-[60px] rounded-full'
                />
                <div className='flex flex-col items-start gap-0.5 w-full'>
                    <div className='text-[16px] font-semibold'>{user?.fullname}</div>
                    <div className='flex items-center justify-between w-full'>
                        <span className='text-gray-500 text-[14px] font-semibold'>Personal</span>
                        <IoCheckmark className='text-lg font-bold text-zinc-800' />
                    </div>
                    <div className='text-gray-500 text-[14px] font-semibold'>{user?.email}</div>
                </div>
            </div>
            <div className='text-[16px] font-semibold w-full hover:bg-[#f6f6f3] cursor-pointer rounded-lg py-2 px-3'>
                Convert to business
            </div>
            <span className='text-zinc-500 text-[12px] font-semibold py-2 px-3'>Your accounts</span>
            <div className='text-[16px] font-semibold w-full hover:bg-[#f6f6f3] cursor-pointer rounded-lg py-2 px-3'>
                Add Pinterest account
            </div>
            <div
                onClick={handleLogout}
                className='text-[16px] font-semibold w-full hover:bg-[#f6f6f3] cursor-pointer rounded-lg py-2 px-3'
            >
                Log out
            </div>
        </div>
    );
});

export default MenuUser;
