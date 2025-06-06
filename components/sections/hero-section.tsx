import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 fitness-gradient opacity-10" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transform Your <span className="text-primary">Fitness Journey</span> with FitAura
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Track workouts, monitor progress, and achieve your fitness goals with our comprehensive fitness tracking
                platform. Join thousands of users already transforming their lives.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="font-semibold text-foreground">10k+</span>
                <span className="ml-1">Active Users</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-foreground">50k+</span>
                <span className="ml-1">Workouts Logged</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="FitAura App Preview"
                width={400}
                height={600}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
