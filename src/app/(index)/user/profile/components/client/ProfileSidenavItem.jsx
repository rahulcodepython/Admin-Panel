"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const ProfileSidenavItem = ({ item }) => {
    const pathname = usePathname()

    return (
        <Link href={pathname.includes('/user/profile/edit/') ? item.link[1] : item.link[0]} className={`w-full p-2 rounded-lg ${pathname.includes(item.link[0]) || pathname.includes(item.link[1]) ? 'bg-gray-700 text-gray-100' : 'text-black hover:bg-gray-700 hover:text-gray-100'} cursor-pointer transition-all ease-in-out duration-300`}>
            {(typeof (item.title) === 'object') ? pathname.includes('/user/profile/edit/') ? item.title[1] : item.title[0] : item.title}
        </Link>
    )
}

export default ProfileSidenavItem