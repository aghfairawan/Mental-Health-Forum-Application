/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import ForumItems from "./forum-items";

export default function Forums({ grabForums, grabLoadingState }) {
  return (
    <motion.div layout className="bg-transparent">
      <ForumItems forums={grabForums} loading={grabLoadingState} />
    </motion.div>
  );
}
