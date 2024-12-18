import React, { useState } from "react";
import Theme from "./Theme"

const ThemeProvider = ({children})=>{
    const [theme,setTheme]= useState("light")
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
    return(
        <Theme.Provider value={{theme,toggleTheme}}>
            {children}
        </Theme.Provider>
    )
}
export default ThemeProvider;