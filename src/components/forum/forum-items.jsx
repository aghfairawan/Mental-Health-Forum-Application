/* eslint-disable react/prop-types */
import { Folder, MessagesSquare } from "lucide-react";
import ForumCard from "../ui/forum-card";
import { motion } from "framer-motion";
import classes from "./forum-items.module.css";

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
                    <div className="flex gap-2 font-semibold justify-between">
                      <MessagesSquare />
                      <div className="flex flex-col md:flex-row">
                        <div className="lg:w-175 md:w-96 ">
                          <p className="hover:font-bold hover:opacity-90" title={forum.description}>
                            {forum.title}
                          </p>
                        </div>
                        <div className="flex gap-1 text-center">
                          <p className="font-normal">Posts: </p>
                          <p className="font-light">{postCount}</p>
                        </div>
                      </div>
                    </div>
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
