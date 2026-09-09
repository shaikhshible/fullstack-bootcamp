function SearchForm({ username, setUsername, searchUser }) {
  return (
  <div>
    <input
      type="text"
      placeholder="Enter GitHub username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

    <button onClick={searchUser}>
      Search
    </button>
  </div>
);
}

export default SearchForm;