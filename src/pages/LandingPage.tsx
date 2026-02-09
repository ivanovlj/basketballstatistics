import ChartCard from '../components/ChartCard'
import PageHeader from '../components/PageHeader'

const trendingPlayers = [
  { name: 'Jaylen Pierce', team: 'ATL', points: '31.2', trend: '+4.3' },
  { name: 'Marco Ellis', team: 'BOS', points: '28.7', trend: '+2.1' },
  { name: 'Ivan Cortez', team: 'DEN', points: '25.9', trend: '+3.0' },
]

const recentGames = [
  { matchup: 'LAL vs PHX', score: '112-108', note: 'Clutch finish' },
  { matchup: 'NYK vs MIA', score: '99-104', note: 'Defensive grind' },
  { matchup: 'DAL vs GSW', score: '121-118', note: 'OT thriller' },
]

function LandingPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-6 glass-panel p-8 md:grid-cols-2">
        <div>
          <PageHeader
            eyebrow="Fan Pulse"
            title="Follow the league in one glance"
            description="Track star performances, hot streaks, and team momentum with a fan-first dashboard built for big moments."
          />
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-cloud shadow-soft">
              Watch highlights
            </button>
            <button className="rounded-full border border-ink/10 bg-white/80 px-5 py-2 text-sm font-semibold text-ink">
              Compare stars
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="data-pill">Player of the night</span>
            <span className="chip">Top-5 moments</span>
            <span className="chip">Fast break +4.8</span>
          </div>
        </div>
        <div className="glass-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Trending stars
          </p>
          <div className="mt-4 space-y-4">
            {trendingPlayers.map((player) => (
              <div
                key={player.name}
                className="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/90 p-4 shadow-soft"
              >
                <div>
                  <p className="text-sm font-semibold text-ink">{player.name}</p>
                  <p className="text-xs text-slate-500">{player.team}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-ink">{player.points}</p>
                  <p className="text-xs font-semibold text-mint-500">{player.trend} pts</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <ChartCard title="League pulse" subtitle="Ratings, pace, and momentum" height="h-56" />
        <div className="glass-panel p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Recent games & buzz
          </p>
          <div className="mt-4 space-y-4">
            {recentGames.map((game) => (
              <div key={game.matchup} className="rounded-2xl bg-slate-50/80 p-4">
                <p className="text-sm font-semibold text-ink">{game.matchup}</p>
                <p className="text-xs text-slate-500">{game.score}</p>
                <p className="text-xs font-semibold text-court-500">{game.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
