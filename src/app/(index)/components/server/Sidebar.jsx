import { SheetDescription } from '@/components/ui/sheet'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { BiHomeSmile, FiCircle } from '@/data/icons/icons'
import { Data } from '@/data/data/data'
import Link from 'next/link'

const AccordionSidebarItem = ({ item }) => {
    return <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className='border-none'>
            <AccordionTrigger className="hover:no-underline py-2 rounded-r-full hover:bg-itemhover/50 dark:hover:bg-itemhover/10 focus:bg-itemhover/50 dark:focus:bg-itemhover/10 px-5 outline-none focus:ring-0 focus:ring-offset-0">
                <div className='flex justify-start gap-2 items-center'>
                    {
                        item.icon ? item.icon : <FiCircle className='w-3 h-3 ml-1' />
                    }
                    <span className='text-[15px]'>
                        {item.title}
                    </span>
                </div>
            </AccordionTrigger>
            <AccordionContent className="pb-0 mt-[6px]">
                <ul>
                    {
                        item.sub.map((item, index) => {
                            return item.sub ? <AccordionSidebarItem item={item} key={index} /> :
                                <li className='py-2 pl-5 flex items-center justify-start rounded-r-full hover:bg-itemhover/50 dark:hover:bg-itemhover/10 cursor-pointer' key={index}>
                                    <Link href={item.to} className='pl-2 flex items-center justify-start gap-4'>
                                        <FiCircle className='w-3 h-3' />
                                        <span className='text-[15px]'>
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

const SidebarItem = ({ item }) => {
    return <li className='py-2 flex items-center justify-start rounded-r-full hover:bg-itemhover/50 dark:hover:bg-itemhover/10 cursor-pointer'>
        <Link href={item.to} className='px-5 flex items-center justify-start gap-2'>
            {item.icon}
            <span className='text-[15px]'>
                {item.title}
            </span>
        </Link>
    </li>
}

const Sidebar = () => {
    return (
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
    )
}

export default Sidebar