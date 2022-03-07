import { GET_CHARACTER, GET_CHARACTERS, FAVORITE } from "../actions/types";

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
    case FAVORITE:
      return {
        ...state,
        currentCharacter: {
          ...state.currentCharacter,
          isFavorite: !state.currentCharacter.isFavorite,
        },
      };
    default:
      return state;
  }
};

export default charactersReducer;
