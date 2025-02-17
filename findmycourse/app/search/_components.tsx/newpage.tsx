'use client'

import { ProgressBar } from './progressbar'
import { DifficultyMeter } from './difficultymeter'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useState } from 'react'
import { Bookmark, ChevronRight } from "lucide-react"
import Image from 'next/image'

interface NewPageProps {
  query: string | null
  courseData: CourseData | null
}

export default function NewPage({ query, courseData }: NewPageProps) {
  const percentage = 75
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen p-4">
      <div className="flex gap-4 justify-center flex-col items-center">
        <div className="flex gap-4 justify-center">
          <div className="flex flex-col gap-4 items-center w-48">
            <button className="w-full h-10 border border-[rgb(34,197,94)] bg-[rgba(59,48,44,1)] text-white rounded-md hover:bg-[rgba(79,68,64,1)]">
              Previous Page
            </button>
            <Card className="w-full border border-[rgb(34,197,94)] bg-[rgba(59,48,44,1)] relative z-10 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-center text-white">
                  Difficulty Meter
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <DifficultyMeter difficulty={courseData?.difficulty_info?.difficulty_level} />
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-[55rem] flex flex-col items-center justify-center">
              <h1 className="text-yellow-300 text-4xl font-bold mb-2">
                {query ? query.toUpperCase() : 'NO COURSE SELECTED'}
              </h1>
            </div>
            <Card className="w-[55rem] h-full border border-[rgb(34,197,94)] bg-[rgba(59,48,44,1)] relative z-10 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-center text-white">
                  Course Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-4 items-center w-48">
            <button className="w-full h-10 border border-[rgb(34,197,94)] bg-[rgba(59,48,44,1)] text-white rounded-md hover:bg-[rgba(79,68,64,1)]">
              Next Page
            </button>
            <Card className="w-full border border-[rgb(34,197,94)] bg-[rgba(59,48,44,1)] relative z-10 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-center text-white">
                  Difficulty
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <DifficultyMeter difficulty={5} />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* New heading section */}
        <div className="flex justify-start w-full px-9 mt-5">
          <div className="w-full" >
            <div className="flex items-center gap-2">
              <Image
                src="./poll.svg"
                alt="Poll Icon"
                width={24}
                height={24}
              />
              <h2 className="text-yellow-300 text-2xl font-bold">
                What Students Think?
              </h2>
            </div>

            {/* Scrollable cards container */}
            <div className="mt-4 overflow-x-auto">
              <div className="flex gap-4 pb-4" style={{ minWidth: "min-content" }}>
                {/* Example cards - you can map through data to create these */}
                {[1, 2, 3, 4, 5].map((item) => (
                  <Card
                    key={item}
                    onClick={() => setExpandedCard(expandedCard === item ? null : item)}
                    className={`
                      flex-shrink-0 w-[25rem] border border-[rgb(34,197,94)] 
                      bg-[rgba(59,48,44,1)] relative backdrop-blur-lg
                      transition-all duration-300 ease-in-out cursor-pointer
                      ${expandedCard === item ? 'min-h-[20rem]' : 'h-[10rem]'}
                    `}
                  >
                    <CardContent className="p-4 flex flex-col">
                      {/* Top section - always visible */}
                      <div className="flex gap-8">
                        <div className="w-24">
                          <div className="transform scale-75">
                            <ProgressBar percentage={75} />
                          </div>
                        </div>
                        <div className="flex-1 flex justify-between items-center">
                          <div>
                            <h3 className="text-white font-semibold mb-2">Student Feedback</h3>
                            <div className="text-white/80 text-sm">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Sed do eiusmod tempor incididunt ut labore.
                            </div>
                          </div>
                          <div className="self-center ml-4">
                            <ChevronRight
                              className={`text-white transition-transform duration-300 ease-in-out
                                ${expandedCard === item ? 'rotate-90' : 'rotate-0'}
                                group-hover:opacity-100 opacity-80
                              `}
                              size={20}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Bottom section - expanded content */}
                      {expandedCard === item && (
                        <div className="mt-4 pt-4 border-t border-[rgb(34,197,94)]/30 w-full">
                          <div className="flex gap-4 mb-4">
                            <Card className="flex-1 h-20 border border-[rgb(34,197,94)] bg-[rgba(79,68,64,1)]">
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h4 className="text-white font-semibold">Total Upvotes</h4>
                                      <div className="text-green-500">
                                        <svg
                                          className="w-4 h-4"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                    <p className="text-white/80 text-sm">85%</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="flex-1 h-20 border border-[rgb(34,197,94)] bg-[rgba(79,68,64,1)]">
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h4 className="text-white font-semibold">Confidence</h4>
                                      <div className="text-green-500">
                                        <svg
                                          className="w-5 h-5"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                    <p className="text-white/80 text-sm">1,234 students</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          <span className="block text-white/80 text-sm">
                            Additional content that appears when expanded.
                            You can add more details, ratings, or any other information here.
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Horizontal Scrollable Cards */}
            <div className="mt-0 overflow-x-auto">
              <div className="flex gap-4 pb-4" style={{ minWidth: "min-content" }}>
                {[1, 2, 3, 4, 5].map((item) => (
                  <Card
                    key={item}
                    className="
                      flex-shrink-0 w-64 h-[100px]
                      border border-[rgb(34,197,94)]
                      bg-[rgba(59,48,44,1)]
                      relative backdrop-blur-lg
                    "
                  >
                    <CardContent className="p-3 flex flex-col h-full justify-between">
                      <div className="space-y-1">
                        <div className="text-white text-sm font-medium">
                          First line of text here
                        </div>
                        <div className="text-white/80 text-sm">
                          Second line of text here
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/reddit.svg"
                            alt="Reddit Logo"
                            width={16}
                            height={16}
                          />
                          <span className="text-white/80 text-xs">
                            r/ualberta
                          </span>
                        </div>
                        <ChevronRight
                          className="text-white opacity-80 h-4 w-4"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Duplicated "What Students Think" section */}
        <div className="flex justify-start w-full px-9 mt-5">
          <div className="w-full" >
            <div className="flex items-center gap-2">
              <Image
                src="./poll.svg"
                alt="Poll Icon"
                width={24}
                height={24}
              />
              <h2 className="text-yellow-300 text-2xl font-bold">
                Thoughts on instructors?
              </h2>
            </div>

            {/* Duplicated scrollable expandable cards container */}
            <div className="mt-4 overflow-x-auto">
              <div className="flex gap-4 pb-4" style={{ minWidth: "min-content" }}>
                {[1, 2, 3, 4, 5].map((item) => (
                  <Card
                    key={item}
                    onClick={() => setExpandedCard(expandedCard === item ? null : item)}
                    className={`
                      flex-shrink-0 w-[25rem] border border-[rgb(34,197,94)] 
                      bg-[rgba(59,48,44,1)] relative backdrop-blur-lg
                      transition-all duration-300 ease-in-out cursor-pointer
                      ${expandedCard === item ? 'min-h-[20rem]' : 'h-[10rem]'}
                    `}
                  >
                    <CardContent className="p-4 flex flex-col">
                      {/* Top section - always visible */}
                      <div className="flex gap-8">
                        <div className="w-24">
                          <div className="transform scale-75">
                            <ProgressBar percentage={75} />
                          </div>
                        </div>
                        <div className="flex-1 flex justify-between items-center">
                          <div>
                            <h3 className="text-white font-semibold mb-2">Student Feedback</h3>
                            <div className="text-white/80 text-sm">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Sed do eiusmod tempor incididunt ut labore.
                            </div>
                          </div>
                          <div className="self-center ml-4">
                            <ChevronRight
                              className={`text-white transition-transform duration-300 ease-in-out
                                ${expandedCard === item ? 'rotate-90' : 'rotate-0'}
                                group-hover:opacity-100 opacity-80
                              `}
                              size={20}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Bottom section - expanded content */}
                      {expandedCard === item && (
                        <div className="mt-4 pt-4 border-t border-[rgb(34,197,94)]/30 w-full">
                          <div className="flex gap-4 mb-4">
                            <Card className="flex-1 h-20 border border-[rgb(34,197,94)] bg-[rgba(79,68,64,1)]">
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h4 className="text-white font-semibold">Total Upvotes</h4>
                                      <div className="text-green-500">
                                        <svg
                                          className="w-4 h-4"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                    <p className="text-white/80 text-sm">85%</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="flex-1 h-20 border border-[rgb(34,197,94)] bg-[rgba(79,68,64,1)]">
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h4 className="text-white font-semibold">Confidence</h4>
                                      <div className="text-green-500">
                                        <svg
                                          className="w-5 h-5"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                    <p className="text-white/80 text-sm">1,234 students</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          <span className="block text-white/80 text-sm">
                            Additional content that appears when expanded.
                            You can add more details, ratings, or any other information here.
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Duplicated Reddit sources cards */}
            <div className="mt-0 overflow-x-auto">
              <div className="flex gap-4 pb-4" style={{ minWidth: "min-content" }}>
                {[1, 2, 3, 4, 5].map((item) => (
                  <Card
                    key={item}
                    className="
                      flex-shrink-0 w-64 h-[100px]
                      border border-[rgb(34,197,94)]
                      bg-[rgba(59,48,44,1)]
                      relative backdrop-blur-lg
                    "
                  >
                    <CardContent className="p-3 flex flex-col h-full justify-between">
                      <div className="space-y-1">
                        <div className="text-white text-sm font-medium">
                          First line of text here
                        </div>
                        <div className="text-white/80 text-sm">
                          Second line of text here
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/reddit.svg"
                            alt="Reddit Logo"
                            width={16}
                            height={16}
                          />
                          <span className="text-white/80 text-xs">
                            r/ualberta
                          </span>
                        </div>
                        <ChevronRight
                          className="text-white opacity-80 h-4 w-4"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recently Taught Professors section */}
        <div className="flex justify-start w-full px-9 mt-5">
          <div className="w-full">
            <div className="flex items-center gap-2">
              <Image
                src="./poll.svg"
                alt="Poll Icon"
                width={24}
                height={24}
              />
              <h2 className="text-yellow-300 text-2xl font-bold">
                Recent Instructors
              </h2>
            </div>

            {/* Scrollable professor cards */}
            <div className="mt-4 overflow-x-auto">
              <div className="flex gap-4 pb-4" style={{ minWidth: "min-content" }}>
                {[1, 2, 3, 4, 5].map((item) => (
                  <Card
                    key={item}
                    className="
                      flex-shrink-0 w-[320px]
                      border border-[rgb(34,197,94)]
                      bg-[rgba(59,48,44,1)]
                      relative backdrop-blur-lg
                    "
                  >
                    <CardContent className="p-6 space-y-4">
                      {/* Rating Section */}
                      <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-white text-4xl font-bold">3.8</span>
                          <span className="text-white/60">/5</span>
                        </div>
                        <p className="text-sm text-white/80">
                          Based on 30 ratings
                        </p>
                      </div>

                      {/* Professor Name */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">Professor Name</h3>
                        <Bookmark className="w-5 h-5 text-white/60" />
                      </div>

                      {/* Department */}
                      <p className="text-sm text-white/80">
                        Computer Science Department
                      </p>

                      {/* Stats */}
                      <div className="flex gap-6 pt-2">
                        <div>
                          <p className="text-2xl font-bold text-white">67%</p>
                          <p className="text-xs text-white/60">Would take again</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">4.1</p>
                          <p className="text-xs text-white/60">Difficulty</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}