import { db } from '@/db/drizzle'
import { usersTable } from '@/db/schema'
import { eq } from 'drizzle-orm'

type CreateUserParams = {
    clerkUserID: string
    email: string
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
    onboardingDone: boolean
}

export async function createUser(params: CreateUserParams) {
    try {
        const result = await db.insert(usersTable).values(params);
        console.log(`Created user with Clerk ID: ${params.clerkUserID}`);
        return result;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

export async function deleteUser(clerkUserId: string) {
    const result = await db.delete(usersTable)
        .where(eq(usersTable.clerkUserID, clerkUserId));
    console.log(`Deleted user with Clerk ID: ${clerkUserId}`);
    return result;
}