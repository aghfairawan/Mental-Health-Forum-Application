import { motion } from "framer-motion";
import ForumItems from "./forum-items";

export default function Forums() {
  return (
    <motion.div layout className="w-full px-4 py-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-main-dark dark:border-none">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none  text-dark-navy">Forums </h5>
      </div>
      <ForumItems />
    </motion.div>
  );
}
