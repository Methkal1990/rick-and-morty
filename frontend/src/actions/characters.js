import { GET_CHARACTERS, GET_CHARACTER } from "./types";
import { getAllCharacters, getCharacterById } from "../api";

export const getCharacters = () => async (dispatch) => {
  const characters = await getAllCharacters();
  dispatch({
    type: GET_CHARACTERS,
    payload: characters,
  });
};

export const getCharacter = (id) => async (dispatch) => {
  const character = await getCharacterById(id);
  dispatch({
    type: GET_CHARACTER,
    payload: character,
  });
};
