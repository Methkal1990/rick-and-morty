import { REGISTER, LOGIN } from "../actions/types";

const initialState = {
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        token: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
