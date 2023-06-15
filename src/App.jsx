import { createContext, useEffect, useState } from "react";

import Home from "./Pages/Home";
import { ThemeContext } from "./Context/ThemeContext";
// import ThemeContext from './Context/ThemeContext'
//eimport Header from './components/Header';
export const ThemeContext = createContext('dark');

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
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
