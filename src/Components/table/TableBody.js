import React from 'react'
import MuiTableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from  '@mui/material/TableCell';
import {Link} from "react-router-dom";
import TablePagination from '@mui/material/TablePagination';
import NumberFormat from 'react-number-format';
import {useState} from "react";

function TableBody({countries}) {

const [page, setPage] = useState(0)
const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <MuiTableBody width= "500">
      {countries 
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map(country => {
        return(
       <TableRow key ={country.name.common}>
       <TableCell>
        <img src = {country.flags.png}  alt= "flag" />
        </TableCell>
        <TableCell>
          <Link to= {"/country/" + country.name.common}>{country.name.common}</Link></TableCell>
        <TableCell>{country.region}</TableCell>
        <TableCell> <NumberFormat value = {country.population} displayType = {"text"} thousandSeparator = {true} /> </TableCell>
        <TableCell>
          {country.capital ? country.capital.map(capitalName => <p key = {capitalName}>{capitalName}</p>) : "N/A"}
        </TableCell>
       </TableRow>
        )
    })}
<TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={countries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </MuiTableBody>
  )
}

export default TableBody