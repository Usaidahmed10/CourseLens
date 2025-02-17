'use client'
import { useState, useEffect } from 'react';

interface DifficultyMeterProps {
    difficulty: number; // 0 to 5
}

export function DifficultyMeter({ difficulty }: DifficultyMeterProps) {
    const clampedDifficulty = Math.max(0, Math.min(5, difficulty));
    const [pointerRotation, setPointerRotation] = useState(0);

    useEffect(() => {
        // Calculate rotation based on 180-degree arc (-90 to 180 degrees)
        const targetRotation = -90 + (clampedDifficulty / 5) * 270;
        setPointerRotation(targetRotation);
    }, [clampedDifficulty]);

    return (
        <div className="relative w-32">
            <div className="h-32">
                <svg
                    className="transform -rotate-90"
                    viewBox="0 0 100 100"
                >
                    <defs>
                        <linearGradient
                            id="difficulty-gradient"
                            x1="95"
                            y1="50"
                            x2="50"
                            y2="5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0%" stopColor="rgb(34, 197, 94)" />
                            <stop offset="50%" stopColor="rgb(234, 179, 8)" />
                            <stop offset="100%" stopColor="rgb(239, 68, 68)" />
                        </linearGradient>
                    </defs>

                    {/* Background arc spanning 270 degrees */}
                    <path
                        d="M 95,50 a45,45 0 1 1 -45,-45"
                        stroke="url(#difficulty-gradient)"
                        strokeWidth="10"
                        fill="none"
                        strokeLinecap="round"
                    />

                    {/* Pointer rotating around center */}
                    <g transform={`rotate(${pointerRotation} 50 50)`}>
                        <line
                            x1="50"
                            y1="50"
                            x2="50"
                            y2="85"
                            stroke="white"
                            strokeWidth="2"
                            className="transition-all duration-1000"
                        />
                        <circle cx="50" cy="50" r="3" fill="white" />
                    </g>
                </svg>
            </div>
            
            {/* Number display at bottom */}
            <div className="text-center mt-2">
                <span className="text-2xl font-bold text-white">
                    {clampedDifficulty.toFixed(1)}
                </span>
            </div>
        </div>
    );
}