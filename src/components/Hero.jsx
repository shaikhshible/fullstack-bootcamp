import "./Hero.css"
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <img
        src={profile}
        alt="Shaikh Shible"
        className="profile-image"
        />

      <h1>
        Hello! I'm <span>Shaikh Shible</span>
      </h1>

      <p>
        Aspiring Full Stack Developer
      </p>

      <div className="buttons">

          <a href="/Shaikh_Shible_CV.pdf"
          download
          className="btn-primary"
          >
            Download CV
            </a>
          
        <a
         href="#contact" className="btn-secondary"
         >
          Contact Me
          </a>
      </div>

      </section>
  );
}

export default Hero;