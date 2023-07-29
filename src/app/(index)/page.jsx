import Image from 'next/image'
import React from 'react'
import { BiDotsVerticalRounded, PiChartLineUpBold, FiUser, MdDevices, BiDollar } from '@/data/icons'

const DashboardPage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
            <div className='w-full flex flex-col items-start justify-center gap-3 h-full md:col-span-4 text-white bg-item-primary rounded-lg p-5'>
                <div className='flex flex-col gap-1'>
                    <span className='text-xl font-semibold'>
                        Congratulations Rahul Das
                    </span>
                    <span className='text-md font-semibold text-slate-500'>
                        best Seller of the month
                    </span>
                </div>
                <div className='font-semibold text-2xl text-purple-600'>
                    $42.3k
                </div>
                <button className='bg-purple-600 p-2 uppercase font-bold text-xs w-28 rounded-md mt-2'>
                    view sales
                </button>
            </div>
            <div className='w-full flex flex-col justify-between gap-3 bg-item-primary text-white rounded-lg p-5 md:col-span-8'>
                <div className='flex items-center justify-between w-full gap-1'>
                    <div className='flex flex-col gap-1'>
                        <span className='text-xl font-semibold'>
                            Transactions
                        </span>
                        <span className='text-md font-semibold text-slate-500'>
                            Total 48.5% growth 😎 this month
                        </span>
                    </div>
                    <BiDotsVerticalRounded className='text-2xl' />
                </div>
                <div className='flex justify-between gap-4 w-full'>
                    <div className='flex gap-2'>
                        <div className='text-white bg-purple-600 h-full w-[3.25rem] rounded-md flex items-center justify-center'>
                            <PiChartLineUpBold className='text-2xl' />
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <span className='text-slate-500 text-md'>
                                Sales
                            </span>
                            <span className='text-xl font-semibold'>
                                7.9K
                            </span>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='text-white bg-lime-500 h-full w-[3.25rem] rounded-md flex items-center justify-center'>
                            <FiUser className='text-2xl' />
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <span className='text-slate-500 text-md'>
                                Sales
                            </span>
                            <span className='text-xl font-semibold'>
                                7.9K
                            </span>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='text-white bg-yellow-500 h-full w-[3.25rem] rounded-md flex items-center justify-center'>
                            <MdDevices className='text-2xl' />
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <span className='text-slate-500 text-md'>
                                Sales
                            </span>
                            <span className='text-xl font-semibold'>
                                7.9K
                            </span>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='text-white bg-sky-400 h-full w-[3.25rem] rounded-md flex items-center justify-center'>
                            <BiDollar className='text-2xl' />
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <span className='text-slate-500 text-md'>
                                Sales
                            </span>
                            <span className='text-xl font-semibold'>
                                7.9K
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-green-500 md:col-span-6 xl:col-span-4'>
                hi
            </div>
            <div className='w-full bg-slate-500 md:col-span-6 xl:col-span-4'>
                hi
            </div>
            <div className='w-full bg-pink-500 md:col-span-6 xl:col-span-4 grid grid-cols-2 gap-5'>
                <div className='bg-red-500'>
                    hi
                </div>
                <div className='bg-blue-500'>
                    hi
                </div>
                <div className='bg-yellow-500'>
                    hi
                </div>
                <div className='bg-green-500'>
                    hi
                </div>
            </div>
            <div className='w-full bg-red-500 md:col-span-6 xl:col-span-4'>
                This is the dashboard page. You can see your recent activities here!
            </div>
            <div className='w-full bg-blue-500 md:col-span-9 xl:col-span-8'>
                hi
            </div>
            <div className='w-full bg-green-500 md:col-span-3 xl:col-span-4'>
                This is the dashboard page. You can see your recent activities here!
            </div>
            <div className='w-full bg-yellow-500 md:col-span-12 xl:col-span-8'>
                hi
            </div>
        </div>
    )
}

export default DashboardPage