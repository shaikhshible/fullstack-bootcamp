import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      setUsers(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      setError("Failed to load users.");
      setLoading(false);
    });
  }, []);

return (
  <section>
    <h2>User List</h2>

    {loading && <p>Loading users...</p>}

    {error && <p>{error}</p>}

    {!loading && 
    !error && 
          users.map((user) => (
      <p key={user.id}>
        {user.name} - {user.email}
      </p>
    ))}
  </section>
);
}

export default UserList;