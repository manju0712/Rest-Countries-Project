import { useEffect, useState } from 'react'

const useCountries = () => {
 const [countries,setCountries] = useState([])
 const [error, setError] = useState(null)

   useEffect(() =>{
   const fetchCountries = async () =>{
    try {
       const response = await fetch (`https://restcountries.com/v3.1/all`)
       const data = await response.json()
       console.log(data)
       setCountries(data)
    }
    catch (error){
      setError(error)
    }

   }

    fetchCountries()
   },[])

   return [countries,error]

  }

export default useCountries;