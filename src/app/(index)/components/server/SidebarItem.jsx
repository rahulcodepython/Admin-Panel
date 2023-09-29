import React from 'react'
import Link from 'next/link'

const SidebarItem = ({ item }) => {
    return (
        <Link href={"#"} className="flex items-center">
            {item.icon}
            <span className='ml-3'>
                {item.title}
            </span>
        </Link>
    )
}

export default SidebarItem