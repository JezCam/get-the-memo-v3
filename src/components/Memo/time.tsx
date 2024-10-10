import { Play, Square } from '@untitled-ui/icons-react'
import React, { useEffect, useState } from 'react'

export default function Time(props: {
    direction: number
    time: number
    onStart: () => void
    onStop: () => void
    onEnd: () => void
}) {
    // state to store time
    const [countdownTime, setCountdownTime] = useState<number>(3)
    const [challengeTime, setChallengeTime] = useState<number>(props.time)
    // state to check countdown running or not
    const [countdownIsRunning, setCountdownIsRunning] = useState<boolean>(false)
    // state to check challenge running or not
    const [challengeIsRunning, setChallengeIsRunning] = useState<boolean>(false)
    const [challengeFinished, setChallengeFinished] = useState<boolean>(false)

    useEffect(() => {
        let countdownInterval: any
        let challengeInterval: any
        if (countdownIsRunning) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            countdownInterval = setInterval(
                () =>
                    setCountdownTime((prevTime) => {
                        if (prevTime <= 1) {
                            // start challenge timer
                            setCountdownIsRunning(false)
                            setChallengeIsRunning(true)
                            return 0
                        } else {
                            return prevTime - 1
                        }
                    }),
                1000
            )
        }
        if (challengeIsRunning) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            challengeInterval = setInterval(
                () =>
                    setChallengeTime((prevTime) => {
                        if (prevTime <= 0.1) {
                            setChallengeFinished(true)
                            reset()
                            return 0
                        } else {
                            return prevTime + 0.1 * props.direction
                        }
                    }),
                100
            )
        }
        return () => {
            clearInterval(challengeInterval)
            clearInterval(countdownInterval)
        }
    }, [countdownIsRunning, challengeIsRunning, countdownTime, challengeTime])

    // Method to start the timer
    const onStart = () => {
        props.onStart()
        setCountdownTime(3)
        setCountdownIsRunning(true)
    }

    // Method to stop the timer
    const onStop = () => {
        props.onStop()
        setChallengeFinished(false)
        reset()
    }

    const reset = () => {
        setCountdownIsRunning(false)
        setChallengeIsRunning(false)
        setCountdownTime(3)
        setChallengeTime(props.time)
    }

    return (
        <div
            className={`${countdownIsRunning || challengeIsRunning ? 'border-foreground/50' : ''} flex border-2 bg-primary/10 rounded-sm p-1.5 pr-3 gap-1.5 w-full min-w-fit h-fit`}
        >
            {countdownIsRunning || challengeIsRunning || challengeFinished ? (
                <div
                    onClick={onStop}
                    className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer"
                >
                    <Square className="w-4 h-4 text-primary" />
                </div>
            ) : (
                <div
                    onClick={onStart}
                    className="bg-gradient-to-b from-primary/10 to-primary/0 flex items-center justify-center border-primary/50 border-2 h-full aspect-square w-auto hover:bg-primary/20 rounded-sm hover:cursor-pointer"
                >
                    <Play className="w-4 h-4 text-primary" />
                </div>
            )}
            <div className={'flex w-full justify-center items-center'}>
                <div
                    className={`${countdownIsRunning || challengeIsRunning || challengeFinished ? 'w-full visible' : 'hidden'} flex gap-6 items-center justify-center transition-all duration-500`}
                >
                    <div className="flex flex-col items-center transition-all duration-500 w-10">
                        <p>Time</p>
                        <h3 className="leading-6 pb-1">
                            {challengeIsRunning
                                ? challengeTime.toFixed(1)
                                : challengeFinished
                                  ? 0
                                  : countdownTime.toFixed(0)}
                        </h3>
                    </div>
                    <div className="flex flex-col items-center transition-all duration-500">
                        <p>Score</p>
                        <h3 className="leading-6 pb-1">0</h3>
                    </div>
                </div>
                <div className="flex-[1] flex flex-col items-center transition-all duration-500">
                    <p>Best</p>
                    <h3 className="leading-6 pb-1">15</h3>
                </div>
            </div>
        </div>
    )
}
