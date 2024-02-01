"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ToogleTheme() {
    const { theme, setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="outline-none border-none bg-transparent hover:bg-itemhover/10 focus:bg-itemhover/10 shadow-none focus:ring-0 focus-visible:ring-0 rounded-full cursor-pointer">
                    <SunIcon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white dark:bg-itembackground px-0 py-2">
                <DropdownMenuItem onClick={() => setTheme("light")} className={`px-4 py-2 rounded-none cursor-pointer ${theme === 'light' ? 'bg-textbg text-texthover focus:bg-textbg focus:text-texthover' : 'focus:bg-itemhover/40 dark:focus:bg-itemhover/10'}`}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className={`px-4 py-2 rounded-none cursor-pointer ${theme === 'dark' ? 'bg-textbg text-texthover focus:bg-textbg focus:text-texthover' : 'focus:bg-itemhover/40 dark:focus:bg-itemhover/10'}`}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className={`px-4 py-2 rounded-none cursor-pointer ${theme === 'system' ? 'bg-textbg text-texthover focus:bg-textbg focus:text-texthover' : 'focus:bg-itemhover/40 dark:focus:bg-itemhover/10'}`}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
