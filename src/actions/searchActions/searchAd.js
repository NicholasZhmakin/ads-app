import { SEARCH_AD } from "../types";

export const searchAd = searchedWord => {
  return {
    type: SEARCH_AD,
    payload: searchedWord
  };
};
