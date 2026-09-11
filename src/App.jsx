import { useState } from "react";
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
import JobApplication from "./components/JobApplication";
import GitHubAutoSearch from "./components/GitHubAutoSearch";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return(
    <div className={darkMode ? "dark" : "light"}>

      <header>
        <Navbar 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </header>
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <JobApplication />
        <GitHubAutoSearch />

      </main>
      
      <footer>
        <Footer />
      </footer>

    </div>  
  );
}

export default App;