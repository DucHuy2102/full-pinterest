import ImageCustom from '../../share/image-custom';

export default function Section4() {
    return (
        <div className='overflow-hidden h-screen w-full flex'>
            <div className='w-1/2 relative'>
                <ImageCustom
                    src='https://s.pinimg.com/webapp/shop-de8ddf10.png'
                    alt='Image section 5'
                    className='w-full h-full'
                />
                <ImageCustom
                    src='https://s.pinimg.com/webapp/creator-pin-img-3bed5463.png'
                    alt='Image section 5'
                    className='w-[30%] h-[60%] absolute z-10 top-[30%] left-[15%] rounded-3xl'
                />
                <ImageCustom
                    src='https://s.pinimg.com/webapp/creator-avatar-262dfeba.png'
                    alt='Image section 5'
                    className='w-[10%] h-[10%] absolute z-20 hover:scale-105 transition-transform duration-200 
                    bottom-[5%] left-[10%] rounded-full'
                />
                <div
                    className='text-white font-bold absolute z-20 
                bottom-[4%] left-[20%] flex flex-col pl-3 cursor-pointer'
                >
                    <span className='text-lg'>Scout the City</span>
                    <span className='text-sm'>56.7k followers</span>
                </div>
            </div>
            <div className='flex flex-1 flex-col items-center justify-center gap-5'>
                <h1
                    className='text-[#c31952] text-3xl lg:text-4xl 
                xl:text-4xl 2xl:text-5xl text-center font-bold w-1/2'
                >
                    See it, make it, try it, do it
                </h1>
                <p
                    className='text-[#c31952] font-medium text-lg xl:text-xl w-1/2 text-center
                tracking-wider xl:tracking-wide'
                >
                    The best part of Pinterest is discovering new things and ideas from people
                    around the world.
                </p>
                <button
                    className='bg-red-500 hover:bg-red-600 text-white font-bold w-1/4 text-[17px]
                py-2 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200'
                >
                    Explore
                </button>
            </div>
        </div>
    );
}
