'use client'

import { ModeToggle } from '@/components/theme-toggle'
import Board from '../components/Memo/board'
import Sidebar from '../components/sidebar'
import Leaderboard from '@/components/leaderboard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Bell03, Lightning02, Trophy01 } from '@untitled-ui/icons-react'
import { Button } from '@/components/ui/button'

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
                <div className="row-span-2 flex flex-col justify-between pb-3">
                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <Avatar className="border-[1px] border-white">
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback>JC</AvatarFallback>
                            </Avatar>
                            <div>
                                <h4 className="font-semibold">
                                    Jeremy Cameron
                                </h4>
                                <p className="mt-0">2014CAME01</p>
                            </div>
                        </div>
                        <div className="flex gap-1.5">
                            <ModeToggle />
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full h-10 w-10 relative"
                            >
                                <div className="bg-memoRed w-1.5 h-1.5 absolute top-3 right-3 rounded-full"></div>
                                <Bell03 className="w-4 h-4" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex gap-3 w-full">
                        <div className="flex flex-col gap-3 w-full">
                            <p className="font-bold">Current Streak</p>
                            <div className="flex bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full h-full">
                                <div className="bg-memoYellow/10 flex items-center justify-center h-full aspect-square w-auto rounded-sm">
                                    <Lightning02 className="w-5 h-5 text-memoYellow" />
                                </div>
                                <div className="flex flex-col w-full items-center pb-0.5">
                                    <h3 className="leading-4 pb-1 pt-1.5">
                                        24
                                    </h3>
                                    <p>Correct</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-fit">
                            <div className="flex gap-6 w-fit">
                                <p className="font-bold text-nowrap">
                                    Best Streak
                                </p>
                                <p className="text-nowrap text-xs">
                                    Achieved{' '}
                                    <span className="text-primary font-semibold">
                                        21 Jun '23
                                    </span>
                                </p>
                            </div>
                            <div className="flex bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full h-full">
                                <div className="bg-memoOrange/10 flex items-center justify-center h-full aspect-square w-auto rounded-sm">
                                    <Trophy01 className="w-5 h-5 text-memoOrange" />
                                </div>
                                <div className="flex flex-col w-full items-center pb-0.5">
                                    <h3 className="leading-4 pb-1 pt-1.5">
                                        24
                                    </h3>
                                    <p>Correct</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-span-8">
                    <Leaderboard />
                </div>
            </div>
        </div>
    )
}
