/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import ForumItems from "./forum-items";
import { getPostsByForumId } from "../../api/forum-api";
import { useEffect, useState } from "react";

export default function Forums({ grabForums, grabLoadingState }) {
  const [posts, setPosts] = useState({});

  const fetchPostsPerForum = async (forumId) => {
    try {
      const data = await getPostsByForumId(forumId);
      setPosts(prevPosts => ({
        ...prevPosts,
        [forumId]: data.posts
      }));
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  useEffect(() => {
    grabForums.forEach(forum => {
      fetchPostsPerForum(forum._id);
    });
  }, [grabForums]);



  return (
    <motion.div layout className="bg-transparent">
      <ForumItems forums={grabForums} posts={posts} loading={grabLoadingState} />
    </motion.div>
  );
}
