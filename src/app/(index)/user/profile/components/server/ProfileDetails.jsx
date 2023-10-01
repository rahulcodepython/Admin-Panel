import React from 'react'
import { WorldIconToolTip, LockIconToolTip } from '../../../components/client/IconToolTip'

const ProfileDetails = ({ item }) => {
    return (
        <div className='flex flex-col items-start justify-start gap-2 w-full'>
            <span className='font-semibold uppercase text-xl'>
                {item.title}
            </span>
            <div className='flex flex-col items-start justify-center gap-4 w-full font-semibold ml-2'>
                {
                    item.data.length > 0 ? item.data.map((item, index) => {
                        return <div className='text-base flex flex-col items-start gap-1 w-full' key={index}>
                            <span className='text-lg flex items-center gap-4'>
                                {item.title}
                                {
                                    item.visibility === 'private' ? <LockIconToolTip /> : <WorldIconToolTip />
                                }
                            </span>
                            <span className='text-xs'>
                                {item.subtitle && item.subtitle}
                            </span>
                            <span className='text-sm'>
                                {item.description && item.description}
                            </span>
                        </div>
                    }) : <div className='font-semibold text-lg'>
                        No data yet.
                    </div>
                }
            </div>
        </div>
    )
}

export default ProfileDetails