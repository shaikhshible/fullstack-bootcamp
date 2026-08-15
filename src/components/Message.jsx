import { useState } from "react";

function Message() {
  const [showMessage, setShowMessage] = useState(false);

  return(
    <section>
      <h2>Message Example</h2>
      <button 
      onClick={() => setShowMessage(!showMessage)}
      >
      Show Message
      </button>
      {showMessage && <p>Hello! Welcome to my portfolio.</p>}
    </section>
  );
  
}

export default Message;