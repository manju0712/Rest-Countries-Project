
import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom"
import {Link} from "react-router-dom";

import CountryTable from "./Components/table"
import CountryPage from "./Components/country"
import Favorites from "./Components/Favorites"
function App() {
  
  return (
    <div className= 'App'>
      <Link to ="/Favorites">Favorites</Link>
      <Routes>
        <Route path = "/" element={<CountryTable />}/>
        <Route path ="/country/:name" element={<CountryPage />}/>
        <Route path ="/Favorites" element={<Favorites />}/>
      </Routes>
    </div>
  )
}
export default App;