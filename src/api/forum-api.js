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

export const getPostsByForumId = async (forumId) => {
  try {
    const response = await api.get(`/forum/${forumId}`, {
      withCredentials: true,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
