import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme == "dark" ? "bg-[#121212]" : null}`}>
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
