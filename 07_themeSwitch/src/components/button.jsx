import { useContext } from "react";
import ThemeContext from "../context/Theme"

const ToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} Theme
    </button>
  );
};

export default ToggleButton;
