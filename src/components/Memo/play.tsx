'use client'

import React, { useEffect, useState, useRef } from 'react'
import Piece from './piece'

import { corners, edges, PieceType } from '@/lib/definitions'
import { getRandom, randomRotate, titleCase } from '@/lib/utils'
import { Card } from '../ui/card'
import {
    Eye,
    Cube01,
    ArrowRight,
    RefreshCw01,
    CornerDownLeft,
} from '@untitled-ui/icons-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

import { Selection } from '@/lib/definitions'

enum State {
    Guessing,
    TryingAgain,
    Revealed,
    Correct,
    Incorrect,
}

export default function Play(props: {
    colours: string[]
    letters: string[]
    selection: Selection
    onCorrect: () => void
    onIncorrect: () => void
}) {
    const [state, setState] = useState<State>(State.Guessing)
    const [piece, setPiece] = useState<PieceType>()
    const [pieceLetters, setPieceLetters] = useState<string[]>([])
    const [pieceColours, setPieceColours] = useState<string[]>([])

    // Inputs
    const [a, setA] = useState<string>('')
    const [b, setB] = useState<string>('')
    const [c, setC] = useState<string>('')
    const aRef = useRef<HTMLInputElement>(null)
    const bRef = useRef<HTMLInputElement>(null)
    const cRef = useRef<HTMLInputElement>(null)
    const [inputTextColour, setInputTextColour] = useState<string>('foreground')

    // Submit
    const submitRef = useRef<HTMLButtonElement>(null)

    const getRandomPiece = () => {
        switch (props.selection) {
            case Selection.Corners:
                return getRandom(corners)
            case Selection.Edges:
                return getRandom(edges)
            case Selection.Both:
                return getRandom(corners, edges)
            default:
                return getRandom(corners)
        }
    }

    const setLettersIncorrect = () => {
        setInputTextColour('var(--memoRed)')
        setState(State.Revealed)
        setA(pieceLetters[0])
        setB(pieceLetters[1])
        setC(pieceLetters[2])
    }

    const handleReveal = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        state != State.TryingAgain && props.onIncorrect()
        setLettersIncorrect()
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        switch (piece?.type) {
            case 'corner':
                if (
                    JSON.stringify([a, b, c].map((l) => l.toUpperCase())) ===
                    JSON.stringify(pieceLetters)
                ) {
                    state != State.TryingAgain && props.onCorrect()
                    setInputTextColour('var(--memoGreen)')
                    setState(State.Correct)
                } else {
                    state != State.TryingAgain && props.onIncorrect()
                    setLettersIncorrect()
                    setState(State.Incorrect)
                }
                break
            case 'edge':
                if (
                    JSON.stringify([a, b].map((l) => l.toUpperCase())) ===
                    JSON.stringify(pieceLetters)
                ) {
                    state != State.TryingAgain && props.onCorrect()
                    setInputTextColour('var(--memoGreen)')
                    setState(State.Correct)
                } else {
                    state != State.TryingAgain && props.onIncorrect()
                    setLettersIncorrect()
                    setState(State.Incorrect)
                }
                break
        }
    }

    const handleTryAgain = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setInputTextColour('var(--foreground)')
        setState(State.TryingAgain)
        resetLetters()
        aRef.current?.focus()
    }

    const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setInputTextColour('var(--foreground)')
        resetPiece()
        resetLetters()
        setState(State.Guessing)
        aRef.current?.focus()
    }

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
        nextInputRef: React.RefObject<HTMLInputElement | HTMLButtonElement>
    ) => {
        if (event.key === 'Enter' && nextInputRef.current) {
            event.preventDefault() // Prevent form submission on Enter
            nextInputRef.current.focus() // Focus on the next input field
        }
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
            (sticker) => props.letters[sticker.letter]
        )
        const _pieceColours = _pieceRotated.stickers.map(
            (sticker) => props.colours[sticker.colour]
        )
        setPiece(_pieceRotated)
        setPieceLetters(_pieceLetters)
        setPieceColours(_pieceColours)
    }

    useEffect(() => {
        resetPiece()
    }, [])

    useEffect(() => {
        switch (props.selection) {
            case Selection.Both:
                return
            case Selection.Corners:
                if (piece?.type === 'corner') {
                    return
                }
                break
            case Selection.Edges:
                if (piece?.type === 'edge') {
                    return
                }
                break
        }
        resetPiece()
    }, [props.selection])

    useEffect(() => {
        if (!piece) return
        const _pieceLetters = piece.stickers.map(
            (sticker) => props.letters[sticker.letter]
        )
        setPieceLetters(_pieceLetters)
    }, [props.letters])

    return (
        <Card className="flex flex-col w-full p-3 bg-card relative h-full">
            {/* Top */}
            <div className="flex justify-between items-center">
                <div className="flex gap-1.5 items-center">
                    <Cube01 className="text-foreground w-4 h-4" />
                    <h4>Enter the Letters</h4>
                </div>
                <p>
                    Current piece:{' '}
                    <span className="text-foreground font-medium">
                        {titleCase(piece ? piece.type : 'corner')}
                    </span>
                </p>
            </div>
            {/* Piece only needs to know what type it is, and either 2 or 3 colours */}
            <div className="flex items-center justify-center flex-1 max-w-full">
                <Piece
                    type={piece ? piece.type : 'corner'}
                    colours={piece ? pieceColours : ['#FFF', '#FFF', '#FFF']}
                />
            </div>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col p-3 pt-0 gap-3"
            >
                {/* Inputs */}
                <div className="flex gap-[20px]">
                    {/* A */}
                    <Input
                        disabled={state === State.Revealed}
                        ref={aRef}
                        onKeyDown={(e) => handleKeyDown(e, bRef)}
                        value={a}
                        onChange={(e) => setA(e.target.value.slice(0, 1))}
                        style={
                            {
                                '--ring-colour': pieceColours[0],
                                '--text-colour': inputTextColour,
                            } as React.CSSProperties
                        }
                        className={`!text-[var(--text-colour)] text-center text-2xl p-3 h-fit bg-background !border-[var(--text-colour)] focus:outline-none focus:!ring-2 !ring-[var(--ring-colour)] ring-offset-background focus:ring-offset-2`}
                    />
                    {/* B */}
                    <Input
                        disabled={state === State.Revealed}
                        ref={bRef}
                        onKeyDown={(e) =>
                            handleKeyDown(
                                e,
                                piece?.type === 'corner' ? cRef : submitRef
                            )
                        }
                        value={b}
                        onChange={(e) => setB(e.target.value.slice(0, 1))}
                        style={
                            {
                                '--ring-colour': pieceColours[1],
                                '--text-colour': inputTextColour,
                            } as React.CSSProperties
                        }
                        className={`!text-[var(--text-colour)] text-center text-2xl p-3 h-fit bg-background !border-[var(--text-colour)] focus:outline-none focus:!ring-2 !ring-[var(--ring-colour)] ring-offset-background focus:ring-offset-2`}
                    />
                    {/* C */}
                    {piece?.type == 'corner' && (
                        <Input
                            disabled={state === State.Revealed}
                            ref={cRef}
                            onKeyDown={(e) => handleKeyDown(e, submitRef)}
                            value={c}
                            onChange={(e) => setC(e.target.value.slice(0, 1))}
                            style={
                                {
                                    '--ring-colour': pieceColours[2],
                                    '--text-colour': inputTextColour,
                                } as React.CSSProperties
                            }
                            className={`!text-[var(--text-colour)] text-center text-2xl p-3 h-fit bg-background !border-[var(--text-colour)] focus:outline-none focus:!ring-2 !ring-[var(--ring-colour)] ring-offset-background focus:ring-offset-2`}
                        />
                    )}
                </div>
                {state === State.Guessing || state === State.TryingAgain ? (
                    <div className="flex gap-[20px]">
                        <Button
                            onClick={handleReveal}
                            variant="destructive"
                            className="w-full text-md py-3 h-fit text-center text-primary align-middle gap-1.5 border-memoRed border-[1px]"
                        >
                            Reveal
                            <Eye className="text-primary w-4 h-4" />
                        </Button>
                        <Button
                            type="submit"
                            ref={submitRef}
                            className="w-full text-md py-3 h-fit focus:!ring-2 ring-offset-background gap-1.5 focus:ring-offset-2"
                        >
                            Submit
                            <CornerDownLeft className="text-background w-4 h-4" />
                        </Button>
                    </div>
                ) : (
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
                            className="w-full text-md py-3 h-fit text-center align-middle gap-1.5 focus:!ring-2 ring-offset-background focus:ring-offset-2"
                        >
                            Next
                            <ArrowRight className="text-background w-4 h-4" />
                        </Button>
                    </div>
                )}
            </form>
            {/* Buttons */}
        </Card>
    )
}
