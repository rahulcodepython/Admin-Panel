"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const SidebarItems = ({ value }) => {
    const pathname = usePathname()

    return (
        <li className='pr-2'>
            <div className={`flex items-center gap-2 text-sm md:text-base w-full p-3 text-white transition duration-75 rounded-tr-full rounded-br-full hover:bg-white hover:bg-opacity-5 cursor-pointer ${value.href === pathname ? 'bg-white bg-opacity-5' : ''}`}>
                {value.icon}
                <span className="flex-1 text-left whitespace-nowrap font-semibold">{value.title}</span>
            </div>
        </li>
    )
}

export default SidebarItems