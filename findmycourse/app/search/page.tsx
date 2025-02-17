'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card } from "@/components/ui/card"
import NewPage from './_components.tsx/newpage'

interface CourseData {
  // Define your expected JSON response structure here
  title: string
  description: string
  // etc...
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  
  const [isLoading, setIsLoading] = useState(false)
  const [courseData, setCourseData] = useState<CourseData | null>(null)
  const [error, setError] = useState<string | null>(null)

  // useState(() => {
  //   async function fetchCourseData() {
  //     try {
  //       setIsLoading(true)
  //       const response = await fetch('https://wfocw2fneyu5udjmypmsmkctce0qlpau.lambda-url.ca-central-1.on.aws/')
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch course data')
  //       }
  //       const data = await response.json()
  //       setCourseData(data)
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : 'An error occurred')
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   if (query) {
  //     fetchCourseData()
  //   }
  // }, [query])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[hsl(240,10%,3.9%)] flex items-center justify-center">
        <Card className="p-6 bg-zinc-800/10 border-yellow-300 backdrop-blur-lg">
          <div className="flex flex-col items-center gap-4">
            <div className="h-8 w-8 border-4 border-yellow-300 border-t-transparent rounded-full animate-spin" />
            <p className="text-yellow-300 text-lg">Loading course data...</p>
          </div>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[hsl(240,10%,3.9%)] flex items-center justify-center">
        <Card className="p-6 bg-zinc-800/10 border-red-500 backdrop-blur-lg">
          <p className="text-red-500 text-lg">Error: {error}</p>
        </Card>
      </div>
    )
  }

  return <NewPage query={query} courseData={courseData} />
}