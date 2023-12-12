import { motion } from "framer-motion";
import ForumItems from "./forum-items";

export default function Forums() {
  return (
    <motion.div layout className="bg-transparent ">
      <ForumItems />
    </motion.div>
  );
}
