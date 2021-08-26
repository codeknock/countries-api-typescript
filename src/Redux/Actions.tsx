import axios from "axios"
import { Dispatch } from "react"
import { AllActions, FETCH_COUNTRIES, FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_SUCCESS } from "../types"

const URL = "https://restcountries.eu/rest/v2/all"

export const fetchCountriesThunk = () => async(dispatch: Dispatch<AllActions>) => {
    try{
        dispatch({
            type: FETCH_COUNTRIES
        })

        const {data} = await axios.get(URL)
        dispatch({
            type: FETCH_COUNTRIES_SUCCESS,
            payload: data
        })
        
    } catch(error){
        dispatch({
            type: FETCH_COUNTRIES_FAILURE,
            payload: error
        })
    }
}