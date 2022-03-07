import axios from "axios";

const rootRequest = axios.create({
  baseURL: "/api",
});

// characters
export const getAllCharacters = async (token) => {
  const response = await rootRequest.get("/characters", {
    headers: {
      "x-auth-token": token,
    },
  });
  return response.data;
};

export const getCharacterById = async (id, token) => {
  const response = await rootRequest.get(`/characters/${id}`, {
    headers: {
      "x-auth-token": token,
    },
  });
  return response.data;
};

export const favorite = async (id, token) => {
  return await rootRequest.post(
    `/characters/favorite`,
    { id },
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
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
