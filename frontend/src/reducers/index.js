import { combineReducers } from "redux";

import charactersReducer from "./characters";
import loadingReducer from "./loading";
import authReducer from "./auth";

export default combineReducers({
  characters: charactersReducer,
  loading: loadingReducer,
  auth: authReducer,
});
