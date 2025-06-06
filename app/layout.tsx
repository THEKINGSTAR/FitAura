import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "FitAura - Your Fitness Journey Starts Here",
    template: "%s | FitAura",
  },
  description:
    "Track your workouts, monitor progress, and achieve your fitness goals with FitAura - the modern fitness tracking platform.",
  keywords: ["fitness", "workout", "tracking", "health", "exercise"],
  authors: [{ name: "FitAura Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fitaura.vercel.app",
    title: "FitAura - Your Fitness Journey Starts Here",
    description: "Track your workouts, monitor progress, and achieve your fitness goals with FitAura.",
    siteName: "FitAura",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitAura - Your Fitness Journey Starts Here",
    description: "Track your workouts, monitor progress, and achieve your fitness goals with FitAura.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
