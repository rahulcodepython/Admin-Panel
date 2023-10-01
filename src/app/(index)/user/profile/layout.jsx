import Link from 'next/link'
import React from 'react'
import { Data } from '@/data/data/data'

const ProfileLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-8 gap-4'>
            <div className='bg-slate-200 rounded-md p-4 flex flex-col items-start justify-start gap-4 col-span-2'>
                <span className='font-semibold uppercase text-lg'>
                    profile
                </span>
                <div className='flex flex-col items-start justify-start gap-1 w-full font-semibold'>
                    {
                        Data.user.navigation.map((item, index) => {
                            return <Link href={item.link} key={index} className="w-full p-2 text-black rounded-lg hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-300">
                                {item.title}
                            </Link>
                        })
                    }
                </div>
            </div>
            <div className='bg-slate-200 rounded-md p-4 flex flex-col items-start justify-start gap-8 col-span-6 w-full'>
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout