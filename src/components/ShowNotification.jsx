import { useState } from "react";

function ShowNotification() {
  const [showNotification, setShowNotification] = useState(false);

  return(
    <section>
      <h2>Show Notification</h2>

      <button
        onClick={() => setShowNotification(!showNotification)}
      >
        {showNotification ? "Hide Notification" : "Show Notification"}
      </button>
      
      {showNotification && <p>This is a notification message</p>}

    </section>
  );
  
}

export default ShowNotification;