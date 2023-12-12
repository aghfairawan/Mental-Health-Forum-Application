import { useState } from "react";
import ThemeBtn from "../../ui/theme-btn";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navVariants } from "../../../utils/animate-variants";

function NavLinks() {
  return (
    <>
      <NavLink className="hover:opacity-80" to="">Home</NavLink>
      <NavLink to="">Articles</NavLink>
      <NavLink to="">Contact</NavLink>
      <NavLink to="">Feedback</NavLink>
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavItems = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 w-full z-20 bg-dark-navy text-white">
        <div className="flex max-w-7xl mx-auto items-center justify-between gap-10 py-2 px-1 lg:px-0">
          <div className="font-semibold">
            <h1>Good Health & </h1>
            <span>Well-Being Forum</span>
          </div>
          <div className="hidden md:flex gap-5">
            <NavLinks />
          </div>
          <div className="flex gap-4">
            <ThemeBtn />
            <p>signup</p>
          </div>
          <motion.div className="md:hidden" >
            <button onClick={toggleNavItems}>{isOpen ? <X /> : <Menu />}</button>
          </motion.div>
        </div>
      </nav>
      <AnimatePresence >
        {isOpen && (
          <motion.div
            variants={navVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex flex-col items-center py-2 gap-2 bg-light-navy text-white">
            <NavLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
