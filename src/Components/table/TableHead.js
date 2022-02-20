import React from 'react'

import TableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const columns = ['Flag' ,'Name' , 'Region', 'Population', 'Capital','Favorites']

function TableHead() {
  return (
    <MuiTableHead>
    <TableRow>
      {columns.map(columnName =>(
        <TableCell key = {columnName}>{columnName} </TableCell>
      ))}    
    </TableRow>
    </MuiTableHead>
  )
}

export default TableHead