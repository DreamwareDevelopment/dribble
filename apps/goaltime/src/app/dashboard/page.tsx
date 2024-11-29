import React from 'react'

import { getUserAndProfile } from '../queries/user'
import { UserAvatar } from '../../components/UserAvatar'
import { GoalCarousel } from '../../components/GoalCarousel'
import { GoalProgressCard } from '../../components/GoalProgressCard'
import { ActionsCard } from '../../components/ActionsCard'
import { GoalyticsCard } from '../../components/GoalyticsCard'
import { GoalCreationButton } from '../../components/GoalCreationButton'
import { ScheduleCard } from '../../components/ScheduleCard'
import { goals, schedule } from '../mocks/mocks'

export default async function Dashboard() {
  const { user, profile } = await getUserAndProfile()
  return (
    <div className="w-full 2xl:w-[67%] mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Goal Time</h1>
        <GoalCreationButton />
        <UserAvatar userAndProfile={{ user, profile }} />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GoalCarousel goals={goals} className="lg:col-span-2 overflow-hidden" />
        <GoalProgressCard goals={goals} />
        <ScheduleCard schedule={schedule} />
      </div>

      <div className="grid grid-cols-1 gap-6 mt-6">
        <GoalyticsCard goals={goals} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <ActionsCard className="col-span-1" />
      </div>
    </div>
  )
}
