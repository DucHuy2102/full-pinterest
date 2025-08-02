const menuItems = [
    { id: 1, name: 'Logo', icon: '/general/logo.png', link: '/', isLogo: true },
    { id: 2, name: 'Home', icon: '/general/home.svg', link: '/', isLogo: false },
    { id: 3, name: 'Create', icon: '/general/create.svg', link: '/', isLogo: false },
    { id: 4, name: 'Updates', icon: '/general/updates.svg', link: '/', isLogo: false },
    { id: 5, name: 'Messages', icon: '/general/messages.svg', link: '/', isLogo: false },
];

const MenuItem = ({ item }) => (
    <a
        href={item.link}
        key={item.id}
        className='w-12 h-12 hover:bg-[#f1f1f1] rounded-md
    flex items-center justify-center'
    >
        <img
            src={item.icon}
            alt={`Icon ${item.name}`}
            className={item.isLogo ? 'w-[24px] h-[24px]' : null}
        />
    </a>
);

export default function LeftBar() {
    return (
        <div
            className='h-screen w-[72px] flex flex-col justify-between items-center 
        sticky top-0 left-0 py-4 border-r-[1px] border-[#e9e9e9]'
        >
            {/* top items */}
            <div className='flex flex-col items-center gap-6'>
                {menuItems.map((item) => (
                    <MenuItem item={item} key={item.id} />
                ))}
            </div>

            {/* bottom icon */}
            <MenuItem
                item={{
                    id: 5,
                    name: 'Settings',
                    icon: '/general/settings.svg',
                    link: '/',
                    isLogo: false,
                }}
            />
        </div>
    );
}
