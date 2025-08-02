import { GalleryComponent, LeftBarComponent, TopBarComponent } from './components/index';

export default function App() {
    return (
        <div className='w-full flex gap-4'>
            <LeftBarComponent />
            <div className='flex-1 mr-4'>
                <TopBarComponent />
                <GalleryComponent />
            </div>
        </div>
    );
}
