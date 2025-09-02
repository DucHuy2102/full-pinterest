import ResetPasswordForm from '../../components/auth/reset-password-form';
import ImageCustom from '../../components/share/image-custom';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function ResetPassword() {
    return (
        <div className='w-full h-screen flex justify-between bg-white'>
            <div className='w-1/2 h-full'>
                <ImageCustom
                    src={'Pinterest/pins/pin1.jpeg'}
                    alt='Pinterest Image Reset Password'
                    className='w-full h-full'
                />
            </div>
            <div
                className='w-1/2 h-full flex flex-col items-center justify-center gap-5 
            bg-teal-100/80 relative'
            >
                <Link
                    to='/'
                    className='absolute top-4 left-4 text-zinc-800 rounded-2xl py-2 px-4 
                bg-white hover:bg-gray-50 flex items-center gap-2'
                >
                    <FaHome className='inline' />
                    <span className='font-medium'>Back to Login</span>
                </Link>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-4xl font-bold'>Reset Password</h1>
                    <p className='text-gray-600 font-medium'>Please enter your new password.</p>
                </div>
                <ResetPasswordForm />
            </div>
        </div>
    );
}
