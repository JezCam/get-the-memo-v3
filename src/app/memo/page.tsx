'use client'

import React, { useState } from 'react'

import { defaultColours, defaultLetters } from '../../lib/definitions'
import Play from '../../components/Memo/play'
import Configure from '../../components/Memo/configure'
import TimeChallenges from '../../components/Memo/time-challenges'
import Stats from '../../components/Memo/stats'

export enum Selection {
    Corners,
    Edges,
    Both,
}

export default function Board() {
    const [selection, setSelection] = useState<Selection>(Selection.Both)
    const [colours, setColours] = useState<string[]>(defaultColours)
    const [letters, setLetters] = useState<string[]>(defaultLetters)
    const [correct, setCorrect] = useState<number>(0)
    const [incorrect, setIncorrect] = useState<number>(0)

    const handleUpdateSelection = (selection: string) => {
        switch (selection) {
            case 'corners':
                setSelection(Selection.Corners)
                break
            case 'edges':
                setSelection(Selection.Edges)
                break
            case 'both':
                setSelection(Selection.Both)
                break
        }
    }

    const handleUpdateLetters = (letters: string[]) => {
        setLetters(letters)
    }

    const handleUpdateColours = (colours: string[]) => {
        setColours(colours)
    }

    const handleCorrect = () => {
        setCorrect((correct) => correct + 1)
    }
    const handleIncorrect = () => {
        setIncorrect((incorrect) => incorrect + 1)
    }

    return (
        <div className="h-full grid grid-rows-10 gap-3">
            <div className="row-span-2 grid grid-cols-5 gap-6">
                <div className="col-span-3">
                    <TimeChallenges />
                </div>
                <div className="col-span-2">
                    <Stats correct={correct} incorrect={incorrect} />
                </div>
            </div>
            <div className="row-span-8 grid grid-cols-5 gap-6 h-full">
                <div className="col-span-3">
                    <Play
                        colours={colours}
                        letters={letters}
                        selection={selection}
                        onCorrect={handleCorrect}
                        onIncorrect={handleIncorrect}
                    />
                </div>
                <div className="col-span-2">
                    <Configure
                        onUpdateSelection={handleUpdateSelection}
                        selection={selection}
                        onUpdateLetters={handleUpdateLetters}
                        letters={letters}
                        onUpdateColours={handleUpdateColours}
                        colours={colours}
                        onResetLetters={() => setLetters(defaultLetters)}
                        onResetColours={() => setColours(defaultColours)}
                    />
                </div>
            </div>
        </div>
    )
}
