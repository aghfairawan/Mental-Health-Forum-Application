import { motion } from "framer-motion";
import ForumItems from "./forum-items";

export default function Forums() {
  return (
    <motion.div layout className="w-full px-4 py-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-main-dark dark:border-none">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none  text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Todo List </h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </a>
      </div>
      <ForumItems />
    </motion.div>
  );
}
