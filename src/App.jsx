import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
