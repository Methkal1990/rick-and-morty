import { GET_CHARACTERS, GET_CHARACTER, FAVORITE, SET_LOADING } from "./types";
import { getAllCharacters, getCharacterById, favorite } from "../api";

export const getCharacters = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });

    const characters = await getAllCharacters();
    dispatch({
      type: GET_CHARACTERS,
      payload: characters,
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({
      type: SET_LOADING,
      payload: false,
    });
  }
};

export const getCharacter = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
    const character = await getCharacterById(id);
    dispatch({
      type: GET_CHARACTER,
      payload: character,
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({
      type: SET_LOADING,
      payload: false,
    });
  }
};

export const favoriteCharacter = (id) => async (dispatch) => {
  await favorite(id);
  dispatch({
    type: FAVORITE,
    payload: id,
  });
};
