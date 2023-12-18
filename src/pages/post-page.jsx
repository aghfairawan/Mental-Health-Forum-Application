import { useLocation } from "react-router-dom";
import PostDetail from "../components/post/post-detail";
import { useCallback, useEffect, useState } from "react";
import { getPost } from "../api/post-api";

export default function PostPage() {
  const location = useLocation();
  const postId = location.state?.postId;
  const [post, setPost] = useState({ comments: [], author: {} });
  const [loading, setLoading] = useState(false);
//   console.log(post);

  const fetchPostDetail = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getPost(postId);
      setPost(data.post);
    } catch (error) {
      console.error("Failed to fetch posts by postId", error);
    } finally {
      setLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    fetchPostDetail();
  }, [fetchPostDetail]);

  return (
    <div>
      <PostDetail post={post} loading={loading} />
    </div>
  );
}
