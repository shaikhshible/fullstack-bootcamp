import { useState, useEffect } from "react";

function EffectExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (count === 0){
        document.title = "React Portfolio";
      }
      else{
        document.title = `Count: ${count}`;
      } 
    }, [count]);

   function handleDecrease(){
    if (count > 0) {
      setCount (count - 1);
    }
   }

    return (
      <section>
        <h2>useEffect Example</h2>

        <p>Count: {count}</p>

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button onClick={handleDecrease}>
          Decrease
        </button>
      </section>
    );
}

export default EffectExample;