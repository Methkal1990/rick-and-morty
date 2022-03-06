import { GET_CHARACTER, GET_CHARACTERS } from "../actions/types";

const initialState = {
  allCharacters: [],
  currentCharacter: {},
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
      };
    case GET_CHARACTER:
      return {
        ...state,
        currentCharacter: action.payload,
      };
    default:
      return state;
  }
};

export default charactersReducer;
