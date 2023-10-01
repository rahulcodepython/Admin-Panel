import React from 'react'
import { AiOutlineCopyright } from '@/data/icons/icons'

const Footer = ({ showSidebar }) => {
    return (
        <footer className="py-3 bg-black w-full flex items-center justify-between mt-4">
            <div className='flex items-center text-white gap-2 font-semibold pl-3 sm:pl-5 lg:pl-10'>
                <AiOutlineCopyright />
                2023, Made by Rahul Das
            </div>
            <div className='flex items-center gap-4 text-white font-semibold pr-3 sm:pr-5 lg:pr-10'>
                <span className='hover:text-slate-500 cursor-pointer'>License</span>
                <span className='hover:text-slate-500 cursor-pointer'>More Themes</span>
                <span className='hover:text-slate-500 cursor-pointer'>Documentation</span>
                <span className='hover:text-slate-500 cursor-pointer'>Support</span>
            </div>
        </footer>
    )
}

export default Footer