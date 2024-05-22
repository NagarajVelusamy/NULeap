import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(theme === "light"){
       document.documentElement.classList.remove('dark');
    }else{
       document.documentElement.classList.add('dark');
    }

  }, [theme])

  const toggleTheme = () => setTheme(prev => prev==="light" ? "dark" : "light")
  

  return (
      <button onClick={toggleTheme}>
        {
          theme === "dark" ? 
            <IoSunnyOutline className="text-2xl cursor-pointer"/>
          : <BsMoonStars className="text-xl cursor-pointer"/>
        }
      </button>
  )
}

export default ThemeSwitch