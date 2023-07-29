"use client"
import React from 'react'
import { BsMoonStars, LuSunMoon } from '@/data/icons'

const Mode = () => {
    const [modeIcon, setModeIcon] = React.useState("sun")

    return <div className='text-white text-xl font-semibold cursor-pointer' onClick={() => {
        modeIcon === 'sun' ? setModeIcon("moon") : setModeIcon("sun")
    }}>
        {modeIcon === 'sun' ? <LuSunMoon /> : <BsMoonStars />}
    </div>
}


export default Mode