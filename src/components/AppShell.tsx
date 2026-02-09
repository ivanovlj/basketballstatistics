import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Player', to: '/players/23' },
  { label: 'Team', to: '/teams/7' },
  { label: 'Game Log', to: '/games/1' },
  { label: 'Compare', to: '/compare' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
    isActive
      ? 'bg-ink text-cloud shadow-soft'
      : 'bg-white/60 text-ink hover:bg-white hover:shadow-soft'
  }`

function AppShell() {
  return (
    <div className="min-h-screen bg-cloud font-display text-ink">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-court-glow opacity-80" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-8 pt-8">
          <header className="glass-panel flex w-full flex-wrap items-center justify-between gap-4 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-cloud shadow-soft">
                IBS
              </div>
              <div>
                <p className="chip inline-flex">Welcome to</p>
                <h1 className="mt-2 text-xl font-bold">Ivanov Basketball Statistics</h1>
              </div>
            </div>
            <div className="flex w-full max-w-md items-center gap-3 rounded-full border border-slate-200/60 bg-white/80 px-4 py-2 shadow-soft backdrop-blur">
              <input
                className="w-full bg-transparent text-sm font-medium text-ink placeholder:text-slate-400 focus:outline-none"
                placeholder="Search players, teams, or games"
              />
              <button className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cloud shadow-soft">
                Search
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-xs font-semibold text-ink">
                Highlights
              </button>
              <button className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-cloud shadow-soft">
                Live scores
              </button>
            </div>
          </header>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <nav className="glass-panel flex flex-wrap items-center gap-2 px-4 py-3">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <main className="mx-auto w-full max-w-6xl px-6 pb-16">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-slate-500">
          <p>Built for fans who want good statistics and big highlights.</p>
          <div className="flex items-center gap-3">
            <span>Season 2025-26</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AppShell
