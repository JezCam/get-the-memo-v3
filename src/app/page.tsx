'use client'

import { ModeToggle } from '@/components/theme-toggle'
import Board from '../components/Memo/board'
import Sidebar from '../components/sidebar'
import Leaderboard from '@/components/leaderboard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Home() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Ensure the component only renders after mounting
    useEffect(() => setMounted(true), [])

    if (!mounted) return null // Skip rendering on server

    return (
        <div
            className="flex flex-row w-screen h-screen max-h-screen p-6 gap-6"
            style={{
                background:
                    resolvedTheme == 'light'
                        ? 'linear-gradient(#FFFFFF 0%, #F4F4F5 100%)'
                        : 'linear-gradient(#09090B 0%, #040405 100%)',
            }}
        >
            <div className="w-[15%] h-full">
                <Sidebar />
            </div>
            <div className="w-[65%]">
                <Board />
            </div>
            <div className="w-[20%] h-full grid grid-rows-10 gap-3">
                <div className="row-span-2 flex justify-between">
                    <div className="flex gap-3">
                        <Avatar className="border-[1px] border-white">
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>JC</AvatarFallback>
                        </Avatar>
                        <div>
                            <h4 className="font-semibold">Jeremy Cameron</h4>
                            <p className="mt-0">2014CAME01</p>
                        </div>
                    </div>
                    <ModeToggle />
                </div>
                <div className="row-span-8">
                    <Leaderboard />
                </div>
            </div>
        </div>
    )
}
