import React from 'react'
import { Card } from '../ui/card'
import { Settings01 } from '@untitled-ui/icons-react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

export default function Configure(props: {
    onChange: (selection: string) => void
}) {
    return (
        <Card className="w-full h-full p-3 bg-card flex flex-col gap-6">
            <div className="flex gap-1.5 items-center">
                <Settings01 className="text-foreground w-4 h-4" />
                <h4 className="">Configure Memo </h4>
            </div>
            <div className="flex flex-col gap-3">
                <p className="font-semibold">Piece Selection</p>
                <RadioGroup
                    onValueChange={(value) => props.onChange(value)}
                    className="flex bg-foreground/10 rounded-sm p-3 justify-between"
                    defaultValue="both"
                >
                    <Label
                        htmlFor="r1"
                        className="hover:cursor-pointer bg-foreground/10 rounded-sm py-3 flex-1 flex justify-center"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="corners" id="r1" />
                            <h4>Corners</h4>
                        </div>
                    </Label>
                    <Label
                        htmlFor="r2"
                        className="hover:cursor-pointer bg-foreground/10 rounded-sm py-3 flex-1 flex justify-center"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                className="child"
                                value="edges"
                                id="r2"
                            />
                            <h4>Edges</h4>
                        </div>
                    </Label>
                    <Label
                        htmlFor="r3"
                        className="hover:cursor-pointer bg-foreground/10 rounded-sm py-3 flex-1 flex justify-center"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="both" id="r3" />
                            <h4>Both</h4>
                        </div>
                    </Label>
                </RadioGroup>
            </div>
        </Card>
    )
}
