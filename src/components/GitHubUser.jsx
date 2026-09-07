import { useState } from "react";

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
    <input
      type="text"
      placeholder="Enter GitHub username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

    <button onClick={searchUser}>
      Search
    </button>

    <button onClick={clearSearch}>
      Clear
    </button>

    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}

    {user && (
      <div>
        <img
          src={user.avatar_url}
          alt={user.login}
          width="120"
          />

          <h3>{user.name || user.login}</h3>
          <p>Username: {user.login}</p>
          <p>Bio: {user.bio || "No bio available."}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repositories: {user.public_repos}</p>
          <p>Phone: {user.phone || "Not provided."}</p>
          <p>Email: {user.email || "Not provided."}</p>
          <p>Location: {user.location || "Not provided."}</p>
          <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          >
            View GitHub Profile
          </a>
      </div>
    )}
    </section>
  );
}

export default GitHubUser;