import { REGISTER, LOGIN } from "./types";
import { register, login } from "../api";

export const registerUser = (data) => async (dispatch) => {
  const response = await register(data);
  dispatch({
    type: REGISTER,
    payload: response.token,
  });
  localStorage.setItem("token", response.token);
};

export const loginUser = (data) => async (dispatch) => {
  const token = await login(data);

  dispatch({
    type: LOGIN,
    payload: token,
  });
  localStorage.setItem("token", token);
};
