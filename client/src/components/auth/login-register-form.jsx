import { useState } from 'react';
import axios from 'axios';
import useAuthStore from '../../store/authStore';
import { useEffect } from 'react';

const authFunction = async (state, data) => {
    const formData = state === 'REGISTER' ? data : { email: data.email, password: data.password };
    const endpoint = state === 'REGISTER' ? 'sign-up' : 'sign-in';
    const res = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/users/${endpoint}`,
        formData,
        { withCredentials: true }
    );
    return res.data;
};

export default function LoginRegisterForm({ state, handleChangeState }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setUser = useAuthStore((state) => state.setUser);

    useEffect(() => {
        const form = document.querySelector('form');
        if (form) {
            form.reset();
        }
        setError(null);
        setIsLoading(false);
    }, [state]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        if (!data.email || !data.password || (state === 'REGISTER' && !data.username)) {
            setError('All fields are required');
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            const res = await authFunction(state, data);
            if (state === 'REGISTER') {
                handleChangeState('LOGIN');
            } else if (state === 'LOGIN') {
                setUser(res.user);
            }
        } catch (error) {
            if (error.response?.data?.message) {
                setError(error.response.data.message);
                return;
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className='flex flex-col items-start justify-center gap-3' onSubmit={handleSubmit}>
            {state === 'REGISTER' && (
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor='username' className='cursor-pointer pl-2'>
                        Username
                    </label>
                    <input
                        id='username'
                        type='text'
                        name='username'
                        placeholder='Username'
                        className='border border-gray-500 rounded-xl py-2 px-4 
                                text-zinc-800 font-medium w-full'
                    />
                </div>
            )}
            <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='email' className='cursor-pointer pl-2'>
                    Email
                </label>
                <input
                    id='email'
                    type='email'
                    name='email'
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
                    name='password'
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
            {error && (
                <div className='w-full'>
                    <p className='text-red-500 text-center font-semibold text-[17px]'>{error}</p>
                </div>
            )}
            <button
                type='submit'
                disabled={isLoading}
                className={`py-2 w-full text-white text-center font-semibold cursor-pointer  
                        bg-red-500 hover:bg-red-600 rounded-xl ${isLoading && 'opacity-50'}`}
            >
                {isLoading ? 'Loading...' : state === 'LOGIN' ? 'Log in' : 'Sign up'}
            </button>
        </form>
    );
}
