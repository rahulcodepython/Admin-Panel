import React from 'react'
import NavbarSidebarLayout from './components/client/NavbarSidebarLayout '

const DashboardLayout = ({ children }) => {
    return (
        <>
            <NavbarSidebarLayout />
            {children}
        </>
    )
}

export default DashboardLayout