import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { IoQrCodeOutline } from 'react-icons/io5';

export default function LoginGoogle({ state }) {
    return (
        <div className='flex flex-col gap-2'>
            {state === 'LOGIN' && (
                <button
                    className='rounded-xl text-zinc-800 hover:text-white font-semibold cursor-pointer 
                            hover:bg-blue-500 py-2 border border-gray-300 relative group'
                >
                    <FaFacebook
                        className='absolute left-4 top-1/2 transform -translate-y-1/2 
                                text-lg text-blue-500 group-hover:text-white'
                    />
                    Continue with Facebook
                </button>
            )}
            <button
                className='rounded-xl text-zinc-800 font-semibold cursor-pointer 
                        hover:bg-gray-200 py-2 border border-gray-300 relative group'
            >
                <FcGoogle
                    className='absolute left-4 top-1/2 transform -translate-y-1/2 
                            text-lg'
                />
                Continue with Google
            </button>
            {state === 'LOGIN' && (
                <button
                    className='rounded-xl text-zinc-800 font-semibold cursor-pointer
                            bg-white hover:bg-gray-200 py-2 border border-gray-300 relative group'
                >
                    <IoQrCodeOutline
                        className='absolute left-4 top-1/2 transform -translate-y-1/2 
                                text-lg'
                    />
                    Use QR code
                </button>
            )}
        </div>
    );
}
