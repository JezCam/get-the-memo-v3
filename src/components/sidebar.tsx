'use client'

import React, { useEffect } from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { useTheme } from 'next-themes'
import {
    Play,
    Cube01,
    Image01,
    BarChart04,
    Trophy01,
    Palette,
    UserCircle,
    Package,
    Settings01,
    LogOut01,
} from '@untitled-ui/icons-react'
import { DiscordLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Sidebar() {
    const { resolvedTheme } = useTheme()

    if (resolvedTheme)
        return (
            <Card className="w-full h-full px-3 pb-6 bg-card grid grid-rows-10">
                <div className="row-span-2 flex flex-col items-center">
                    <div className="relative w-[60%] h-full">
                        <Link href="/">
                            <Image
                                src={`/logo-${resolvedTheme}.png`}
                                fill
                                alt="logo"
                                objectFit={'contain'}
                            />
                        </Link>
                    </div>
                    <Separator />
                </div>
                <div className="flex flex-col mt-2 gap-3">
                    <Link
                        href="/tutorial"
                        className="rounded-sm hover:bg-primary/10 w-full p-1.5 py-3"
                    >
                        <div className="flex gap-1.5 items-center">
                            <Play className="text-foreground w-4 h-4" />
                            <h4>Tutorial</h4>
                        </div>
                    </Link>
                    <p className="font-bold">Practice</p>
                    <div className="flex flex-col">
                        <Link
                            href="/memo"
                            className="rounded-sm hover:bg-primary/10 w-full p-1.5 py-3"
                        >
                            <div className="flex gap-1.5 items-center">
                                <Cube01 className="text-foreground w-4 h-4" />
                                <h4>Memo</h4>
                            </div>
                        </Link>
                        <Link
                            href="/memo-images"
                            className="rounded-sm hover:bg-primary/10 w-full p-1.5 py-3"
                        >
                            <div className="flex gap-1.5 items-center">
                                <Image01 className="text-foreground w-4 h-4" />
                                <h4>Memo Images</h4>
                            </div>
                        </Link>
                        <Link
                            href="/stats"
                            className="rounded-sm hover:bg-primary/10 w-full p-1.5 py-3"
                        >
                            <div className="flex gap-1.5 items-center">
                                <BarChart04 className="text-foreground w-4 h-4" />
                                <h4>Your Stats</h4>
                            </div>
                        </Link>
                    </div>
                    <p className="font-bold">Community</p>
                    <div className="flex flex-col">
                        <Link
                            href="/leaderboard"
                            className="rounded-sm hover:bg-primary/10 w-full p-1.5 py-3"
                        >
                            <div className="flex gap-1.5 items-center">
                                <Trophy01 className="text-foreground w-4 h-4" />
                                <h4>Leaderboard</h4>
                            </div>
                        </Link>
                        <Link
                            href="/images"
                            className="rounded-sm hover:bg-primary/10 w-full p-1.5 py-3"
                        >
                            <div className="flex gap-1.5 items-center">
                                <Image01 className="text-foreground w-4 h-4" />
                                <h4>Trending Images</h4>
                            </div>
                        </Link>
                        <Link
                            href="/colours"
                            className="rounded-sm hover:bg-primary/10 w-full p-1.5 py-3"
                        >
                            <div className="flex gap-1.5 items-center">
                                <Palette className="text-foreground w-4 h-4" />
                                <h4
                                    className="font-bold"
                                    key="test"
                                    style={{
                                        background:
                                            'linear-gradient(90deg, var(--memoRed) 0%, var(--memoOrange) 25%, var(--memoYellow) 50%, var(--memoGreen) 75%, var(--memoBlue) 100%)',
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                    }}
                                >
                                    Trending Colours!
                                </h4>
                            </div>
                        </Link>
                        <Link
                            href="/discord"
                            className="rounded-sm hover:bg-primary/10 w-full p-1.5 py-3"
                        >
                            <div className="flex gap-1.5 items-center">
                                <DiscordLogoIcon className="text-foreground w-4 h-4" />
                                <h4>Discord</h4>
                            </div>
                        </Link>
                    </div>
                    <p className="font-bold">Account</p>
                    <div className="flex flex-col">
                        <Link
                            href="/profile"
                            className="rounded-sm hover:bg-primary/10 w-full p-1.5 py-3"
                        >
                            <div className="flex gap-1.5 items-center">
                                <UserCircle className="text-foreground w-4 h-4" />
                                <h4>Profile</h4>
                            </div>
                        </Link>
                        <Link
                            href="/memo-images"
                            className="rounded-sm hover:bg-primary/10 w-full p-1.5 py-3"
                        >
                            <div className="flex gap-1.5 items-center">
                                <Package className="text-foreground w-4 h-4" />
                                <h4>Billing</h4>
                            </div>
                        </Link>
                        <Link
                            href="/stats"
                            className="rounded-sm hover:bg-primary/10 w-full p-1.5 py-3"
                        >
                            <div className="flex gap-1.5 items-center">
                                <Settings01 className="text-foreground w-4 h-4" />
                                <h4>Settings</h4>
                            </div>
                        </Link>
                        <Link
                            href="/stats"
                            className="rounded-sm hover:bg-primary/10 w-full p-1.5 py-3"
                        >
                            <div className="flex gap-1.5 items-center">
                                <LogOut01 className="text-foreground w-4 h-4" />
                                <h4>Log out</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </Card>
        )
}
