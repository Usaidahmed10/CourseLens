'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useToast } from "@/hooks/use-toast"
import { saveOnboardingData } from "@/server/db/onboarding"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    currentYear: z.number().min(1).max(6),
    totalYears: z.number().min(1).max(6),
    university: z.string().min(2),
    program: z.string().min(2),
    major: z.string().min(2),
    minor: z.string().min(2),
    coursesCompleted: z.record(z.string(), z.any()),
    studyStyle: z.string().min(2),
    nonAcademicWorkload: z.string().min(2),
    aspiringCareer: z.string().min(2),
  })

export function FormPage(){
    const { toast } = useToast()
    const router = useRouter()
  

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        currentYear: 1,
        totalYears: 4,
        university: "University of Alberta",
        program: "",
        major: "",
        minor: "",
        coursesCompleted: {},
        studyStyle: "",
        nonAcademicWorkload: "",
        aspiringCareer: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await saveOnboardingData(values)
            toast({
            title: "Success",
            description: "Your profile has been saved.",
            variant: "default"
            })
            router.push("/home")
        } catch (error) {
            console.error("Error during onboarding:", error)
            toast({
            title: "Error",
            description: "There was a problem saving your profile. Please try again.",
            variant: "destructive"
            })
        }
    }
    
    
    return (
        <div className="min-h-screen bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div
          className="absolute h-full w-full bg-[radial-gradient(white_1px,transparent_1px)] opacity-20"
          style={{ backgroundSize: '20px 20px' }}
        />
      </div>

      {/* Existing gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,197,94,0.3)_0%,rgba(34,197,94,0.1)_70%,transparent_100%)] opacity-80 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto">
        <Card className="bg-zinc-800/10 border-yellow-300 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-yellow-300 text-center">
              Complete Your Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Academic Year Info */}
                  <FormField
                    control={form.control}
                    name="currentYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-yellow-300">Current Year</FormLabel>
                        <FormControl>
                          <Select 
                            onValueChange={val => field.onChange(parseInt(val))}
                            defaultValue={field.value.toString()}
                          >
                            <SelectTrigger className="bg-zinc-500 text-white">
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-700">
                              {[1,2,3,4,5,6].map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                  Year {year}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="totalYears"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-yellow-300">Program Length (Years)</FormLabel>
                        <FormControl>
                          <Select 
                            onValueChange={val => field.onChange(parseInt(val))}
                            defaultValue={field.value.toString()}
                          >
                            <SelectTrigger className="bg-zinc-700 text-white">
                              <SelectValue placeholder="Select length" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-700">
                              {[1,2,3,4,5,6].map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                  {year} Years
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Program Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="program"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-yellow-300">Program</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g. Bachelor of Science" 
                            className="bg-zinc-700 text-white border-green-700"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="major"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-yellow-300">Major</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g. Computer Science" 
                            className="bg-zinc-700 text-white border-green-700"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="minor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-yellow-300">Minor (if applicable)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g. Mathematics" 
                          className="bg-zinc-700 text-white border-green-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Study Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="studyStyle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-yellow-300">Study Style</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="bg-zinc-700 text-white">
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-700">
                              <SelectItem value="visual">Visual Learner</SelectItem>
                              <SelectItem value="auditory">Auditory Learner</SelectItem>
                              <SelectItem value="kinesthetic">Hands-on Learner</SelectItem>
                              <SelectItem value="reading">Reading/Writing Learner</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="nonAcademicWorkload"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-yellow-300">Non-Academic Workload</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="bg-zinc-700 text-white">
                              <SelectValue placeholder="Select workload" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-700">
                              <SelectItem value="none">No Extra Commitments</SelectItem>
                              <SelectItem value="light">Light (0-10 hrs/week)</SelectItem>
                              <SelectItem value="moderate">Moderate (10-20 hrs/week)</SelectItem>
                              <SelectItem value="heavy">Heavy (20+ hrs/week)</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="aspiringCareer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-yellow-300">Aspiring Career</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your career goals..." 
                          className="bg-zinc-700 text-white border-green-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-green-700 hover:bg-green-600 text-white hover:text-yellow-300"
                >
                  Complete Profile
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
    )
}