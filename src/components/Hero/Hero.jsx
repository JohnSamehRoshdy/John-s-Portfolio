import { motion } from "framer-motion";
import "./Hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const imageVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 100,
  },
  animate: {
    x: "-420%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          variants={textVariants}
          className="textContainer"
          initial="initial"
          animate="animate" // Changed from whileInView to animate
        >
          <motion.h2 variants={textVariants}>JOHN SAMEH</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Projects">
              <motion.button variants={textVariants}>
                See the latest works
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0, y: 10 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Front-End React.JS Back-End
      </motion.div>
      <motion.div
        className="imageContainer"
        variants={imageVariants}
        initial="initial"
        animate="animate" // Changed from whileInView to animate
      >
        <img src="/Me.png" alt="" />
      </motion.div>
    </div>
  );
}

export default Hero;
