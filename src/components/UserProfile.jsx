import UserStats from "./UserStats";

function UserProfile({ user }) {
  return (
    <div>
      <img 
      src={user.avatar_url} 
      alt={`${user.login}'s avatar`} 
      width="120" 
      />

      <h3>{user.name || user.login}</h3>
      <p>Username: {user.login}</p>
      <p>Bio: {user.bio || "No bio available."}</p>
      <UserStats user={user} />
      <a
      href={user.html_url} 
      target="_blank"
      rel="noopener noreferrer"
      >
        View GitHub Profile
      </a>
    </div>
  );
}

export default UserProfile;