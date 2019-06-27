import { EDIT_AD } from "../types";

export const editAd = newEditedAd => {
  return {
    type: EDIT_AD,
    payload: newEditedAd
  };
};
