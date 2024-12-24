import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/ui-components/card'
import { Button } from '@/ui-components/button'
import { Button as ShinyButton } from '@/ui-components/button-shiny'
import { Badge } from '@/ui-components/badge'
import { Plus } from 'lucide-react'
import { Priority } from './Settings/PrioritySelector'

export interface GoalRecommendation {
  title: string;
  description: string;
  commitment: number;
  priority: Priority;
}

const recommendations: GoalRecommendation[] = [
  { title: "Learn a New Language", description: "Personal Development", commitment: 5, priority: 'Medium' },
  { title: "Exercise Regularly", description: "Health", commitment: 3, priority: 'High' },
  { title: "Read Books", description: "Education", commitment: 2, priority: 'Low' },
  { title: "Practice Meditation", description: "Wellness", commitment: 2, priority: 'Medium' },
  { title: "Work on Side Project", description: "Career", commitment: 4, priority: 'High' },
]

export interface GoalRecommendationsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  setRecommendation: (recommendation: GoalRecommendation) => void;
}

// TODO: Generate recommendations lazily
export function GoalRecommendationsCard({ className, setRecommendation }: GoalRecommendationsCardProps) {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  const displayedRecommendations = expanded ? recommendations : recommendations.slice(0, 1)

  return (
    <Card className="bg-accent rounded-none rounded-t-lg">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl font-bold flex items-center">
          Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayedRecommendations.map((goal, index) => (
            <Card key={index} role="button" tabIndex={0} onClick={() => setRecommendation(goal)} className="shadow-secondary shadow-lg hover:scale-105 transition-all duration-100 cursor-pointer">
              <CardContent className="flex flex-wrap items-center justify-between p-4">
                <div>
                  <h3 className="font-semibold">{goal.title}</h3>
                  <div className="text-sm text-muted-foreground">
                    {goal.description} • <span className="font-semibold text-nowrap">{goal.commitment} hours/week</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 py-4">
                  <Badge variant={goal.priority === 'High' ? 'destructive' : goal.priority === 'Medium' ? 'default' : 'secondary'}>
                    {goal.priority}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {recommendations.length > 1 && (
          <div className="flex justify-center">
            <ShinyButton
              variant="linkHover1"
              onClick={toggleExpanded}
              className="mt-4"
            >
              {expanded ? (
                <>
                  View less
                </>
              ) : (
                <>
                  View more
                </>
              )}
            </ShinyButton>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
