import React from 'react'
import Navbar from './components/client/Navbar'

const IndexLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <main className='p-6'>
                {children}
            </main>
        </React.Fragment>
    )
}

export default IndexLayout