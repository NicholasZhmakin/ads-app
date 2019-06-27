import { CREATE_AD } from "../types";

export const createAd = newAd => {
  return {
    type: CREATE_AD,
    payload: newAd
  };
};
