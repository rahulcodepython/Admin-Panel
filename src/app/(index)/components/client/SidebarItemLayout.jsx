"use client"
import React from 'react'
import SidebarItem from '../server/SidebarItem'
import { BsChevronDown, BsChevronUp } from '@/data/icons/icons'
import { Collapse } from "react-collapse";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SidebarItemLayout = ({ item }) => {
    const [isOpened, setIsOpened] = React.useState(false)
    const pathname = usePathname()

    return (
        <>
            <Link href={item.link ? item.link : '#'} className={`flex items-center justify-between p-2 text-sm rounded-lg ${pathname === item.link ? 'bg-gray-100 text-gray-700' : 'text-white hover:bg-gray-100 hover:text-gray-700'} cursor-pointer`} onClick={() => setIsOpened(pre => !isOpened)}>
                <SidebarItem item={item} />
                {item.sub ? isOpened ? <BsChevronUp /> : <BsChevronDown /> : null}
            </Link>
            {
                item.sub ? <Collapse isOpened={isOpened}>
                    <div className='ml-3 flex flex-col gap-1'>
                        {
                            item.sub.map((item, index) => {
                                return item.sub ? <SidebarItemLayout item={item} key={index} /> :
                                    <Link href={item.link ? item.link : '#'} key={index} className={`flex items-center text-sm justify-between p-2 rounded-lg ${pathname === item.link ? 'bg-gray-100 text-gray-700' : 'text-white hover:bg-gray-100 hover:text-gray-700'} cursor-pointer`}>
                                        <SidebarItem item={item} />
                                    </Link>
                            })
                        }
                    </div>
                </Collapse> : null
            }
        </>
    )
}

export default SidebarItemLayout