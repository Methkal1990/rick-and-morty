import { combineReducers } from "redux";

import charactersReducer from "./characters";
import loadingReducer from "./loading";

export default combineReducers({
  characters: charactersReducer,
  loading: loadingReducer,
});
