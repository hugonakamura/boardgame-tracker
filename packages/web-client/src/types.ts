export interface GameSession {
  id: string;
  game: string;
  outcome: 'Win' | 'Loss' | 'Draw';
  date: string;
  duration?: number;
  hero?: string;    // Optional for games that use them
  villain?: string; // Optional
  scenario?: string;
}

export type NewGameSession = Omit<GameSession, 'id'>;