import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import {useContext} from "react";
import { ThemeContext } from "../../App";
import ThemeToggle from "../ThemeToggle"

import useCountries from "../../custom-hooks/useCountries"
import React from 'react'


import { AppTheme } from "../../AppTheme";

 function CountryTable(){
  const [countries,error] = useCountries()
  const {theme} = useContext(ThemeContext);
  const headerStyle: AppTheme = {
        dark: {
            backgroundColor: 'lightblue',
            color: 'white',
        },
        light: {
            backgroundColor: '#e0e0e0',
            color: 'black',
        },
        common: {
            transition: 'all 1s ease',
        }
    };
    const themeStyle = {
        ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
        ...headerStyle.common,
    };
  if (error){
  return <p>Something went wrong</p>
  }
   return (
     <div style={themeStyle}>
         <h1>Welcome<span>[{theme}]</span> </h1>
         <ThemeToggle />
         <h2>Know your World Countries</h2>
      
      <TableContainer > 
      <Table>
        <TableHead />
        <TableBody countries ={countries} />
       </Table>
       <ThemeToggle />
      </TableContainer>
          
      </div>
      )
 }
 
 export default CountryTable
