import ImageKit from '../../share/image-custom';

export default function Section3() {
    return (
        <div className='bg-teal-100 w-full h-screen flex overflow-hidden'>
            <div className='relative w-1/2 h-full flex flex-col items-center justify-center gap-5 sm:gap-4'>
                <h1
                    className='text-[#006b6c] text-3xl lg:text-4xl 
                xl:text-4xl 2xl:text-5xl text-center font-bold'
                >
                    Save ideas you like
                </h1>
                <p
                    className='text-[#006b6c] font-medium text-lg xl:text-xl w-full text-center
                px-[11vw] tracking-wider xl:tracking-wide'
                >
                    Collect your favorites so you can get back to them later.
                </p>
                <button
                    className='bg-red-500 hover:bg-red-600 text-white font-bold w-1/3 text-[17px]
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
            <div className='relative hidden sm:flex flex-1'>
                <div className='absolute w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='relative w-full h-full'>
                        <ImageKit
                            src='Pinterest/pins/pin6.jpeg'
                            alt='Description of the image'
                            className='w-full h-full rounded-4xl'
                        />
                        <p
                            className='absolute z-10 text-center text-white md:text-4xl 
                        lg:text-5xl font-bold bottom-1/5 translate-y-1/2 2xl:pr-40'
                        >
                            Fern future home vibes
                        </p>
                    </div>
                </div>
                <div className='absolute w-1/3 h-1/2 top-1/4 left-1/12 -translate-x-1/3 -translate-y-1/3'>
                    <div className='relative w-full h-full'>
                        <ImageKit
                            src='Pinterest/pins/pin7.jpeg'
                            alt='Description of the image'
                            className='w-full h-full rounded-4xl'
                        />
                        <p
                            className='absolute z-10 text-start text-white text-2xl lg:text-3xl pr-10
                        xl:text-4xl font-bold top-1/2 translate-y-1/2 2xl:bottom-1/12 2xl:translate-y-1/2 left-2'
                        >
                            My favorite place
                        </p>
                    </div>
                </div>
                <div className='absolute w-1/3 h-1/3 bottom-1/5 right-1/5 translate-x-1/2 translate-y-1/2'>
                    <div className='relative w-full h-full'>
                        <ImageKit
                            src='Pinterest/pins/pin8.jpeg'
                            alt='Description of the image'
                            className='w-full h-full rounded-4xl'
                        />
                        <p
                            className='absolute z-10 text-start text-white text-2xl lg:text-3xl 
                        xl:text-4xl font-bold top-1/2 translate-y-1/2 md:translate-y-1/3 left-2'
                        >
                            The deck of my dreams
                        </p>
                    </div>
                </div>
                <div className='absolute w-1/4 h-1/4 bottom-1/6 left-1/5 -translate-x-1/2 translate-y-1/2'>
                    <div className='relative w-full h-full'>
                        <ImageKit
                            src='Pinterest/pins/pin9.jpeg'
                            alt='Description of the image'
                            className='w-full h-full rounded-4xl'
                        />
                        <p
                            className='absolute z-10 text-start text-white text-2xl lg:text-3xl 
                        2xl:text-2xl font-bold top-1/2 translate-y-1/2 md:translate-y-1/3 left-2'
                        >
                            Serve my drinks in style
                        </p>
                    </div>
                </div>
                <div className='absolute w-1/4 h-1/4 top-1/4 right-1/12 translate-x-1/12 -translate-y-1/2'>
                    <div className='relative w-full h-full'>
                        <ImageKit
                            src='Pinterest/pins/pin10.jpeg'
                            alt='Description of the image'
                            className='w-full h-full rounded-4xl'
                        />
                        <p
                            className='absolute z-10 text-start text-white text-2xl lg:text-3xl 
                        2xl:text-2xl font-bold top-1/2 translate-y-1/2 md:translate-y-1/3 left-2'
                        >
                            Our bathroom upgrade
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
