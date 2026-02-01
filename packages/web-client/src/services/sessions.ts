import axios from 'axios';
import type { GameSession, NewGameSession } from '../../../common/types';

const baseUrl = 'http://localhost:3001/sessions';

const getAll = () => {
  return axios.get<GameSession[]>(baseUrl).then(res => res.data);
};

const create = (newObject: NewGameSession) => {
  return axios.post<GameSession>(baseUrl, newObject).then(res => res.data);
};

export default { getAll, create };