import { BiMenu, BiSearch, BiBell, HiOutlineViewGridAdd } from "@/data/icons/icons";
import { Tooltip } from 'react-tooltip'
import React from 'react'
import Image from "next/image";

const Navbar = ({ setToggleSidebar, toggleSidebar, toggleNavbar }) => {
    return (
        <nav className={`flex flex-wrap justify-between items-center px-5 p-2 ${toggleNavbar ? 'sticky top-0 z-20 bg-white shadow-2xl' : ''}`}>
            <div className="flex items-center gap-3">
                <BiMenu onClick={() => setToggleSidebar(pre => !toggleSidebar)} className="text-2xl cursor-pointer" />
                <span className="text-xl font-semibold cursor-pointer">ZTube</span>
            </div>
            <div className="flex items-center justify-center rounded-full border border-black bg-black w-[40rem]">
                <input type="text" placeholder="Search" className="rounded-l-full px-5 py-1 w-full focus:outline-none" />
                <div className="bg-transparent py-2 px-5 rounded-r-full cursor-pointer text-white">
                    <BiSearch />
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <HiOutlineViewGridAdd className="text-2xl cursor-pointer" data-tooltip-id="create" data-tooltip-content="Create" />
                <Tooltip id="create" />
                <BiBell className="text-2xl cursor-pointer" data-tooltip-id="notification" data-tooltip-content="Notification" />
                <Tooltip id="notification" />
                <Image width={40} height={40} className="w-10 h-10 rounded-full cursor-pointer" src="/user.png" alt="User dropdown" />
            </div>
        </nav>
    )
}

export default Navbar