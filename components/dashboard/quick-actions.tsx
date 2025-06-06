import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Target, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    title: "Start Workout",
    description: "Begin a new workout session",
    icon: Plus,
    href: "/workouts/new",
    variant: "default" as const,
  },
  {
    title: "Set Goal",
    description: "Create a new fitness goal",
    icon: Target,
    href: "/goals/new",
    variant: "outline" as const,
  },
  {
    title: "Schedule",
    description: "Plan your next workout",
    icon: Calendar,
    href: "/calendar",
    variant: "outline" as const,
  },
  {
    title: "View Progress",
    description: "Check your fitness analytics",
    icon: TrendingUp,
    href: "/progress",
    variant: "outline" as const,
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks to keep your fitness journey on track</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        {actions.map((action) => (
          <Button key={action.title} variant={action.variant} className="justify-start h-auto p-4" asChild>
            <Link href={action.href}>
              <action.icon className="mr-3 h-4 w-4" />
              <div className="text-left">
                <div className="font-medium">{action.title}</div>
                <div className="text-sm text-muted-foreground">{action.description}</div>
              </div>
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
