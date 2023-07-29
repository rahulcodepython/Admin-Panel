"use client"
import React from 'react'
import { FiChevronDown, FiChevronRight, RiCheckboxBlankCircleLine } from '@/data/icons'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SidebarDrawerItems = ({ value }) => {
    const pathname = usePathname()
    const [drawer, setDrawer] = React.useState(false)

    React.useEffect(() => {
        value.sub.map((items) => { items.href === pathname ? setDrawer(true) : null })
    }, [pathname])

    return (
        <li className='pr-2'>
            <div onClick={() => { setDrawer(!drawer) }} className={`flex items-center gap-2 text-sm md:text-base w-full p-3 text-white transition duration-75 rounded-tr-full rounded-br-full hover:bg-white hover:bg-opacity-5 cursor-pointer z-10
            ${value.sub.map((items, index) => { return items.href === pathname ? 'bg-white bg-opacity-5' : '' })}`}>
                {value.icon}
                <span className="flex-1 text-left font-semibold whitespace-nowrap">{value.title}</span>
                {
                    drawer ? <FiChevronDown className='font-semibold text-xl' /> : <FiChevronRight className='font-semibold text-xl' />
                }
            </div>

            <ul className={`${drawer ? '' : 'hidden'} py-2 space-y-2`}>
                {
                    value.sub.map((items, index) => {
                        return <li key={index} className='relative cursor-pointer hover:bg-white hover:bg-opacity-5 rounded-tr-full rounded-br-full'>
                            <Link href="/" className={`flex items-center gap-2 text-sm md:text-base font-semibold w-full p-2 transition duration-75 pl-7 text-white rounded-tr-full rounded-br-full ${items.href === pathname ? 'bg-gradient-to-r from-purple-400 via-purple-500 to-purple-500' : ''}`}>
                                <RiCheckboxBlankCircleLine className='font-semibold text-sm' />
                                {items.title}
                            </Link>
                        </li>
                    })}
            </ul>
        </li>
    )
}

export default SidebarDrawerItems