import { useState } from "react";

function ConditionalExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
    <section>
      <h2>Login Example</h2>

      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please log in.</p>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

    </section>
  );
  
}

export default ConditionalExample;