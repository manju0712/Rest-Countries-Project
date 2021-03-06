/*import { ConstructionOutlined } from '@mui/icons-material'*/
import { useEffect, useState } from 'react'
import { Country } from '../types'

type Return = [Country | null, Error | null]
const useCountry = (name: string): Return=> {
const [country,setCountries] = useState<Country | null> (null)
const [error, setError] = useState<Error | null>(null)
console.log("hook:" + name)

   useEffect(() =>{
   const fetchCountries = async () =>{
    try {
    const response = await fetch (`https://restcountries.com/v3.1/name/${name}`)
    const data = await response.json()
    console.log(data)
    setCountries(data[0])
    }
    catch (error){
    setError(error as Error)
    }
   }
   fetchCountries()
   },[name])
   return [country,error]
  }

export default useCountry;