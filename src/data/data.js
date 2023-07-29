import { FiUser, FiPieChart, BiCalendar, BiUserCircle, BiPowerOff, BsCheckCircle, BsGear, LuLayoutDashboard, CgNotes, BsEnvelope, AiOutlineHome, CiUser, AiOutlineFileText } from '@/data/icons'

const data = {
    navbar: {
        profilePlate: [
            {
                icon: <LuLayoutDashboard />,
                name: "Dashboard"
            },
            {
                icon: <BiUserCircle />,
                name: "Profile"
            },
            {
                icon: <BiPowerOff />,
                name: "Logout"
            },
        ],
        notification: [
            {
                image: '/user.png',
                heading: 'Heading',
                body: 'body',
                date: 'Today'
            },
            {
                image: '/user.png',
                heading: 'Heading',
                body: 'body',
                date: 'Yesterday'
            },
            {
                image: '/user.png',
                heading: 'Heading',
                body: 'body',
                date: 'May 11, 2022'
            },
            {
                image: '/user.png',
                heading: 'Heading',
                body: 'body',
                date: 'May 11, 2022'
            },
            {
                image: '/user.png',
                heading: 'Heading',
                body: 'body',
                date: 'May 11, 2022'
            },
            {
                image: '/user.png',
                heading: 'Heading',
                body: 'body',
                date: 'May 11, 2022'
            },
            {
                image: '/user.png',
                heading: 'Heading',
                body: 'body',
                date: 'May 11, 2022'
            },
        ],
        shortcuts: [
            {
                icon: <BiCalendar />,
                title: 'Calendar'
            },
            {
                icon: <CgNotes />,
                title: 'Notes'
            },
            {
                icon: <FiUser />,
                title: 'Users'
            },
            {
                icon: <BsCheckCircle />,
                title: 'Role'
            },
            {
                icon: <FiPieChart />,
                title: 'Dashboard'
            },
            {
                icon: <BsGear />,
                title: 'Settings'
            },
        ]
    },
    sidebar: {
        navLinks: [
            {
                icon: <AiOutlineHome />,
                title: "Dashboard",
                sub: [{
                    title: "Dashboard",
                    href: '/',
                }]
            },
            {
                icon: <BsEnvelope />,
                title: "Email",
                href: '/email'
            },
            {
                icon: <CiUser />,
                title: "User",
                sub: [
                    {
                        title: "List",
                        href: '/user/list',
                    },
                    {
                        title: "View",
                        href: '/user/view'
                    },
                ]
            },
            {
                icon: <AiOutlineFileText />,
                title: "User",
                sub: [
                    {
                        title: "List",
                        href: '/user/list',
                    },
                    {
                        title: "View",
                        href: '/user/view'
                    },
                ]
            },
        ]
    }
}

export default data