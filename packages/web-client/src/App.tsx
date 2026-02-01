import { GameManager } from './components/GameManager';
import { SessionList } from './components/SessionList';

function App() {
  return (
    <div>
      <h1>Solo Board Game Tracker</h1>
      <SessionList />
      <GameManager />
    </div>
  )
}

export default App
