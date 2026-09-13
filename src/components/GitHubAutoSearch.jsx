import { useState, useEffect } from "react";

function GitHubAutoSearch() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (username.length < 3) {
      setUser(null);
      setError(null);
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (response.status === 404) {
          throw new Error("GitHub user not found");
        }

        if (response.status === 403) {
          throw new Error("GitHub API rate limit exceeded. Please try again later.");
        }

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub user.");
        }

        const data = await response.json();

        setUser(data);
      }
      catch (error) {
        console.error(error);
        setUser(null);
        setError(error.message);
      } 
      finally {
      setLoading(false);
      }
    };
    fetchUser();
    }, 500);

    return () => clearTimeout(timer);
  }, [username]);

  const clearSearch = () => {
    setUsername("");
    setUser(null);
    setError(null);
    setLoading(false);
  };

  return (
    <section>
      <h2>GitHub Auto Search</h2>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {loading && <p>Loading...</p> }

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
            <p>Bio: {user.bio || "No bio available"}</p>
            <p>Followers: {user.followers}</p>
            <p>Repositories: {user.public_repos}</p>
            <a href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
        </div>
      )}

      <button onClick={clearSearch}>
        Clear
      </button>
    </section>
  );
}

export default GitHubAutoSearch;