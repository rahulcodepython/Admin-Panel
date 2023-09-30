import React from 'react'
import NavbarSidebarLayout from './components/client/NavbarSidebarLayout '
import Footer from './components/server/Footer'

const DashboardLayout = ({ children }) => {
    return (
        <>
            <NavbarSidebarLayout />
            {children}
            <Footer />
        </>
    )
}

export default DashboardLayout