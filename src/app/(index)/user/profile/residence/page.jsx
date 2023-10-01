import React from 'react'
import { Data } from '@/data/data/data'
import ProfileDetails from '../components/server/ProfileDetails'

const Page = () => {
    return Data.user.profile.residence.length > 0 ? Data.user.profile.residence.map((item, index) => {
        return <ProfileDetails item={item} key={index} />
    }) : <div className='font-semibold text-lg'>
        No data yet.
    </div>
}

export default Page