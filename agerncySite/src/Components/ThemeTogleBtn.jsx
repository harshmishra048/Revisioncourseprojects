import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeTogleBtn = ({ theme, setTheme }) => {

    useEffect(() => {
        const preferDarkMode = window.matchMedia('(prefers-color-scheme : dark)').matches;
        setTheme(theme || (preferDarkMode ?  'dark' : 'light'))
    })

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme])
    
  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            src={assets.sun_icon}
            alt=""
            onClick={() => setTheme("light")}
            className="size-8.5 p-1.5 border-gray-500 border-2 rounded-full"
          />
        ) : (
          <img
            src={assets.moon_icon}
            alt=""
            onClick={() => setTheme("dark")}
            className="size-8.5 p-1.5 border-gray-500 border-2 rounded-full"
          />
        )}
      </button>
    </>
  );
}

export default ThemeTogleBtn
