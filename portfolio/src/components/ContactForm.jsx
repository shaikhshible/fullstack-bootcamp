import { useState } from "react";

function ContactForm() {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");

  return(
    <section>
      <h2>Contact Me</h2>

      <input
      type="text"
      placeholder="Your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />

      <input
      type="email"
      placeholder="Email" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
      placeholder="Your message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      />

      <p>Hello, {name}</p>
      <p>your email is {email}</p>
      <p>Your message:
        {message}
        </p>
      
      </section>
  );
  
}

export default ContactForm;