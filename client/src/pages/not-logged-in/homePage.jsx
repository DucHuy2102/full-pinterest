import TopBar from '../../components/layout/not-logged-in/topBar';
import Section1 from '../../components/layout/not-logged-in/section1';
import Section2 from '../../components/layout/not-logged-in/section2';
import Section3 from '../../components/layout/not-logged-in/section3';
import Section4 from '../../components/layout/not-logged-in/section4';
import { useEffect, useState } from 'react';
import { FaArrowUp, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const socialLinks = [
    {
        icon: <FaGithub className='text-lg' />,
        label: 'Github',
        href: 'https://github.com/DucHuy2102',
    },
    {
        icon: <FaLinkedin className='text-lg' />,
        label: 'Linkedin',
        href: 'https://www.linkedin.com/in/duchuy2102/',
    },
    {
        icon: <FaFacebook className='text-lg' />,
        label: 'Facebook',
        href: 'https://www.facebook.com/Duc.Huy2102',
    },
];

export default function HomePage() {
    const [goToTop, setGoToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setGoToTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='relative overflow-hidden'>
            <TopBar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <div className='w-full py-1 flex items-center justify-center gap-5 text-zinc-600'>
                {socialLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 group'
                    >
                        <div className='group-hover:text-blue-500'>{link.icon}</div>
                        <span className='font-semibold text-[16px] group-hover:text-blue-500'>
                            {link.label}
                        </span>
                    </a>
                ))}
            </div>

            {/* button scroll to top */}
            {goToTop && (
                <button
                    className='fixed z-30 bottom-[10%] right-10 flex items-center justify-center p-3 gap-1 border border-gray-700
                    hover:border-none cursor-pointer rounded-full bg-transparent hover:bg-black transition-colors duration-200 group'
                    onClick={handleGoToTop}
                >
                    <FaArrowUp
                        className='text-2xl text-gray-700 group-hover:text-white 
                    transition-colors duration-200'
                    />
                </button>
            )}
        </div>
    );
}
