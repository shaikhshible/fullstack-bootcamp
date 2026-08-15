import { useState } from "react";

function FormValidation(){
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");
  const[error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setError("Please enter your name.");
      return;
    }

    if (email === "") {
      setError("Please enter your email.");
      return;
    }

    if (message === "") {
      setError("Please enter your message.");
      return;
    }

    setError("");

    console.log("Form submitted");
  };

  return(
    <form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>

      {error && <p>{error}</p>}
      
      <input
      type="text"
      placeholder="Your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      />

      <input
      type="email"
      placeholder="Your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      />

      <textarea
      placeholder="Your message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      required
      />

      <button type="submit">
        Send Message
      </button>
    </form>
  );
}

export default FormValidation;