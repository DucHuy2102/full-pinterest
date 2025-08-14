import { Outlet } from 'react-router';
import LeftBar from '../components/layout/leftBar';
import TopBar from '../components/layout/topBar';
import BottomBar from '../components/layout/bottomBar';

export default function DefaultLayout() {
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
}
