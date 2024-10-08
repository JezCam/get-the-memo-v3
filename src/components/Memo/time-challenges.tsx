import React from 'react'
import { Card } from '../ui/card'

import { ClockStopwatch, Play } from '@untitled-ui/icons-react'

export default function TimeChallenges() {
    return (
        <Card className="flex flex-col w-full h-full p-3 bg-card justify-between">
            <div className="flex gap-1.5 items-center">
                <ClockStopwatch className="text-foreground w-4 h-4" />
                <h4>Time Challenges</h4>
            </div>
            <div className="grid grid-cols-4 gap-3 h-min w-full">
                <div className="flex flex-col gap-3 w-full">
                    <p className="font-bold">30 Second Rush</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full h-full">
                        <div className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer">
                            <Play className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex flex-col w-full items-center">
                            <p>Best</p>
                            <h2 className="leading-6 pb-1">15</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <p className="font-bold">1 Minute Rush</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full h-full justify-between">
                        <div className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer">
                            <Play className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex flex-col w-full items-center">
                            <p>Best</p>
                            <h3 className="leading-6 pb-1">15</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <p className="font-bold">10 Correct Sprint</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full h-full">
                        <div className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer">
                            <Play className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex flex-col w-full items-center">
                            <p>Best</p>
                            <h3 className="leading-6 pb-1">15</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <p className="font-bold">30 Second Blind</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full h-full">
                        <div className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer">
                            <Play className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex flex-col w-full items-center">
                            <p>Best</p>
                            <h3 className="leading-6 pb-1">15</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
