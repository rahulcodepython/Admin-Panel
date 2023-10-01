import Link from 'next/link'
import React from 'react'

const ProfileLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-8 gap-4'>
            <div className='bg-slate-200 rounded-md p-4 flex flex-col items-start justify-center gap-4 col-span-2'>
                <span className='font-semibold uppercase text-lg'>
                    profile
                </span>
                <div className='flex flex-col items-start justify-center gap-1 w-full font-semibold'>
                    <Link href={'/user/profile/overview'} className="w-full p-2 text-black rounded-lg hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-300">
                        Overview
                    </Link>
                    <Link href={'/user/profile/experience'} className="w-full p-2 text-black rounded-lg hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-300">
                        Work & Education
                    </Link>
                    <Link href={'/user/profile/overview'} className="w-full p-2 text-black rounded-lg hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-300">
                        Place Lived
                    </Link>
                    <Link href={'/user/profile/overview'} className="w-full p-2 text-black rounded-lg hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-300">
                        Contact & Basic Info
                    </Link>
                    <Link href={'/user/profile/overview'} className="w-full p-2 text-black rounded-lg hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-300">
                        Family & Relationship
                    </Link>
                    <Link href={'/user/profile/overview'} className="w-full p-2 text-black rounded-lg hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-300">
                        Details & About You
                    </Link>
                    <Link href={'/user/profile/overview'} className="w-full p-2 text-black rounded-lg hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-300">
                        Life Eventes
                    </Link>
                </div>
            </div>
            <div className='bg-slate-200 rounded-md p-4 flex flex-col items-start justify-center gap-4 col-span-6'>
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout