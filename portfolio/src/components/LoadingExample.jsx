import { useState } from "react";

function LoadingExample() {
  const[loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return(
    <section>
      <h2>Loading Example</h2>

      <button
      onClick={handleLoad}
      >
        {loading ? "Loading..." : "Load Data"}
      </button>

      {loading && <p>Loading...</p>}

      {!loading && <p>Data loaded successfully!</p>}
    </section>
  );
  
}

export default LoadingExample;