import Auth from '../../auth/auth';

export default function Section1() {
    return (
        <div className='relative w-full h-screen flex items-center justify-between hero-background bg-cover bg-center'>
            <div className='bg-gray-700/50 w-full h-full absolute z-10 inset-0' />
            <div className='flex flex-1 h-full relative z-20 top-0 left-0'>
                <p
                    className='absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/3
                text-white text-[5rem] font-bold w-full pr-[20vw]'
                >
                    Log in to get your ideas
                </p>
            </div>
            <div className='w-1/2 h-full relative z-20 top-1/2 mt-20 -translate-y-1/2 left-1/3 -translate-x-1/3'>
                <Auth />
            </div>
        </div>
    );
}
