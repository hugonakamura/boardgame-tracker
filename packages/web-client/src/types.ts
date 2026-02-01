export interface GameSession {
  id: string;
  game: string;
  outcome: 'Win' | 'Loss' | 'Draw';
  date: string;
  duration?: number;
  hero?: string;    // Optional
  villain?: string; // Optional
  scenario?: string;
}

export type NewGameSession = Omit<GameSession, 'id'>;

export interface BoardGame {
  id: string;
  title: string;
  publisher?: string;
  isExpansion: boolean;
  baseGameId?: string;
}

export type NewBoardGame = Omit<BoardGame, 'id'>;