"use client";
import React from 'react'
import ToogleTheme from './ToogleTheme'
import { MdMenu, MdOutlineSearch, HiLanguage, RiStarSmileLine, BsBell, FaPlus, MdOutlineCalendarToday, LiaFileInvoiceSolid, FiUser, FiMonitor, LuPieChart, GoGear, FaRegEnvelopeOpen, RxCross2, FaRegEnvelope, MdOutlineLogout, AiOutlineDollar, FaRegCircleQuestion, SiWindows } from '@/data/icons/icons'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"

const Navbar = () => {
    const [language, setLanguage] = React.useState(0)
    const [notificationStatus, setNotificationStatus] = React.useState('default')
    const [notifications, setNotifications] = React.useState([
        {
            id: 1,
            title: 'Congratulations Flora 🎉',
            description: 'Won the monthly bestseller gold badge',
            time: '1h ago',
            avatar: 'https://github.com/shadcn.png',
            status: 'unread'
        },
        {
            id: 2,
            title: 'Congratulations Flora 🎉',
            description: 'Won the monthly bestseller gold badge',
            time: '1h ago',
            avatar: 'https://github.com/shadcn.png',
            status: 'read'
        },
        {
            id: 3,
            title: 'Congratulations Flora 🎉',
            description: 'Won the monthly bestseller gold badge',
            time: '1h ago',
            avatar: 'https://github.com/shadcn.png',
            status: 'read'
        },
        {
            id: 4,
            title: 'Congratulations Flora 🎉',
            description: 'Won the monthly bestseller gold badge',
            time: '1h ago',
            avatar: 'https://github.com/shadcn.png',
            status: 'unread'
        },
        {
            id: 5,
            title: 'Congratulations Flora 🎉',
            description: 'Won the monthly bestseller gold badge',
            time: '1h ago',
            avatar: 'https://github.com/shadcn.png',
            status: 'unread'
        },
        {
            id: 6,
            title: 'Congratulations Flora 🎉',
            description: 'Won the monthly bestseller gold badge',
            time: '1h ago',
            avatar: 'https://github.com/shadcn.png',
            status: 'read'
        },
    ])
    const shortcut = [
        [
            {
                id: 1,
                title: 'Calendar',
                description: 'Appointments',
                icon: <MdOutlineCalendarToday />
            },
            {
                id: 2,
                title: 'Calendar',
                description: 'Appointments',
                icon: <LiaFileInvoiceSolid />
            },
        ],
        [
            {
                id: 3,
                title: 'Calendar',
                description: 'Appointments',
                icon: <FiUser />
            },
            {
                id: 4,
                title: 'Calendar',
                description: 'Appointments',
                icon: <FiMonitor />
            },
        ],
        [
            {
                id: 5,
                title: 'Calendar',
                description: 'Appointments',
                icon: <LuPieChart />
            },
            {
                id: 6,
                title: 'Calendar',
                description: 'Appointments',
                icon: <GoGear />
            },
        ]
    ]
    const [toogleHeader, setToogleHeader] = React.useState(false)
    const header = React.useRef(null)

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setToogleHeader(pre => true)
            } else {
                setToogleHeader(pre => false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className='flex sticky w-full top-0' ref={header}>
            <nav className={`mx-6 py-[10px] ${toogleHeader ? 'px-6 bg-[#312D4B]/[0.85] backdrop-blur-[9px] shadow-sm' : 'px-0 bg-transparent'} dark:text-foreground flex w-full transition-all ease-in-out duration-300 rounded-b-md`}>
                <div className='flex items-center justify-between gap-4 w-full'>
                    <div className='flex items-center justify-between gap-2'>
                        <Button variant='icon' size='icon' className="desktop:hidden text-xl shadow-none focus:ring-0 focus-visible:ring-0 border-none outline-none">
                            <MdMenu className='w-[1.7rem] h-[1.7rem]' />
                        </Button>
                        <Button variant='icon' size='icon' className="text-xl shadow-none focus:ring-0 focus-visible:ring-0 border-none outline-none">
                            <MdOutlineSearch className='w-[1.7rem] h-[1.7rem]' />
                        </Button>
                        <Button className='whitespace-nowrap text-highlightedtextdark gap-2 p-0 bg-transparent outline-none shadow-none border-none focus:ring-0 focus:ring-offset-0'>
                            Search <SiWindows /> + K
                        </Button>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Menubar className="bg-transparent p-0 space-x-0 border-none shadow-none h-auto">
                            <MenubarMenu>
                                <MenubarTrigger className="bg-transparent hover:bg-itemhover/10 focus:bg-itemhover/40 dark:focus:bg-itemhover/10 data-[state=open]:bg-itemhover/40 dark:data-[state=open]:bg-itemhover/10 rounded-full cursor-pointer p-[7px]">
                                    <span className="shadow-none focus:ring-0 focus-visible:ring-0 border-none outline-none">
                                        <HiLanguage className='w-6 h-6' />
                                    </span>
                                </MenubarTrigger>
                                <MenubarContent className="bg-white dark:bg-itembackground min-w-[160px] w-[160px] h-[130px] px-0 py-2 border-none">
                                    <MenubarItem className={`${language === 0 ? 'bg-textbg text-texthover focus:bg-textbg focus:text-texthover' : 'hover:bg-itemhover/40 focus:bg-itemhover/40 dark:hover:bg-itemhover/10 dark:focus:bg-itemhover/10'} cursor-pointer h-[38px] px-4 py-2 font-normal rounded-none`} onClick={() => setLanguage(0)}>
                                        English
                                    </MenubarItem>
                                    <MenubarItem className={`${language === 1 ? 'bg-textbg text-texthover focus:bg-textbg focus:text-texthover' : 'hover:bg-itemhover/40 focus:bg-itemhover/40 dark:hover:bg-itemhover/10 dark:focus:bg-itemhover/10'} cursor-pointer h-[38px] px-4 py-2 font-normal rounded-none`} onClick={() => setLanguage(1)}>
                                        French
                                    </MenubarItem>
                                    <MenubarItem className={`${language === 2 ? 'bg-textbg text-texthover focus:bg-textbg focus:text-texthover' : 'hover:bg-itemhover/40 focus:bg-itemhover/40 dark:hover:bg-itemhover/10 dark:focus:bg-itemhover/10'} cursor-pointer h-[38px] px-4 py-2 font-normal rounded-none`} onClick={() => setLanguage(2)}>
                                        Arabic
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <ToogleTheme />
                            <MenubarMenu>
                                <MenubarTrigger className="bg-transparent hover:bg-itemhover/10 focus:bg-itemhover/40 dark:focus:bg-itemhover/10 data-[state=open]:bg-itemhover/40 dark:data-[state=open]:bg-itemhover/10 rounded-full cursor-pointer p-[7px]">
                                    <span className="shadow-none focus:ring-0 focus-visible:ring-0 border-none outline-none">
                                        <RiStarSmileLine className='w-6 h-6' />
                                    </span>
                                </MenubarTrigger>
                                <MenubarContent className="bg-white dark:bg-itembackground min-w-[380px] w-[380px] p-0 divide-y divide-slate-500/40">
                                    <div className='px-4 py-2 flex items-center justify-between'>
                                        <span className='text-lg'>
                                            Sortcuts
                                        </span>
                                        <TooltipProvider className="p-0">
                                            <Tooltip>
                                                <TooltipTrigger className='p-[7px] w-9 h-9 rounded-full hover:bg-itemhover/10 cursor-pointer flex items-center justify-center'>
                                                    <FaPlus />
                                                </TooltipTrigger>
                                                <TooltipContent className="bg-white text-black rounded-sm text-[13px] py-">
                                                    <p>Add Shortcut</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                    <div className='flex flex-col divide-y divide-slate-500/40'>
                                        {
                                            shortcut.map((item, index) => {
                                                return <div className='grid grid-cols-2 divide-x divide-slate-500/40' key={index}>
                                                    {
                                                        item.map(item => {
                                                            return <MenubarItem className="p-6 cursor-pointer flex flex-col items-center justify-center focus:bg-itemhover/40 dark:focus:bg-itemhover/10 space-y-2 rounded-none" key={item.id}>
                                                                <span className='p-3 rounded-full bg-itemhover/40 dark:bg-itemhover/10 text-2xl'>
                                                                    {item.icon}
                                                                </span>
                                                                <div className='flex flex-col items-center justify-center'>
                                                                    <span className='text-[15px]'>
                                                                        {item.title}
                                                                    </span>
                                                                    <span className='text-[13px]'>
                                                                        {item.description}
                                                                    </span>
                                                                </div>
                                                            </MenubarItem>
                                                        })
                                                    }
                                                </div>
                                            })
                                        }
                                    </div>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="bg-transparent hover:bg-itemhover/10 focus:bg-itemhover/40 dark:focus:bg-itemhover/10 data-[state=open]:bg-itemhover/40 dark:data-[state=open]:bg-itemhover/10 rounded-full cursor-pointer p-[7px]">
                                    <span className="shadow-none focus:ring-0 focus-visible:ring-0 border-none outline-none relative outline-offset-0">
                                        <BsBell className='w-6 h-6' />
                                        {
                                            notifications.filter(notification => notification.status === 'unread').length >= 1 && <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                                        }
                                    </span>
                                </MenubarTrigger>
                                <MenubarContent className="bg-white dark:bg-itembackground min-w-96 w-96 p-0 divide-y divide-bordercolor dark:divide-bordercolordark">
                                    <div className='px-4 py-2 flex items-center justify-between'>
                                        <span className='text-lg'>
                                            Notifications
                                        </span>
                                        <div className='flex items-center justify-end gap-2'>
                                            {
                                                notifications.filter(notification => notification.status === 'unread').length >= 1 && <Badge className="rounded-full focus:ring-0 focus:ring-offset-0 border-none text-sm text-texthover bg-textbg hover:text-texthover hover:bg-textbg font-medium">
                                                    {notifications.filter(notification => notification.status === 'unread').length} New
                                                </Badge>
                                            }
                                            {
                                                notifications.length >= 1 ? notificationStatus === 'read' ? <TooltipProvider className="p-0">
                                                    <Tooltip>
                                                        <TooltipTrigger className='p-[7px] w-9 h-9 rounded-full hover:bg-itemhover/10 cursor-pointer flex items-center justify-center text-lg' onClick={() => {
                                                            setNotificationStatus(pre => 'unread')
                                                            setNotifications(pre => pre.map(notification => notification.status === 'read' ? { ...notification, status: 'unread' } : notification))
                                                        }}>
                                                            <FaRegEnvelope />
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-white text-black rounded-sm text-[13px] py-1">
                                                            <p>Mark all as unread</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider> :
                                                    <TooltipProvider className="p-0">
                                                        <Tooltip>
                                                            <TooltipTrigger className='p-[7px] w-9 h-9 rounded-full hover:bg-itemhover/10 cursor-pointer flex items-center justify-center text-lg' onClick={() => {
                                                                setNotificationStatus(pre => 'read')
                                                                setNotifications(pre => pre.map(notification => notification.status === 'unread' ? { ...notification, status: 'read' } : notification))
                                                            }}>
                                                                <FaRegEnvelopeOpen />
                                                            </TooltipTrigger>
                                                            <TooltipContent className="bg-white text-black rounded-sm text-[13px] py-1">
                                                                <p>Mark all as read</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider> : null
                                            }
                                        </div>
                                    </div>
                                    <div className="max-h-[420px] overflow-y-scroll">
                                        <div className='flex flex-col divide-y divide-bordercolor dark:divide-bordercolordark'>
                                            {
                                                notifications.map((item, index) => {
                                                    return <div className="px-4 py-3 cursor-pointer flex items-start justify-between gap-3 focus:bg-itemhover/40 dark:focus:bg-itemhover/10 w-full hover:bg-itemhover/10" key={index}>
                                                        <Avatar>
                                                            <AvatarImage src={item.avatar} />
                                                            <AvatarFallback>CN</AvatarFallback>
                                                        </Avatar>
                                                        <div className='flex flex-col flex-auto gap-2'>
                                                            <span className=''>
                                                                {item.title}
                                                            </span>
                                                            <span className='text-sm dark:text-highlightedheading'>
                                                                {item.description}
                                                            </span>
                                                            <span className='text-sm text-highlightedtext dark:text-highlightedtextdark'>
                                                                {item.time}
                                                            </span>
                                                        </div>
                                                        <div className='flex flex-col items-center justify-center gap-2'>
                                                            {
                                                                item.status === "unread" && <div className='w-2 h-2 rounded-full bg-purple-600'></div>
                                                            }
                                                            <RxCross2 onClick={() => {
                                                                setNotifications(pre => pre.filter(notification => notification.id !== item.id))
                                                            }} />
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='p-4'>
                                        <Button className='w-full'>
                                            View All Notifications
                                        </Button>
                                    </div>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="p-0 cursor-pointer bg-transparent focus:bg-transparent data-[state=open]:bg-transparent rounded-full border-none">
                                    <div className="relative ml-2">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <span className='absolute bottom-0.5 right-0.5 w-[10px] h-[10px] bg-green-500 rounded-full border-2'></span>
                                    </div>
                                </MenubarTrigger>
                                <MenubarContent className="bg-white dark:bg-itembackground rou min-w-60 w-60 px-0 py-2 divide-y divide-bordercolor dark:divide-bordercolordark">
                                    <div className='flex items-center justify-start px-4 py-2 gap-2'>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className='flex-auto flex flex-col'>
                                            <span className='text-base'>
                                                John Doe
                                            </span>
                                            <span className='text-sm text-highlightedtext dark:text-highlightedtextdark'>
                                                admin@admin.com
                                            </span>
                                        </div>
                                    </div>
                                    <MenubarSeparator />
                                    <MenubarItem className="px-4 py-2 cursor-pointer flex items-center justify-start focus:bg-itemhover/40 dark:focus:bg-itemhover/10 divide-y-0 border-none space-x-3 rounded-none">
                                        <span className='text-[22px]'>
                                            <FiUser />
                                        </span>
                                        <span className='text-[15px]'>My Profile</span>
                                    </MenubarItem>
                                    <MenubarItem className="px-4 py-2 cursor-pointer flex items-center justify-start focus:bg-itemhover/40 dark:focus:bg-itemhover/10 divide-y-0 border-none space-x-3 rounded-none">
                                        <span className='text-[22px]'>
                                            <GoGear />
                                        </span>
                                        <span className='text-[15px]'>Settings</span>
                                    </MenubarItem>
                                    <MenubarItem className="px-4 py-2 cursor-pointer flex items-center justify-start focus:bg-itemhover/40 dark:focus:bg-itemhover/10 divide-y-0 border-none space-x-3 rounded-none">
                                        <span className='text-[22px]'>
                                            <AiOutlineDollar />
                                        </span>
                                        <span className='text-[15px]'>Pricing</span>
                                    </MenubarItem>
                                    <MenubarItem className="px-4 py-2 cursor-pointer flex items-center justify-start focus:bg-itemhover/40 dark:focus:bg-itemhover/10 divide-y-0 border-none space-x-3 rounded-none">
                                        <span className='text-[22px]'>
                                            <FaRegCircleQuestion />
                                        </span>
                                        <span className='text-[15px]'>FAQ</span>
                                    </MenubarItem>
                                    <div className='px-4 py-2'>
                                        <Button className="bg-red-500 hover:bg-red-300 transition-colors ease-in-out duration-150 w-full rounded-sm font-medium gap-2">
                                            Logout
                                            <MdOutlineLogout />
                                        </Button>
                                    </div>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar