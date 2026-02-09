type ChartCardProps = {
  title: string
  subtitle?: string
  height?: string
}

const buildSeries = (seed: number, count: number) => {
  const series = [] as number[]
  for (let i = 0; i < count; i += 1) {
    const value = (Math.sin((i + 1) * 0.7 + seed) + 1) * 35 + (seed % 12)
    series.push(Math.max(8, Math.min(92, Math.round(value))))
  }
  return series
}

const hashSeed = (label: string) =>
  label.split('').reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) % 997, 7)

function ChartCard({ title, subtitle, height = 'h-48' }: ChartCardProps) {
  const seed = hashSeed(title)
  const lineSeries = buildSeries(seed, 12)
  const barSeries = buildSeries(seed + 13, 8)

  const linePoints = lineSeries
    .map((value, index) => {
      const x = (index / (lineSeries.length - 1)) * 200 + 10
      const y = 100 - value
      return `${x},${y}`
    })
    .join(' ')

  return (
    <div className="glass-panel p-5">
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="h-1 w-10 rounded-full bg-gradient-to-r from-sky-500 to-court-500" />
          <p className="text-sm font-semibold text-slate-500">{subtitle}</p>
        </div>
        <h3 className="mt-2 text-lg font-bold text-ink">{title}</h3>
      </div>
      <div
        className={`chart-placeholder flex ${height} items-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 text-sm text-slate-500`}
      >
        <div className="flex w-full items-center justify-between gap-4">
          <svg viewBox="0 0 220 120" className="h-24 w-full max-w-[220px]">
            <defs>
              <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
            <polyline
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              points={linePoints}
            />
            <polyline
              fill="rgba(14, 165, 233, 0.12)"
              stroke="none"
              points={`${linePoints} 210,110 10,110`}
            />
          </svg>
          <svg viewBox="0 0 140 120" className="h-24 w-full max-w-[140px]">
            {barSeries.map((value, index) => {
              const height = (value / 100) * 90
              const x = 10 + index * 14
              const y = 110 - height
              return (
                <rect
                  key={`${value}-${index}`}
                  x={x}
                  y={y}
                  width={10}
                  height={height}
                  rx={4}
                  fill={index % 2 === 0 ? '#0ea5e9' : '#f97316'}
                  opacity={0.85}
                />
              )
            })}
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ChartCard
