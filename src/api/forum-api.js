import { api } from "./api-config";

export const getAllForums = async () => {
  try {
    const response = await api.get("/forum/all", { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
