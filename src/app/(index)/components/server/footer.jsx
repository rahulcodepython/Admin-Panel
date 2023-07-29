import React from 'react'
import { AiOutlineCopyright } from '@/data/icons'

const Footer = ({ showSidebar }) => {
    return (
        <footer className={`fixed z-10 bottom-0 py-3 bg-primary w-full ${showSidebar ? 'lg:pl-64 duration-500' : 'pl-0 duration-500'} flex items-center justify-between`}>
            <div className='flex items-center text-white gap-2 font-semibold pl-3 sm:pl-5 lg:pl-10'>
                <AiOutlineCopyright />
                2023, Made by Rahul Das
            </div>
            <div className='flex items-center gap-4 text-purple-700 font-semibold pr-3 sm:pr-5 lg:pr-10'>
                <span>License</span>
                <span>More Themes</span>
                <span>Documentation</span>
                <span>Support</span>
            </div>
        </footer>
    )
}

export default Footer