"use client"
import React from 'react'
import Sidebar from '@/app/(index)/components/server/sidebar'
import Navbar from '@/app/(index)/components/client/navbar'
import Footer from '@/app/(index)/components/server/footer'

const DashboardLayout = ({ children }) => {
    const [showSidebar, setShowSidebar] = React.useState(true)
    return (
        <React.Fragment>
            <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
            <div className='flex'>
                <Sidebar showSidebar={showSidebar} />
                <main className='flex-1 bg-primary h-screen overflow-y-scroll pt-[5.5rem] pb-20 px-3 sm:px-5 lg:px-10'>
                    {children}
                </main>
            </div>
            <Footer showSidebar={showSidebar} />
        </React.Fragment>
    )
}

export default DashboardLayout