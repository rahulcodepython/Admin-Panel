"use client"
import React from 'react'
import Link from 'next/link'
import { FiBell, BiCategory, AiOutlinePlusCircle, HiOutlineMenuAlt1 } from '@/data/icons'
import Mode from '@/app/(index)/components/client/mode'
import data from '@/data/data'
import Image from 'next/image'

const Navbar = ({ showSidebar, setShowSidebar }) => {
    const [profileDrawer, setProfileDrawer] = React.useState(false)
    const [notificationDrawer, setNotificationDrawer] = React.useState(false)
    const [shortcuts, setShortcuts] = React.useState(false)

    return (
        <nav className="fixed top-0 z-30 w-full bg-primary p-3 md:px-5 lg:px-10 flex items-center justify-between">
            <div className="flex items-center justify-center gap-5">
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/favicon.svg" width={24} height={24} className="h-6" alt="Admin Panel Logo" />
                    <span className="text-lg font-semibold sm:text-xl text-white">
                        Rahul Das
                    </span>
                </Link>
                <HiOutlineMenuAlt1 className='text-white font-semibold text-2xl cursor-pointer' onClick={() => { setShowSidebar(!showSidebar) }} />
            </div>

            <div className="flex items-center gap-5">
                <Mode />
                <BiCategory className='text-white text-xl font-semibold cursor-pointer' onClick={() => {
                    setShortcuts(!shortcuts)
                    setNotificationDrawer(false)
                    setProfileDrawer(false)
                }} />
                <FiBell className='text-white text-xl font-semibold cursor-pointer' onClick={() => {
                    setNotificationDrawer(!notificationDrawer)
                    setShortcuts(false)
                    setProfileDrawer(false)
                }} />
                <button className="relative" type="button" onClick={() => {
                    setProfileDrawer(!profileDrawer)
                    setShortcuts(false)
                    setNotificationDrawer(false)
                }}>
                    <Image width={40} height={40} className="w-10 h-10 rounded-full" src="/user.png" alt="..." />
                    <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-black rounded-full"></span>
                </button>
            </div>

            <div className={`z-20 ${shortcuts ? '' : 'hidden'} w-80 h-80 overflow-y-scroll absolute right-3 top-12 my-4 list-none rounded shadow text-white bg-item-primary`}>
                <ul className="flex flex-col">
                    <li className='flex items-center justify-between p-3 text-base md:text-lg font-semibold border-b border-slate-500 last:border-none'>
                        Shortcuts
                        <AiOutlinePlusCircle className='text-lg' />
                    </li>
                    <div className='grid grid-cols-2'>
                        {
                            data.navbar.shortcuts.map((items, index) => {
                                return <li className='first:border-t-0 last:border-b-0 even:border-b odd:border-b odd:border-r border-slate-400 p-5 text-sm text-center flex flex-col items-center gap-2 group/shortcuts' key={index}>
                                    <div className='text-center text-2xl bg-slate-400 group-hover/shortcuts:bg-purple-400 p-3 rounded-full w-12 h-12'>
                                        {items.icon}
                                    </div>
                                    <span className='group-hover/shortcuts:text-purple-400 text-sm'>
                                        {items.title}
                                    </span>
                                </li>
                            })}
                    </div>
                </ul>
            </div>

            <div className={`z-20 ${notificationDrawer ? '' : 'hidden'} w-96 h-80 overflow-y-scroll absolute right-3 top-12 my-4 list-none rounded shadow text-white bg-item-primary`}>
                <ul className="flex flex-col">
                    <li className='flex items-center justify-between p-3 text-base font-semibold border-b border-slate-500 last:border-none'>
                        Notifications
                        <span className='text-xs bg-purple-400 rounded-xl py-1 px-2'>({data.navbar.notification.length}) New</span>
                    </li>
                    {
                        data.navbar.notification.map((item, index) => {
                            return <li className='group/notification flex items-center justify-between p-3 text-xs border-b border-slate-500 last:border-none' key={index}>
                                <div className='flex gap-3 items-center justify-start'>
                                    <Image width={36} height={36} src={item.image} alt='notification icon' className='w-9 h-9 rounded-full' />
                                    <div className='flex flex-col'>
                                        <div className='font-semibold text-base group-hover/notification:text-purple-400'>
                                            {item.heading}
                                        </div>
                                        <div className='text-sm'>
                                            {item.body}
                                        </div>
                                    </div>
                                </div>
                                <div className='text-sm'>
                                    {item.date}
                                </div>
                            </li>
                        })}
                </ul>
            </div>

            <div className={`z-20 ${profileDrawer ? '' : 'hidden'} w-56 absolute right-3 top-12 my-4 list-none rounded-sm shadow text-white bg-item-primary divide-y divide-slate-500`}>
                <div className="px-4 py-3 flex flex-col items-left gap-1 ml-2">
                    <p className="text-lg font-semibold">
                        Rahul Das
                    </p>
                    <p className="text-xs">
                        rahulcodepython@gmail.com
                    </p>
                    <p className="text-md">
                        Admin
                    </p>
                </div>
                <ul className="py-1">
                    {
                        data.navbar.profilePlate.map((items, index) => {
                            return <li key={index}>
                                <Link href="#" className="px-4 py-2 text-lg hover:bg-white hover:bg-opacity-5 flex items-center gap-2">
                                    {items.icon}
                                    {items.name}
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar