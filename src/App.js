
import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom"

import CountryTable from "./Components/table"
import CountryPage from "./Components/country"

function App() {
  
  return (
    <div className= 'App'>
      <Routes>
        <Route path = "/" element={<CountryTable />}/>
        <Route path ="/country/:name" element={<CountryPage />}/>
      </Routes>
    </div>
  );
}
export default App;