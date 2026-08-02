import "./Hero.css"
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
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
        <button className="btn-primary">Download CV</button>
        <button className="btn-secondary">Contact Me</button>
      </div>

      </section>
  );
}

export default Hero;