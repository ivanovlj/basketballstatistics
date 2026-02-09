import PageHeader from '../components/PageHeader'

const boxScore = [
  { name: 'M. Steele', team: 'SEA', min: 36, pts: 29, reb: 8, ast: 7, pm: '+6' },
  { name: 'D. Lewis', team: 'SEA', min: 32, pts: 18, reb: 5, ast: 11, pm: '+3' },
  { name: 'R. Vaughn', team: 'SEA', min: 28, pts: 14, reb: 10, ast: 2, pm: '+1' },
  { name: 'K. Park', team: 'SEA', min: 24, pts: 12, reb: 4, ast: 3, pm: '-2' },
]

function GameLog() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Game recap"
        title="Stormbreakers vs. Kings"
        description="Full box score, big runs, and shot chart highlights from the Feb 8 showdown."
      />

      <section className="glass-panel p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Final
            </p>
            <p className="text-lg font-bold text-ink">SEA 114 - SAC 109</p>
          </div>
          <div className="rounded-full bg-court-500/10 px-4 py-2 text-xs font-semibold text-court-600">
            4th quarter burst: 12-3
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="px-4 py-3">Player</th>
                <th className="px-4 py-3">Team</th>
                <th className="px-4 py-3">Min</th>
                <th className="px-4 py-3">Pts</th>
                <th className="px-4 py-3">Reb</th>
                <th className="px-4 py-3">Ast</th>
                <th className="px-4 py-3">+/-</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/70">
              {boxScore.map((player) => (
                <tr key={player.name} className="bg-white">
                  <td className="px-4 py-3 font-semibold text-ink">
                    {player.name}
                  </td>
                  <td className="px-4 py-3 text-slate-500">
                    {player.team}
                  </td>
                  <td className="px-4 py-3 text-slate-500">{player.min}</td>
                  <td className="px-4 py-3 text-slate-500">{player.pts}</td>
                  <td className="px-4 py-3 text-slate-500">{player.reb}</td>
                  <td className="px-4 py-3 text-slate-500">{player.ast}</td>
                  <td className="px-4 py-3 text-slate-500">{player.pm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-panel p-6">
          <h3 className="text-lg font-bold text-ink">Shot chart</h3>
          <div className="chart-placeholder mt-4 flex h-64 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-sm text-slate-500">
            Heatmap placeholder
          </div>
        </div>
        <div className="glass-panel p-6">
          <h3 className="text-lg font-bold text-ink">Big moments</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li>9:12 - Corner flare frees the go-ahead three.</li>
            <li>4:44 - Switch and late double force a turnover.</li>
            <li>1:21 - Spain pick-and-roll for the lob finish.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default GameLog
