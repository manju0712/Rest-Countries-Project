import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import useCountries from "../../custom-hooks/useCountries"
import React from 'react'
 
 function CountryTable(){
  const [countries,error] = useCountries()
  if (error){
  return <p>Something went wrong</p>
  }
   return (
      <TableContainer>
      <Table>
        <TableHead />
        <TableBody countries ={countries} />
       </Table>
      </TableContainer>
      )
 }
 
 export default CountryTable
