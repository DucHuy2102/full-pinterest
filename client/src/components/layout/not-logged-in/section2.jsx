import ImageKit from '../../share/image-custom';
import { CiSearch } from 'react-icons/ci';

export default function Section2() {
    return (
        <div className='bg-[#fffd92] w-full h-screen flex overflow-hidden px-10'>
            <div className='relative hidden sm:flex flex-1'>
                <ImageKit
                    src='Pinterest/pins/pin1.jpeg'
                    alt='Description of the image'
                    className='absolute z-10 md:z-30 lg:z-10 xl:z-30 transform rounded-3xl hover:scale-105 transition-transform duration-200
                    w-1/2 h-1/2 top-1/12 left-1/5 -translate-x-1/3 -translate-y-1/12 rotate-[30deg]
                    md:h-2/3 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rotate-none
                    lg:left-1/5 lg:-translate-x-1/5 lg:-rotate-6
                    xl:w-1/3 xl:h-2/3 xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 xl:rotate-none'
                />
                <ImageKit
                    src='Pinterest/pins/pin2.jpeg'
                    alt='Description of the image'
                    className='absolute z-10 sm:z-20 xl:z-10 transform rounded-3xl hover:scale-105 transition-transform duration-200
                    w-1/2 h-2/5 top-1/3 right-1/4 translate-x-2/3 -translate-y-1/4 -rotate-12
                    md:h-2/4 md:top-1/2 md:left-1/6 md:-translate-x-1/4 md:-translate-y-1/2 md:rotate-none
                    lg:w-1/3 lg:top-1/4 lg:right-1/4 lg:translate-x-2/3 lg:-rotate-12
                    xl:w-1/4 xl:h-1/2 xl:top-1/2 xl:left-1/5 xl:-translate-x-1/5 xl:-translate-y-1/2 xl:rotate-none'
                />
                <ImageKit
                    src='Pinterest/pins/pin3.jpeg'
                    alt='Description of the image'
                    className='absolute z-40 sm:z-30 md:z-40 lg:z-10 xl:z-10 transform rounded-3xl hover:scale-105 transition-transform duration-200
                    w-1/2 h-1/2 bottom-1/5 left-1/12 translate-x-1/12 translate-y-1/5 rotate-12
                    md:top-1/4 md:h-2/5 md:left-1/2 md:translate-x-1/4 md:-translate-y-1/3 md:rotate-none
                    lg:w-1/4 lg:top-1/2 lg:translate-x-1/3 lg:-translate-y-1/12 lg:-rotate-12
                    xl:w-1/4 xl:h-1/3 xl:top-1/5 xl:right-1/2 xl:translate-x-1/2 xl:-translate-y-1/5 xl:rotate-none
                    2xl:h-1/2'
                />
                <ImageKit
                    src='Pinterest/pins/pin4.jpeg'
                    alt='Description of the image'
                    className='absolute z-40 md:z-30 lg:z-20 xl:z-30 transform rounded-3xl hover:scale-105 transition-transform duration-200
                    w-1/2 h-1/2 top-2/3 left-1/2 translate-x-1/3 -translate-y-1/5 -rotate-12
                    md:bottom-1/2 md:right-1/3 md:-translate-y-1/3 md:rotate-none
                    lg:w-1/5 lg:h-1/4 lg:top-2/3 lg:right-1/4 lg:-translate-x-1/2 lg:translate-y-1/5 lg:rotate-[30deg]
                    xl:w-1/3 xl:h-1/2 xl:top-1/3 xl:right-1/3 xl:translate-x-1/3 xl:translate-y-1/4 xl:rotate-none'
                />
                <div
                    className='absolute z-50 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-90
                flex items-center justify-center gap-2 text-lg bg-white rounded-2xl py-2 text-zinc-600
                w-2/3 lg:w-1/2 cursor-pointer'
                >
                    <CiSearch className='text-2xl' />
                    <span className='font-semibold'>easy chicken dinner</span>
                </div>
            </div>
            <div
                className='relative w-full sm:w-1/2 lg:w-1/3 lg:pr-10 xl:pl-0 h-full 
            flex flex-col items-center justify-center gap-5 sm:gap-4'
            >
                <h1
                    className='text-[#c31952] text-3xl lg:text-4xl 
                xl:text-4xl 2xl:text-5xl text-center font-bold'
                >
                    Search for an idea
                </h1>
                <p
                    className='text-[#c31952] font-medium text-lg xl:text-xl w-full text-center
                px-20 sm:px-12 md:px-20 lg:px-3 xl:px-8 2xl:px-16 tracking-wider xl:tracking-wide'
                >
                    What do you want to try next? Think of something you&apos;re into — like “easy
                    chicken dinner” — and see what you find.
                </p>
                <button
                    className='bg-red-500 hover:bg-red-600 text-white font-bold w-1/2 text-[17px]
                py-2 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200'
                >
                    Explore
                </button>
                <ImageKit
                    src='Pinterest/pins/pin1.jpeg'
                    alt='Description of the image'
                    className='absolute z-10 sm:hidden transform rounded-3xl hover:scale-105 transition-transform duration-200
                    w-1/5 h-2/6 top-1/4 left-1/7 -translate-x-1/4 -translate-y-2/4 rotate-[30deg]'
                />
                <ImageKit
                    src='Pinterest/pins/pin2.jpeg'
                    alt='Description of the image'
                    className='absolute z-10 sm:hidden transform rounded-3xl hover:scale-105 transition-transform duration-200
                    w-1/3 h-2/6 bottom-1/7 left-1/7 -translate-x-1/4 translate-y-1/2 -rotate-[30deg]'
                />
                <ImageKit
                    src='Pinterest/pins/pin3.jpeg'
                    alt='Description of the image'
                    className='absolute z-10 sm:hidden transform rounded-3xl hover:scale-105 transition-transform duration-200
                    w-1/4 h-1/3 bottom-1/5 right-1/7 translate-x-1/5 translate-y-1/2 rotate-[30deg]'
                />
                <ImageKit
                    src='Pinterest/pins/pin4.jpeg'
                    alt='Description of the image'
                    className='absolute z-10 sm:hidden transform rounded-3xl hover:scale-105 transition-transform duration-200
                    w-1/4 h-1/3 top-1/5 right-1/5 translate-x-2/3 -translate-y-1/2 -rotate-[20deg]'
                />
            </div>
        </div>
    );
}
