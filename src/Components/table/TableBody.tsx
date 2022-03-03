import React from 'react'
import MuiTableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from  '@mui/material/TableCell';
import {Link} from "react-router-dom";
import NumberFormat from 'react-number-format';
import Button from '@mui/material/Button';
import { useDispatch,useSelector} from 'react-redux';
import {InitialState} from "../../Redux/store"
import FavoriteIcon from '@mui/icons-material/Favorite';
/*import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';*/
import {addFavorite} from '../../Redux/action';
import {Country} from "../../types"

type TableBodyProps ={
  countries :Country[]
}

function TableBody({countries} :TableBodyProps) {
  const dispatch = useDispatch()
 const favoriteCountries = useSelector(
    (state: InitialState) => state.favorites.favoriteCountries
  )
  const addToFavorite = (countryName:string) =>{
  dispatch(addFavorite(countryName))    
  }
  
  const [flag, setFlag] = React.useState(true);
  const handleClick = (countryName: string) => {
    /*const count = countries.filter((count)=>count.name === countryName);*/

    setFlag(count=>!flag); 
  };
  

return (
    <MuiTableBody sx = {{width : "300"}} >
      {countries 
      .map((country,index) => {
        return(
       <TableRow key ={country.name.common} >
       <TableCell align="left" style={{ width: 200 }}>
        <img src = {country.flags.png} style={{ width: "80px"}} alt= "flag" />
        </TableCell>
        <TableCell>
          <Link to= {"/country/" + country.name.common}>{country.name.common}</Link></TableCell>
        <TableCell>{country.region}</TableCell>
        <TableCell> <NumberFormat value = {country.population} displayType = {"text"} thousandSeparator = {true} /> </TableCell>
        <TableCell>
          {country.capital ? country.capital.map(capitalName => <p key = {capitalName}>{capitalName}</p>) : "N/A"}
        </TableCell>
        <TableCell>
          <Button key={index} onClick={()=> {addToFavorite(country.name.common); handleClick(country.name.common)}} ><FavoriteIcon 
          style={{
                          color: favoriteCountries.includes(country.name.common)
                            ? "red"
                            : "black",
                        }}/></Button>
        </TableCell>
       </TableRow>
        )
    })}
 
    </MuiTableBody>
  )
}

export default TableBody