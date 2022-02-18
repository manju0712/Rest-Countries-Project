import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import SearchCon from "./SearchCon";
import useCountries from "../../custom-hooks/useCountries"
import React from 'react'
 
 function CountryTable(){
  const [countries,error] = useCountries()
  if (error){
  return <p>Something went wrong</p>
  }
   return (
     <>
       <div>
         <h1>Welcome </h1>
         <h2>Know your World Countries</h2>
       </div>
       <div>
       <SearchCon countries ={countries} />
      </div>
      <TableContainer> 
      <Table>
        <TableHead />
        <TableBody countries ={countries} />
       </Table>
      </TableContainer>
      </>
      )
 }
 
 export default CountryTable
