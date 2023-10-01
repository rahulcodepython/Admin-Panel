import Image from 'next/image'
import React from 'react'
import { BiSolidLock, BsLink, MdVerified, FiEdit } from '@/data/icons/icons'

const UserLayout = ({ children }) => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col'>
                <Image src={'/profile-banner.png'} width={2250} height={500} className='rounded-t-lg' alt='...' />
                <div className='bg-black text-white rounded-b-lg relative px-4 py-5'>
                    <Image src={'/user.png'} width={120} height={120} className='absolute top-[1.85rem] left-4 rounded-lg' alt='...' />
                    <div className='flex flex-col items-start justify-start gap-2 mx-40'>
                        <div className='flex flex-col items-start justify-center'>
                            <div className='font-extrabold text-xl'>
                                <span>
                                    Rahul Das
                                </span>
                                <sup className='ml-1'>
                                    <MdVerified className='inline-block text-sm' />
                                </sup>
                            </div>
                            <span>
                                rahulcodepython
                            </span>
                        </div>
                        <div className='text-sm'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, quo.
                        </div>
                        <div className='flex font-semibold items-center justify-start gap-4 text-sm'>
                            <span>
                                #webdeveloper
                            </span>
                            <span>
                                #programmer
                            </span>
                            <span>
                                #python
                            </span>
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <div className='flex items-center justify-center gap-1 cursor-pointer'>
                                <span>93</span>
                                <span>Posts</span>
                            </div>
                            <div className='flex items-center justify-center gap-1 cursor-pointer'>
                                <span>100</span>
                                <span>Followers</span>
                            </div>
                            <div className='flex items-center justify-center gap-1 cursor-pointer'>
                                <span>100</span>
                                <span>Followings</span>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-4 right-4 flex items-center justify-end gap-4'>
                        <button className='bg-white text-black rounded-md px-4 py-2 font-semibold flex items-center justify-center gap-2'>
                            <FiEdit />
                            <span>
                                Edit
                            </span>
                        </button>
                        <button className='bg-white text-black rounded-md px-4 py-2 font-semibold flex items-center justify-center gap-2'>
                            <BsLink />
                            <span>
                                Connected
                            </span>
                        </button>
                        <button className='bg-white text-black rounded-md px-4 py-2 font-semibold flex items-center justify-center gap-2'>
                            <BiSolidLock />
                            <span>
                                Locked
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-start items-center gap-4 font-semibold uppercase'>
                <div className='px-8 py-3 bg-black text-white rounded-md cursor-pointer'>profile</div>
                <div className='px-8 py-3 bg-black text-white rounded-md cursor-pointer'>friends</div>
                <div className='px-8 py-3 bg-black text-white rounded-md cursor-pointer'>videos</div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default UserLayout