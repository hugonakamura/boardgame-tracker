import { useState, useEffect } from 'react';
import sessionService from './services/sessions';
import type { GameSession } from './types';
import { GameManager } from './components/GameManager';

function App() {
  const [sessions, setSessions] = useState<GameSession[]>([])

  useEffect(() => {
    sessionService.getAll()
      .then(response => {
        setSessions(response)
      })
  }, [])

  return (
    <div>
      <h1>Solo Board Game Tracker</h1>
      <ul>
        {sessions.map(s => (
          <li key={s.id}>
            <strong>{s.game}</strong> - {s.outcome} ({s.date})
          </li>
        ))}
      </ul>
      <GameManager />
    </div>
  )
}

export default App
