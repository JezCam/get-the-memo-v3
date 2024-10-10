'use client'

import SVGCorner from '@/components/Home/svgCorner'
import SVGEdge from '@/components/Home/svgEdge'
import { Button } from '@/components/ui/button'
import { Play } from '@untitled-ui/icons-react'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col gap-8 items-center relative">
                <div className="flex flex-col gap-5">
                    <h1 className="text-center text-7xl">
                        The{' '}
                        <span className="px-4 rounded-xl bg-primary text-background font-extrabold">
                            #1
                        </span>{' '}
                        Tool for <br></br> Learning Blind Solving
                    </h1>
                    <p className="text-2xl text-center">
                        Memorizing your letters is now{' '}
                        <span className="font-semibold text-primary">
                            more fun
                        </span>{' '}
                        <br></br>
                        and{' '}
                        <span className="font-semibold text-primary">
                            easier
                        </span>{' '}
                        than ever before!
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-3 w-fit">
                    <Link href="/memo">
                        <Button className="w-full py-2.5 h-fit font-semibold text-base">
                            Start Learning Now
                        </Button>
                    </Link>
                    <Link href="/tutorial">
                        <Button
                            className="flex gap-1.5 w-full py-2.5 h-fit font-semibold text-base"
                            variant={'outline'}
                        >
                            Watch the Tutorial
                            <Play className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
                {/* Absolute pieces */}
                <SVGCorner
                    className="absolute top-[-12em] left-[4em] rotate-[20deg] scale-75 opacity-75"
                    a="white"
                    b="var(--memoBlue)"
                    c="var(--memoRed)"
                />
                <SVGCorner
                    className="absolute bottom-[-12em] right-[4em] rotate-[-20deg] scale-[.7] opacity-50"
                    a="var(--memoRed)"
                    b="var(--memoBlue)"
                    c="var(--memoYellow)"
                />
                <SVGCorner
                    className="absolute top-[-6em] right-[-2em] rotate-[-40deg] scale-50 opacity-50"
                    a="var(--memoBlue)"
                    b="var(--memoOrange)"
                    c="var(--memoYellow)"
                />
                <SVGCorner
                    className="absolute bottom-[-4em] left-[1em] rotate-[-60deg] scale-50 opacity-50"
                    a="var(--memoYellow)"
                    b="var(--memoOrange)"
                    c="var(--memoGreen)"
                />
                <SVGEdge
                    className="absolute top-[-20em] right-[6em] rotate-[30deg] scale-[.4] opacity-90"
                    a="white"
                    b="var(--memoGreen)"
                />
                <SVGEdge
                    className="absolute bottom-[-18em] left-[2em] rotate-[-30deg] scale-[.4] opacity-90"
                    a="var(--memoBlue)"
                    b="var(--memoOrange)"
                />
                <SVGEdge
                    className="absolute top-[-7em] left-[-8em] rotate-[40deg] scale-[.15] opacity-30"
                    a="var(--memoBlue)"
                    b="var(--memoOrange)"
                />
                <SVGEdge
                    className="absolute bottom-[-12em] right-[8em] rotate-[90deg] scale-[.15] opacity-30"
                    a="var(--memoYellow)"
                    b="var(--memoBlue)"
                />
                <SVGEdge
                    className="absolute bottom-[-3em] right-[-3em] rotate-[-30deg] scale-[.1] opacity-20"
                    a="var(--memoRed)"
                    b="var(--memoYellow)"
                />
            </div>
        </div>
    )
}
