'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface SearchPartProps {
  onTopicSearch?: () => void
}

export function SearchPart({ onTopicSearch }: SearchPartProps) {
  const router = useRouter()
  const [courseName, setCourseName] = useState("")
  const [courseCode, setCourseCode] = useState("")

  const handleCourseSearch = () => {
    const searchQuery = `${courseName} ${courseCode}`.trim()
    if (searchQuery) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div>
      {/* Content */}
      <div className="max-w-3xl mx-auto relative z-10 space-y-12">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 text-center leading-tight">
          Find Your Course
        </h1>

        {/* Topic Search */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Search by topic (e.g. Machine Learning, Data Structures)"
              className="bg-zinc-700 text-white border-green-700 flex-1"
            />
            <Button
              className="bg-green-700 hover:bg-green-600 text-white hover:text-yellow-300"
              onClick={onTopicSearch}
            >
              Search
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-zinc-700 flex-1" />
            <span className="text-yellow-300 font-semibold">OR</span>
            <div className="h-px bg-zinc-700 flex-1" />
          </div>

          {/* Course Code Search */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Course name (e.g. Computing)"
                className="bg-zinc-700 text-white border-green-700"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
              <Input
                placeholder="Course code (e.g. CMPUT 201)"
                className="bg-zinc-700 text-white border-green-700"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
              />
            </div>
            <Button 
              className="w-full bg-green-700 hover:bg-green-600 text-white hover:text-yellow-300"
              onClick={handleCourseSearch}
            >
              Search by Course
            </Button>
          </div>
        </div>

        {/* Additional helper text */}
        <p className="text-zinc-400 text-center text-sm">
          Search for courses by topic or enter specific course details
        </p>
      </div>
    </div>
  )
}