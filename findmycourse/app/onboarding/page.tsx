import { isOnboardingComplete } from "@/server/db/onboarding"
import { FormPage } from "./_components/formpage"
import { redirect } from "next/navigation"



export default async function OnboardingPage() {
  // Check onboarding status server-side
  const isComplete = await isOnboardingComplete()
  
  // Redirect immediately if onboarding is done
  if (isComplete) {
    redirect("/home")
  }

  return <FormPage />
}