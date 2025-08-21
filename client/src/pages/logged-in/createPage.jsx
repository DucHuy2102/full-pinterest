import { useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function CreatePage() {
    const fileRef = useRef(null);

    return (
        <div className='my-5 sm:my-3 mx-5 sm:mx-4 md:mx-3 lg:mx-2 xl:mx-1 2xl:mx-0 overflow-hidden'>
            <div className='flex items-center justify-between pb-2 lg:py-4 border-b lg:border-y border-gray-300'>
                <h1 className='text-xl lg:text-2xl font-bold'>Create Pin</h1>
                <span className='italic font-medium text-sm lg:text-lg font-serif text-zinc-700'>
                    Let&apos;s create something amazing!
                </span>
                <button
                    className='cursor-pointer text-white bg-red-500 rounded-xl lg:rounded-2xl
                font-medium py-2 px-3 lg:py-3 lg:px-5 hover:bg-red-600 transition duration-300 ease-in-out'
                >
                    Publish
                </button>
            </div>
            <div className='my-4 lg:my-8 flex flex-col sm:flex-row items-start justify-center gap-10 lg:gap-16 w-full lg:w-[70%] mx-auto'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div
                        className='bg-gray-300/50 hover:bg-gray-300/70 border border-dashed border-gray-300
                    w-full md:w-[270px] h-[394px] lg:w-[375px] lg:h-[457px] rounded-4xl relative cursor-pointer outline-none focus:ring-0'
                        onClick={() => fileRef.current.click()}
                    >
                        <div className='flex flex-col items-center justify-center h-full gap-2'>
                            <span className='p-1 lg:p-2 rounded-full bg-transparent border-4 border-black'>
                                <FaArrowUp className='text-lg lg:text-xl' />
                            </span>
                            <span className='font-medium w-52 flex flex-wrap text-center'>
                                Choose a file or drag and drop it here
                            </span>
                        </div>
                        <input type='file' className='hidden' ref={fileRef} />
                        <span
                            className='absolute bottom-5 lg:bottom-7 left-1/2 transform -translate-x-1/2 text-xs lg:text-sm text-black
                        font-medium w-72 sm:w-56 lg:w-80 text-center'
                        >
                            We recommend using high quality .jpg files less than 20 MB or .mp4 files
                            less than 200 MB
                        </span>
                    </div>
                    <div className='my-4 lg:my-2 h-[0.5px] w-full md:w-[270px] lg:w-[375px] bg-gray-300/50' />
                    <button
                        className='w-full md:w-[270px] lg:w-[375px] rounded-2xl text-black font-medium 
                    lg:font-semibold py-2 bg-gray-300/50 hover:bg-gray-300/70 cursor-pointer'
                    >
                        Save from URL
                    </button>
                </div>
                <form className='flex flex-col gap-8 w-full'>
                    <div className='flex flex-col gap-1 py-2 px-3 lg:py-3 lg:px-5 border border-gray-400 rounded-xl'>
                        <label
                            htmlFor='title'
                            className='font-medium tracking-wide text-[16px] lg:text-lg cursor-pointer'
                        >
                            Title
                        </label>
                        <input
                            type='text'
                            id='title'
                            placeholder='Add a title'
                            className='outline-none border-none focus:ring-0 text-zinc-800'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label
                            htmlFor='description'
                            className='font-medium text-[16px] lg:text-lg cursor-pointer'
                        >
                            Description
                        </label>
                        <textarea
                            rows={4}
                            type='text'
                            id='description'
                            placeholder='Add a detailed description'
                            className='border border-gray-400 rounded-xl py-2 px-3 lg:py-3 lg:px-5 
                            outline-none focus:ring-0 text-zinc-800 resize-none'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label
                            htmlFor='link'
                            className='font-medium tracking-wide text-[16px] lg:text-lg cursor-pointer'
                        >
                            Link
                        </label>
                        <input
                            type='text'
                            id='link'
                            placeholder='Add a link'
                            className='border border-gray-400 rounded-xl py-2 px-3 lg:py-3 lg:px-5 
                            outline-none focus:ring-0 text-zinc-800'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label
                            htmlFor='board'
                            className='font-medium tracking-wide text-[16px] lg:text-lg cursor-pointer'
                        >
                            Board
                        </label>
                        <select
                            name='board'
                            id='board'
                            className='border border-gray-400 rounded-xl py-2 px-3 lg:py-3 lg:px-5
                            outline-none focus:ring-0 text-zinc-800 cursor-pointer'
                        >
                            <option value='' className=''>
                                Choose a board
                            </option>
                            <option value='1' className=''>
                                Board 1
                            </option>
                            <option value='2' className=''>
                                Board 2
                            </option>
                            <option value='3' className=''>
                                Board 3
                            </option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-col gap-1 py-2 px-3 lg:py-3 lg:px-5 border border-gray-400 rounded-xl'>
                            <label
                                htmlFor='tags'
                                className='font-medium tracking-wide text-[16px] lg:text-lg cursor-pointer'
                            >
                                Tagged topics (0)
                            </label>
                            <input
                                type='text'
                                id='tags'
                                placeholder='Search for a tag'
                                className='outline-none border-none focus:ring-0 text-zinc-800'
                            />
                        </div>
                        <small className='pl-3 lg:pl-5'>
                            Don&apos;t worry, people won&apos;t see your tags
                        </small>
                    </div>
                </form>
            </div>
        </div>
    );
}
