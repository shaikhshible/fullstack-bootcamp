import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Message from "./components/Message";
import ShowNotification from "./components/ShowNotification";

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
        <Message />
        <ShowNotification />
      </main>
      
      <footer>
        <Footer />
      </footer>

    </div>  
  );
}

export default App;