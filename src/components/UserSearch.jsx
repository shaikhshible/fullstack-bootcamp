import { useState } from "react";

function UserSearch() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const searchUser = async () => {
  setLoading(true);
  setError("");
  setUser(null);

  if(userId === ""){
    setError("Please enter a user ID.");
    setLoading(false);
    return;
  }
  
  if(userId < 1 || userId > 10){
    setError("Please enter a number between 1 and 10");
    setLoading(false);
    return;
  }

  try{
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if(!response.ok){
      throw new Error("User not found");
    }

    const data = await response.json();

    setUser(data);
  }
  catch (error) {
    console.error(error);
    setError("Failed to find user.");
  }

  setLoading(false);

};

const clearSearch = () => {
  setUserId("");
  setUser(null);
  setError("");
};

  return(
    <section>
      <h2>User Search</h2>

      <input
      type="number"
      placeholder="Enter user ID (1-10)"
      value={userId}
      onChange={(e) => setUserId(e.target.value)}
      />

      <button onClick={searchUser}>
        Search User
      </button>

      <button onClick={clearSearch}>
        Clear
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

export default UserSearch;