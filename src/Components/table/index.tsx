import {Box,Table} from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import SearchBar from '../searchBar'

import {useContext,useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ThemeContext } from "../../App";
import ThemeToggle from "../ThemeToggle"


import { fetchAllCountries } from '../../Redux/action/countriesA'
/*import AppBar from '../Appbar'*/
import { InitialAllState } from '../../Redux/store'
import { Country } from "../../types"
import React from 'react'
import { AppTheme } from "../../AppTheme";

 function CountryTable(){
  const dispatch = useDispatch()
  const allCountries = useSelector(
    (state: InitialAllState) => state.countries.countriesData
  )
  const error = useSelector((state: InitialAllState) => state.countries.error)
  const [search, setSearch] = useState<string>('')

  //fetching countries
  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])
  // theme
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
  const searchHandler = (event: any) => {
    setSearch(event.target.value)
  }
  //searching country from search bar
  // eslint-disable-next-line array-callback-return
  const filteredCountries = allCountries?.filter((item: Country) => {
    if (search === '') {
      return item
    } else if (item.name.common.toLowerCase().includes(search.toLowerCase())) {
      return item
    }
  })
   return (
      <div className="tableindex" style={themeStyle}>
          <h1>Welcome </h1>
         <ThemeToggle />
         <h2>Know your World Countries</h2>
     

      <SearchBar onChange={searchHandler} />
      

      <TableContainer component={Box}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead />
          <TableBody filteredCountries={filteredCountries} />
        </Table>
      </TableContainer>
    </div>
  )
}
 
 export default CountryTable
