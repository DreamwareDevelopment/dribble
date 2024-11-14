'use client'

import React, { useState } from 'react'
import { Plus, Phone, MessageSquare, Clock, Target, Settings, Bell } from 'lucide-react'
import { Button } from "@goaltime/ui-components"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@goaltime/ui-components"
import { Progress } from "@goaltime/ui-components"
import { Avatar, AvatarFallback, AvatarImage } from "@goaltime/ui-components"
import { Toggle } from "@goaltime/ui-components"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@goaltime/ui-components"
import { MultiSelect, Option } from "@goaltime/ui-components"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export default function Dashboard() {
  const goals = [
    { id: 1, name: "Startup Work", committed: 20, completed: 18, color: "#8884d8" },
    { id: 2, name: "Exercise", committed: 5, completed: 4, color: "#82ca9d" },
    { id: 3, name: "Learning Spanish", committed: 3, completed: 2, color: "#ffc658" },
    { id: 4, name: "Reading", committed: 10, completed: 7, color: "#ff7f50" },
    { id: 5, name: "Meditation", committed: 7, completed: 5, color: "#6a5acd" },
    { id: 6, name: "Cooking", committed: 8, completed: 6, color: "#48d1cc" },
  ]

  const schedule = [
    { id: 1, name: "Startup Work", time: "10:00 AM - 12:00 PM", callEnabled: true, messageEnabled: false, pushEnabled: false },
    { id: 2, name: "Exercise", time: "1:00 PM - 2:00 PM", callEnabled: false, messageEnabled: true, pushEnabled: false },
    { id: 3, name: "Learning Spanish", time: "7:00 PM - 8:00 PM", callEnabled: true, messageEnabled: true, pushEnabled: true },
    { id: 4, name: "Reading", time: "3:00 PM - 4:00 PM", callEnabled: false, messageEnabled: false, pushEnabled: true },
    { id: 5, name: "Meditation", time: "6:00 AM - 6:30 AM", callEnabled: false, messageEnabled: false, pushEnabled: false },
    { id: 6, name: "Cooking", time: "5:00 PM - 6:00 PM", callEnabled: true, messageEnabled: false, pushEnabled: false },
  ]

  const chartData = {
    week: [
      { name: 'Mon', "Startup Work": 4, "Exercise": 1, "Learning Spanish": 0.5, "Reading": 1, "Meditation": 0.5, "Cooking": 1 },
      { name: 'Tue', "Startup Work": 3, "Exercise": 1, "Learning Spanish": 0.5, "Reading": 1, "Meditation": 0.5, "Cooking": 1 },
      { name: 'Wed', "Startup Work": 4, "Exercise": 0, "Learning Spanish": 0.5, "Reading": 1, "Meditation": 0.5, "Cooking": 1 },
      { name: 'Thu', "Startup Work": 3, "Exercise": 1, "Learning Spanish": 0.5, "Reading": 1, "Meditation": 0.5, "Cooking": 1 },
      { name: 'Fri', "Startup Work": 4, "Exercise": 1, "Learning Spanish": 0, "Reading": 1, "Meditation": 0.5, "Cooking": 1 },
      { name: 'Sat', "Startup Work": 0, "Exercise": 0, "Learning Spanish": 0, "Reading": 1, "Meditation": 0.5, "Cooking": 1 },
      { name: 'Sun', "Startup Work": 0, "Exercise": 0, "Learning Spanish": 0, "Reading": 1, "Meditation": 0.5, "Cooking": 1 },
    ],
    month: [
      { name: 'Week 1', "Startup Work": 18, "Exercise": 4, "Learning Spanish": 2, "Reading": 5, "Meditation": 3.5, "Cooking": 5 },
      { name: 'Week 2', "Startup Work": 16, "Exercise": 3, "Learning Spanish": 2, "Reading": 5, "Meditation": 3.5, "Cooking": 5 },
      { name: 'Week 3', "Startup Work": 20, "Exercise": 5, "Learning Spanish": 3, "Reading": 5, "Meditation": 3.5, "Cooking": 5 },
      { name: 'Week 4', "Startup Work": 18, "Exercise": 4, "Learning Spanish": 2, "Reading": 5, "Meditation": 3.5, "Cooking": 5 },
    ],
    year: [
      { name: 'Jan', "Startup Work": 18, "Exercise": 4, "Learning Spanish": 2, "Reading": 20, "Meditation": 14, "Cooking": 20 },
      { name: 'Feb', "Startup Work": 16, "Exercise": 3, "Learning Spanish": 2, "Reading": 20, "Meditation": 14, "Cooking": 20 },
      { name: 'Mar', "Startup Work": 20, "Exercise": 5, "Learning Spanish": 3, "Reading": 20, "Meditation": 14, "Cooking": 20 },
      { name: 'Apr', "Startup Work": 18, "Exercise": 4, "Learning Spanish": 2, "Reading": 20, "Meditation": 14, "Cooking": 20 },
      { name: 'May', "Startup Work": 16, "Exercise": 3, "Learning Spanish": 2, "Reading": 20, "Meditation": 14, "Cooking": 20 },
      { name: 'Jun', "Startup Work": 20, "Exercise": 5, "Learning Spanish": 3, "Reading": 20, "Meditation": 14, "Cooking": 20 },
      { name: 'Jul', "Startup Work": 18, "Exercise": 4, "Learning Spanish": 2, "Reading": 20, "Meditation": 14, "Cooking": 20 },
      { name: 'Aug', "Startup Work": 16, "Exercise": 3, "Learning Spanish": 2, "Reading": 20, "Meditation": 14, "Cooking": 20 },
      { name: 'Sep', "Startup Work": 20, "Exercise": 5, "Learning Spanish": 3, "Reading": 20, "Meditation": 14, "Cooking": 20 },
      { name: 'Oct', "Startup Work": 18, "Exercise": 4, "Learning Spanish": 2, "Reading": 20, "Meditation": 14, "Cooking": 20 },
      { name: 'Nov', "Startup Work": 16, "Exercise": 3, "Learning Spanish": 2, "Reading": 20, "Meditation": 14, "Cooking": 20 },
      { name: 'Dec', "Startup Work": 20, "Exercise": 5, "Learning Spanish": 3, "Reading": 20, "Meditation": 14, "Cooking": 20 },
    ],
  }
  const [timeRange, setTimeRange] = useState<keyof typeof chartData>('week')
  const [selectedGoals, setSelectedGoals] = useState<Option[]>([])

  const allGoals: Option[] = goals.map((goal) => ({ value: goal.name, label: goal.name, color: goal.color }))
  const filteredGoals = selectedGoals.length > 0 ? goals.filter(goal => selectedGoals.findIndex(sg => sg.value === goal.name) > -1) : goals

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">AI Time Manager</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Goals</CardTitle>
            <CardDescription>Your current goals and progress</CardDescription>
          </CardHeader>
          <CardContent>
            {goals.map((goal) => (
              <div key={goal.id} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{goal.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {goal.completed}/{goal.committed} hours
                  </span>
                </div>
                <Progress value={(goal.completed / goal.committed) * 100} className="h-2" color={goal.color} />
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button className="w-full"><Plus className="mr-2 h-4 w-4" /> Add New Goal</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today&apos;s Schedule</CardTitle>
            <CardDescription>Your protected time blocks</CardDescription>
          </CardHeader>
          <CardContent>
            {schedule.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
                <div>
                  <Toggle
                    aria-label={`Toggle call for ${item.name}`}
                    pressed={item.callEnabled}
                    onPressedChange={() => {}}
                    className="mr-2"
                  >
                    <Phone className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    aria-label={`Toggle message for ${item.name}`}
                    pressed={item.messageEnabled}
                    onPressedChange={() => {}}
                    className="mr-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    aria-label={`Toggle push notifications for ${item.name}`}
                    pressed={item.pushEnabled}
                    onPressedChange={() => {}}
                  >
                    <Bell className="h-4 w-4" />
                  </Toggle>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full"><Clock className="mr-2 h-4 w-4" /> Reschedule</Button>
              <Button className="w-full"><Target className="mr-2 h-4 w-4" /> Adjust Goal</Button>
              <Button className="w-full"><Settings className="mr-2 h-4 w-4" /> Preferences</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-2">
            <CardTitle>Goal Progress</CardTitle>
            <Select value={timeRange} onValueChange={(value) => setTimeRange(value as keyof typeof chartData)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350} className="pr-8">
              <BarChart data={chartData[timeRange]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {filteredGoals.map((goal) => (
                  <Bar key={goal.id} dataKey={goal.name} fill={goal.color} />
                ))}
              </BarChart>
            </ResponsiveContainer>
            <CardFooter>
              <MultiSelect
                className="w-full mt-4"
                defaultOptions={allGoals}
                placeholder="Select goals to track"
                hidePlaceholderWhenSelected
                hideClearAllButton
                value={selectedGoals.length > 0 ? selectedGoals : allGoals}
                onChange={(value) => {
                  setSelectedGoals(value)
                }}
              />
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
