import { TOWNURL } from "src/constants/town";
import { CLIENT_RENDERED } from "src/constants/window";

export const setTownURL = (townURL: string) => {
  localStorage.setItem(TOWNURL, townURL);
};

export const getTownURL = () => {
  return CLIENT_RENDERED ? localStorage?.getItem(TOWNURL) : '';
};

export const deleteTownURL = () => {
  localStorage.removeItem(TOWNURL);
};