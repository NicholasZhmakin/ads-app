import searchReducer from "./searchReducer";
import adsReducer from "./adsReducer";
import authReducer from "./authReducer";
import pageReducer from "./pageReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  searchR: searchReducer,
  adsR: adsReducer,
  pageR: pageReducer,
  authR: authReducer
});

export default rootReducer;
