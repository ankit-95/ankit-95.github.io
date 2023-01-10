// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { content } from "./Content";
import NabBar from "./components/NavBar";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);
  const { Footer } = content;
  return (
    <div className="">
      <NabBar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      {/* <Testimonials /> */}
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3"> ANKIT GUPTA</h6>
        <p> {Footer.text}</p>
      </footer>
    </div>
  );
};

export default App;
