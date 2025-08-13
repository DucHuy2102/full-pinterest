import {
    BsBell,
    BsBellFill,
    BsChatDots,
    BsChatDotsFill,
    BsPlusSquare,
    BsPlusSquareFill,
} from 'react-icons/bs';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { IoSettings, IoSettingsOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import ImageKit from '../share/image-custom';

const menuItems = [
    {
        id: 1,
        icon: {
            active: <GoHomeFill className='text-3xl' />,
            inactive: <GoHome className='text-3xl text-black' />,
        },
        link: '/',
    },
    {
        id: 2,
        icon: {
            active: <BsPlusSquareFill className='text-2xl' />,
            inactive: <BsPlusSquare className='text-2xl text-black' />,
        },
        link: '/create',
    },
    {
        id: 3,
        icon: {
            active: <BsBellFill className='text-2xl' />,
            inactive: <BsBell className='text-2xl text-black' />,
        },
        link: '/',
    },
    {
        id: 4,
        icon: {
            active: <BsChatDotsFill className='text-2xl' />,
            inactive: <BsChatDots className='text-2xl text-black' />,
        },
        link: '/',
    },
    {
        id: 4,
        icon: {
            active: <BsChatDotsFill className='text-2xl' />,
            inactive: <BsChatDots className='text-2xl text-black' />,
        },
        link: '/',
    },
    {
        id: 5,
        icon: {
            active: <IoSettings className='text-2xl' />,
            inactive: <IoSettingsOutline className='text-2xl text-black' />,
        },
        link: '/',
    },
];

const MenuItem = ({ id, icon, link, pathname }) => {
    const isActive = pathname === link;

    return (
        <a
            href={link}
            key={id}
            className='w-12 h-12 hover:bg-[#f1f1f1] rounded-md
    flex items-center justify-center'
        >
            {isActive ? icon.active : icon.inactive}
        </a>
    );
};

export default function LeftBar() {
    const { pathname } = useLocation();

    return (
        <div
            className='h-screen bg-white w-[72px] flex flex-col justify-between items-center 
        sticky top-0 left-0 z-20 py-4 border-r-[1px] border-[#e9e9e9]'
        >
            <div className='flex flex-col items-center gap-6'>
                <ImageKit
                    src='Pinterest/general/logo.png'
                    alt='Logo'
                    className='w-[26px] h-[26px] xl:w-[28px] xl:h-[28px] mt-2'
                />
                <div className='flex flex-col items-center gap-6'>
                    {menuItems.slice(0, 4).map((item) => (
                        <MenuItem key={item.id} {...item} pathname={pathname} />
                    ))}
                </div>
            </div>

            {menuItems.slice(-1).map((item) => (
                <MenuItem key={item.id} {...item} pathname={pathname} />
            ))}
        </div>
    );
}
