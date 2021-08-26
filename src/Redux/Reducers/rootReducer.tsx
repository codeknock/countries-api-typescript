import { combineReducers } from "redux";
import countryReducer from "./countryReducer";
const rootReducer = combineReducers({

   countryReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer