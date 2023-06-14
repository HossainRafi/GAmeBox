import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  // const [count, setCount]=useState(0)
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme} ${theme == "dark" ? "bg-[#121212]" : null}`}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
