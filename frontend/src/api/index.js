import axios from "axios";

const rootRequest = axios.create({
  baseURL: "/api",
});

// characters
export const getAllCharacters = async () => {
  const token = localStorage.getItem("token");
  const response = await rootRequest.get("/characters", {
    headers: {
      "x-auth-token": token,
    },
  });
  return response.data;
};

export const getCharacterById = async (id) => {
  const token = localStorage.getItem("token");
  const response = await rootRequest.get(`/characters/${id}`, {
    headers: {
      "x-auth-token": token,
    },
  });
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
