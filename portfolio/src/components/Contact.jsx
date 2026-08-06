import "./Contact.css";

function Contact () {
  return(

    <section id="contact" className="contact">

      <h2> Contact Me</h2>

      <p>
        I'm always interested in new opportunities and collaborations.
        Feel free to get in touch!
      </p>
      
      <div className="contact-info">
        <p>📧 Email: shaikhshible@gmail.com</p>
        <p>📍 Location: Turku, Finland</p>
        <p>💼 Full Stack Developer</p>

        </div>

      <div className="contact-links">

        <a 
        href="mailto:shaikhshible@gmail.com"
        traget="_blank" 
        rel=" noopener noreferrer"
        className="contact-btn"
        >
          Email Me 
        </a>

        <a 
        href="https://github.com/shaikhshible" 
        traget="_blank" 
        rel=" noopener noreferrer"
        className="contact-btn"
        >
          GitHub
        </a>

        <a 
        href="https://www.linkedin.com/in/shaikhshible/" 
        traget="_blank" 
        rel="nooopener noreferrer"
        className="contact-btn"
        >
          LinkedIn
        </a>

        </div>

      </section>
  );
}

export default Contact;