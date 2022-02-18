import React from 'react'
/*import {useState} from "react"*/
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

/*import SearchBar from "material-ui-search-bar";*/

function SearchCon({countries}) {
  
/*const [rows , setRows] = useState({countries})
const [searched , setSearched] = useState("")

const requestSearch = (searchedVal) => {

  const filteredRows = countries.filter((row) => {
   return row.name.toLowerCase().includes(searchedVal.toLowerCase)
    });

    setRows(filteredRows);
    }

    const cancelSearch = () => {

      setSearched("")
    
}
      return (

        <SearchBar
        value = {searched}
        onChange ={(searchVal) => requestSearch(searchVal)}
        onCancelSearch ={() => cancelSearch()}
        />

      

      
      )

}*/

    return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        options={countries.map((country) =>country.name.common )}
        renderInput={(params) => <TextField {...params} label="Search for country" />}
        onChange={(event,value) => console.log(value)}
      />
      
       </Stack>
  )
}
 export default SearchCon

