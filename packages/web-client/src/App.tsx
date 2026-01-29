import { useState, useEffect } from 'react'
import axios from 'axios'
import { GameSession } from './types'

function App() {
  const [sessions, setSessions] = useState<GameSession[]>([])

  useEffect(() => {
    axios.get('http://localhost:3001/sessions')
      .then(response => {
        setSessions(response.data)
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
    </div>
  )
}

export default App
