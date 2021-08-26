import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer, { AppState } from "./Reducers/rootReducer";

const initState: AppState = {
    
    countryReducer: {
    countries: [],
    isLoading: false,
    error: ''},
}
const middlewares= [thunk]

const store = createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(...middlewares))
)
export default store