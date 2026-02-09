import ChartCard from '../components/ChartCard'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'

const leftStats = [
  { label: 'Points', value: '27.6' },
  { label: 'Assists', value: '6.9' },
  { label: 'Rebounds', value: '8.4' },
  { label: 'Usage', value: '29%' },
]

const rightStats = [
  { label: 'Points', value: '24.2' },
  { label: 'Assists', value: '8.1' },
  { label: 'Rebounds', value: '7.3' },
  { label: 'Usage', value: '26%' },
]

function ComparisonPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Head-to-head"
        title="Marcus Steele vs. Cole Bryant"
        description="Compare star power, scoring zones, and clutch moments side-by-side for fan debates."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-panel p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Star A
              </p>
              <p className="text-lg font-bold text-ink">Marcus Steele</p>
              <p className="text-xs text-slate-500">ATL - Wing</p>
            </div>
            <div className="h-14 w-14 rounded-2xl bg-slate-100 shadow-soft" />
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {leftStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <div className="glass-panel p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Star B
              </p>
              <p className="text-lg font-bold text-ink">Cole Bryant</p>
              <p className="text-xs text-slate-500">MIA - Guard</p>
            </div>
            <div className="h-14 w-14 rounded-2xl bg-slate-100 shadow-soft" />
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {rightStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Skill radar" subtitle="Scoring, playmaking, defense" height="h-64" />
        <ChartCard title="Shot profile comparison" subtitle="Zone splits" height="h-64" />
      </section>
    </div>
  )
}

export default ComparisonPage
