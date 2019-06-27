import { CHECK_USER } from "../types";

export const checkUser = user => {
  return {
    type: CHECK_USER,
    payload: user
  };
};
