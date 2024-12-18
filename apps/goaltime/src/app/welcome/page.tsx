import { redirect } from 'next/navigation'
import { getSanitizedUser, getProfile } from '@/server-utils/queries/user'
import WelcomeFlowClient from './client'

export default async function WelcomeFlowServer() {
  const user = await getSanitizedUser()
  const profile = await getProfile(user.id)
  if (profile) {
    const error = 'Profile already exists during welcome flow'
    console.error(error)
    const next = encodeURIComponent('/dashboard')
    redirect(`/error?error=${error}&next=${next}&solution=Please go to the dashboard.`)
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <WelcomeFlowClient userId={user.id} />
    </div>
  )
}