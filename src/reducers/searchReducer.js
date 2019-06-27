import { SEARCH_AD } from "../actions/types";

const initState = "";

const searchReducer = (state = initState, action) => {
  const { type, payload } = action;
  if (type === SEARCH_AD) {
    return payload;
  }
  return state;
};

export default searchReducer;
