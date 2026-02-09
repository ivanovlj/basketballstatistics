import { Route, Routes } from 'react-router-dom'
import AppShell from './components/AppShell'
import ComparisonPage from './pages/ComparisonPage'
import GameLog from './pages/GameLog'
import LandingPage from './pages/LandingPage'
import PlayerProfile from './pages/PlayerProfile'
import TeamDashboard from './pages/TeamDashboard'

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<LandingPage />} />
        <Route path="players/:id" element={<PlayerProfile />} />
        <Route path="teams/:id" element={<TeamDashboard />} />
        <Route path="games/:id" element={<GameLog />} />
        <Route path="compare" element={<ComparisonPage />} />
      </Route>
    </Routes>
  )
}

export default App
