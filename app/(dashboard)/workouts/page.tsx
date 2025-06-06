import type { Metadata } from "next"
import { WorkoutList } from "@/components/workouts/workout-list"
import { WorkoutFilters } from "@/components/workouts/workout-filters"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Workouts",
  description: "View and manage all your workout sessions.",
}

export default function WorkoutsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Workouts</h1>
          <p className="text-muted-foreground">Track and manage your workout sessions</p>
        </div>
        <Button asChild>
          <Link href="/workouts/new">
            <Plus className="h-4 w-4 mr-2" />
            New Workout
          </Link>
        </Button>
      </div>

      <WorkoutFilters />
      <WorkoutList />
    </div>
  )
}
