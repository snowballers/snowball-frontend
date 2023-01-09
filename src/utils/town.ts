import { TOWNURL } from "src/constants/town";

export const setTownURL = (townURL: string) => {
  localStorage.setItem(TOWNURL, townURL);
};

export const getTownURL = () => {
  return typeof window !== "undefined" ? localStorage?.getItem(TOWNURL) : '';
};

export const deleteTownURL = () => {
  localStorage.removeItem(TOWNURL);
};