/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios'
import { useState, useEffect } from 'react'


const useCountry = () =>  {
   
    const [countries, setCountries] = useState<[]>([])
    const [error, setError] = useState()

    const URL = "https://restcountries.eu/rest/v2/all"

    useEffect(() => {
        axios.get(URL)
        .then(response => setCountries(response.data))
        .catch(error => setError(error))
       console.log(countries);
       
        
        
        }, [])

    return [countries, error]

}

export default useCountry