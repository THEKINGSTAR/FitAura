"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const workouts = [
  {
    id: "1",
    title: "Upper Body Strength",
    date: "2024-01-15",
    duration: 45,
    exercises: 8,
    type: "Strength",
    calories: 320,
  },
  {
    id: "2",
    title: "Morning Cardio",
    date: "2024-01-14",
    duration: 30,
    exercises: 4,
    type: "Cardio",
    calories: 280,
  },
  {
    id: "3",
    title: "Leg Day",
    date: "2024-01-13",
    duration: 60,
    exercises: 10,
    type: "Strength",
    calories: 420,
  },
  {
    id: "4",
    title: "HIIT Session",
    date: "2024-01-12",
    duration: 25,
    exercises: 6,
    type: "HIIT",
    calories: 350,
  },
]

export function WorkoutList() {
  return (
    <div className="grid gap-4">
      {workouts.map((workout) => (
        <Card key={workout.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-lg">{workout.title}</CardTitle>
              <CardDescription className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(workout.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {workout.duration} min
                </div>
              </CardDescription>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Edit Workout</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{workout.exercises} exercises</span>
                <span>{workout.calories} calories</span>
              </div>
              <Badge variant="secondary">{workout.type}</Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
