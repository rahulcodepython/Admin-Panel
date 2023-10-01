import React from 'react'
import { LockIconToolTip, WorldIconToolTip } from '../../components/client/IconToolTip'
const Page = () => {
    return (
        <div className='flex flex-col items-start justify-center gap-8 w-full'>
            <div className='flex flex-col items-start justify-center gap-2 w-full'>
                <span className='font-semibold uppercase text-lg'>
                    Work
                </span>
                <div className='flex flex-col items-start justify-center gap-4 w-full font-semibold ml-2'>
                    <div className='text-base flex flex-col items-start gap-1'>
                        <span className='text-lg'>
                            No experience is there
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start justify-center gap-2 w-full'>
                <span className='font-semibold uppercase text-xl'>
                    University
                </span>
                <div className='flex flex-col items-start justify-center gap-4 w-full font-semibold ml-2'>
                    <div className='text-base flex flex-col items-start gap-1 w-full'>
                        <span className='text-lg flex items-center gap-4'>
                            BCA (Bachelor of Computer Application) at Brainware University
                            <WorldIconToolTip />
                        </span>
                        <span className='text-xs'>
                            from Aug, 28, 2023 to Present
                        </span>
                        <span className='text-sm'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptatem?
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start justify-center gap-2 w-full'>
                <span className='font-semibold uppercase text-xl'>
                    High School
                </span>
                <div className='flex flex-col items-start justify-center gap-4 w-full font-semibold ml-2'>
                    <div className='text-base flex flex-col items-start gap-1 w-full'>
                        <span className='text-lg flex items-center gap-4'>
                            Kalyangarh Vidyamandir
                            <LockIconToolTip />
                        </span>
                        <span className='text-xs'>
                            from Mar, 28, 2021 to Mar, 2, 2023
                        </span>
                        <span className='text-sm'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptatem?
                        </span>
                    </div>
                    <div className='text-base flex flex-col items-start w-full gap-1'>
                        <span className='text-lg flex items-center gap-4'>
                            Kalyangarh Bidhan Chandra Vidyapeeth
                            <WorldIconToolTip />
                        </span>
                        <span className='text-xs'>
                            from Jan, 1, 2015 to June, 2, 2021
                        </span>
                        <span className='text-sm'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, corrupti.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page