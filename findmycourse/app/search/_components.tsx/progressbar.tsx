'use client'
import { useState, useEffect } from 'react';

interface ProgressBarProps {
    percentage: number;
}

export function ProgressBar({ percentage }: ProgressBarProps) {
    // Clamp percentage between 0 and 100
    const clampedPercentage = Math.max(0, Math.min(100, percentage))
    const circleLength = 212.06 // 3/4 of circle circumference (2π*45*0.75)
    const [offset, setOffset] = useState(circleLength)

    useEffect(() => {
        const progressOffset = circleLength - (circleLength * clampedPercentage / 100)
        setOffset(progressOffset)
    }, [clampedPercentage])

    return (
        <div className="relative w-32 h-32">
            <svg
                className="transform -rotate-90"
                viewBox="0 0 100 100"
            >
                {/* Background circle - 3/4 arc */}
                <path
                    d="M 95,50 a45,45 0 1 1 -45,-45"
                    stroke="rgb(63 63 70)"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={circleLength}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                />

                {/* Progress circle - 3/4 arc */}
                <path
                    d="M 95,50 a45,45 0 1 1 -45,-45"
                    stroke="rgb(34 197 94)"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={circleLength}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-yellow-300">
                    {clampedPercentage}%
                </span>
            </div>
        </div>
    )
}