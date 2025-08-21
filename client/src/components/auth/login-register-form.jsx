export default function LoginRegisterForm({
    state,
    form,
    isLoading,
    error,
    handleChangeInput,
    handleChangeState,
    handleSubmit,
}) {
    return (
        <form className='flex flex-col items-start justify-center gap-3'>
            {state === 'REGISTER' && (
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor='email' className='cursor-pointer pl-2'>
                        Username
                    </label>
                    <input
                        id='username'
                        type='text'
                        name='username'
                        value={form.username}
                        onChange={handleChangeInput}
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
                    value={form.email}
                    onChange={handleChangeInput}
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
                    value={form.password}
                    onChange={handleChangeInput}
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
                disabled={isLoading}
                onClick={handleSubmit}
                className={`py-2 w-full text-white text-center font-semibold cursor-pointer  
                        bg-red-500 hover:bg-red-600 rounded-xl ${isLoading && 'opacity-50'}`}
            >
                {isLoading ? 'Loading...' : state === 'LOGIN' ? 'Log in' : 'Sign up'}
            </button>
        </form>
    );
}
