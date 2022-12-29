import axios from 'axios';

import { readQuestion, createSnowman } from './question';
import { readSnowman } from './snowman';
import { readTown, updateTownName } from './town';
import { createLetter } from './letter';
import setInterceptors from './interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.API_BASE_URL,
  });
  return setInterceptors(instance);
}

export const api = createInstance();

export { readQuestion, createSnowman };
export { readSnowman };
export { readTown, updateTownName };
export { createLetter };
