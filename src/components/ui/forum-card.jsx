/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE_PREFIX } from "../../utils/ls-prefixes";
import { forumCardVariants } from "../../utils/animate-variants";

export default function ForumCard({ title, children, id, icon }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const storedState = localStorage.getItem(LOCAL_STORAGE_PREFIX + id);
    if (storedState !== null) {
      setIsOpen(storedState === "open");
    }
  }, [id]);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem(LOCAL_STORAGE_PREFIX + id, newState ? "open" : "closed");
  };

  return (
    <motion.div className="border border-gray-200 rounded-tl-lg shadow mb-2 p">
      <div className="bg-dark-navy rounded-tl-lg">
        <motion.h2 layout="position" onClick={handleToggle} className="text-white text-xl p-2">
          {title}
          {icon}
        </motion.h2>
      </div>
      <AnimatePresence>
        <motion.div >
          {isOpen && (
            <motion.div variants={forumCardVariants} transition={{ duration: 0.75 }} initial="closed" animate="open" exit="closed" className="bg-white">
              {children}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
