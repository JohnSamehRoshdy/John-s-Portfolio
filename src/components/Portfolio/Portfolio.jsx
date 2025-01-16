import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Fast React Pizza Co.",
    img: "./reactPizza.JPG",
    desc: "This React-based pizza ordering application allows users to browse a pizza menu, select items, add them to a cart, and place an order with a calculated total price. The app utilizes Redux Toolkit for efficient state management, ensuring a smooth and responsive user experience. Users can easily manage their cart, update quantities, and view the total cost before placing their order. The project demonstrates the effective use of modern web technologies to create an interactive and user-friendly interface for online pizza ordering.",
    git: "https://github.com/JohnSamehRoshdy/Fast-React-Pizza.git",
  },
  {
    id: 2,
    title: "World Wise",
    img: "./WorldWide.JPG",
    desc: "The World Wise app is a React application that allows users to log in, detect their current location or select other locations on a map, and add visited cities to their personal list. The project emphasizes the use of the Context API for state management, geolocation for mapping and location detection, and JSON files for data storage. This app provides an interactive way to track and manage visited cities, showcasing advanced React features and geolocation capabilities.",
    git: "https://github.com/JohnSamehRoshdy/WorldWiseApp.git",
  },
  {
    id: 3,
    title: "Use Popcorn",
    img: "./usePopcorn.JPG",
    desc: "The usePopcorn project is a React application designed to fetch and display movies, allowing users to search for movies, select them, give ratings, and add them to a watched list. This watched list is stored in local storage, ensuring that the list persists even after the page is refreshed. The app provides a seamless and interactive experience for managing and rating watched movies, leveraging local storage for data persistence and efficient state handling for a smooth user experience.",
    git: "https://github.com/JohnSamehRoshdy/usePopcorn.git",
  },
  {
    id: 4,
    title: "React-Redux Bank",
    img: "./ReduxBank.JPG",
    desc: "The Redux-Bank project is a practice-focused React application designed to simulate basic banking operations, utilizing Redux for state management. Users can search for account holders, deposit and withdraw funds, apply for loans, and make loan repayments. While not a complete banking application, this project effectively demonstrates the use of Redux for handling complex state interactions in a financial context, providing a practical environment to enhance Redux skills.",
    git: "https://github.com/JohnSamehRoshdy/Redux-Bank.git",
  },

  {
    id: 1,
    title: "React Quiz",
    img: "./ReactQuiz.JPG",
    desc: "The React Quiz App is an interactive application where users answer questions, track their scores, and complete the quiz within a set time limit. It features a timer and a progress bar that displays the current score and the number of questions answered, providing a dynamic and engaging quiz experience.",
    git: "https://github.com/JohnSamehRoshdy/React-Quiz.git",
  },
  {
    id: 2,
    title: "Far Away",
    img: "./FarAway.JPG",
    desc: "The Far-Away app is a single-page React application designed to help users manage their travel packing lists. Users can add items they need to pack, specify the quantity of each item, and check them off as they are packed. The app allows sorting of items alphabetically, by quantity, and by the time they were added, making it easy to organize and ensure nothing is forgotten. This streamlined tool enhances travel preparation by keeping packing lists clear and manageable.",
    git: "https://github.com/JohnSamehRoshdy/Far-Away-App.git",
  },
  {
    id: 3,
    title: "Dentos",
    img: "./Dentos.JPG",
    desc: "The Dentos project is a comprehensive full-stack website designed for seamless dental care management. It features robust signup and login functionalities, offering users access to multiple dentists and clinics for booking appointments. Users can view and provide ratings for each practitioner, as well as create posts to share dental health insights. The website supports multiple themes for personalized user experiences and is bilingual, offering both Arabic and English languages. Built on Python and Django, the backend ensures secure data handling and efficient server-side operations, making Dentos a reliable platform for dental care coordination and community engagement.",
    git: "https://github.com/JohnSamehRoshdy/Dentos-FrontEnd.git",
  },
  {
    id: 4,
    title: "Budget Chatbot",
    img: "./chat.jpg",
    desc: "This React application offers a dual-functionality experience with two distinct sections. The first section features an AI chatbot, providing users with interactive and intelligent conversations. The second section is an image creator, where users can input a description and receive a generated image that matches their description. This app combines the power of conversational AI and image generation, showcasing advanced AI capabilities within a single user-friendly interface.",
    git: "https://github.com/JohnSamehRoshdy/Smart_Chatbot_-_ImageCreator.git",
  },
];

function Single({ item }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="logo" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.git} target="_blank" rel="noopener noreferrer">
              <p>GitHub Repository</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
