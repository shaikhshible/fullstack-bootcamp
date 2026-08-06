import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return(
    <>
      <header>
        <Navbar />
      </header>
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      
      <footer>
        <Footer />
      </footer>
    </>  
  );
}

export default App;