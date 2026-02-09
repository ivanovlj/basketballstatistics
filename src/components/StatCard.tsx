type StatCardProps = {
  label: string
  value: string
  delta?: string
}

function StatCard({ label, value, delta }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50 p-4 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-ink">{value}</span>
        {delta ? (
          <span className="rounded-full bg-mint-500/10 px-2 py-1 text-xs font-semibold text-mint-500">
            {delta}
          </span>
        ) : null}
      </div>
    </div>
  )
}

export default StatCard
