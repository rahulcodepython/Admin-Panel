import React from 'react'
import { PiChartLineUpBold, FiUser, MdDevices, BiDollar, BiSolidUpArrow, MdOutlineBarChart, RiProjectorLine, VscGraphLine, BiTimeFive, IoIosArrowUp, IoIosArrowDown } from '@/data/icons'
import Image from 'next/image'
import DashboardDataTable from '@/app/(index)/components/server/dashboardDataTable'

const DashboardPage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
            <div className='w-full flex flex-col items-start justify-evenly gap-3 h-full text-white bg-item-primary rounded-lg p-5 col-span-12 md:col-span-4'>
                <div className='flex flex-col gap-1'>
                    <span className='text-xl font-semibold'>
                        Congratulations Rahul Das
                    </span>
                    <span className='text-sm font-semibold text-slate-500'>
                        best Seller of the month
                    </span>
                </div>
                <div className='font-semibold text-2xl text-purple-600'>
                    $42.3k
                </div>
                <button className='bg-purple-600 p-2 uppercase font-bold text-xs w-full rounded-md mt-2'>
                    view sales
                </button>
            </div>

            <div className='w-full flex flex-col justify-evenly gap-3 bg-item-primary text-white rounded-lg p-5 col-span-12 md:col-span-8'>
                <div className='flex items-center justify-between w-full gap-1'>
                    <div className='flex flex-col gap-1'>
                        <span className='text-xl font-semibold'>
                            Transactions
                        </span>
                        <span className='text-sm font-semibold text-slate-500'>
                            Total 48.5% growth 😎 this month
                        </span>
                    </div>
                </div>
                <div className='flex justify-around gap-4 w-full'>
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

            <div className='w-full h-full flex flex-col items-start justify-evenly gap-5 p-5 rounded-md text-white bg-item-primary  col-span-12 md:col-span-6 xl:col-span-4'>
                <span className='text-xl font-semibold'>
                    Weekly Overview
                </span>
                <div className='w-full h-full flex items-end justify-around'>
                    <div className='flex flex-col-reverse items-center justify-between h-full font-semibold text-sm'>
                        <span>0k</span>
                        <span>30k</span>
                        <span>60k</span>
                        <span>90k</span>
                    </div>
                    <div className='h-[37%] w-2 bg-gray-600 rounded-full'></div>
                    <div className='h-[57%] w-2 bg-gray-600 rounded-full'></div>
                    <div className='h-[45%] w-2 bg-gray-600 rounded-full'></div>
                    <div className='h-[75%] w-2 bg-purple-600 rounded-full'></div>
                    <div className='h-[57%] w-2 bg-gray-600 rounded-full'></div>
                    <div className='h-[40%] w-2 bg-gray-600 rounded-full'></div>
                    <div className='h-[65%] w-2 bg-gray-600 rounded-full'></div>
                </div>
                <div className='flex items-center gap-4'>
                    <span className='text-xl md:text-2xl font-semibold'>
                        45%
                    </span>
                    <span className='text-sm text-slate-500'>
                        Your sales performance is 45% 😎 better compared to last month
                    </span>
                </div>
                <button className='bg-purple-600 p-2 uppercase font-bold text-xs w-full rounded-md mt-2'>
                    Details
                </button>
            </div>

            <div className='w-full h-full flex flex-col justify-evenly gap-8 items-start p-5 rounded-md text-white bg-item-primary  col-span-12 md:col-span-6 xl:col-span-4'>
                <span className='text-xl font-semibold'>
                    Total Earning
                </span>
                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex gap-4 items-center'>
                        <span className='text-4xl font-bold'>$24,895</span>
                        <div className='flex items-center gap-1  text-green-500'>
                            <BiSolidUpArrow />
                            <span className='font-semibold'>
                                10%
                            </span>
                        </div>
                    </div>
                    <div className='text-sm text-slate-500 font-semibold'>
                        Compared to $84,325 last year
                    </div>
                </div>
                <div className='flex flex-col items-start gap-4 w-full'>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-3'>
                            <div className='p-2 bg-white bg-opacity-5 rounded-md'>
                                <Image src={'/logo-zipcar.png'} width={22} height={20} alt='...' />
                            </div>
                            <div className='flex flex-col items-start gap-1'>
                                <span className='text-white font-bold'>
                                    Zipcar
                                </span>
                                <span className='text-slate-500 text-sm font-semibold'>
                                    Vuejs, React & HTML
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='font-bold'>
                                $24,895.65
                            </span>
                            <div className='bg-purple-800 w-full h-1 rounded-full'>
                                <div className='bg-purple-500 w-[60%] h-1 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-3'>
                            <div className='p-2 bg-white bg-opacity-5 rounded-md'>
                                <Image src={'/logo-bitbank.png'} width={22} height={20} alt='...' />
                            </div>
                            <div className='flex flex-col items-start gap-1'>
                                <span className='text-white font-bold'>
                                    Bitbank
                                </span>
                                <span className='text-slate-500 text-sm font-semibold'>
                                    Sketch, Figma & XD
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='font-bold'>
                                $8,650.20
                            </span>
                            <div className='bg-sky-800 w-full h-1 rounded-full'>
                                <div className='bg-sky-500 w-[60%] h-1 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-3'>
                            <div className='p-2 bg-white bg-opacity-5 rounded-md'>
                                <Image src={'/logo-aviato.png'} width={22} height={20} alt='...' />
                            </div>
                            <div className='flex flex-col items-start gap-1'>
                                <span className='text-white font-bold'>
                                    Aviato
                                </span>
                                <span className='text-slate-500 text-sm font-semibold'>
                                    HTML & Angular
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='font-bold'>
                                $1,245.80
                            </span>
                            <div className='bg-gray-700 w-full h-1 rounded-full'>
                                <div className='bg-gray-500 w-[60%] h-1 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-primary grid grid-cols-2 gap-5 col-span-12 xl:col-span-4'>
                <div className='bg-item-primary p-5 rounded-md text-white flex flex-col items-start justify-evenly gap-2'>
                    <div className='rounded-full p-2 text-white bg-purple-600 text-center mb-2'>
                        <MdOutlineBarChart className='text-2xl' />
                    </div>
                    <div className='text-md font-bold'>
                        Total Profit
                    </div>
                    <div className='flex items-start gap-2'>
                        <span className='font-bold text-2xl'>
                            $25.6k
                        </span>
                        <span className='text-xs text-green-500'>
                            +42%
                        </span>
                    </div>
                    <div className='text-slate-500 text-sm font-semibold'>
                        Weekly Profit
                    </div>
                </div>
                <div className='bg-item-primary p-5 rounded-md text-white flex flex-col items-start justify-evenly gap-2'>
                    <div className='rounded-full p-2 text-white bg-purple-600 text-center mb-2'>
                        <RiProjectorLine className='text-2xl' />
                    </div>
                    <div className='text-md font-bold'>
                        New Project
                    </div>
                    <div className='flex items-start gap-2'>
                        <span className='font-bold text-2xl'>
                            862
                        </span>
                        <span className='text-xs text-red-500'>
                            -18%
                        </span>
                    </div>
                    <div className='text-slate-500 text-sm font-semibold'>
                        Yearly Project
                    </div>
                </div>
                <div className='bg-item-primary p-5 rounded-md text-white flex flex-col items-start justify-evenly gap-2'>
                    <div className='rounded-full p-2 text-white bg-purple-600 text-center mb-2'>
                        <VscGraphLine className='text-2xl' />
                    </div>
                    <div className='text-md font-bold'>
                        Total Profit
                    </div>
                    <div className='flex items-start gap-2'>
                        <span className='font-bold text-2xl'>
                            $86.4k
                        </span>
                        <span className='text-xs text-green-500'>
                            +42%
                        </span>
                    </div>
                    <div className='text-slate-500 text-sm font-semibold'>
                        Total Profit
                    </div>
                </div>
                <div className='bg-item-primary p-5 rounded-md text-white flex flex-col items-start justify-evenly gap-2'>
                    <div className='rounded-full p-2 text-white bg-purple-600 text-center mb-2'>
                        <BiTimeFive className='text-3xl' />
                    </div>
                    <div className='text-md font-bold'>
                        Sessions
                    </div>
                    <div className='flex items-start gap-2'>
                        <span className='font-bold text-2xl'>
                            2,856
                        </span>
                        <span className='text-xs text-green-500'>
                            +42%
                        </span>
                    </div>
                    <div className='text-slate-500 text-sm font-semibold'>
                        Total Time
                    </div>
                </div>
            </div>

            <div className='w-full bg-item-primary rounded-md grid grid-cols-2 divide-x py-5 divide-slate-500 col-span-12 lg:col-span-8'>
                <div className='px-5 flex flex-col items-start gap-8 md:gap-4 w-full'>
                    <div className='text-white text-xl font-semibold'>Deposit</div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/gumroad.png'} width={28} height={28} alt='...' />
                            <div className='flex flex-col items-start text-white'>
                                <span className='text-base font-semibold'>Gumroad Account</span>
                                <span className='text-slate-500 text-sm'>Sell UI Kit</span>
                            </div>
                        </div>
                        <div className='text-green-600 font-semibold text-base'>
                            +$4,650
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/mastercard-label.png'} width={28} height={28} alt='...' />
                            <div className='flex flex-col items-start text-white'>
                                <span className='text-base font-semibold'>Mastercard</span>
                                <span className='text-slate-500 text-sm'>Wallet deposit</span>
                            </div>
                        </div>
                        <div className='text-green-600 font-semibold text-base'>
                            +$92,705
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/stripe.png'} width={23} height={23} alt='...' />
                            <div className='flex flex-col items-start text-white'>
                                <span className='text-base font-semibold'>Stripe Account</span>
                                <span className='text-slate-500 text-sm'>iOS Application</span>
                            </div>
                        </div>
                        <div className='text-green-600 font-semibold text-base'>
                            +$957
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/american-bank.png'} width={28} height={28} alt='...' />
                            <div className='flex flex-col items-start text-white'>
                                <span className='text-base font-semibold'>American Bank Account</span>
                                <span className='text-slate-500 text-sm'>Bank Transfer</span>
                            </div>
                        </div>
                        <div className='text-green-600 font-semibold text-base'>
                            +$6,837
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/citi-bank.png'} width={28} height={28} alt='...' />
                            <div className='flex flex-col items-start text-white'>
                                <span className='text-base font-semibold'>City Bank Account</span>
                                <span className='text-slate-500 text-sm'>Wallet deposit</span>
                            </div>
                        </div>
                        <div className='text-green-600 font-semibold text-base'>
                            +$446
                        </div>
                    </div>
                </div>
                <div className='px-5 flex flex-col items-start gap-4 w-full'>
                    <div className='text-white text-xl font-semibold'>Withdraw</div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/google.png'} width={28} height={28} alt='...' />
                            <div className='flex flex-col items-start text-white'>
                                <span className='text-base font-semibold'>Google Adsense</span>
                                <span className='text-slate-500 text-sm'>Paypal deposit</span>
                            </div>
                        </div>
                        <div className='text-red-600 font-semibold text-base'>
                            -$145
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/github.png'} width={28} height={28} alt='...' />
                            <div className='flex flex-col items-start text-white'>
                                <span className='text-base font-semibold'>Github Enterprise</span>
                                <span className='text-slate-500 text-sm'>Security & compliance</span>
                            </div>
                        </div>
                        <div className='text-red-600 font-semibold text-base'>
                            -$1870
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/slack.png'} width={28} height={28} alt='...' />
                            <div className='flex flex-col items-start text-white'>
                                <span className='text-base font-semibold'>Upgrade Slack Plan</span>
                                <span className='text-slate-500 text-sm'>Debit card deposit</span>
                            </div>
                        </div>
                        <div className='text-red-600 font-semibold text-base'>
                            -$450
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/digital-ocean.png'} width={28} height={28} alt='...' />
                            <div className='flex flex-col items-start text-white'>
                                <span className='text-base font-semibold'>Digital Ocean</span>
                                <span className='text-slate-500 text-sm'>Cloud Hosting</span>
                            </div>
                        </div>
                        <div className='text-red-600 font-semibold text-base'>
                            -$540
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/aws.png'} width={28} height={28} alt='...' />
                            <div className='flex flex-col items-start text-white'>
                                <span className='text-base font-semibold'>AWS Account</span>
                                <span className='text-slate-500 text-sm'>Choosing a Cloud Platform</span>
                            </div>
                        </div>
                        <div className='text-red-600 font-semibold text-base'>
                            -$21
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full p-5 bg-item-primary rounded-md flex flex-col items-start justify-evenly gap-4 col-span-12 lg:col-span-4'>
                <div className='text-white text-xl font-semibold'>Deposit</div>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-yellow-500 bg-opacity-10 text-yellow-500 rounded-full w-12 h-12 flex items-center justify-center uppercase'>
                            us
                        </div>
                        <div className='flex flex-col items-start text-white'>
                            <div className='flex items-center gap-2'>
                                <span className='text-base font-semibold'>
                                    $8,656k
                                </span>
                                <span className='flex items-center text-sm text-green-500 font-semibold'>
                                    <IoIosArrowUp />
                                    <span>25.8%</span>
                                </span>
                            </div>
                            <span className='text-slate-500 text-sm uppercase'>usa</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end text-white'>
                        <span className='text-base font-semibold'>894k</span>
                        <span className='text-sm text-slate-500'>Sales</span>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-pink-500 bg-opacity-10 text-pink-500 rounded-full w-12 h-12 flex items-center justify-center uppercase'>
                            uk
                        </div>
                        <div className='flex flex-col items-start text-white'>
                            <div className='flex items-center gap-2'>
                                <span className='text-base font-semibold'>
                                    $2,415k
                                </span>
                                <span className='flex items-center text-sm text-red-500 font-semibold'>
                                    <IoIosArrowDown />
                                    <span>6.2%</span>
                                </span>
                            </div>
                            <span className='text-slate-500 text-sm uppercase'>uk</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end text-white'>
                        <span className='text-base font-semibold'>894k</span>
                        <span className='text-sm text-slate-500'>Sales</span>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-orange-500 bg-opacity-10 text-orange-500 rounded-full w-12 h-12 flex items-center justify-center uppercase'>
                            in
                        </div>
                        <div className='flex flex-col items-start text-white'>
                            <div className='flex items-center gap-2'>
                                <span className='text-base font-semibold'>
                                    $865k
                                </span>
                                <span className='flex items-center text-sm text-green-500 font-semibold'>
                                    <IoIosArrowUp />
                                    <span>12.4%</span>
                                </span>
                            </div>
                            <span className='text-slate-500 text-sm uppercase'>india</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end text-white'>
                        <span className='text-base font-semibold'>894k</span>
                        <span className='text-sm text-slate-500'>Sales</span>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-purple-500 bg-opacity-10 text-purple-500 rounded-full w-12 h-12 flex items-center justify-center uppercase'>
                            ja
                        </div>
                        <div className='flex flex-col items-start text-white'>
                            <div className='flex items-center gap-2'>
                                <span className='text-base font-semibold'>
                                    $745k
                                </span>
                                <span className='flex items-center text-sm text-green-500 font-semibold'>
                                    <IoIosArrowUp />
                                    <span>11.9%</span>
                                </span>
                            </div>
                            <span className='text-slate-500 text-sm uppercase'>japan</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end text-white'>
                        <span className='text-base font-semibold'>894k</span>
                        <span className='text-sm text-slate-500'>Sales</span>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-sky-500 bg-opacity-10 text-sky-500 rounded-full w-12 h-12 flex items-center justify-center uppercase'>
                            ko
                        </div>
                        <div className='flex flex-col items-start text-white'>
                            <div className='flex items-center gap-2'>
                                <span className='text-base font-semibold'>
                                    $45k
                                </span>
                                <span className='flex items-center text-sm text-red-500 font-semibold'>
                                    <IoIosArrowDown />
                                    <span>16.2%</span>
                                </span>
                            </div>
                            <span className='text-slate-500 text-sm uppercase'>korea</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-end text-white'>
                        <span className='text-base font-semibold'>894k</span>
                        <span className='text-sm text-slate-500'>Sales</span>
                    </div>
                </div>
            </div>

            <DashboardDataTable />
        </div>
    )
}

export default DashboardPage