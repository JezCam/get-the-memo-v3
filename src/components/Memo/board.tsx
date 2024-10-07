import React from 'react'

import { defaultColours, defaultLetters } from '../../lib/definitions'
import Play from './play'
import Configure from './configure'
import TimeChallenges from './time-challenges'
import Stats from './stats'

export default function Board() {
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
                        selection={'both'}
                    />
                </div>
                <div className="col-span-2">
                    <Configure />
                </div>
            </div>
        </div>
    )
}
