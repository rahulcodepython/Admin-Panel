"use client"
import React from 'react'
import { TbWorld, BiSolidLock } from '@/data/icons/icons'
import { Tooltip } from 'react-tooltip'

export const LockIconToolTip = () => {
    return (
        <>
            <BiSolidLock data-tooltip-id="lock" data-tooltip-content="Private" />
            <Tooltip id="lock" />
        </>
    )
}

export const WorldIconToolTip = () => {
    return (
        <>
            <TbWorld data-tooltip-id="world" data-tooltip-content="Public" />
            <Tooltip id="world" />
        </>
    )
}