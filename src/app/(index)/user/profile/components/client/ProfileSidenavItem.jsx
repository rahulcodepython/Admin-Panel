"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const ProfileSidenavItem = ({ item }) => {
    const pathname = usePathname()

    return (
        <Link href={item.link} className={`w-full p-2 rounded-lg ${pathname === item.link ? 'bg-gray-700 text-gray-100' : 'text-black hover:bg-gray-700 hover:text-gray-100'} cursor-pointer transition-all ease-in-out duration-300`}>
            {item.title}
        </Link>
    )
}

export default ProfileSidenavItem