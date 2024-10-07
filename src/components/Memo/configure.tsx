import React from 'react'
import { Card } from '../ui/card'
import { Settings01 } from '@untitled-ui/icons-react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

export default function Configure() {
    return (
        <Card className="w-full h-full p-3 bg-card flex flex-col gap-6">
            <div className="flex gap-1.5 items-center">
                <Settings01 className="text-foreground w-4 h-4" />
                <h4 className="">Configure Memo </h4>
            </div>
            <RadioGroup
                className="flex bg-foreground/10 rounded-sm p-3 justify-between"
                defaultValue="comfortable"
            >
                <div className="bg-foreground/10 rounded-sm py-3 flex-1 flex justify-center">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r1" />
                        <Label htmlFor="r1">Default</Label>
                    </div>
                </div>
                <div className="bg-foreground/10 rounded-sm py-3 flex-1 flex justify-center">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2">Comfortable</Label>
                    </div>
                </div>
                <div className="bg-foreground/10 rounded-sm py-3 flex-1 flex justify-center">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="compact" id="r3" />
                        <Label htmlFor="r3">Compact</Label>
                    </div>
                </div>
            </RadioGroup>
        </Card>
    )
}
