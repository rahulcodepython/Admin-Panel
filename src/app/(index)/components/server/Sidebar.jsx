"use client"
import { SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { BiHomeSmile, FiCircle, RxCross2 } from '@/data/icons/icons'
import { Data } from '@/data/data/data'
import Link from 'next/link'
import Image from 'next/image'

const AccordionSidebarItem = ({ item, toggleSidebar }) => {
    return <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className='border-none'>
            <AccordionTrigger className="hover:no-underline py-2 rounded-r-full hover:bg-itemhover/50 dark:hover:bg-itemhover/10 focus:bg-itemhover/50 dark:focus:bg-itemhover/10 px-5 outline-none focus:ring-0 focus:ring-offset-0">
                <div className='flex gap-2 items-center'>
                    {
                        item.icon ? item.icon : <FiCircle className='w-3 h-3 ml-1' />
                    }
                    <span className={`text-[15px] ${toggleSidebar ? 'hidden group-hover:inline' : 'inline'}`}>
                        {item.title}
                    </span>
                </div>
            </AccordionTrigger>
            <AccordionContent className="pb-0 mt-[6px]">
                <ul>
                    {
                        item.sub.map((item, index) => {
                            return item.sub ? <AccordionSidebarItem item={item} key={index} toggleSidebar={toggleSidebar} /> :
                                <li className='py-2 pl-5 flex items-center justify-start rounded-r-full hover:bg-itemhover/50 dark:hover:bg-itemhover/10 cursor-pointer' key={index}>
                                    <Link href={item.to} className='pl-2 flex items-center justify-start gap-4'>
                                        <FiCircle className='w-3 h-3' />
                                        <span className={`text-[15px] ${toggleSidebar ? 'hidden group-hover:inline' : 'inline'}`}>
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                        })
                    }
                </ul>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
}

const SidebarItem = ({ item, toggleSidebar }) => {
    return <li className='py-2 flex items-center rounded-r-full hover:bg-itemhover/50 dark:hover:bg-itemhover/10 cursor-pointer'>
        <Link href={item.to} className='px-5 flex items-center gap-2'>
            {item.icon}
            <span className={`text-[15px] ${toggleSidebar ? 'hidden group-hover:inline' : 'inline'}`}>
                {item.title}
            </span>
        </Link>
    </li>
}

export const SidebarSmallDevice = () => {
    return <SheetContent side={'left'} className="w-[260px] p-0 bg-white dark:bg-itembackground">
        <SheetHeader className="flex items-center justify-between flex-row space-y-0 p-5 shadow-md">
            <SheetTitle className="uppercase text-xl flex items-center justify-center">
                <Image src={'/logo.png'} width={27} height={27} alt="logo" />
                <span className="ml-[10px]">meterio</span>
            </SheetTitle>
            <SheetClose className="flex items-center justify-center rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:pointer-events-none">
                <RxCross2 className="w-4 h-4" />
            </SheetClose>
        </SheetHeader>
        <SheetDescription className="text-sm text-gray-500 dark:text-gray-400 overflow-y-scroll h-screen pr-4">
            <ul className='space-y-7'>
                {
                    Data.sidebar.map((item, index) => {
                        return <div key={index} className='space-y-[6px]'>
                            <div className={`flex items-center justify-start gap-2 ${item.heading ? '' : 'hidden'} py-[7px] text-xs`}>
                                <span className='w-4 border-bordercolor dark:border-bordercolordark'>
                                    <hr />
                                </span>
                                <span>
                                    {item.heading}
                                </span>
                                <span className='flex-auto border-bordercolor dark:border-bordercolordark'>
                                    <hr />
                                </span>
                            </div>
                            {
                                item.navItem.map((item, index) => {
                                    return item.sub ? <AccordionSidebarItem item={item} key={index} /> :
                                        <SidebarItem item={item} key={index} />
                                })
                            }
                        </div>
                    })
                }
            </ul>
        </SheetDescription>
    </SheetContent >
}

export const SidebarDesktop = () => {
    const [toggleSidebar, setToggleSidebar] = React.useState(false)

    return <aside className={`${toggleSidebar ? 'max-w-[68px]' : 'max-w-[260px]'} w-full h-screen sticky transition-all duration-500 ease-in-out z-30`}>
        <div className={`group flex flex-col w-full hover:w-[260px] transition-all duration-500 ease-in-out h-screen bg-green-900`}>
            <div className='flex items-center justify-between flex-row space-y-0 shadow-md p-5'>
                <div className="uppercase text-xl flex items-center flex-auto">
                    <Image src={'/logo.png'} width={27} height={27} alt="logo" className='' />
                    <span className={`ml-[10px] ${!toggleSidebar ? 'inline' : 'invisible group-hover:visible'}`}>
                        meterio{`${toggleSidebar}`}
                    </span>
                </div>
                <div className={`${!toggleSidebar ? 'inline' : 'hidden group-hover:flex'} items-center justify-center rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:pointer-events-none`} onClick={() => setToggleSidebar(pre => !pre)}>
                    <RxCross2 className="w-4 h-4" />
                </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 overflow-y-scroll h-screen pr-4">
                <ul className='space-y-7'>
                    {
                        Data.sidebar.map((item, index) => {
                            return <div key={index} className='space-y-[6px]'>
                                <div className={`${item.heading ? !toggleSidebar ? 'flex' : 'hidden group-hover:flex' : 'hidden'} items-center justify-start gap-2 py-[7px] text-xs`}>
                                    <span>
                                        {item.heading}
                                    </span>
                                </div>
                                <div className={`py-[7px] inline group-hover:hidden ${item.heading ? toggleSidebar ? 'inline' : 'hidden group-hover:flex' : 'hidden'}`}>
                                    <hr />
                                </div>
                                {
                                    item.navItem.map((item, index) => {
                                        return item.sub ? <AccordionSidebarItem item={item} key={index} toggleSidebar={toggleSidebar} /> :
                                            <SidebarItem item={item} key={index} toggleSidebar={toggleSidebar} />
                                    })
                                }
                            </div>
                        })
                    }
                </ul>
            </div>
        </div>
    </aside>
}