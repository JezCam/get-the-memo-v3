import React, { useEffect, useState } from 'react'
import { Card } from '../ui/card'

import { ClockStopwatch, Play, Square } from '@untitled-ui/icons-react'
import Time from './time'

enum Challenge {
    None = 'none',
    Rush30 = '30 Second Rush',
    Rush1Minute = '1 Minute Rush',
    Sprint = '10 Correct Sprint',
    Blind = '30 Second Blind',
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
                {[
                    Challenge.Rush30,
                    Challenge.Rush1Minute,
                    Challenge.Sprint,
                    Challenge.Blind,
                ].map((challenge) => (
                    <div
                        className={`${challengeState === challenge ? 'flex-[3]' : 'flex-[1]'} flex flex-col gap-3 min-w-fit transition-all duration-500`}
                    >
                        <p className="font-bold">{challenge}</p>
                        <Time
                            direction={-1}
                            time={3}
                            onStart={() => setChallengeState(challenge)}
                            onEnd={() => setChallengeState(Challenge.None)}
                            onStop={() => setChallengeState(Challenge.None)}
                        />
                    </div>
                ))}
            </div>
        </Card>
    )
}
