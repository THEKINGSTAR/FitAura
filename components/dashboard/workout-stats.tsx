"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Calendar, Clock, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Workouts",
    value: "127",
    change: "+12%",
    icon: Activity,
    color: "text-blue-600",
  },
  {
    title: "This Week",
    value: "5",
    change: "+25%",
    icon: Calendar,
    color: "text-green-600",
  },
  {
    title: "Total Time",
    value: "89h",
    change: "+8%",
    icon: Clock,
    color: "text-purple-600",
  },
  {
    title: "Streak",
    value: "12 days",
    change: "+3 days",
    icon: TrendingUp,
    color: "text-orange-600",
  },
]

export function WorkoutStats() {
  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">{stat.change}</span> from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
