import { useState } from "react";

function RandomUserAsync(){
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUser = async () => {
    setLoading(true);
    setError("");
  
  const randomId = Math.floor(Math.random() * 10)+ 1;

    try{
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${randomId}`
      );

      const data = await response.json();
      
      setUser(data);
    } catch (error) {
      console.error(error);
      setError("Failed to load user.");
    }

    setLoading(false);
  };

  return(
    <section>
      <h2>Random User Async</h2>

      <button onClick={getUser}>
        Get User
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
    </section>
  );
}

export default RandomUserAsync;