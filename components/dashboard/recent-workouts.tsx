import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Calendar } from "lucide-react"
import Link from "next/link"

const recentWorkouts = [
  {
    id: "1",
    title: "Upper Body Strength",
    date: "2024-01-15",
    duration: 45,
    exercises: 8,
    type: "Strength",
  },
  {
    id: "2",
    title: "Morning Cardio",
    date: "2024-01-14",
    duration: 30,
    exercises: 4,
    type: "Cardio",
  },
  {
    id: "3",
    title: "Leg Day",
    date: "2024-01-13",
    duration: 60,
    exercises: 10,
    type: "Strength",
  },
]

export function RecentWorkouts() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Workouts</CardTitle>
          <CardDescription>Your latest workout sessions</CardDescription>
        </div>
        <Button variant="outline" asChild>
          <Link href="/workouts">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentWorkouts.map((workout) => (
            <div key={workout.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <h4 className="font-medium">{workout.title}</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(workout.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {workout.duration} min
                  </div>
                  <span>{workout.exercises} exercises</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{workout.type}</Badge>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/workouts/${workout.id}`}>View</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
