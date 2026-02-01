import { useState, useEffect } from 'react';
import gameService from '../services/games';
import type { BoardGame, NewBoardGame } from '../types';

export const GameManager = () => {
  const [games, setGames] = useState<BoardGame[]>([]);
  const [newGameTitle, setNewGameTitle] = useState('');

  useEffect(() => {
    gameService.getAll().then(initialGames => setGames(initialGames));
  }, []);

  const addGame = (event: React.FormEvent) => {
    event.preventDefault();

    const gameToAdd: NewBoardGame = {
      title: newGameTitle,
      isExpansion: false
    };

    gameService.create(gameToAdd).then(returnedGame => {
      setGames(games.concat(returnedGame));
      setNewGameTitle('');
    });
  };

  return (
    <div>
      <h2>My Collection</h2>
      <form onSubmit={addGame}>
        <input
          value={newGameTitle}
          onChange={(e) => setNewGameTitle(e.target.value)}
          placeholder="Game title..."
        />
        <button type="submit">Add Game</button>
      </form>

      <ul>
        {games.map(game => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
};