import { useState } from 'react';

export default function ResetPasswordForm() {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.password) {
            setError('Please enter your new password');
            return;
        }
        if (!formData.confirmPassword) {
            setError('Please confirm your new password');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        console.log({ formData });
    };

    return (
        <form className='flex flex-col gap-4'>
            <div className=''>
                <label htmlFor='password' className='cursor-pointer pl-2 font-semibold text-lg'>
                    New Password
                </label>
                <input
                    type='password'
                    id='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='New Password'
                    className='border border-gray-500 rounded-xl py-2 px-4 
                                text-zinc-800 font-medium w-full'
                />
            </div>
            <div className=''>
                <label htmlFor='password' className='cursor-pointer pl-2 font-semibold text-lg'>
                    Confirm Password
                </label>
                <input
                    type='password'
                    id='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder='Confirm Password'
                    className='border border-gray-500 rounded-xl py-2 px-4 
                                text-zinc-800 font-medium w-full'
                />
                {error && (
                    <div className='flex items-center justify-center mt-3'>
                        <p className='text-red-500 font-semibold text-[17px]'>{error}</p>
                    </div>
                )}
            </div>
            <button
                type='submit'
                onClick={handleSubmit}
                disabled={isLoading}
                className='bg-blue-500 text-white hover:scale-105 transition-transform duration-200
                    font-semibold cursor-pointer rounded-xl py-2 px-4'
            >
                {isLoading ? 'Resetting...' : 'Reset my password'}
            </button>
        </form>
    );
}
