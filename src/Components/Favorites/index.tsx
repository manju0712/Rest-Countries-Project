import React from 'react'
import { Link } from 'react-router-dom'

import DeleteIcon from '@mui/icons-material/Delete'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
//import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import HomeIcon from '@mui/icons-material/Home'
import { styled } from '@mui/material/styles'
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from '../../Redux/action'
import {InitialState} from "../../Redux/store"

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

function Favorites() {
  const favoriteCountries = useSelector(
    (state: InitialState) => state.favorites.favoriteCountries
  )
  const dispatch = useDispatch()
  const removeFromFavorite = (countryName :string)=> {
    dispatch(removeFavorite(countryName))
  }

  return (
    <>
      <h1> Your favorite Country List</h1>
      <Link to="/">
        <HomeIcon />
      </Link>
      <p></p>
      <TableContainer component={Paper}>
        <Table
          sx={{ Width: 400, margin: 'auto' }}
          size="small"
          aria-label="simple table"
        >
          {favoriteCountries.length === 0 && <h1>Your favorite Country List is Empty Now</h1>}
          <TableBody>
            {favoriteCountries.map(country => (
              <StyledTableRow key={country}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  align="center"
                  colSpan={1}
                >
                  {country}
                </StyledTableCell>

                <StyledTableCell>
                  <DeleteIcon onClick={() => removeFromFavorite(country)} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Favorites