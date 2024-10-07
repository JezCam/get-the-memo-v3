import React, { useEffect, useState } from 'react'

import { defaultColours, defaultLetters } from '../../lib/definitions'
import Play from './play'
import Configure from './configure'
import TimeChallenges from './time-challenges'
import Stats from './stats'

export enum Selection {
    Corners,
    Edges,
    Both,
}

export default function Board() {
    const [selection, setSelection] = useState<Selection>(Selection.Both)

    const handleSelection = (selection: string) => {
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

    return (
        <div className="h-full grid grid-rows-10 gap-3">
            <div className="row-span-2 grid grid-cols-5 gap-6">
                <div className="col-span-3">
                    <TimeChallenges />
                </div>
                <div className="col-span-2">
                    <Stats />
                </div>
            </div>
            <div className="row-span-8 grid grid-cols-5 gap-6 h-full">
                <div className="col-span-3">
                    <Play
                        colours={defaultColours}
                        letters={defaultLetters}
                        selection={selection}
                    />
                </div>
                <div className="col-span-2">
                    <Configure
                        onChange={(selection: string) =>
                            handleSelection(selection)
                        }
                    />
                </div>
            </div>
        </div>
    )
}
