import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeExample() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <section>
      <h2>Theme Context Example</h2>

      <p>
        Current theme: {darkMode ? "Dark" : "Light"}
      </p>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </section>
  );
}

export default ThemeExample;