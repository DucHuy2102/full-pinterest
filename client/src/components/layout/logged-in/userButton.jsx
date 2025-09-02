import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import ImageCustom from '../../share/image-custom';
import MenuUser from './menuUser';
import useAuthStore from '../../../store/authStore';

const UserLoggedIn = ({ avatar }) => {
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const menuRef = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
        if (openUserMenu) {
            const handleClickOutside = (event) => {
                const clickedOutsideMenu =
                    menuRef.current && !menuRef.current.contains(event.target);
                const clickedOutsideArrow =
                    arrowRef.current && !arrowRef.current.contains(event.target);

                if (openUserMenu && clickedOutsideMenu && clickedOutsideArrow) {
                    setOpenUserMenu(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [openUserMenu]);

    const handleToggleMenu = (event) => {
        event.stopPropagation();
        setOpenUserMenu((prev) => !prev);
    };

    return (
        <div className='relative hidden sm:flex items-center gap-3'>
            <div className='rounded-2xl p-1.5 hover:bg-[#f1f1f1] cursor-pointer'>
                <ImageCustom src={avatar} alt='Avatar User' className='w-9 h-9 rounded-full' />
            </div>
            <IoIosArrowDown
                className={`${
                    openUserMenu && 'rotate-180 transition-transform duration-200'
                } w-4 h-4 rounded-full cursor-pointer`}
                onClick={handleToggleMenu}
                ref={arrowRef}
            />

            {openUserMenu && <MenuUser ref={menuRef} />}
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
    const { user, isLoggedIn } = useAuthStore();

    return isLoggedIn ? <UserLoggedIn {...user} /> : <UserLoggedOut />;
}
