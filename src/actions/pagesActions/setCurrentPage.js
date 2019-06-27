import { SET_PAGE } from "../types";

export const setCurrentPage = number => {
  return {
    type: SET_PAGE,
    payload: number
  };
};
