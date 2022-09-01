import { createContext, useEffect, useState } from "react";
import Home from "../Components/Home/Home";
import Navbar from "../Components/Sidenav/Navbar";
import "./App.css";
import "animate.css";
import { navType } from "../Interfaces/types";
import {FaMoon, FaSun} from 'react-icons/fa'
export const navContext = createContext<navType | null>(null);

function App() {
  const [isNav, setNav] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(localStorage.theme);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem(
      "theme",
      theme === "dark" ? "light" : "dark"
    );
  };
  const allContext: navType = { isNav, setNav, theme, setTheme, toggleTheme };

  useEffect(() => {
    let headDoc = document.documentElement;
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      headDoc.className = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      headDoc.className = "light";
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <navContext.Provider value={allContext}>
      <div className="App">
        <div className="flex">
          <div
            className={`saidNav md:fixed transition ${
              isNav ? "fixed w-48" : "w-0 opacity-0 md:opacity-90 md:w-10"
            }`}
          >
            {" "}
            <Navbar />
          </div>
          <div
            className={`mainPage ${
              isNav
                ? "flex-none w-96 translate-x-48 transition overflow-x-hidden"
                : "flex-auto w-64 md:ml-10"
            } `}
          >
            <div className="fixed mb-16 opacity-90 z-50 moTheme md:hidden">
              <button className="bg-dark transition p-2 rounded-lg dark:bg-light" onClick={allContext.toggleTheme}>
                {allContext.theme === "light" ? (
                  <FaMoon size={"1.8em"} color="white" />
                ) : (
                  <FaSun size={"1.8em"} color="yellow" />
                )}
              </button>
            </div> 
              {" "}
            <Home />
          </div>
        </div>
      </div>
    </navContext.Provider>
  );
}

export default App;
