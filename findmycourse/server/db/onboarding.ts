"use server"

import { db } from "@/db/drizzle"
import { usersTable } from "@/db/schema"
import { auth } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"

interface OnboardingData {
  currentYear: number
  totalYears: number
  university: string
  program: string
  major: string
  minor: string
  coursesCompleted: Record<string, any>
  studyStyle: string
  nonAcademicWorkload: string
  aspiringCareer: string
}

export async function saveOnboardingData(data: OnboardingData) {
  const { userId } = await auth()
  
  if (!userId) {
    throw new Error("Not authenticated")
  }

  try {
    // Update user record with onboarding data
    await db.update(usersTable)
      .set({
        currentYear: data.currentYear,
        totalYears: data.totalYears,
        university: data.university,
        program: data.program,
        major: data.major,
        minor: data.minor,
        coursesCompleted: data.coursesCompleted,
        studyStyle: data.studyStyle,
        nonAcademicWorkload: data.nonAcademicWorkload,
        aspiringCareer: data.aspiringCareer,
        onboardingDone: true
      })
      .where(eq(usersTable.clerkUserID, userId))

    return { success: true }
  } catch (error) {
    console.error("Error saving onboarding data:", error)
    throw new Error("Failed to save onboarding data")
  }
}

export async function isOnboardingComplete() {
  const { userId } = await auth()
  
  if (!userId) {
    throw new Error("Not authenticated")
  }

  try {
    const user = await db
      .select({ onboardingDone: usersTable.onboardingDone })
      .from(usersTable)
      .where(eq(usersTable.clerkUserID, userId))
      .limit(1)
      .then(rows => rows[0])

    return user?.onboardingDone ?? false
  } catch (error) {
    console.error("Error checking onboarding status:", error)
    throw new Error("Failed to check onboarding status")
  }
}