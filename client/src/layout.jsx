import { Outlet } from 'react-router';
import LeftBar from './components/layout/logged-in/leftBar';
import TopBar from './components/layout/logged-in/topBar';
import BottomBar from './components/layout/logged-in/bottomBar';
import NotLoggedInPage from './pages/not-logged-in/homePage';

const LoginSuccess = () => {
    return (
        <div className='min-h-screen w-full flex flex-col sm:flex-row gap-4'>
            <LeftBar />
            <div className='flex flex-1 flex-col mx-0 sm:mx-3 sm:mr-4'>
                <TopBar />
                <div className='flex-1 mt-[40px] sm:mt-[72px] overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
            <BottomBar />
        </div>
    );
};

export default function DefaultLayout() {
    const isUserLoggedIn = false;

    return <>{isUserLoggedIn ? <LoginSuccess /> : <NotLoggedInPage />}</>;
}
