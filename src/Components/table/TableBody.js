import React from 'react'
import MuiTableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from  '@mui/material/TableCell';
import {Link} from "react-router-dom";


function TableBody({countries}) {
  return (
    <MuiTableBody>
      {countries.map(country => {
        return(
       <TableRow key ={country.name.common}>
       <TableCell>
        <img src = {country.flags.png} alt= "flag" />
        </TableCell>
        <TableCell>
          <Link to= {"/country/" + country.name.common}>{country.name.common}</Link></TableCell>
        <TableCell>{country.region}</TableCell>
        <TableCell>
          {country.languages && Object.keys(country.languages).length >0 
           ? Object.values(country.languages).map(value => <p key={value} >{value}</p>) : "N/A" } </TableCell>
        <TableCell>{country.population}</TableCell>
        <TableCell>
          {country.capital ? country.capital.map(capitalName => <p key = {capitalName}>{capitalName}</p>) : "N/A"}
        </TableCell>
       </TableRow>
        )
    })}
    </MuiTableBody>
  )
}

export default TableBody