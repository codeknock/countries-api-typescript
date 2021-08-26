
import {AllActions, FETCH_COUNTRIES, FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_SUCCESS } from "../../types"


type initStateReducer = {
    countries: [],
    isLoading: boolean,
    error: string
}

const initState: initStateReducer = {
    countries: [],
    isLoading: false,
    error: ''
}
 

const countryReducer = (state = initState, action: AllActions) => {

    switch (action.type) {

        case FETCH_COUNTRIES:
            return {
                ...state,
                isLoading: true,
            }
            
            case FETCH_COUNTRIES_SUCCESS:
                return {
                    ...state,
                    countries: action.payload,
                    isLoading: false,
                    error: '',
                }

                case FETCH_COUNTRIES_FAILURE:
                    return {
                        ...state,
                        isLoading: false,
                        error: action.payload
                    }

                    default:
                        return state
           
            
    }
}


export default countryReducer