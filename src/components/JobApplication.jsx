import { useState} from "react";

function JobApplication() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.name === "") {
  alert("Please enter your name.");
  return;
  }

  if (formData.email === "") {
  alert("Please enter your email.");
  return;
  }

  if (formData.message === "") {
  alert("Please enter your message.");
  return;
  }

  console.log(formData);
  setSuccess("Application submitted successfully!");
  };


  const clearForm = () => {
  setFormData({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  setSuccess("");
};

  return (
    <section>
      <h2>Job Application</h2>

      <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
      />

      <input 
      type="email"
      name="email"
      placeholder="Your email"
      value={formData.email}
        onChange={handleChange}
      />

      <input
      type="tel"
      name="phone"
      placeholder="Your phone number"
      value={formData.phone}
        onChange={handleChange}
      />

      <input
      type="text"
      name="position"
      placeholder="Position"
      value={formData.position}
      onChange={handleChange}
      />

      <textarea
      name="message"
      placeholder="Your message"
      value={formData.message}
      onChange={handleChange}
      />

      <button type="submit">
        Submit Application
      </button>

      <button type="button" onClick={clearForm}>
        Clear
      </button>

      </form>

      {success && <p>{success}</p>}

    </section>
  );
}

export default JobApplication;