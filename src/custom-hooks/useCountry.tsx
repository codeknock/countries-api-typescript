
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Country } from "../types"

const URL = "https://restcountries.eu/rest/v2/all"
const useCountry = () =>  {
   
    const [countries, setCountries] = useState<Country[]>([])
    const [error, setError] = useState()

  

    useEffect(() => {
        axios.get(URL)
        .then(res => setCountries(res.data))
        .catch(error => setError(error))
       
       
        
        
        }, [])
  console.log(countries)
    return [countries, error]

}

export default useCountry