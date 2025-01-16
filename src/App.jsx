import "./App.scss";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";

import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div>
      <section id="Home">
        <div className="content">
          <Navbar />

          <Hero />
        </div>
      </section>

      <section id="Skills">
        <Parallax>What Can I Do</Parallax>
      </section>

      <section id="Skills" className="mobileSkills">
        <div className="content">
          {" "}
          <Skills />
        </div>
      </section>

      <section id="Projects">
        <Parallax>What I have done</Parallax>
      </section>

      <Portfolio />

      <section id="Contact">
        <div className="content">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default App;
