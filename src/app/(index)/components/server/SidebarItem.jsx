import React from 'react'
import Link from 'next/link'

const SidebarItem = ({ item }) => {
    return (
        <Link href={item.link ? item.link : '#'} className="flex items-center">
            {item.icon}
            <span className='ml-3'>
                {item.title}
            </span>
        </Link>
    )
}

export default SidebarItem