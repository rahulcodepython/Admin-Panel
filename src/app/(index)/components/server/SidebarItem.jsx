import React from 'react'

const SidebarItem = ({ item }) => {
    return (
        <div className="flex items-center">
            {item.icon ? item.icon : null}
            <span className='ml-3'>
                {item.title}
            </span>
        </div>
    )
}

export default SidebarItem