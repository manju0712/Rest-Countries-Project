import React from 'react'

import TableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

/*import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';*/


const columns = ['Flag' ,'Name' , 'Region', 'Population', 'Capital','Favorites']

function TableHead() {
  return (
    /*<TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">*/
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