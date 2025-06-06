const stats = [
  { value: "10,000+", label: "Active Users" },
  { value: "50,000+", label: "Workouts Logged" },
  { value: "1M+", label: "Exercises Tracked" },
  { value: "99.9%", label: "Uptime" },
]

export function StatsSection() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">Join our growing community of fitness enthusiasts</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
