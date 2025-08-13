import { Outlet } from 'react-router';
import LeftBar from '../components/layout/leftBar';
import TopBar from '../components/layout/topBar';

export default function DefaultLayout() {
    return (
        <div className='min-h-screen w-full flex gap-4'>
            <LeftBar />
            <div className='flex flex-1 flex-col mr-4'>
                <TopBar />
                <div className='flex-1 mt-[72px] overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
