import ForumCard from "../ui/forum-card";
import { motion } from "framer-motion";

export default function ForumItems() {
  return (
    <div>
      <ForumCard title="Test" id="a" key="a">
        <ul className="text-custom-gray">
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.li
              key={index}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 },
              }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              Forum Topic/Title#
            </motion.li>
          ))}
        </ul>
      </ForumCard>
      <ForumCard title="Testa" id="s" key="s">
        <ul className="text-custom-gray">
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.li
              key={index}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 },
              }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              Forum Topic/Title#
            </motion.li>
          ))}
        </ul>
      </ForumCard>
      <ForumCard title="Test" id="d" key="d">
        <ul className="text-custom-gray">
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.li
              key={index}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 },
              }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              Forum Topic/Title#
            </motion.li>
          ))}
        </ul>
      </ForumCard>
    </div>
  );
}
