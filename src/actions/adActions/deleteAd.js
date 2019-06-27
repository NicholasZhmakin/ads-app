import { DELETE_AD } from "../types";

export const deleteAd = id => {
  return {
    type: DELETE_AD,
    payload: id
  };
};
