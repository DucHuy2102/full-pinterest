export default function ChangeState({ state, handleChangeState }) {
    return (
        <p className='text-sm text-center font-semibold'>
            {state === 'LOGIN' && 'Not on Pinterest yet? '}
            {state === 'REGISTER' && 'Already a member? '}

            <span
                className='hover:text-blue-500 hover:underline cursor-pointer'
                onClick={() => handleChangeState(state === 'LOGIN' ? 'REGISTER' : 'LOGIN')}
            >
                {state === 'LOGIN' ? 'Sign up' : 'Log in'}
            </span>
        </p>
    );
}
