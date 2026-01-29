import axios from 'axios';
import type { GameSession } from '../types';

const baseUrl = 'http://localhost:3001/sessions';

const getAll = () => {
  return axios.get<GameSession[]>(baseUrl).then(res => res.data);
};

const create = (newObject: Omit<GameSession, 'id'>) => {
  return axios.post<GameSession>(baseUrl, newObject).then(res => res.data);
};

export default { getAll, create };