"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", workouts: 12 },
  { month: "Feb", workouts: 19 },
  { month: "Mar", workouts: 15 },
  { month: "Apr", workouts: 22 },
  { month: "May", workouts: 28 },
  { month: "Jun", workouts: 25 },
]

export function ProgressChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Workout Progress</CardTitle>
        <CardDescription>Your workout frequency over the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="workouts"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--primary))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
