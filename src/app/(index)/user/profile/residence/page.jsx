import React from 'react'
import { Data } from '@/data/data/data'
import ProfileItems from '../components/server/ProfileItems'

const Page = () => {
    return Data.user.profile.residence.length > 0 ? Data.user.profile.residence.map((item, index) => {
        return <ProfileItems item={item} key={index} />
    }) : <div className='font-semibold text-lg'>
        No data yet.
    </div>
}

export default Page