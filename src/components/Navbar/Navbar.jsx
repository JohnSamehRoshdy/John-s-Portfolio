import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle state properly
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <img className="logo" src="/logo.jpg" alt="logo" />
        <div className="tabs">
          <a href="#Home">Home</a>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="burger-icon" onClick={handleSidebarToggle}>
          <motion.div whileTap={{ scale: 0.9 }}>
            <GiHamburgerMenu />
          </motion.div>
        </div>
        <div className="social">
          <a
            href="https://www.facebook.com/john.sameh.963"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/john-sameh-2327942a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/JohnSamehRoshdy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/git1.png" alt="GitHub" />
          </a>
        </div>
      </div>
      {/* Render the sidebar conditionally */}
      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
      )}
    </div>
  );
}

export default Navbar;
