'use server'

import z from 'zod'

import { GoalSchema, GoalUpdateSchema } from '@/shared/zod'
import { UserProfile } from '@/shared/models'
import { getPrismaClient } from '@/server-utils/prisma'

export async function createGoalAction(profile: UserProfile, goal: z.infer<typeof GoalSchema>) {
  const prisma = await getPrismaClient(profile.userId)
  const g = {
    ...goal,
    userId: profile.userId,
  }
  // Remove relations from copied goal object
  // fine to mutate since this is on the server, 
  // the client valtio store won't be mutated
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (g as any).milestones
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (g as any).notifications

  const newGoal = await prisma.goal.create({
    data: {
      ...g,
      milestones: undefined,
      notifications: undefined,
    },
  })
  // TODO: Schedule notifications
  return newGoal
}

export async function updateGoalAction(profile: UserProfile, id: string, goal: z.infer<typeof GoalUpdateSchema>) {
  const prisma = await getPrismaClient(profile.userId)
  const updatedGoal = await prisma.goal.update({
    where: { id },
    data: {
      ...goal,
      milestones: undefined,
      notifications: undefined,
    },
  })
  // TODO: Handle any backend side effects
  return updatedGoal
}
