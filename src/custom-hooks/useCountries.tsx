import { useEffect, useState } from 'react';

import {Country} from "../types"

type Return = [Country[], Error | null]

const useCountries = () :Return => {
 const [countries,setCountries] = useState<Country[]>([])
 const [error, setError] = useState<Error | null>(null)

   useEffect(() =>{
   const fetchCountries = async () =>{
    try {
       const response = await fetch (`https://restcountries.com/v3.1/all`)
       const data = await response.json()
       console.log(data)
       setCountries(data)
    }
    catch (error){
      setError(error as Error)
    }

   }

    fetchCountries()
   },[])

   return [countries,error]

  }

export default useCountries;