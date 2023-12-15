import { api } from "./api-config";

export const loginApi = async (identifier, password) => {
  try {
    const response = await api.post(
      "/login",
      {
        identifier,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return response.data.accessToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const registerApi = async (username, email, password) => {
  try {
    const response = await api.post("/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
