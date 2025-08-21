import { useState } from 'react';
import { FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ForgotPasswordForm from './forgot-password';
import LoginRegisterForm from './login-register-form';
import LoginGoogle from './login-google';
import ChangeState from './change-state';

export default function Auth() {
    const [state, setState] = useState('LOGIN');
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChangeState = (newState) => {
        setState(newState);
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (state === 'LOGIN') {
            if (!form.email || !form.password) {
                setError('Please fill in all fields');
                return;
            }
        } else if (state === 'REGISTER') {
            if (!form.username || !form.email || !form.password) {
                setError('Please fill in all fields');
                return;
            }
        } else {
            if (!form.email) {
                setError('Email is required');
                return;
            }
        }

        try {
            console.log({ form });
        } catch (error) {
            setError('An error occurred');
            console.log({ error });
        } finally {
            setIsLoading(true);
            setError(null);
        }
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
                <div className='w-full px-20'>
                    <ForgotPasswordForm handleChangeState={handleChangeState} />
                </div>
            ) : (
                <div className='w-full px-20'>
                    <LoginRegisterForm
                        state={state}
                        form={form}
                        isLoading={isLoading}
                        error={error}
                        handleChangeInput={handleChangeInput}
                        handleChangeState={handleChangeState}
                        handleSubmit={handleSubmit}
                    />

                    <p className='uppercase font-semibold text-zinc-600 w-full text-center py-2'>
                        or
                    </p>

                    <LoginGoogle state={state} />

                    <p className='text-sm text-center px-5 py-3 text-gray-700'>
                        By continuing, you agree to Pinterest&apos;s{' '}
                        <span className='underline'>Terms of Service</span> and acknowledge you have
                        read our <span className='underline'>Privacy Policy</span>.
                    </p>

                    <ChangeState state={state} handleChangeState={handleChangeState} />
                </div>
            )}
        </div>
    );
}
