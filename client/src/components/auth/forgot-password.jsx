import { useState } from 'react';

export default function ForgotPasswordForm({ handleChangeState }) {
    const [email, setEmail] = useState('duchuytv2102@gmail.com');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    return (
        <div className='w-full px-20'>
            <form className='flex flex-col items-start justify-center gap-3'>
                {loading && null}{' '}
                {success && (
                    <div className='flex flex-col items-center justify-center gap-1 w-full'>
                        <p className='text-zinc-700 text-center'>
                            We have sent a password reset email to{' '}
                            <span className='font-medium'>{email}</span>. Please check your inbox
                            and follow the instructions to reset your password.
                        </p>
                    </div>
                )}{' '}
                {error && (
                    <div className='flex flex-col items-center justify-center gap-1 w-full'>
                        <p className='text-red-500 font-bold'>
                            We don't recognize that email address.
                        </p>
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
                    </div>
                )}{' '}
                {!loading && !success && !error && (
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
                )}
                <button
                    className={`text-white text-center font-semibold cursor-pointer rounded-xl 
                py-2 w-full transition-transform ease-in-out duration-200
                ${
                    loading
                        ? 'bg-blue-500 hover:bg-blue-600'
                        : success
                        ? 'bg-green-500 hover:bg-green-600'
                        : error
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-teal-500 hover:bg-teal-600'
                }`}
                >
                    {loading ? 'Please wait...' : success ? 'Check my email' : 'Reset my password'}
                </button>
                <button
                    onClick={() => handleChangeState('LOGIN')}
                    className='text-center font-semibold cursor-pointer rounded-xl 
                border border-gray-200 bg-white hover:bg-gray-200/70 
                py-2 w-full transition-transform ease-in-out duration-200'
                >
                    Back to login
                </button>
            </form>
        </div>
    );
}
