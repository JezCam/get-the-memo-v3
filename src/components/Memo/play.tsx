'use client'

import React, { useEffect, useState } from 'react'
import Piece from './piece'

import {
    corners,
    edges,
    PieceType,
    placeholderCornerPiece,
    placeholderEdgePiece,
} from '@/lib/definitions'
import { getRandom, randomRotate, titleCase } from '@/lib/utils'
import { Card } from '../ui/card'
import { Eye, Cube01, ArrowRight, RefreshCw01 } from '@untitled-ui/icons-react'
import { Input } from '../ui/input'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'

enum State {
    Guessing,
    Revealed,
    Correct,
    Incorrect,
}

export default function Play(props: {
    colours: string[]
    letters: string[]
    selection: string
}) {
    const { resolvedTheme } = useTheme()
    const [state, setState] = useState<State>(State.Guessing)
    const [colours, setColours] = useState<string[]>(props.colours)
    const [letters, setLetters] = useState<string[]>(props.letters)
    const [selection, setSelection] = useState<string>(props.selection)
    const [piece, setPiece] = useState<PieceType>(
        props.selection == 'edge'
            ? placeholderEdgePiece
            : placeholderCornerPiece
    )
    const [pieceLetters, setPieceLetters] = useState<string[]>([])
    const [pieceColours, setPieceColours] = useState<string[]>([])
    // Inputs
    const [a, setA] = useState<string>('')
    const [b, setB] = useState<string>('')
    const [c, setC] = useState<string>('')

    const getRandomPiece = () => {
        switch (selection) {
            case 'corner':
                return getRandom(corners)
            case 'edge':
                return getRandom(edges)
            case 'both':
                return getRandom(corners, edges)
            default:
                return getRandom(corners)
        }
    }

    const handleReveal = () => {
        setState(State.Revealed)
        setA(pieceLetters[0])
        setB(pieceLetters[1])
        setC(pieceLetters[2])
    }

    const handleSubmit = () => {
        switch (piece.type) {
            case 'corner':
                if (
                    JSON.stringify([a, b, c]) === JSON.stringify(pieceLetters)
                ) {
                    setState(State.Correct)
                } else {
                    setState(State.Incorrect)
                }
                break
            case 'edge':
                if (JSON.stringify([a, b]) === JSON.stringify(pieceLetters)) {
                    setState(State.Correct)
                } else {
                    setState(State.Incorrect)
                }
                break
        }
    }

    const handleTryAgain = () => {
        setState(State.Guessing)
        resetLetters()
    }

    const handleNext = () => {
        resetPiece()
        resetLetters()
        setState(State.Guessing)
    }

    const resetLetters = () => {
        setA('')
        setB('')
        setC('')
    }

    const resetPiece = () => {
        const _piece = getRandomPiece()
        // randomly rotate piece stickers
        const _pieceRotated = {
            ..._piece,
            stickers: randomRotate(_piece.stickers),
        }
        // now only use _pieceRotated
        const _pieceLetters = _pieceRotated.stickers.map(
            (sticker) => letters[sticker.letter]
        )
        const _pieceColours = _pieceRotated.stickers.map(
            (sticker) => colours[sticker.colour]
        )
        setPiece(_pieceRotated)
        setPieceLetters(_pieceLetters)
        setPieceColours(_pieceColours)
    }

    useEffect(() => {
        resetPiece()
    }, [])

    return (
        <Card className="flex flex-col w-full p-3 bg-card relative h-full">
            {state === State.Correct && (
                <h1 className="absolute bg-green-400 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    Correct
                </h1>
            )}
            {state === State.Incorrect && (
                <h1 className="absolute bg-red-400 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    Inorrect
                </h1>
            )}
            {/* Top */}
            <div className="flex justify-between items-center">
                <div className="flex gap-1.5 items-center">
                    <Cube01 className="text-foreground w-4 h-4" />
                    <h4 className="">Enter the Letters</h4>
                </div>
                <p className="">
                    Current piece:{' '}
                    <span className="text-foreground font-medium">
                        {titleCase(piece.type)}
                    </span>
                </p>
            </div>
            {/* Piece only needs to know what type it is, and either 2 or 3 colours */}
            <div className="flex items-center justify-center flex-1 max-w-full">
                <Piece type={piece.type} colours={pieceColours} />
            </div>
            {/* Inputs */}
            <div className="flex flex-col p-3 pt-0 gap-3">
                <div className="flex gap-[20px]">
                    {/* A */}
                    <Input
                        value={a}
                        pattern="[a-z]{1,1}"
                        onChange={(e) => setA(e.target.value)}
                        className={`text-center text-2xl p-3 h-fit bg-background border-foreground`}
                    />
                    {/* B */}
                    <Input
                        value={b}
                        onChange={(e) => setB(e.target.value)}
                        className="text-center text-2xl p-3 h-fit bg-background border-foreground"
                    />
                    {/* C */}
                    {piece.type == 'corner' && (
                        <Input
                            value={c}
                            onChange={(e) => setC(e.target.value)}
                            className="text-center text-2xl p-3 h-fit bg-background border-foreground"
                        />
                    )}
                </div>
                <form>
                    {state === State.Guessing && (
                        <div className="flex gap-[20px]">
                            <Button
                                onClick={handleReveal}
                                variant="destructive"
                                className="w-full text-md py-3 h-fit text-center align-middle gap-1.5 border-memoRed border-[1px] "
                            >
                                Reveal
                                <Eye className="text-foreground w-4 h-4" />
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                className="w-full text-md py-3 h-fit"
                            >
                                Submit
                            </Button>
                        </div>
                    )}
                    {state != State.Guessing && (
                        <div className="flex gap-[20px]">
                            <Button
                                onClick={handleTryAgain}
                                variant="outline"
                                className="w-full text-md py-3 h-fit text-center align-middle gap-1.5"
                            >
                                Try Again
                                <RefreshCw01 className="text-foreground w-4 h-4" />
                            </Button>
                            <Button
                                onClick={handleNext}
                                className="w-full text-md py-3 h-fit text-center align-middle gap-1.5"
                            >
                                Next
                                <ArrowRight className="text-background w-4 h-4" />
                            </Button>
                        </div>
                    )}
                </form>
            </div>
            {/* Buttons */}
        </Card>
    )
}
