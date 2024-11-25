'use client'

import { useState } from "react";

import { Label } from "@/ui-components/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui-components/select";

import { Goal } from "../GoalSettingsCard";

export type Priority = 'High' | 'Medium' | 'Low'
const PRIORITIES: { [key in Priority]: string } = {
  High: 'Never reschedule',
  Medium: 'Some flexibility',
  Low: 'Very flexible',
}

export interface PrioritySelectorProps {
  goal: Goal;
}

export const PrioritySelector: React.FC<PrioritySelectorProps> = ({ goal }) => {
  // TODO: Proper state management
  const [priority, setPriority] = useState(goal.priority);
  return (
    <div className="space-y-2">
      <Label className="ml-2" htmlFor="priority">Priority Level</Label>
      <Select
        value={priority}
        onValueChange={(value: string) => setPriority(value as Priority)}
      >
        <SelectTrigger id="priority">
          <SelectValue placeholder="Select priority" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(PRIORITIES).map(([priority, description]) => (
            <SelectItem key={priority} value={priority}>
              {priority} - {description}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
