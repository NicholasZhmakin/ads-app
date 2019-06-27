import {
  CREATE_AD,
  DELETE_AD,
  EDIT_AD,
  SET_ADS,
  FETCH_ERROR,
  FETCH_REQUEST
} from "../actions/types";

const initState = {
  ads: [],
  loading: false,
  error: false
};

const adsReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case SET_ADS:
      return {
        ...state,
        ads: payload,
        loading: false,
        error: false
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case DELETE_AD:
      const filteredAds = state.ads.filter(ad => {
        return ad.id !== payload;
      });
      return {
        ...state,
        ads: filteredAds
      };
    case CREATE_AD:
      const newAds = [...state.ads, payload];
      return {
        ...state,
        ads: newAds
      };
    case EDIT_AD:
      const editedBook = state.ads.find(ad => ad.id === payload.id);
      editedBook.title = payload.title;
      editedBook.description = payload.description;
      return {
        ...state
      };
    default:
      return state;
  }
};

export default adsReducer;
