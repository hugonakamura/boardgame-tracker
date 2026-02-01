import axios from 'axios';
import type { BoardGame, NewBoardGame } from '../types';

const baseUrl = 'http://localhost:3001/games';

const getAll = () => {
  return axios.get<BoardGame[]>(baseUrl).then(res => res.data);
};

const create = (newGame: NewBoardGame) => {
  return axios.post<BoardGame>(baseUrl, newGame).then(res => res.data);
};

export default { getAll, create };