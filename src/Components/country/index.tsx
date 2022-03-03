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
import {useContext} from "react";
import { ThemeContext } from "../../App";
import ThemeToggle from "../ThemeToggle"
import { AppTheme } from '../../AppTheme';

function CountryPage() {
  const { name } = useParams()
  console.log(name)
  const [country, error] = useCountry(name as string)

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

if (!country) {
    return <p>Loading...</p>
  }

  return (   
    <div style={themeStyle}>
      <Box
        sx={{
          width: '500%',
          maxWidth: 400,
          border: 2,
          alignItems: 'center',
          justifyContent :"center"
         
        }}
      >
         <ThemeToggle />
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
                    {country.borders ? country.borders.map(border => <li key = {border}>{border}</li>) : "N/A"}
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
                <Typography>  {country.currencies &&
                    Object.keys(country.currencies).length > 0
                      ? Object.values(country.currencies).map(x => x.name)
                      : 'N/A'}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      </Box>
     </div>
   
  )
}

export default CountryPage