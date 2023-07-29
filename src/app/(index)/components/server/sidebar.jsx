import React from 'react'
import SidebarDrawerItems from '@/app/(index)/components/client/sidebarDrawerItems'
import SidebarItems from '@/app/(index)/components/client/sidebarItems'
import data from '@/data/data'

const Sidebar = ({ showSidebar }) => {
    return (
        <aside className="bg-primary h-screen fixed z-20 lg:relative overflow-y-scroll pt-20">
            <ul className={`${showSidebar ? 'w-64 duration-500' : 'w-0 duration-500'} space-y-2`}>
                {
                    data.sidebar.navLinks.map((items, index) => {
                        return items.sub ?
                            <SidebarDrawerItems value={items} key={index} />
                            : <SidebarItems value={items} key={index} />
                    })
                }
            </ul>
        </aside>
    )
}

export default Sidebar