import Navbar from "./components/Navbar";
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
      </main>
      
      <footer>
        <Footer />
      </footer>
    </>  
  );
}

export default App;