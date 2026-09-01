import { useState } from "react";

function RandomUser(){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUser = () => {
    setLoading(true);
    setError("");
    
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setError("Failed to load user");
      setLoading(false);
    });
  };

  return(
    <section>
      <h2>Random User</h2>

      <button onClick={getUser}>
        Get Random User
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </section>
  );
}

export default RandomUser;