import { REGISTER, LOGIN } from "./types";
import { register, login } from "../api";

export const registerUser = (data) => async (dispatch) => {
  const response = await register(data);
  dispatch({
    type: REGISTER,
    payload: response.data,
  });
};

export const loginUser = (data) => async (dispatch) => {
  const response = await login(data);
  localStorage.setItem("token", response);

  dispatch({
    type: LOGIN,
    payload: response.data,
  });
};
