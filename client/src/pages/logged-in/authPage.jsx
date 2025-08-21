import ImageKit from '../../components/share/image-custom';

export default function AuthPage() {
    return (
        <div className='w-full h-screen flex items-center justify-center overflow-hidden'>
            <div className=''>
                <ImageKit src='Pinterest/general/logo.png' alt='Pinterest Logo' />
                <h1 className=''>Login to your account</h1>
                <form className=''>
                    <div className=''>
                        <label htmlFor='email'>Email</label>
                        <input type='email' className='' id='email' />
                    </div>
                    <div className=''>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='' id='password' />
                    </div>
                    <button type='submit' className=''>
                        Login
                    </button>
                    <span>Don&apos;t have an account? Sign up</span>
                </form>
            </div>
        </div>
    );
}
