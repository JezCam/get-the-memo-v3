import React from 'react'
import { Card } from '../ui/card'
import { BarChart04 } from '@untitled-ui/icons-react'

export default function Stats() {
    return (
        <Card className="w-full h-full p-3 bg-card">
            <div className="flex gap-1.5 items-center">
                <BarChart04 className="text-foreground w-4 h-4" />
                <h4 className="">Today's Stats</h4>
            </div>
        </Card>
    )
}
