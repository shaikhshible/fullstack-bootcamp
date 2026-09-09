import { useState } from "react";
import UserProfile from "./UserProfile";
import SearchForm from "./SearchForm";


function GitHubUser() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = async () => {
    setLoading(true);
    setError("");
    setUser(null);

    if (username === "") {
      setError("Please enter a GitHub username.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );
      
      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();
      setUser(data);
    }
    catch (error) {
      console.error(error);
      setError("GitHub user not found.");
    }

    setLoading(false);
    
  };

  const clearSearch = () => {
    setUsername("");
    setUser(null);
    setError("");
  };

  return (
    <section>
      <h2>GitHub User Search</h2>
      <SearchForm
        username={username}
        setUsername={setUsername}
        searchUser={searchUser}
      />

    <button onClick={clearSearch}>
      Clear
    </button>

    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}

    {user && <UserProfile user={user} />}

    </section>
  );
}

export default GitHubUser;