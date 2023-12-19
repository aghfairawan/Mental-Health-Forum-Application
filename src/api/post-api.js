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

export const getPost = async (postId, page) => {
  try {
    const response = await api.get(`/post/${postId}`, {
      withCredentials: true,
      params: {
        commentPage: page,
      },
    } );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const commentToPost = async (postId, text, token) => {
  try {
    const response = await api.post(
      `/comment/${postId}`,
      {
        text,
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
