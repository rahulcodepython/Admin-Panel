"use client"
import React from 'react'
import SidebarItem from '../server/SidebarItem'
import { BsChevronDown, BsChevronUp } from '@/data/icons/icons'
import { Collapse } from "react-collapse";

const SidebarItemLayout = ({ item }) => {
    const [isOpened, setIsOpened] = React.useState(false)

    return (
        <>
            <li className="flex items-center justify-between p-2 text-white rounded-lg hover:bg-gray-100 group hover:text-gray-700" onClick={() => setIsOpened(pre => !isOpened)}>
                <SidebarItem item={item} />
                {item.sub ? isOpened ? <BsChevronUp /> : <BsChevronDown /> : null}
            </li>
            {
                item.sub ? <Collapse isOpened={isOpened}>
                    <div className='ml-3'>
                        {
                            item.sub.map((item, index) => {
                                return <li key={index} className="flex items-center justify-between p-2 text-white rounded-lg hover:bg-gray-100 group hover:text-gray-700">
                                    <SidebarItem item={item} />
                                </li>
                            })
                        }
                    </div>
                </Collapse> : null
            }
        </>
    )
}

export default SidebarItemLayout