/* eslint-disable react/prop-types */
import ForumCard from "../ui/forum-card";
import { motion } from "framer-motion";

export default function ForumItems({ forums, loading }) {
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
        <ForumCard title={category} id={category} key={index}>
          <ul className="text-custom-gray">
            {forumsInCategory.map((forum, index) => (
              <motion.li
                key={index}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -20 },
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {forum.title}
              </motion.li>
            ))}
          </ul>
        </ForumCard>
      ))}
    </div>
  );
}
