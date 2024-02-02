"use client"
import React from 'react'
import Navbar from './components/client/Navbar'
import { SidebarDesktop } from './components/server/Sidebar';

const IndexLayout = ({ children }) => {
    const [width, setWidth] = React.useState(0);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            setLoading(false);
        }
    }, []);

    return (
        loading ? "Loading" : <React.Fragment>
            <div className='flex flex-auto'>
                {width >= 1200 && <SidebarDesktop />}
                <main className='flex-auto flex flex-col'>
                    <Navbar width={width} />
                    {children}
                </main>
            </div>
        </React.Fragment>
    )
}

export default IndexLayout