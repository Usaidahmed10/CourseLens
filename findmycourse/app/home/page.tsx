'use client'

import { useState } from 'react'
import { SearchPart } from "./_components/SearchPart"
import { CourseSelection } from "./_components/CourseSelection"

export default function Home() {
  const [showCourseSelection, setShowCourseSelection] = useState(false)

  return (
    <main className="min-h-screen bg-zinc-900">
      <SearchPart onTopicSearch={() => {
        console.log('Search Clicked')
        setShowCourseSelection(true)
      }} />
      {showCourseSelection ? <CourseSelection /> : null}
    </main>
  )
}