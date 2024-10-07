import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { useTheme } from 'next-themes'

export default function Sidebar() {
    const { resolvedTheme } = useTheme()

    return (
        <Card className="w-full h-full px-3 pb-6 bg-card grid grid-rows-10">
            <div className="row-span-2 flex flex-col items-center">
                <div className="relative w-[70%] h-full">
                    <Image
                        src={`/logo-${resolvedTheme}.png`}
                        fill
                        alt="logo"
                        objectFit={'contain'}
                    />
                </div>
                <Separator />
            </div>
        </Card>
    )
}
