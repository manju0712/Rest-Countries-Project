import React from 'react'
import TableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import {removeFavorite} from "../../Redux/action"



function Favorites() {
   const favoriteCountries = useSelector(state =>state.favoriteCountries)
    const dispatch = useDispatch()
   const removeFromFavorite = countryName =>{
    dispatch(removeFavorite(countryName))
  }
  return (
         <MuiTableHead>
    <TableRow>
        {favoriteCountries.map(country=>(
            <TableCell key ={country}>{country}</TableCell>
        ))}
         
            <TableCell>
              {favoriteCountries.map(country=>(
            <Button onClick={()=> removeFromFavorite(country)}>Remove</Button>
            ))}
            </TableCell>
      </TableRow>
    </MuiTableHead>
  )
}
export default Favorites