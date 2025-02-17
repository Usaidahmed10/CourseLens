CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clerk_user_id" text NOT NULL,
	"email" text NOT NULL,
	"current_year" integer NOT NULL,
	"total_years" integer NOT NULL,
	"university" text NOT NULL,
	"program" text NOT NULL,
	"major" text NOT NULL,
	"minor" text NOT NULL,
	"courses_completed" jsonb NOT NULL,
	"study_style" text NOT NULL,
	"non_academic_workload" text NOT NULL,
	"aspiring_career" text NOT NULL,
	"onboarding_done" boolean DEFAULT false NOT NULL,
	CONSTRAINT "users_clerk_user_id_unique" UNIQUE("clerk_user_id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DROP TABLE "votes" CASCADE;