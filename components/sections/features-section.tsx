import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, BarChart3, Target, Users, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Workout Tracking",
    description: "Log exercises, sets, reps, and weights with our intuitive interface.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Visualize your fitness journey with detailed charts and insights.",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set personalized fitness goals and track your progress towards them.",
  },
  {
    icon: Users,
    title: "Social Features",
    description: "Share achievements and connect with other fitness enthusiasts.",
  },
  {
    icon: Zap,
    title: "Smart Recommendations",
    description: "Get personalized workout suggestions based on your progress.",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Your fitness data is encrypted and securely stored.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Everything You Need to <span className="text-primary">Succeed</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
            FitAura provides all the tools you need to track, analyze, and improve your fitness journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
