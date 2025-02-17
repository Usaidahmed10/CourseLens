import { pgTable, text, uuid, integer, boolean, jsonb } from 'drizzle-orm/pg-core';


export const usersTable = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  clerkUserID: text('clerk_user_id').notNull().unique(),
  email: text('email').notNull().unique(),
  currentYear: integer('current_year').notNull(),
  totalYears: integer('total_years').notNull(),
  university: text('university').notNull(),
  program: text('program').notNull(),
  major: text('major').notNull(),
  minor: text('minor').notNull(),
  coursesCompleted: jsonb('courses_completed').notNull().$type<Record<string, any>>(),
  studyStyle: text('study_style').notNull(),
  nonAcademicWorkload: text('non_academic_workload').notNull(),
  aspiringCareer: text('aspiring_career').notNull(),
  onboardingDone: boolean('onboarding_done').notNull().default(false)
});