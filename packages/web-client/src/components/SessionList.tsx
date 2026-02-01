import { useState, useEffect } from 'react';
import sessionService from '../services/sessions';
import type { GameSession } from '../../../common/types';

export const SessionList = () => {
  const [sessions, setSessions] = useState<GameSession[]>([])

  useEffect(() => {
    sessionService.getAll()
      .then(response => {
        setSessions(response)
      })
  }, [])

  return (
    <div>
      <h2>Game Sessions</h2>
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