import { Pencil } from "lucide-react";
import StatsCard from "../ui/stats-card";
import { useCallback, useEffect, useState } from "react";
import { getMostRecentPosts } from "../../api/post-api";
import { convertToInitial } from "../../utils/initial-converter";
import { timePassed } from "../../utils/date-converter";

export default function MostRecentPosts() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecentPosts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getMostRecentPosts();
      setRecentPosts(data.posts);
    } catch (error) {
      console.error("Failed to fetch forums:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRecentPosts();
  }, [fetchRecentPosts]);

  return (
    <StatsCard title="Most Recent Posts" icon={<Pencil size={20} />}>
      {recentPosts.map((post) => (
        <div key={post._id} className="mb-2 ">
          <div className="grid grid-flow-col auto-cols-auto gap-2 justify-start items-center">
            <div className="relative text-xs font-medium inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-300 rounded-full" title={post.author.username}>
              {convertToInitial(post.author.username)}
            </div>
            <div>
              <p className="text-sm font-medium line-clamp-1 hover:underline underline-offset-2">{post.title}</p>
            </div>
          </div>
          <div className="mb-2">
            <p className="line-clamp-3 text-xs font-normal">{post.content}</p>
            <span className="text-xs font-normal">{timePassed(post.createdAt)}</span>
          </div>
          <hr />
        </div>
      ))}
    </StatsCard>
  );
}
