import axios from "axios";

const rootRequest = axios.create({
  baseURL: "/api",
});

// characters
export const getAllCharacters = async () => {
  const response = await rootRequest.get("/characters");
  return response.data;
};

export const getCharacterById = async (id) => {
  const response = await rootRequest.get(`/characters/${id}`);
  return response.data;
};

// users
export const register = async (data) => {
  const response = await rootRequest.post("/user", data);
  return response.data;
};

export const login = async (data) => {
  const response = await rootRequest.post("/auth", data);
  return response.data;
};
