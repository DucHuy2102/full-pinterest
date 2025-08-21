import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { IoQrCodeOutline } from 'react-icons/io5';
import { FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ForgotPasswordForm from './forgot-password';

export default function Auth() {
    const [state, setState] = useState('LOGIN');

    const handleChangeState = (newState) => {
        setState(newState);
    };

    return (
        <div
            className='w-[464px] flex flex-col items-center justify-center gap-3 
        py-5 rounded-4xl bg-white shadow-sm'
        >
            <Link to='/'>
                <FaPinterest className='text-5xl text-red-500' />
            </Link>
            <h1 className='font-bold text-3xl text-zinc-700'>Welcome to Pinterest</h1>
            <span className='text-[15px] font-semibold text-zinc-600'>
                {state === 'FORGOT_PASSWORD'
                    ? 'Enter your email to reset your password'
                    : state === 'LOGIN'
                    ? 'Find new ideas to try'
                    : "Let's make something awesome!"}
            </span>

            {state === 'FORGOT_PASSWORD' ? (
                <ForgotPasswordForm handleChangeState={handleChangeState} />
            ) : (
                <div className='w-full px-20'>
                    <form className='flex flex-col items-start justify-center gap-3'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor='email' className='cursor-pointer pl-2'>
                                Email
                            </label>
                            <input
                                autoFocus
                                id='email'
                                type='email'
                                placeholder='Email'
                                className='border border-gray-500 rounded-xl py-2 px-4 
                                text-zinc-800 font-medium w-full'
                            />
                        </div>
                        <div className=''>
                            <label htmlFor='password' className='cursor-pointer pl-2'>
                                Password
                            </label>
                            <input
                                type='password'
                                id='password'
                                placeholder='Password'
                                className='border border-gray-500 rounded-xl py-2 px-4 
                                text-zinc-800 font-medium w-full'
                            />
                            {state === 'REGISTER' && (
                                <small className='text-zinc-600 pl-2'>
                                    Use 8 or more letters, numbers & symbols
                                </small>
                            )}
                        </div>
                        {state === 'LOGIN' && (
                            <span
                                onClick={() => handleChangeState('FORGOT_PASSWORD')}
                                className='hover:underline cursor-pointer text-blue-500 text-[15px] font-medium'
                            >
                                Forgot your password?
                            </span>
                        )}
                        <button
                            className='text-white text-center font-semibold cursor-pointer 
                        bg-red-500 hover:bg-red-600 rounded-xl py-2 w-full transition-transform ease-in-out duration-200'
                        >
                            {state === 'LOGIN' ? 'Log in' : 'Continue'}
                        </button>
                    </form>
                    <p className='uppercase font-semibold text-zinc-600 w-full text-center py-2'>
                        or
                    </p>
                    <div className='flex flex-col gap-2'>
                        {state === 'LOGIN' && (
                            <button
                                className='rounded-xl text-zinc-800 hover:text-white font-semibold cursor-pointer 
                            hover:bg-blue-500 py-2 border border-gray-300 relative group'
                            >
                                <FaFacebook
                                    className='absolute left-4 top-1/2 transform -translate-y-1/2 
                                text-lg text-zinc-600 group-hover:text-white'
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
                    <p className='text-sm text-center px-5 py-3 text-gray-700'>
                        By continuing, you agree to Pinterest&apos;s{' '}
                        <span className='underline'>Terms of Service</span> and acknowledge you have
                        read our <span className='underline'>Privacy Policy</span>.
                    </p>

                    <p className='text-sm text-center font-semibold'>
                        {state === 'LOGIN' && 'Not on Pinterest yet? '}
                        {state === 'REGISTER' && 'Already a member? '}

                        <span
                            className='hover:text-blue-500 hover:underline cursor-pointer'
                            onClick={() =>
                                handleChangeState(state === 'LOGIN' ? 'REGISTER' : 'LOGIN')
                            }
                        >
                            {state === 'LOGIN' ? 'Sign up' : 'Log in'}
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
}
