//import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import FormValidation from "./components/FormValidation";
//import EffectExample from "./components/EffectExample";
//import UserList from "./components/UserList";
//import RandomUser from "./components/RandomUser";
//import UserSearch from "./components/UserSearch";
//import GitHubUser from "./components/GitHubUser";
//import JobApplication from "./components/JobApplication";
//import GitHubAutoSearch from "./components/GitHubAutoSearch";
import FetchExample from "./components/FetchExample";
import ThemeExample from "./components/ThemeExample";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {

  const { darkMode } = useContext(ThemeContext);

  return(
    <div className={darkMode ? "app dark" : "app light"}>

      <header>
        <Navbar 
        />
      </header>
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/*<JobApplication />*/}
        {/*<GitHubAutoSearch />*/}
        <FetchExample />
        <ThemeExample />

      </main>
      
      <footer>
        <Footer />
      </footer>

    </div>  
  );
}

export default App;