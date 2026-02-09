import ChartCard from '../components/ChartCard'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'

const keyStats = [
  { label: 'Points', value: '27.6', delta: '+3.1' },
  { label: 'Rebounds', value: '8.4' },
  { label: 'Assists', value: '6.9', delta: '+1.2' },
  { label: 'True Shooting', value: '62.3%' },
]

function PlayerProfile() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Player spotlight"
        title="Marcus Steele"
        description="Two-way wing lighting up the league with highlight finishes and late-game shot making."
      />

      <section className="grid gap-4 md:grid-cols-4">
        {keyStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Points per game" subtitle="Rolling 10-game surge" />
        <ChartCard title="Shooting splits" subtitle="At rim / mid / three" />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-panel p-6">
          <h3 className="text-lg font-bold text-ink">Fan notes</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li>Signature sidestep three in late-clock moments.</li>
            <li>Explosive rim finishes are up 14% this month.</li>
            <li>Key defender in big matchups against top wings.</li>
          </ul>
        </div>
        <ChartCard title="Clutch shot map" subtitle="Last 2 minutes" height="h-64" />
      </section>
    </div>
  )
}

export default PlayerProfile
