import React from 'react'
import { Card } from './ui/card'
import {
    Trophy01,
    ChevronDown,
    ChevronUp,
    DotsHorizontal,
} from '@untitled-ui/icons-react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from './ui/select'
import MemoLink from './ui/memo-link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function Leaderboard() {
    return (
        <Card className="flex flex-col w-full h-full p-3 bg-card gap-6">
            {/* Top */}
            <div className="flex justify-between items-start">
                <div className="flex gap-1.5 items-center">
                    <Trophy01 className="text-foreground w-4 h-4" />
                    <h4>Global Top 10 </h4>
                </div>
                <Select defaultValue="daily">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Show for:</SelectLabel>
                            <SelectItem value="daily">Daily Streak</SelectItem>
                            <SelectItem value="accuray">
                                30 Second Rush
                            </SelectItem>
                            <SelectItem value="blueberry">
                                1 Minute Rush
                            </SelectItem>
                            <SelectItem value="grapes">
                                10 Correct Sprint
                            </SelectItem>
                            <SelectItem value="pineapple">
                                30 Second Blind
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col w-full items-center justify-center gap-6">
                {/* Leaderboard */}
                <div className="flex flex-col w-full">
                    <div className="flex justify-between w-full py-1.5 pl-2 pr-3 mb-3 bg-primary/20 rounded-sm">
                        <div className="flex gap-6">
                            <div className="flex items-center gap-1">
                                <ChevronUp className="w-5 h-5 text-memoGreen" />
                                <div className="text-2xl font-semibold">1</div>
                            </div>
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
                        </div>
                        <div className="flex flex-col w-fit items-center pb-0.5">
                            <h3 className="leading-3 pb-1 pt-1.5 font-bold">
                                54
                            </h3>
                            <p>Days</p>
                        </div>
                    </div>
                    <div className="flex justify-between w-full py-1.5 pl-2 pr-3 mb-3 bg-primary/10 rounded-sm">
                        <div className="flex gap-6">
                            <div className="flex items-center gap-1">
                                <ChevronDown className="w-5 h-5 text-memoRed" />
                                <div className="text-2xl font-semibold">1</div>
                            </div>
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
                        </div>
                        <div className="flex flex-col w-fit items-center pb-0.5">
                            <h3 className="leading-3 pb-1 pt-1.5 font-bold">
                                54
                            </h3>
                            <p>Days</p>
                        </div>
                    </div>
                    <div className="flex justify-between w-full py-1.5 pl-2 pr-3 mb-1 bg-primary/10 rounded-sm">
                        <div className="flex gap-6">
                            <div className="flex items-center gap-1">
                                <div className="flex justify-center w-5">
                                    <DotsHorizontal className="w-4 h-4 text-primary/60" />
                                </div>
                                <div className="text-2xl font-semibold">1</div>
                            </div>
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
                        </div>
                        <div className="flex flex-col w-fit items-center pb-0.5">
                            <h3 className="leading-3 pb-1 pt-1.5 font-bold">
                                54
                            </h3>
                            <p>Days</p>
                        </div>
                    </div>
                    {[3, 4, 5, 6, 7, 8, 9].map((number) => (
                        <div className="flex justify-between w-full py-1 pl-2 pr-3 rounded-sm">
                            <div className="flex gap-7">
                                <div className="flex items-center gap-2">
                                    <ChevronUp className="w-4 h-4 text-memoGreen" />
                                    <div className="text-xl font-semibold">
                                        {number}
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <Avatar className="border-[1px] border-white w-8 h-8">
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
                            </div>
                            <div className="flex flex-col w-fit items-center pb-0.5">
                                <h3 className="leading-4 pb-1 pt-1.5 font-bold text-xl">
                                    54
                                </h3>
                                <p>Days</p>
                            </div>
                        </div>
                    ))}
                </div>
                <MemoLink href="" text="View Full Leaderboard" />
            </div>
        </Card>
    )
}
