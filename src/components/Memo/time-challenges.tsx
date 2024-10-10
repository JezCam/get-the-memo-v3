import React, { useState } from 'react'
import { Card } from '../ui/card'

import { ClockStopwatch, Play, X } from '@untitled-ui/icons-react'

enum Challenge {
    None,
    Rush30,
    Rush1Minute,
    Sprint,
    Blind,
}

export default function TimeChallenges() {
    const [challengeState, setChallengeState] = useState<Challenge>(
        Challenge.None
    )

    return (
        <Card className="flex flex-col w-full h-full p-3 bg-card justify-between">
            <div className="flex gap-1.5 items-center">
                <ClockStopwatch className="text-foreground w-4 h-4" />
                <h4>Time Challenges</h4>
            </div>
            <div className="flex gap-3 w-full">
                <div
                    className={`${challengeState === Challenge.Rush30 ? 'flex-[3]' : 'flex-[1]'} flex flex-col gap-3 min-w-fit transition-all duration-500`}
                >
                    <p className="font-bold">30 Second Rush</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full min-w-fit h-fit">
                        {challengeState === Challenge.Rush30 ? (
                            <div
                                onClick={() =>
                                    setChallengeState(Challenge.None)
                                }
                                className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer"
                            >
                                <X className="w-4 h-4 text-primary" />
                            </div>
                        ) : (
                            <div
                                onClick={() =>
                                    setChallengeState(Challenge.Rush30)
                                }
                                className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer"
                            >
                                <Play className="w-4 h-4 text-primary" />
                            </div>
                        )}
                        <div className={'flex flex-col w-full items-center'}>
                            <p>Best</p>
                            <h3 className="leading-6 pb-1">15</h3>
                        </div>
                    </div>
                </div>
                <div
                    className={`${challengeState === Challenge.Rush1Minute ? 'flex-[3]' : 'flex-[1]'} flex flex-col gap-3 min-w-fit transition-all duration-500`}
                >
                    <p className="font-bold">1 Minute Rush</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full min-w-fit h-fit">
                        {challengeState === Challenge.Rush1Minute ? (
                            <div
                                onClick={() =>
                                    setChallengeState(Challenge.None)
                                }
                                className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer"
                            >
                                <X className="w-4 h-4 text-primary" />
                            </div>
                        ) : (
                            <div
                                onClick={() =>
                                    setChallengeState(Challenge.Rush1Minute)
                                }
                                className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer"
                            >
                                <Play className="w-4 h-4 text-primary" />
                            </div>
                        )}
                        <div className={'flex flex-col w-full items-center'}>
                            <p>Best</p>
                            <h3 className="leading-6 pb-1">15</h3>
                        </div>
                    </div>
                </div>
                <div
                    className={`${challengeState === Challenge.Sprint ? 'flex-[3]' : 'flex-[1]'} flex flex-col gap-3 min-w-fit transition-all duration-500`}
                >
                    <p className="font-bold">10 Correct Sprint</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full min-w-fit h-fit">
                        {challengeState === Challenge.Sprint ? (
                            <div
                                onClick={() =>
                                    setChallengeState(Challenge.None)
                                }
                                className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer"
                            >
                                <X className="w-4 h-4 text-primary" />
                            </div>
                        ) : (
                            <div
                                onClick={() =>
                                    setChallengeState(Challenge.Sprint)
                                }
                                className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer"
                            >
                                <Play className="w-4 h-4 text-primary" />
                            </div>
                        )}
                        <div className={'flex flex-col w-full items-center'}>
                            <p>Best</p>
                            <h3 className="leading-6 pb-1">15</h3>
                        </div>
                    </div>
                </div>
                <div
                    className={`${challengeState === Challenge.Blind ? 'flex-[3]' : 'flex-[1]'} flex flex-col gap-3 min-w-fit transition-all duration-500`}
                >
                    <p className="font-bold">30 Second Blind</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full min-w-fit h-fit">
                        {challengeState === Challenge.Blind ? (
                            <div
                                onClick={() =>
                                    setChallengeState(Challenge.None)
                                }
                                className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer"
                            >
                                <X className="w-4 h-4 text-primary" />
                            </div>
                        ) : (
                            <div
                                onClick={() =>
                                    setChallengeState(Challenge.Blind)
                                }
                                className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer"
                            >
                                <Play className="w-4 h-4 text-primary" />
                            </div>
                        )}
                        <div className={'flex flex-col w-full items-center'}>
                            <p>Best</p>
                            <h3 className="leading-6 pb-1">15</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
