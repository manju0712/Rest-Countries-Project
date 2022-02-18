import React from 'react'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import useCountry from "../../custom-hooks/useCountry";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'



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
    <Grid 
      container
      direction = "column"
      alignItems = "center"
      justify = "center"
      >

    <Box
      sx={{
        width: '100%',
        maxWidth: 650,
        border: 1,
        
      }}
    >
     <Card sx ={{maxwidth: 450, backgroundColor : "lightyellow" }}variant="outlined" > 
           <Button size="small">
                <Link to ="/">Back to home</Link></Button>
         <CardMedia
          component="img"
          height = "280"
          width = "80"
          img src = {country.flags.svg}  alt= "flag"/>
         <CardContent>

             <Typography gutterBottom variant="h5" component="div"><strong>Country Name</strong> :{country.name.common}
             </Typography>
              </CardContent>

           <CardContent>
             <Accordion>
               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
         <Typography> <b>Languages Spoken</b> :</Typography>
              </AccordionSummary>
              <AccordionDetails>
                 <Typography>
         {country.languages && Object.keys(country.languages).length >0 
           ? Object.values(country.languages).map(value =><div><span  key={value} >{value}</span></div>): "N/A" }</Typography>
           </AccordionDetails>
            </Accordion>
            </CardContent>


          <CardContent>
             <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
           <Typography>
             <b> Country Borders </b>:</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>
         {(country.borders).map(borders =><div><span key={borders} >{borders}</span></div>)}</Typography>
         </AccordionDetails>
         </Accordion>
           </CardContent>

            <CardContent>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
         <Typography><b> Currencies </b>: </Typography>
         </AccordionSummary>
         <AccordionDetails>
         <Typography>
          {country.currencies && Object.keys(country.currencies).length >0 
           ? Object.values(country.currencies).map((x) => x.name).join(','):"N/A" }</Typography>
          
           </AccordionDetails>
           </Accordion>
        </CardContent>

        <CardActions>
           
        </CardActions>
      </Card>
      </Box>
      </Grid>
  )
}

export default Countrypage