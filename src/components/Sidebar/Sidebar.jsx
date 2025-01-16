import "./Sidebar.scss";
import { motion } from "framer-motion";

const variants = {
  open: {
    x: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

function Sidebar({ isOpen, onClose }) {
  // Close sidebar when clicking outside

  const items = ["Home", "Skills", "Projects", "Contact"];

  return (
    <>
      <motion.div
        className={`sidebar ${isOpen ? "open" : ""}`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <button className="close-btn" onClick={onClose}></button>
        <motion.div className="links" variants={variants}>
          {items.map((item) => (
            <motion.a
              href={`#${item}`}
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      {/* Backdrop */}
      {isOpen && <div className="backdrop" onClick={onClose}></div>}
    </>
  );
}

export default Sidebar;
