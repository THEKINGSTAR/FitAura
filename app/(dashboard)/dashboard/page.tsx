import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { WorkoutStats } from "@/components/dashboard/workout-stats"
import { RecentWorkouts } from "@/components/dashboard/recent-workouts"
import { ProgressChart } from "@/components/dashboard/progress-chart"
import { QuickActions } from "@/components/dashboard/quick-actions"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "View your fitness progress, recent workouts, and performance metrics.",
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <WorkoutStats />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ProgressChart />
        <QuickActions />
      </div>

      <RecentWorkouts />
    </div>
  )
}
