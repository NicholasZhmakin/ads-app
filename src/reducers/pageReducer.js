import { NEXT_PAGE, PREV_PAGE, SET_PAGE, FIRST_PAGE } from "../actions/types";

const initState = {
  currentPage: 1
};

const pageReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: payload
      };
    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1
      };
    case FIRST_PAGE:
      return {
        ...state,
        currentPage: 1
      };

    default:
      return state;
  }
};

export default pageReducer;
