/* eslint-disable react/prop-types */
import { Folder, MessagesSquare } from "lucide-react";
import ForumCard from "../ui/forum-card";
import { motion } from "framer-motion";
import { formatDateForLatestForum } from "../../utils/date-converter";
import LoadingForumContent from "../ui/loading";
import { Avatar } from "flowbite-react";
import { convertToInitial } from "../../utils/initial-converter";

export default function ForumItems({ forums, loading, posts }) {
  const forumGroupingByCategory = (forums) => {
    return forums.reduce((acc, forum) => {
      const category = forum.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(forum);
      return acc;
    }, {});
  };

  const groupedForums = forumGroupingByCategory(forums);

  return (
    <div>
      {Object.entries(groupedForums).map(([category, forumsInCategory], index) => (
        <ForumCard title={category} id={category} key={index} icon={<Folder />}>
          <ul className="text-custom-gray divide-y divide-gray-200 dark:divide-gray-300 ">
            {forumsInCategory.map((forum, index) => {
              const postCount = posts[forum._id] ? posts[forum._id].length : 0;
              const forumPosts = posts[forum._id] || [];
              const latestPost = forumPosts.reduce((latest, current) => (new Date(latest.createdAt) > new Date(current.createdAt) ? latest : current), forumPosts[0]);
              return (
                <motion.li
                  key={forum._id}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -20 },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex p-4 transition duration-300 ease-in-out hover:bg-slate-100 w-full">
                    {loading ? (
                      <div>
                        <LoadingForumContent />
                      </div>
                    ) : (
                      <div className="flex gap-2 font-semibold justify-between">
                        <MessagesSquare />
                        <div className="flex gap-1 md:gap-4 flex-col md:flex-row">
                          <div className="">
                            <p className="hover:font-bold hover:opacity-90 capitalize" title={forum.description}>
                              {forum.title}
                            </p>
                          </div>
                          <div className="flex gap-1 text-center">
                            <p className="font-normal">Posts: </p>
                            <p className="font-light">{postCount}</p>
                          </div>
                          <div>
                            {latestPost ? (
                              <div className="flex flex-col md:flex-row md:gap-1">
                                <Avatar rounded placeholderInitials={convertToInitial(latestPost.author.username)} title={latestPost.author.username} />
                                <span>{latestPost.title},</span>
                                <span>{latestPost.author.username},</span>
                                <span>{formatDateForLatestForum(latestPost.createdAt)}</span>
                              </div>
                            ) : (
                              <p className="text-red-500">No Post</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </ForumCard>
      ))}
    </div>
  );
}
