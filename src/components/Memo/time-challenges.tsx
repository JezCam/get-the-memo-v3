import React from 'react'
import { Card } from '../ui/card'

import { ClockStopwatch } from '@untitled-ui/icons-react'

export default function TimeChallenges() {
    return (
        <Card className="w-full h-full p-3 bg-card">
            <div className="flex gap-1.5 items-center">
                <ClockStopwatch className="text-foreground w-4 h-4" />
                <h4 className="">Time Challenges</h4>
            </div>
        </Card>
    )
}
