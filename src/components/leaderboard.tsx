import React from 'react'
import { Card } from './ui/card'
import { Trophy01 } from '@untitled-ui/icons-react'

export default function Leaderboard() {
    return (
        <Card className="w-full h-full p-3 bg-card">
            <div className="flex gap-1.5 items-center">
                <Trophy01 className="text-foreground w-4 h-4" />
                <h4 className="">Global Top 10 </h4>
            </div>
        </Card>
    )
}
