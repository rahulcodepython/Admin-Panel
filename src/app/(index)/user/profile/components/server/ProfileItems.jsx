import React from 'react'
import { WorldIconToolTip, LockIconToolTip } from '../../../components/client/IconToolTip'
import FormAddModal from '../client/FormAddModal'
import FormEditModal from '../client/FormEditModel'

const ProfileItems = ({ item }) => {
    return (
        <div className='flex flex-col items-start justify-start gap-2 w-full'>
            <span className='font-semibold uppercase text-xl'>
                {item.title}
            </span>
            <FormAddModal status='create' path={item.title.split(" ").join("").toLowerCase()} title={item.title} />
            <div className='flex flex-col items-start justify-center gap-4 w-full font-semibold ml-2'>
                {
                    item.data.length > 0 ? item.data.map((sub, index) => {
                        return <div className='text-base flex flex-col items-start gap-1 w-full' key={index}>
                            <span className='text-lg flex items-center gap-4'>
                                {sub.title}
                                {
                                    sub.visibility === 'private' ? <LockIconToolTip /> : <WorldIconToolTip />
                                }
                                <FormEditModal status='create' path={item.title.split(" ").join("").toLowerCase()} item={item} />
                            </span>
                            <span className='text-xs'>
                                {sub.subtitle && sub.subtitle}
                            </span>
                            <span className='text-sm'>
                                {sub.description && sub.description}
                            </span>
                        </div>
                    }) : null
                }
            </div>
        </div>
    )
}

export default ProfileItems