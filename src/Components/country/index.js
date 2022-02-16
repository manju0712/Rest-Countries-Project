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

     <Card
      sx={{ maxWidth: 345 }}>
         <CardMedia
          component="img"
        height="140"
          img src = {country.flags.png} alt= "flag"/>
          
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
            <Button size="small">
                <Link to ="/">Back to home</Link></Button>
        </CardActions>
      </Card>
  )
}

export default Countrypage