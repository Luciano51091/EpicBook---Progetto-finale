import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === "light" ? "bg-white text-dark" : "bg-dark text-white"}>
        <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Welcome />
        <AllTheBooks searchQuery={searchQuery} />
        <MyFooter />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
