import React from 'react'
import {useParams} from "react-router-dom";
import useCountry from "../../custom-hooks/useCountry"

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

    <div> 
        <h1>{country.name.common}</h1>
         <div>
         {country.languages && Object.keys(country.languages).length >0 
           ? Object.values(country.languages).map(value => <p key={value} >{value}</p>) : "N/A" } 
     </div>
      </div>
  )
}

export default Countrypage