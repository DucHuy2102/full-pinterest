import { Outlet } from 'react-router';
import LeftBar from '../components/leftBar';
import TopBar from '../components/topBar';

export default function DefaultLayout() {
    return (
        <div className='w-full flex gap-4'>
            <LeftBar />
            <div className='flex-1 mr-4'>
                <TopBar />
                <Outlet />
            </div>
        </div>
    );
}
