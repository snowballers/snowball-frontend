import axios from 'axios';

import { readQuestion, createSnowman } from "./question";
import { readSnowman } from "./snowman";
import { readTown, updateTownName } from "./town";
import { createLetter } from "./letter";

export const api = axios.create({
    baseURL: process.env.API_BASE_URL,
})

export { readQuestion, createSnowman };
export { readSnowman };
export { readTown, updateTownName };
export { createLetter };