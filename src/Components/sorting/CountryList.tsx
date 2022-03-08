import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import _ from 'lodash'

import { fetchAllCountries } from '../../Redux/action/countriesA'
import { InitialAllState } from '../../Redux/store'
import { InitialCountriesState } from '../../Redux/reducers/countriesR'
import { Country } from "../../types"

 const CountryList=()=> {
  const dispatch = useDispatch()
   React.useEffect(()=>{
         dispatch(fetchAllCountries())
     },[dispatch])
  const allCountries = useSelector(
    (state: InitialCountriesState) => state.countriesData
  )
  const error = useSelector((state: InitialAllState) => state.countries.error)
  const [filteredCountries, setFilteredCountries]=React.useState(allCountries)
  /*const [paginatedCountries, setPaginatedCountries]=React.useState(allCountries)*/

  /* React.useEffect(()=>{
        setFilteredCountries(allCountries)
    },[allCountries])*/

     const [sortBy, setSortBy]=React.useState('name')
  

       React.useEffect(()=>{
        const tempSorted=_.orderBy(allCountries, [sortBy], ['asc'])  as []
        setFilteredCountries(tempSorted)  
             
    },[sortBy, allCountries])

         //handle sort
    const handleSort=(event:any)=>{        
        //set sort type
        setSortBy(event.target.value) 
        
     }
   

    
     return (

        <div className="country-list">
            {/* sorting  */}
            <div className="country-list__sort">
               <p>Sort by</p>
            <Select  
            labelId="sort-country-select-label"
            id="sort-country-select"              
                onChange={handleSort}
                disableUnderline={true} 
                defaultValue="name"
            >           
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="region">Region</MenuItem>
            <MenuItem value="population">Population</MenuItem>
        </Select>

            </div>
            
            </div>
             )
}

export default CountryList