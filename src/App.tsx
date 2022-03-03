
import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom"

import {useState} from "react";

import CountryTable from "./Components/table"
import CountryPage from "./Components/country"
import Favorites from "./Components/Favorites"


interface IThemeContext {
  theme : string;
  setTheme : any;

}

export const ThemeContext = React.createContext({}as IThemeContext);
function App() {
  const [theme,setTheme] = useState("light")

  return (
     <div className= 'App'>
    <ThemeContext.Provider value={{theme,setTheme}}>
   
      
      <Routes>
        <Route path = "/" element={<CountryTable />}/>
        <Route path ="/country/:name" element={<CountryPage />}/>
        <Route path ="/Favorites" element={<Favorites />}/>
      </Routes>
    
    </ThemeContext.Provider>
    </div>
  )
}
export default App;