import { api } from "./api-config";

export const getMostRecentPosts = async () => {
  try {
    const response = await api.get("/post/recent");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
