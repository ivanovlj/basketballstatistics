import ChartCard from '../components/ChartCard'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'

const teamStats = [
  { label: 'Record', value: '34-18' },
  { label: 'Off Rtg', value: '117.8', delta: '+2.4' },
  { label: 'Def Rtg', value: '110.2', delta: '-1.8' },
  { label: 'Net', value: '+7.6' },
]

function TeamDashboard() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Team snapshot"
        title="Seattle Stormbreakers"
        description="Fast-paced offense, highlight plays in transition, and a crowd-ready bench unit."
      />

      <section className="grid gap-4 md:grid-cols-4">
        {teamStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Momentum swing" subtitle="Off/Def trend" />
        <ChartCard title="Shot profile" subtitle="Points by zone" />
      </section>

      <section className="glass-panel p-6">
        <h3 className="text-lg font-bold text-ink">Fan buzz</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Crowd favorite
            </p>
            <p className="mt-2 text-sm font-semibold text-ink">+12.4 net rating</p>
            <p className="text-xs text-slate-500">8.2 pace, 66% eFG</p>
          </div>
          <div className="rounded-2xl bg-slate-50/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Closing minutes
            </p>
            <p className="mt-2 text-sm font-semibold text-ink">Top 3 in clutch</p>
            <p className="text-xs text-slate-500">Defensive rating 104</p>
          </div>
          <div className="rounded-2xl bg-slate-50/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Bench spark
            </p>
            <p className="mt-2 text-sm font-semibold text-ink">+4.1 swing</p>
            <p className="text-xs text-slate-500">Second unit pace 101.3</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamDashboard
