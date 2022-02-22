import React from 'react'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import useCountry from "../../custom-hooks/useCountry";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function CountryPage() {
  const { name } = useParams()
  console.log(name)
  const [country, error] = useCountry(name as string)

  if (error) {
    return <p>Something went wrong</p>
  }
  if (!country) {
    return <p>Loading...</p>
  }

  return (   
      <Box
        sx={{
          width: '500%',
          maxWidth: 400,
          border: 2,
          alignItems: 'center',
        }}
      >
        <Card sx ={{maxwidth: 450, backgroundColor : "lightyellow" }}variant="outlined" > 
           <Button size="small">
                <Link to ="/">Back to home</Link></Button>
        <CardMedia
            component="img"
            height="100"
            width="100"
            src={country.flags.png}
            alt="flag"
          />
         <CardContent>

             <Typography gutterBottom variant="h5" component="div"><strong>Country Name</strong> :{country.name.common}
             </Typography>
              </CardContent>

          <CardContent>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Region</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{country.region}</Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
          <CardContent>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Languages</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {country.languages &&
                    Object.values(country.languages).map(value => (
                      <li key={value}>{value}</li>
                    ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
          <CardContent>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Country Borders </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
          <CardContent>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Currencies </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      </Box>
     
   
  )
}

export default CountryPage