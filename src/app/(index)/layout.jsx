import React from 'react'
import NavbarSidebarLayout from './components/client/NavbarSidebarLayout '
import Footer from './components/server/Footer'

const DashboardLayout = ({ children }) => {
    return (
        <>
            <NavbarSidebarLayout />
            <div className='my-4 mx-auto container'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default DashboardLayout