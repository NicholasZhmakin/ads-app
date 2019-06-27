import { SET_ADS, FETCH_ERROR, FETCH_REQUEST } from "../types";
import axios from "axios";

export const setAds = ads => {
  return {
    type: SET_ADS,
    payload: ads
  };
};

export const fetchError = () => {
  return {
    type: FETCH_ERROR
  };
};

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
  };
};

export const initAds = () => {
  return async dispatch => {
    try {
      const response = await axios.get("../ads.json");
      dispatch(setAds(response.data));
    } catch (error) {
      dispatch(fetchError());
    }
  };
};

// export const initAds = () => {
//   return dispatch => {
//     dispatch(fetchRequest());
//     axios
//       .get("../ads.json")
//       .then(response => dispatch(setAds(response.data)))
//       .catch(error => dispatch(fetchError()));
//   };
// };
