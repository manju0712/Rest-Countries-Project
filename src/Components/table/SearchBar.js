import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


function SearchBar({countries}) {

      return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
       
        options={countries.map((country) =>country.name.common )}
        renderInput={(params) => <TextField {...params} label="Search for country" />}
      />
     
       </Stack>
    
  )
}

export default SearchBar