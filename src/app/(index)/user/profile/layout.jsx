import React from 'react'
import { Data } from '@/data/data/data'
import ProfileSidenavItem from './components/client/ProfileSidenavItem'

const ProfileLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-8 gap-4'>
            <div className='bg-gray-200 rounded-md p-4 flex flex-col items-start justify-start gap-4 col-span-2'>
                <span className='font-semibold uppercase text-lg'>
                    profile
                </span>
                <div className='flex flex-col items-start justify-start gap-1 w-full font-semibold'>
                    {
                        Data.user.navigation.map((item, index) => {
                            return <ProfileSidenavItem item={item} key={index} />
                        })
                    }
                </div>
            </div>
            <div className='bg-gray-200 rounded-md p-4 flex flex-col items-start justify-start gap-8 col-span-6 w-full'>
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout