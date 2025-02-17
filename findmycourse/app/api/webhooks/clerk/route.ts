import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { createUser, deleteUser } from '@/server/db/users'

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret.
  if (!process.env.CLERK_WEBHOOK_SECRET) {
    return new Response('Error occurred -- webhook secret not found', {
      status: 400,
    })
  }
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occured', {
      status: 400,
    })
  }

  switch (evt.type) {
    case 'user.created':
      await createUser({ 
        clerkUserID: evt.data.id,
        email: evt.data.email_addresses[0].email_address,
        currentYear: -1,
        totalYears: -1,
        university: 'University of Alberta',
        program: "unknown",
        major: "unknown",
        minor: "unknown",
        coursesCompleted: {},
        studyStyle: "unknown",
        nonAcademicWorkload: "unknown",
        aspiringCareer: "unknown",
        onboardingDone: false,
       })
      break
    case 'user.deleted': {
        if (evt.data.id != null) {
            await deleteUser(evt.data.id)
        }
    }
  }

  return new Response('', { status: 200 })
}