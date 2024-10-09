import React from 'react'
import { Card } from '../ui/card'
import { BarChart04, Check, X, Target05 } from '@untitled-ui/icons-react'
import MemoLink from '../ui/memo-link'

export default function Stats(props: { correct: number; incorrect: number }) {
    return (
        <Card className="flex flex-col w-full h-full p-3 bg-card justify-between">
            <div className="flex justify-between">
                <div className="flex gap-1.5 items-center">
                    <BarChart04 className="text-foreground w-4 h-4" />
                    <h4>Today's Stats</h4>
                </div>
                <MemoLink href="" text="View All-Time Stats" />
            </div>
            <div className="grid grid-cols-3 gap-3 h-min w-full">
                <div className="flex flex-col gap-3 w-full">
                    <p className="font-bold">Correct Memo</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full h-full">
                        <div className="bg-memoGreen/10 flex items-center justify-center h-full aspect-square w-auto rounded-sm">
                            <Check className="w-5 h-5 text-memoGreen" />
                        </div>
                        <div className="flex flex-col w-full items-center pb-0.5">
                            <h3 className="leading-4 pb-1 pt-1.5">
                                {props.correct}
                            </h3>
                            <p>Correct</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <p className="font-bold">Incorrect Memo</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full h-full justify-between">
                        <div className="bg-memoRed/10 flex items-center justify-center h-full aspect-square w-auto rounded-sm">
                            <X className="w-5 h-5 text-memoRed" />
                        </div>
                        <div className="flex flex-col w-full items-center pb-0.5">
                            <h3 className="leading-4 pb-1 pt-1.5">
                                {props.incorrect}
                            </h3>
                            <p>Incorrect</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <p className="font-bold">Accuracy</p>
                    <div className="flex bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full h-full">
                        <div className="bg-primary/10 flex items-center justify-center h-full aspect-square w-auto rounded-sm">
                            <Target05 className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex flex-col w-full items-center pb-0.5">
                            <h3 className="leading-4 pb-1 pt-1.5">
                                {props.correct + props.incorrect != 0
                                    ? (
                                          (props.correct /
                                              (props.correct +
                                                  props.incorrect)) *
                                          100
                                      ).toFixed(0) + '%'
                                    : 'N/A'}
                            </h3>
                            <p>Correct</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
