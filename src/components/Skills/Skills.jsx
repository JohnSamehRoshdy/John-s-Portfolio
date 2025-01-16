import { useState, useEffect } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";

const skillsData = [
  { imgSrc: "./reactjs.png", title: "React.js" },
  { imgSrc: "./html.png", title: "HTML, CSS, JavaScript" },
  { imgSrc: "./tailwind.png", title: "Tailwind CSS" },
  { imgSrc: "./redux.png", title: "Redux-ToolKit, Context API" },
  { imgSrc: "./router.png", title: "React Router (SPA)" },
  { imgSrc: "./reactquery.png", title: "React Query" },
  { imgSrc: "./python.png", title: "Python" },
  { imgSrc: "./django.png", title: "Django" },
  { imgSrc: "./postgres.png", title: "Postgres SQL" },
  { imgSrc: "./git1.png", title: "Version Control (Git Hub)" },
  { imgSrc: "./typescript.png", title: "TypeScript" },

  // Add more skills as needed
];

const pageSize = 4; // Number of skills per page

function Skills() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nextPage = () => {
    if (currentPage < Math.ceil(skillsData.length / pageSize) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1, // Increased duration to slow down the animation
        ease: "easeOut", // Optional: Adjust easing for a smoother effect
        staggerChildren: 0.2, // Optional: Adjust stagger between children for a slower sequence
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true); // Set mobile flag when screen width is <= 768px
      } else {
        setIsMobile(false); // Set non-mobile flag for larger screens
      }
    };

    // Check on initial load
    handleResize();

    // Add event listener on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let displayedSkills = isMobile
    ? skillsData
    : skillsData.slice(
        currentPage * pageSize,
        currentPage * pageSize + pageSize
      );

  return (
    <div className="container">
      <motion.div className="skills">
        <div className="titleContainer">
          <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
              My
              <motion.b whileHover={{ color: "orange" }}>
                &nbsp; Core &nbsp;
              </motion.b>
            </h1>
          </div>
          <div className="title titlerow">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Skills </motion.b> &{" "}
              <motion.b whileHover={{ color: "orange" }}>Abilities</motion.b>
            </h1>
            <a href="/JohnSamehCv.pdf">
              <button>Download CV</button>
            </a>
          </div>
        </div>
        <motion.div
          className="listContainer"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          whileInView="animate"
          viewport={{ amount: 0.5 }}
        >
          {displayedSkills.map((skill, index) => (
            <motion.div key={index} className="box" whileHover={{ scale: 1.1 }}>
              <img src={skill.imgSrc} alt={skill.title} />
              <h2>{skill.title}</h2>
            </motion.div>
          ))}
        </motion.div>
        {!isMobile && (
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 0}>
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={
                currentPage >= Math.ceil(skillsData.length / pageSize) - 1
              }
            >
              Next
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Skills;
