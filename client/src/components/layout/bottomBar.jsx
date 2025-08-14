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
import { FaRegUser } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa6';

const menuItems = [
    {
        id: 1,
        icon: {
            active: <GoHomeFill className='text-2xl' />,
            inactive: <GoHome className='text-2xl text-black' />,
        },
        link: '/',
    },
    {
        id: 2,
        icon: {
            active: <BsPlusSquareFill className='text-xl' />,
            inactive: <BsPlusSquare className='text-xl text-black' />,
        },
        link: '/create',
    },
    {
        id: 3,
        icon: {
            active: <BsBellFill className='text-xl' />,
            inactive: <BsBell className='text-xl text-black' />,
        },
        link: '/',
    },
    {
        id: 4,
        icon: {
            active: <BsChatDotsFill className='text-xl' />,
            inactive: <BsChatDots className='text-xl text-black' />,
        },
        link: '/',
    },
    {
        id: 4,
        icon: {
            active: <FaUser className='text-xl' />,
            inactive: <FaRegUser className='text-xl text-black' />,
        },
        link: '/',
    },
    {
        id: 5,
        icon: {
            active: <IoSettings className='text-xl' />,
            inactive: <IoSettingsOutline className='text-xl text-black' />,
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
            className='w-10 h-10 hover:bg-[#f1f1f1] rounded-md
    flex items-center justify-center'
        >
            {isActive ? icon.active : icon.inactive}
        </a>
    );
};

export default function BottomBar() {
    const { pathname } = useLocation();

    return (
        <div
            className='w-full bg-white h-14 sm:hidden flex justify-between items-center 
        sticky bottom-0 left-0 z-20 py-2 border-t-[1px] border-[#e9e9e9]'
        >
            <div className='w-full flex items-center justify-between px-3'>
                {menuItems.map((item) => (
                    <MenuItem key={item.id} {...item} pathname={pathname} />
                ))}
            </div>
        </div>
    );
}
