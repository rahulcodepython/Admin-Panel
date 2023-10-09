"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const ProfileSidenavItem = ({ item }) => {
    const pathname = usePathname()

    return (
        <Link href={item.link} className={`w-full p-2 rounded-lg ${pathname === item.link ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} cursor-pointer transition-all ease-in-out duration-300`}>
            {item.title}
        </Link>
    )
}

export default ProfileSidenavItem