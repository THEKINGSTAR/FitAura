import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { StatsSection } from "@/components/sections/stats-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "FitAura - Your Fitness Journey Starts Here",
  description:
    "Track your workouts, monitor progress, and achieve your fitness goals with FitAura - the modern fitness tracking platform.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </main>
  )
}
