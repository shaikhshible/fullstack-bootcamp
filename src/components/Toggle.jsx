import { useState } from "react";

function Toggle() {
const [show, setShow] = useState(false);

  return(
    <section>
      <h2>Toggle Example</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
        </button>

        {show && <p>Hello! You can see me now.</p>}
      </section>

  );
  
}

export default Toggle;