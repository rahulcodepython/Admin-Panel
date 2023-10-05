"use client"
import React from 'react'
import { FiEdit, AiFillEye } from '@/data/icons/icons'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const EditViewButton = () => {
    const pathname = usePathname()

    return (
        pathname.includes('/user/profile/edit/') ? <Link href={'/user/profile/overview'} className='bg-white text-black rounded-md px-4 py-2 font-semibold flex items-center justify-center gap-2'>
            <AiFillEye />
            <span>
                View Profile
            </span>
        </Link> :
            <Link href={'/user/profile/edit/intro'} className='bg-white text-black rounded-md px-4 py-2 font-semibold flex items-center justify-center gap-2'>
                <FiEdit />
                <span>
                    Edit Profile
                </span>
            </Link>
    )
}

export default EditViewButton