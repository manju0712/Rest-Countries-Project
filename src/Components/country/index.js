import React from 'react'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom"
import useCountry from "../../custom-hooks/useCountry"


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'



function Countrypage() {
    const {name} = useParams()
    const [country,error] = useCountry(name)
    if (error)
    {
        return <p>Something went wrong</p>
    }

    if(!country)
    { return <p>Loading...</p> }
  return (
 <Box
      sx={{
        width: '100%',
        maxWidth: 650,
        border: 1,
      }}
    >


     <Card variant="outlined"> 
  
         <CardMedia
          component="img"
          height = "20"
          width = "20"
          img src = {country.flags.png} style={{ width: '100px' }}  alt= "flag"/>
           <Button size="small">
                <Link to ="/">Back to home</Link></Button>
          
         <CardContent>
             <Typography gutterBottom variant="h5" component="div">Country Name :{country.name.common}
             </Typography>

         <Typography> Languages Spoken :
         {country.languages && Object.keys(country.languages).length >0 
           ? Object.values(country.languages).map(value => <p key={value} >{value}</p>): "N/A" }</Typography>
           <Typography> Country Borders :
         {(country.borders).map(borders => <p key={borders} >{borders}</p>)}</Typography>
         <Typography> Currencies :  {country.currencies && Object.keys(country.currencies).length >0 
           ? Object.values(country.currencies).map((x) => x.name).join(','):"N/A" }</Typography>
        </CardContent>
        <CardActions>
           
        </CardActions>
      </Card>
      </Box>
  )
}

export default Countrypage