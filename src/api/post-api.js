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

export const createPost = async (forumId, title, content, token) => {
  try {
    const response = await api.post(
      "/post/add",
      {
        forumId,
        title,
        content,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPost = async (postId) => {
  try {
    const response = await api.get(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
