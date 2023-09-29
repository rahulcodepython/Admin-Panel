import React from 'react'
import { Data } from '@/data/data/data'
import SidebarItemLayout from '../client/SidebarItemLayout'

const Sidebar = ({ toggleSidebar, setToggleSidebar, sidebarRef }) => {

    return (
        <div id="drawer-navigation" className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${!toggleSidebar ? '-translate-x-full' : ''} w-64 bg-gray-800`} tabIndex="-1" aria-labelledby="drawer-navigation-label" ref={sidebarRef}>
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                Menu
            </h5>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-700 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center" onClick={() => setToggleSidebar(pre => false)}>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
            <div className="flex flex-col py-4 overflow-y-scroll divide-y-2 divide-slate-500 scroll-smooth">
                <ul>
                    {
                        Data.sidebar.map((item, index) => {
                            return <SidebarItemLayout item={item} key={index} />
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar